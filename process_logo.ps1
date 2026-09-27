Add-Type -AssemblyName System.Drawing
$imgPath = 'C:\Users\visha\.gemini\antigravity-ide\brain\a8f8846a-e589-4dab-902e-21b683d138dc\.user_uploaded\media_1790483098416.png'
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

Write-Output "Dimensions: $($bmp.Width) x $($bmp.Height)"

# Sample background color around top-left (avoiding 1px black border)
$bgR = 0
$bgG = 0
$bgB = 0
$samples = 0
for ($x = 10; $x -lt 30; $x++) {
    for ($y = 10; $y -lt 30; $y++) {
        $p = $bmp.GetPixel($x, $y)
        $bgR += $p.R
        $bgG += $p.G
        $bgB += $p.B
        $samples++
    }
}
$avgR = $bgR / $samples
$avgG = $bgG / $samples
$avgB = $bgB / $samples
Write-Output "Average BG Color: R=$avgR, G=$avgG, B=$avgB"

# Let's crop out the outer black frame (usually ~3-5px on border)
# Find bounding box where black border ends
$minX = 0
$maxX = $bmp.Width - 1
$minY = 0
$maxY = $bmp.Height - 1

while ($minX -lt $bmp.Width - 1 -and $bmp.GetPixel($minX, [int]($bmp.Height/2)).R -lt 40) { $minX++ }
while ($maxX -gt 0 -and $bmp.GetPixel($maxX, [int]($bmp.Height/2)).R -lt 40) { $maxX-- }
while ($minY -lt $bmp.Height - 1 -and $bmp.GetPixel([int]($bmp.Width/2), $minY).R -lt 40) { $minY++ }
while ($maxY -gt 0 -and $bmp.GetPixel([int]($bmp.Width/2), $maxY).R -lt 40) { $maxY-- }

Write-Output "Cropped inner bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

# Create transparent bitmap
$outBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background color in the original is a light grayish beige: ~ (230, 230, 230) or similar
# Gold logo pixels have: R > 150, G > 140, B < 120 (gold has significantly lower Blue than Red/Green!)
# Or we can measure distance to background:
# If pixel is close to (avgR, avgG, avgB), it's background -> alpha = 0.
# If pixel differs, calculate alpha smoothly for anti-aliasing!

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $p = $bmp.GetPixel($minX + $x, $minY + $y)
        
        # Calculate color distance to background
        $dist = [Math]::Sqrt([Math]::Pow($p.R - $avgR, 2) + [Math]::Pow($p.G - $avgG, 2) + [Math]::Pow($p.B - $avgB, 2))
        
        # If very close to background (within threshold 8) -> completely transparent
        if ($dist -lt 10) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($dist -gt 35) {
            # Clearly foreground logo color -> full opacity
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $p.R, $p.G, $p.B))
        } else {
            # Anti-aliased edge -> smoothly interpolate alpha
            $alpha = [int](255 * ($dist - 10) / (35 - 10))
            if ($alpha -gt 255) { $alpha = 255 }
            if ($alpha -lt 0) { $alpha = 0 }
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
        }
    }
}

$outPath = 'd:\coding\Projects\fidz-pest-management\public\images\fidz-logo-transparent.png'
$outBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Also let's extract just the emblem (the Phi symbol on the left)
# Find Phi bounds: it's on the left ~ 10% to 35% of width
$phiBmp = New-Object System.Drawing.Bitmap([int]($cropW * 0.35), $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt [int]($cropW * 0.35); $x++) {
        $phiBmp.SetPixel($x, $y, $outBmp.GetPixel($x, $y))
    }
}
$phiBmp.Save('d:\coding\Projects\fidz-pest-management\public\images\fidz-emblem-transparent.png', [System.Drawing.Imaging.ImageFormat]::Png)

$phiBmp.Dispose()
$outBmp.Dispose()
$bmp.Dispose()
Write-Output "Successfully processed transparent logo to $outPath"
