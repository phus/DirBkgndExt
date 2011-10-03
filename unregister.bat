@echo off
reg delete "HKEY_CLASSES_ROOT\CLSID\{9E5E1445-6CEA-4761-8E45-AA19F654571E}" /v "MenuTitle" /f 2>NUL
reg delete "HKEY_CLASSES_ROOT\CLSID\{9E5E1445-6CEA-4761-8E45-AA19F654571E}" /v "MenuCommand" /f 2>NUL
regsvr32 /u /s "%~dp0\DirBkgndExt.dll"
echo 反注册成功， 请注销后删除本文件夹
pause
@echo on
