// установки для фотошопа

var sRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

app.foregroundColor.rgb.red = 255;
app.foregroundColor.rgb.green = 255;
app.foregroundColor.rgb.blue = 255;


var res =  
"dialog { orientation: 'column', alignChildren: 'center', \
panel: Panel {text: 'Switch:', preferredSize: [200,150], alignChildren: 'left',\
text: StaticText {text:'', preferredSize:[60,0]},\
buttons: Group { orientation: 'row', alignChildren: 'center', \
                ok: Button { text: 'Files', properties:{name:'ok'} }, \
                cencel: Button { text: 'Folder', properties:{name:'cancel'} }, \
								   } \
							   } \
}";

var dlg = new Window(res);
dlg.text = "Способ обработки";




dlg.panel.buttons.ok.onClick = function(){
dlg.hide();
var SCRIPTS_FOLDER =  decodeURI(app.path + '/' + localize("$$$/ScriptingSupport/InstalledScripts=Presets/Scripts"));
var geo_dynamic = File(SCRIPTS_FOLDER + "/CropsAndText.jsx");

$.evalFile (geo_dynamic);

}






dlg.panel.buttons.cancel.onClick = function()
{
dlg.hide();
var SCRIPTS_FOLDER =  decodeURI(app.path + '/' + localize("$$$/ScriptingSupport/InstalledScripts=Presets/Scripts"));
var geo_dynamic = File(SCRIPTS_FOLDER + "/CaT.jsx");

$.evalFile (geo_dynamic);

			};

dlg.center(); 
dlg.show();

