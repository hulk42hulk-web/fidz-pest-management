Add-Type -AssemblyName System.Drawing
$inPath = 'd:\coding\Projects\fidz-pest-management\public\images\fidz-logo-transparent.png'
$bmp = [System.Drawing.Bitmap]::FromFile($inPath)

$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Output "Tight bounding box: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

$tightBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($tightBmp)
$g.DrawImage($bmp, 0, 0, (New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)

$tightPath = 'd:\coding\Projects\fidz-pest-management\public\images\fidz-logo.png'
$tightBmp.Save($tightPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Also let's extract just the golden emblem (the Phi symbol) tightly cropped
# In this tight logo, the Phi is roughly the first 110px of width
$phiWidth = [int]($cropH * 0.95) # Phi is roughly square/slightly tall
$phiBmp = New-Object System.Drawing.Bitmap($phiWidth, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gPhi = [System.Drawing.Graphics]::FromImage($phiBmp)
$gPhi.DrawImage($tightBmp, 0, 0, (New-Object System.Drawing.Rectangle(0, 0, $phiWidth, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
$phiPath = 'd:\coding\Projects\fidz-pest-management\public\images\fidz-emblem.png'
$phiBmp.Save($phiPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$gPhi.Dispose()
$tightBmp.Dispose()
$phiBmp.Dispose()
$bmp.Dispose()
Write-Output "Tight logo saved to $tightPath and emblem saved to $phiPath"
