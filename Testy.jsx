(function () {
  'use strict';

var path;
var GraverNum, VivodNum, Techn, Polimer, Rezolution;
var docRef;
var mans = new Array();
var snam = new Array();
var inFolder;
  
var res =  

"dialog { orientation: 'column', alignChildren: 'center', \
panel: Panel {preferredSize: [140,150], alignChildren: 'left',\
text: StaticText {text:'', preferredSize:[60,0]},\
Graver:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[0,20]},\
            text: StaticText {preferredSize: [70,20], text:'Гравер №   '},\
            texte: EditText { preferredSize: [100,20], alignment: 'left'},\
			}\
Vivod:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[0,20]},\
            text: StaticText {preferredSize: [70,20], text:'Вывод №    '},\
            texte: EditText { preferredSize: [100,20], alignment: 'left'},\
			}\
namb:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[0,20]},\
            text: StaticText {preferredSize: [70,20], text:'Технология:'},\
            texte: EditText { preferredSize: [100,20], alignment: 'left'},\
			}\
Zak:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[0,20]},\
            text: StaticText {preferredSize: [70,20], text:'Полимер:    '},\
            texte: EditText { preferredSize: [100,20], alignment: 'left'},\
			}\
Rez:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[0,20]},\
            text: StaticText {preferredSize: [70,20], text:'Разрешение:    '},\
            texte: EditText { preferredSize: [100,20], alignment: 'left'},\
			}\
                                   } \
buttons: Group { orientation: 'row', alignChildren: 'center', \
				info: Button { text: 'Open info', properties:{name:'info'} }, \
                ok: Button { text: 'OK', properties:{name:'ok'} }, \
                cancel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";

var dlg = new Window(res);
dlg.text = "UNIVERSAL TEST";
dlg.panel.text= "Параметры:";

var sRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

app.foregroundColor.rgb.red = 255;
app.foregroundColor.rgb.green = 255;
app.foregroundColor.rgb.blue = 255;

mm=72/25.4;

dlg.buttons.info.onClick = function(){ 
inFolder = Folder.selectDialog( "Select folder to load file info.txt", "c:/Temp" );
                 //settingsLoadFile.open ("r");
               
var settingsLoadFile = File(inFolder.fsName+"\\info.txt");

openFlag = settingsLoadFile.open("r","text");
//alert('Open flag = '+openFlag);
//if (openFlag) { 
    //alert('Open. Length = '+infoFile.length+ '\n name '+ infoFile.fsName);
 
     infoLine = settingsLoadFile.readln();
	mans= infoLine.split(";");

	 

//   } else     alert('No Open');

settingsLoadFile.close(); 
//alert(mans[0]+', '+mans[1]+', '+mans[2]+', '+mans[3]+', '+mans[4]+', '+mans[5]+', '+mans[6]+', '+mans[7]+', '+mans[8]+', '+mans[9]);
           
dlg.panel.Graver.texte.text="1";
dlg.panel.Vivod.texte.text="1";
dlg.panel.namb.texte.text=mans[7];
dlg.panel.Zak.texte.text=mans[4]; 
dlg.panel.Rez.texte.text=mans[6];
}



dlg.buttons.ok.onClick = function(){   

snam[0] = dlg.panel.Graver.texte.text;
snam[1]  = dlg.panel.Vivod.texte.text;
snam[2] = dlg.panel.namb.texte.text;
snam[3] = dlg.panel.Zak.texte.text;
snam[4] = dlg.panel.Rez.texte.text;

//alert(GraverNum +'\n'+VivodNum +'\n'+Techn +'\n'+Polimer +'\n'+Rezolution +'\n');
	if (snam[4]=="2540") path = new File("c:/Temp/2540.tif");
	else path = new File("c:/Temp/4000.tif");
	docRef = open(path);

	textSet(snam);	
	bitMap(snam[4]);
	saveTest(inFolder, mans[1]);

//  var inFolder = Folder.selectDialog("Open folder","\\\\Server\\rip\\outputTiff\\архив"); // Задаем исходную папку	



		dlg.hide();	
		//win.close(0);	
	};

dlg.buttons.cancel.onClick = function()
{
	win.close(0);
}



dlg.center(); 
dlg.show();
		


}());



function textSet(snam) {
	

var myLayerRef = app.activeDocument.artLayers.add();

			myLayerRef.kind = LayerKind.TEXT;
			myLayerRef.name = "Text";

			//var mn='';
			//for (j = 6; j< mans.length; j++) mn = mn+" "+mans[j];
			//alert (mn);
			var t=0;
			//for (i=0;i<2;i++){ 
			var myTextRef = myLayerRef.textItem;
			   if(snam[4] != '2540') {myTextRef.size = 10; tt=9000; t=1500} 
			   else                  {myTextRef.size = 10; tt=6000; t=950}
			myTextRef.font = "MS Sans Serif";
			myTextRef.color.foregroundColor;

//alert(t);			
			myTextRef.position = new Array(tt, t);
            myTextRef.contents = 'Гравер № '+snam[0]+'\n\nВывод № '+snam[1]+'\r\rТехнология: '+snam[2]+'\r\rПолимер: '+snam[3];
			//alert(myTextRef.contents);
			//}
			
			app.activeDocument.flatten();
	
	
}

function bitMap(Rezol){
	
 var bitmapOptions = new BitmapConversionOptions;
	 bitmapOptions.resolution=Rezol;
	 bitmapOptions.method=BitmapConversionType.DIFFUSIONDITHER;
	 app.activeDocument.changeMode(ChangeMode.BITMAP, bitmapOptions);
}

function saveTest(outFolder, APName){
	var tiffOptions = new TiffSaveOptions(); // Сохранить в  Tiff
	tiffOptions.imageCompression=TIFFEncoding.TIFFLZW;
	//alert (outFolder+'\n'+APName);
    
	//app.activeDocument.flipCanvas(Direction.HORIZONTAL);

	//app.activeDocument.activeLayer.invert();

		app.activeDocument.saveAs(new File(outFolder + "/"+ "Test_"+APName+'.tif'),tiffOptions);
		// Не вносить изменений в оригинальный файл при закрытии
		app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}