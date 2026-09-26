Add-Type -AssemblyName System.Drawing
$imgPath = 'C:\Users\visha\.gemini\antigravity-ide\brain\a8f8846a-e589-4dab-902e-21b683d138dc\.user_uploaded\media_1790450189719.png'
$img = [System.Drawing.Image]::FromFile($imgPath)

$outDir = 'd:\coding\Projects\fidz-pest-management\public\images'
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force }

# Crop full right hero composition
$rightX = [int]($img.Width * 0.49)
$rightY = [int]($img.Height * 0.17)
$rightW = [int]($img.Width * 0.505)
$rightH = [int]($img.Height * 0.69)

$cropRect = New-Object System.Drawing.Rectangle($rightX, $rightY, $rightW, $rightH)
$bmp = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $cropRect.Width, $cropRect.Height)), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save("$outDir\hero-technician-composition.png", [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Output "Hero composition created!"
