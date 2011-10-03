var shell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");

function setWallpaper(path)
{
	shell.RegWrite('HKEY_CURRENT_USER\\Control Panel\\Desktop\\TileWallpaper', '0', 'REG_SZ');
	shell.RegWrite('HKEY_CURRENT_USER\\Control Panel\\Desktop\\Wallpaper', path, 'REG_SZ');
	shell.RegWrite('HKEY_CURRENT_USER\\Control Panel\\Desktop\\WallpaperStyle', '1', 'REG_SZ');
	
	shell.run('rundll32 user32.dll,UpdatePerUserSystemParameters');
}

function getWallpaper()
{
	return shell.RegRead('HKEY_CURRENT_USER\\Control Panel\\Desktop\\Wallpaper');
}

var WallpaperDirectory = 'D:\\Wallpaper';
var WallpaperCurrent = getWallpaper();
var Pictures = new Array();
var oDir = fso.GetFolder(WallpaperDirectory);
for (i = new Enumerator(oDir.files); !i.atEnd(); i.moveNext())
{
	var Filename = i.item();
	if ('bmp' == fso.GetExtensionName(Filename).toLowerCase())
	{
		Pictures.push(Filename);
	}
}
var WallpaperNext = '';
for (var i = 0; i < 5; i++)
{
	WallpaperNext = Pictures[Math.floor(Math.random() * Pictures.length)];
	if (WallpaperNext != WallpaperCurrent)
		break;
}
setWallpaper(WallpaperNext);
