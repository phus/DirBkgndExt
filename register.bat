@echo off

regsvr32 /s "%~dp0\DirBkgndExt.dll" && (
    reg add "HKEY_CLASSES_ROOT\CLSID\{9E5E1445-6CEA-4761-8E45-AA19F654571E}" /v "MenuCommand" /t REG_SZ /d "%~dp0DirBkgndExt.js" /f
    chcp | find ": 936" && (
        reg add "HKEY_CLASSES_ROOT\CLSID\{9E5E1445-6CEA-4761-8E45-AA19F654571E}" /v "MenuTitle" /t REG_SZ /d "Next desktop background" /f
    ) || (
        reg add "HKEY_CLASSES_ROOT\CLSID\{9E5E1445-6CEA-4761-8E45-AA19F654571E}" /v "MenuTitle" /t REG_SZ /d "��һ������" /f
    )
    echo ע��ɹ��� ���Զ���js�ļ���
) || (
    echo ע��ʧ�ܣ� ����Ȩ�޲�����
)
pause
@echo on
