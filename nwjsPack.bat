mkdir "release"
del "app.zip"
del "app.nw"
"lib/7z.exe" a "app.zip" ".\app\*"
ren "app.zip" "app.nw"
copy /b ".\data\nw.exe"+app.nw .\release\app.exe
copy /b ".\data\*" .\release\
echo d | xcopy /f /y ".\data\locales" .\release\locales
del "app.nw"
del ".\release\nw.exe"