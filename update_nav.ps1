$targetNav = @"
            <div class="nav-links">
                <a href="../index.html">Home</a>
                <a href="about.html">About</a>
                <a href="missions.html">Missions</a>
                <a href="launchers.html">Launchers</a>
                <a href="services.html">Services</a>
                <a href="centres.html">Centres</a>
                <a href="gaganyaan.html">Gaganyaan</a>
                <a href="achievements.html">Achievements</a>
            </div>
"@

$files = Get-ChildItem -Path "c:\Projects\isro_website_unofficial\pages\" -Filter "*.html"
foreach ($file in $files) {
    if ($file.Name -eq "chandrayaan-3.html") { continue }
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $content = $content -replace '(?s)<div class="nav-links">.*?</div>', $targetNav
    
    # Active state coloration
    $filename = $file.Name
    $content = $content -replace "href=`"$filename`"", "href=`"$filename`" style=`"color: var(--isro-orange);`""
    
    [System.IO.File]::WriteAllText($file.FullName, $content)
}

# Root index.html
$targetNavRoot = @"
            <div class="nav-links">
                <a href="index.html" style="color: var(--isro-orange);">Home</a>
                <a href="pages/about.html">About</a>
                <a href="pages/missions.html">Missions</a>
                <a href="pages/launchers.html">Launchers</a>
                <a href="pages/services.html">Services</a>
                <a href="pages/centres.html">Centres</a>
                <a href="pages/gaganyaan.html">Gaganyaan</a>
                <a href="pages/achievements.html">Achievements</a>
            </div>
"@

$content = [System.IO.File]::ReadAllText("c:\Projects\isro_website_unofficial\index.html")
$content = $content -replace '(?s)<div class="nav-links">.*?</div>', $targetNavRoot
[System.IO.File]::WriteAllText("c:\Projects\isro_website_unofficial\index.html", $content)
