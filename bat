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

_____
To create a .bat file that copies only non-existing files from Folder2 to Folder1, and schedule it using Task Scheduler, follow these steps:


---

1. Create the .bat file

Create a file named copy_missing_files.bat with the following content:

@echo off
set "source=D:\Folder2"
set "destination=D:\Folder1"

for %%F in ("%source%\*") do (
    if not exist "%destination%\%%~nxF" (
        copy "%%F" "%destination%\"
    )
)

> Replace D:\Folder2 and D:\Folder1 with your actual paths.




---

2. Save the file

Save it as copy_missing_files.bat in a folder like C:\Scripts.



---

3. Create a Scheduled Task

1. Open Task Scheduler.


2. Click Create Basic Task.


3. Name: Copy Missing Files.


4. Choose the trigger (e.g., Daily, At system startup).


5. Choose Start a program.


6. Browse and select your copy_missing_files.bat.


7. Finish the wizard.




---

Let me know if you want it to also handle subfolders (recursive copy).

