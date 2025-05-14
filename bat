To copy files from Folder 2 to Folder 1 only if they don’t already exist in Folder 1, you can use PowerShell with the following command:

PowerShell Command:

$source = "D:\Folder2"
$destination = "D:\Folder1"

Get-ChildItem -Path $source -File | ForEach-Object {
    $destFile = Join-Path $destination $_.Name
    if (-not (Test-Path $destFile)) {
        Copy-Item -Path $_.FullName -Destination $destFile
    }
}

Explanation:

Get-ChildItem -File: gets all files in Folder 2.

Test-Path: checks if the file already exists in Folder 1.

Copy-Item: copies the file only if it doesn't exist.


Let me know if you need to include subfolders too.

