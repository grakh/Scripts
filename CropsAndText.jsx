

#target photoshop
function pattern()
{
		artLayers.kind = LayerKind.PATTERNFILL;
		artLayers.fill = "Rastr1";
}

function Ugol(){

// Левый верхний угол ставим уголок
region= Array (Array (0,0), Array (5*mm,0), Array (5*mm,0.2*mm), Array (0,0.2*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();
region= Array (Array (0,0), Array (0.2*mm,0), Array (0.2*mm,5*mm), Array (0,5*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();


// Левый нижний угол ставим уголок
region= Array (Array (0,DocumentHight), Array (5*mm,DocumentHight), Array (5*mm,DocumentHight-0.2*mm), Array (0,DocumentHight-0.2*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();
region= Array (Array (0,DocumentHight), Array (0.2*mm,DocumentHight), Array (0.2*mm,DocumentHight-5*mm), Array (0,DocumentHight-5*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();

// Правый Верхний угол ставим уголок
region= Array (Array (DocumentWidth,0), Array (DocumentWidth-5*mm,0), Array (DocumentWidth-5*mm,0.2*mm), Array (DocumentWidth,0.2*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();
region= Array (Array (DocumentWidth,0), Array (DocumentWidth-0.2*mm,0), Array (DocumentWidth-0.2*mm,5*mm), Array (DocumentWidth,5*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();

// Правый нижний угол ставим уголок
region= Array (Array (DocumentWidth,DocumentHight), Array (DocumentWidth-5*mm,DocumentHight), Array (DocumentWidth-5*mm,DocumentHight-0.2*mm), Array (DocumentWidth,DocumentHight-0.2*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();
region= Array (Array (DocumentWidth,DocumentHight), Array (DocumentWidth-0.2*mm,DocumentHight), Array (DocumentWidth-0.2*mm,DocumentHight-5*mm), Array (DocumentWidth,DocumentHight-5*mm));
app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();

return 0;
}


function NoUgol(mm,DocumentWidth,DocumentHight){

app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

//app.activeDocument.trim(TrimType.TOPLEFT, true, true, true, true);

app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight+3*mm, AnchorPosition.BOTTOMCENTER);


region= Array (Array (5*mm, 2.2*mm), Array (0,2.2*mm), Array (0,0), Array (DocumentWidth,0), Array (DocumentWidth,2.2*mm), Array (DocumentWidth-5*mm, 2.2*mm), Array (DocumentWidth-5*mm, 2*mm), Array (DocumentWidth-0.2*mm, 2*mm), Array (DocumentWidth-0.2*mm, 0.2*mm), Array (0.2*mm,0.2*mm), Array (0.2*mm, 2*mm), Array (5*mm, 2*mm), Array (5*mm, 2.2*mm));

app.activeDocument.selection.select (region);
app.activeDocument.selection.fill (foregroundColor);
app.activeDocument.selection.deselect ();

return 3*mm;

}



function MicroRastr() {
	
var dref1 = app.activeDocument;

app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

//dref1.duplicate();
//var dref2 = app.activeDocument;
dref1.changeMode(ChangeMode.GRAYSCALE);
   var strtRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;
    
 
        var strtRulerUnits = app.preferences.rulerUnits;
        app.preferences.rulerUnits = Units.PIXELS;
        var selRef = dref1.selection;
		//var selRef1 = dref1.selection;
 selRef.deselect();
app.displayDialogs = DialogModes.NO;
//var selBounds1 =Array(Array(0, 0), Array(0, 1), Array(1, 1), Array(1, 0)); 
//selRef1.select(selBounds1);
//selRef1.fill(app.backgroundColor);
// selRef1.deselect();
var selBounds =Array(Array(0, 0), Array(0, 1), Array(1, 1), Array(1, 0)); 
selRef.select(selBounds);
var pixelLoc = [UnitValue(0) , UnitValue(0)];
var myColorSampler = app.activeDocument.colorSamplers.add(pixelLoc);
//alert (''+myColorSampler.color.rgb.red);

selRef.similar(1,false);
if (myColorSampler.color.rgb.red==0) selRef.invert();
selRef.contract(2);
doAction('Rastr 1:1','Rastr');

var crops1, crops2, crops3, crops4= new Array;
crops1 = selRef.bounds[0];
crops2 = selRef.bounds[1];
crops3 = selRef.bounds[2];
crops4 = selRef.bounds[3];

//dref2.close(SaveOptions.DONOTSAVECHANGES);
// dref1.crop(Array(crops1, crops2, crops3, crops4));
   
   selRef = null;
   var bitmapOptions = new BitmapConversionOptions;
bitmapOptions.resolution=2540;
bitmapOptions.method=BitmapConversionType.DIFFUSIONDITHER;
dref1.changeMode(ChangeMode.BITMAP, bitmapOptions);
//pattern();	
	};
	
	
	
//  функция присваивает значение даты переменной "todaysDate"
function timeStamp(TotalNumOfFiles,i,DocumentWidth,DocumentHight,mans,resol,Resolu,ttitls)
{
var tempDoc = app.documents.add (15000,230,2540,"Temp Doc");
	var docRef = tempDoc;
		
		// Create a text layer at the front
		
	var myLayerRef = docRef.artLayers.add();
		myLayerRef.kind = LayerKind.TEXT;
		myLayerRef.name = "Filename";
		var mn='';
		for (j = 6; j< mans.length; j++) mn = mn+" "+mans[j];
		//alert (mn);

		var myTextRef = myLayerRef.textItem;
           if(resol > 2540)	{myTextRef.size = 9; kf=1200; tt=230} else {myTextRef.size = 6; kf=700; tt=170}
           		myTextRef.position = new Array(5, tt );
		myTextRef.font = "MS Sans Serif";
        myTextRef.color.foregroundColor;
		var k=i;
        if (dlg.panel.Type.rbt.rbtn1.value) PrintTypeNum = "Прямая" else PrintTypeNum = "Оборотная";
	     myTextRef.contents = ZakazNum.text+"_"+TotalNumOfFiles+"-"+k+"_"+PolimerNum.text+"_"+ZakazchikNum.text+"_"+PrintTypeNum+"_"+mn+"  ("+ttitls+")";
      //  wid=myTextRef.width;
      //  alert(''+wid);
     // myTextRef.selection.select();
         docRef.flatten();

        	docRef.backgroundLayer.invert();
			
              docRef.selection.selectAll();
        docRef.selection.copy();
   //  alert(''+myTextRef.height);

           tempDoc.close(SaveOptions.DONOTSAVECHANGES);
		
		region= Array (Array (kf+15000,250), Array (kf+15000,20), Array (kf,20), Array (kf,250));
		app.activeDocument.selection.select (region);
      //  app.activeDocument.selection.translate(0,0);
		app.activeDocument.paste();
	//	app.activeDocument.selection.fill (foregroundColor);
		app.activeDocument.selection.deselect ();
		
		
}

//function convas(addwhidth, addheight,mm)
function convas(addTop, addDown, addLeft, addRight, mm) {
app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

//app.activeDocument.resizeCanvas (app.activeDocument.width+parseInt(addwhidth)*2*mm, app.activeDocument.height+parseInt(addheight)*2*mm);
//alert(""+parseInt(addTop)*mm+"  "+parseInt(addDown)*mm+"  "+parseInt(addLeft)*mm+"  "+parseInt(addRight)*mm);

						DocumentWidth=app.activeDocument.width;
						DocumentHight=app.activeDocument.height;
app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight+parseInt(addTop)*mm, AnchorPosition.BOTTOMCENTER);
						DocumentHight=app.activeDocument.height;
app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight+parseInt(addDown)*mm, AnchorPosition.TOPCENTER);
						DocumentHight=app.activeDocument.height;
app.activeDocument.resizeCanvas (DocumentWidth+parseInt(addRight)*mm, DocumentHight, AnchorPosition.MIDDLELEFT);
						DocumentWidth=app.activeDocument.width;
app.activeDocument.resizeCanvas (DocumentWidth+parseInt(addLeft)*mm, DocumentHight, AnchorPosition.MIDDLERIGHT);

}

function CropsSel() {
	
var dref1 = app.activeDocument;

dref1.duplicate();
var dref2 = app.activeDocument;
dref2.changeMode(ChangeMode.GRAYSCALE);
   var strtRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;
    
 
        var strtRulerUnits = app.preferences.rulerUnits;
        app.preferences.rulerUnits = Units.PIXELS;
        var selRef = dref2.selection;
 selRef.deselect();
app.displayDialogs = DialogModes.NO;
var selBounds =Array(Array(0, 0), Array(0, 1), Array(1, 1), Array(1, 0)); 
selRef.select(selBounds);

var pixelLoc = [UnitValue(0) , UnitValue(0)];
var myColorSampler = app.activeDocument.colorSamplers.add(pixelLoc);
//alert (''+myColorSampler.color.rgb.red);

selRef.similar(1,false);
selRef.invert();


var crops1, crops2, crops3, crops4= new Array;
crops1 = selRef.bounds[0];
crops2 = selRef.bounds[1];
crops3 = selRef.bounds[2];
crops4 = selRef.bounds[3];

dref2.close(SaveOptions.DONOTSAVECHANGES);
 dref1.crop(Array(crops1, crops2, crops3, crops4));
   
   selRef = null;
//pattern();	
	};



function titles(APN){


//alert(APN.substring(APN.lastIndexOf ('.')-1, APN.lastIndexOf ('.')));

if (APN.substring(APN.lastIndexOf ('.')-1, APN.lastIndexOf ('.')) !=')' ){
ttitls = APN.substring(APN.lastIndexOf ('_')+1, APN.lastIndexOf ('.'));
//alert(ttitls+'     '+APN.substring(APN.lastIndexOf ('.')-1, APN.lastIndexOf ('.')));
 switch (ttitls){
	case  'C':  ttitls='Cyan'; break;
	case  'M':  ttitls='Magenta'; break;
	case  'Y':  ttitls='Yellow'; break;
	case  'K':  ttitls='Black'; break;
	case  'ReB':  ttitls='PANTONE ReflexBlue C'; break;
	case  'Dred':  ttitls='Red'; break;
	case  'DBlue':  ttitls='Blue'; break;
	case  'DGreen':  ttitls='Green'; break;
	default: ttitls='PANTONE '+ttitls+' C';
	}
       } 
return ttitls;

};


/*
function chract (zak){
    zak1='';
    slovo='';
    cht='';
     for (i=0; i<zak.length; i++){ 
               if (zak.substring(i,i+1)=='%') {
               if (zak.substring(i,i+3)=='%D0' | zak.substring(i,i+3)=='%D1'){ i+=2} else {zak1+=zak.substring(i,i+3); i+=2} }
               else { zak1+=zak.substring(i,i+1)}; 
   }; 

//alert (''+zak+'\n'+zak1);

 for (i=0; i<(zak1.length); i++){  
cht=zak1.substring(i,i+1);
               if (cht=='%') cht=zak1.substring(i,i+3);
               
    switch (cht){
	case  '%90':  slovo = slovo+'А' ; i+=2; break;
	case  '%91':  slovo = slovo+'Б' ; i+=2; break;
	case  '%92':  slovo = slovo+'В' ; i+=2;break;
	case  '%93':  slovo = slovo+'Г' ; i+=2;break;
    case  '%94':  slovo = slovo+'Д' ; i+=2;break;
    case  '%95':  slovo = slovo+'Е' ; i+=2;break;
    case  '%96':  slovo = slovo+'Ж' ; i+=2;break;
    case  '%97':  slovo = slovo+'З' ; i+=2;break;
    case  '%98':  slovo = slovo+'И' ; i+=2;break;
    case  '%99':  slovo = slovo+'Й' ; i+=2;break;
    case  '%9A':  slovo = slovo+'К' ; i+=2;break;
    case  '%9B':  slovo = slovo+'Л' ; i+=2;break;
    case  '%9C':  slovo = slovo+'М' ; i+=2;break;
    case  '%9D':  slovo = slovo+'Н' ; i+=2;break;
    case  '%9E':  slovo = slovo+'О' ; i+=2;break;
    case  '%9F':  slovo = slovo+'П' ; i+=2;break;
    case  '%A0':  slovo = slovo+'Р' ; i+=2;break;
    case  '%A1':  slovo = slovo+'С' ; i+=2;break;
    case  '%A2':  slovo = slovo+'Т' ; i+=2;break;
    case  '%A3':  slovo = slovo+'У' ; i+=2;break;
    case  '%A4':  slovo = slovo+'Ф' ; i+=2;break;
    case  '%A5':  slovo = slovo+'Х' ; i+=2;break;
    case  '%A6':  slovo = slovo+'Ц' ; i+=2;break;
    case  '%A7':  slovo = slovo+'Ч' ; i+=2;break;
    case  '%A8':  slovo = slovo+'Ш' ; i+=2;break;
    case  '%A9':  slovo = slovo+'Щ' ; i+=2;break;
    case  '%AA':  slovo = slovo+'Ъ' ; i+=2;break;
    case  '%AB':  slovo = slovo+'Ы' ; i+=2;break;
    case  '%AC':  slovo = slovo+'Ь' ; i+=2;break;
    case  '%AD':  slovo = slovo+'Э' ; i+=2;break;
    case  '%AE':  slovo = slovo+'Ю' ; i+=2;break;
    case  '%AF':  slovo = slovo+'Я' ; i+=2;break;
    
    case  '%B0':  slovo = slovo+'а' ; i+=2;break;
	case  '%B1':  slovo = slovo+'б' ; i+=2;break;
	case  '%B2':  slovo = slovo+'в' ; i+=2;break;
	case  '%B3':  slovo = slovo+'г' ; i+=2;break;
    case  '%B4':  slovo = slovo+'д' ; i+=2;break;
    case  '%B5':  slovo = slovo+'е' ; i+=2;break;
    case  '%B6':  slovo = slovo+'ж' ; i+=2;break;
    case  '%B7':  slovo = slovo+'з' ; i+=2;break;
    case  '%B8':  slovo = slovo+'и' ; i+=2;break;
    case  '%B9':  slovo = slovo+'й' ; i+=2;break;
    case  '%BA':  slovo = slovo+'к' ; i+=2;break;
    case  '%BB':  slovo = slovo+'л' ; i+=2;break;
    case  '%BC':  slovo = slovo+'м' ; i+=2;break;
    case  '%BD':  slovo = slovo+'н' ; i+=2;break;
    case  '%BE':  slovo = slovo+'о' ; i+=2;break;
    case  '%BF':  slovo = slovo+'п' ; i+=2;break;
    case  '%80':  slovo = slovo+'р' ; i+=2;break;
    case  '%81':  slovo = slovo+'с' ; i+=2;break;
    case  '%82':  slovo = slovo+'т' ; i+=2;break;
    case  '%83':  slovo = slovo+'у' ; i+=2;break;
    case  '%84':  slovo = slovo+'ф' ; i+=2;break;
    case  '%85':  slovo = slovo+'х' ; i+=2;break;
    case  '%86':  slovo = slovo+'ц' ; i+=2;break;
    case  '%87':  slovo = slovo+'ч' ; i+=2;break;
    case  '%88':  slovo = slovo+'ш' ; i+=2;break;
    case  '%89':  slovo = slovo+'щ' ; i+=2;break;
    case  '%8A':  slovo = slovo+'ъ' ; i+=2;break;
    case  '%8B':  slovo = slovo+'ы' ; i+=2;break;
    case  '%8C':  slovo = slovo+'ь' ; i+=2;break;
    case  '%8D':  slovo = slovo+'э' ; i+=2;break;
    case  '%8E':  slovo = slovo+'ю' ; i+=2;break;
    case  '%8F':  slovo = slovo+'я' ; i+=2;break;
    
    case  '%20':  slovo = slovo+' ' ; i+=2;break;    
	default: slovo = slovo+cht;
	}
//alert (''+cht+'  -  '+slovo);
}

return slovo;
    };
*/

// установки для фотошопа
var sRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

app.foregroundColor.rgb.red = 255;
app.foregroundColor.rgb.green = 255;
app.foregroundColor.rgb.blue = 255;

var path = new File("~/desktop");
var inFile = path.openDlg("Choose File:","*.tif");
while (inFile.alias) {
    inFile = file.resolve().openDlg("Choose File:");
}

//var inFile = File.openDialog("Open file","*.tif"); // Задаем исходную папку
var docRef = open(inFile);
//var inFolder = Folder.selectDialog("Open folder","\\\\Server\\rip\\outputTiff\\архив"); // Задаем исходную папку
//var outFolder = inFolder; //Folder.selectDialog("Save images to"); // Задаем папку, куда сохранить измененные файлы


// функция проставления уголков


var man = inFile.path.toString();
var outFolder = inFile.path.toString();
//man = man.substring(man.lastIndexOf ('/')-1, man.length);


//alert(inFolder.fsName+"\\info.txt");

infoFile = File(inFolder.fsName+"\\info.txt");

openFlag = infoFile.open("r","text");
//alert('Open flag = '+openFlag);
if (openFlag) { 
    //alert('Open. Length = '+infoFile.length+ '\n name '+ infoFile.fsName);
 
     infoLine = infoFile.readln();

   } else     alert('No Open');

infoFile.close(); 



	k=0;
	var mans = new Array();
   mans= infoLine.split(";");
   
	var fileF = new Array();
	var comboF = new Array();

	pec1=mans[5];

//alert(mans[0]+', '+mans[1]+', '+mans[2]+', '+mans[3]+', '+mans[4]+', pec1:'+pec1+', '+mans[5]+', '+mans[6]+', '+mans[7]+', '+mans[8]+', '+mans[9]);



var res =  

"dialog { orientation: 'column', alignChildren: 'center', \
panel: Panel {preferredSize: [230,300], alignChildren: 'left',\
text: StaticText {text:'', preferredSize:[60,0]},\
total:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[26,20]},\
            text: StaticText {text:'Номер файла '},\
            texte: EditText { preferredSize: [40,20], alignment: 'left'},\
            text1: StaticText {text:'Общее кол-во фалов '},\
            texts: EditText { preferredSize: [80,20], alignment: 'left'},\
			}\
namb:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[26,20]},\
            text: StaticText {text:'Номер заказа №'},\
            texte: EditText { preferredSize: [80,20], alignment: 'left'},\
			}\
Zak:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[62,20]},\
            text: StaticText {text:'Заказчик: '},\
            texte: EditText { preferredSize: [230,20], alignment: 'left'},\
			}\
Polim:  Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[60,20]},\
            text: StaticText {text:'Полимер: '},\
            texte: EditText { preferredSize: [120,20], alignment: 'left'},\
			}\
Type: Group { orientation: 'row', \
           textw: StaticText {text:'', preferredSize:[45,20]},\
		  text: StaticText {text:'Тип печати:'},\
           textw: StaticText {text:'', preferredSize:[10,20]},\
           rbt:  Group { orientation: 'row', alignChildren: 'left',\
                                    rbtn1:  RadioButton {  text: 'Прямая', assignmet: 'left'}, \
                                    rbtn2:  RadioButton {  text: 'Оборотная', assignmet: 'left'}, \
			}\
            			}\
text: StaticText {text:'', preferredSize:[60,0]},\
dividerLine: Panel { preferredSize: [390,1], margins:0,},\
check: Group { orientation: 'row', \
            textw: StaticText {text:'', preferredSize:[1,20]},\
		Auto:  Checkbox {  text: 'AutoCrop', value: false, enabled: true}, \
           textw: StaticText {text:'', preferredSize:[0,20]},\
		Rotate:  Checkbox {  text: 'Rotate 90', value: false, enabled: true}, \
		   textw: StaticText {text:'', preferredSize:[0,20]},\
        Invert1:  Checkbox {  text: 'Invert', value: false, enabled: true}, \
		          textw: StaticText {text:'', preferredSize:[0,20]},\
		Mirror:  Checkbox {  text: 'Flip (Horizontal)', value: false, enabled: true}, \
											  }\
dividerLine: Panel { preferredSize: [390,1], margins:0,},\
      Ugroup: Group { orientation: 'row', alignChildren: 'center', \
	    text: StaticText {text:'', preferredSize:[70,0]},\
	    Crop:  Checkbox {  text: 'Crop', value: true, enabled: true}, \
        text: StaticText {text:'', preferredSize:[30,0]},\
		Ugol:  Checkbox {  text: 'Cut information text', value: false, enabled: true}, \
			}\
dividerLine: Panel { preferredSize: [390,1], margins:0,},\
Resolu: StaticText {text:'', preferredSize:[100,0]},\
text: StaticText {text:'', preferredSize:[60,0]},\
LeftCorn:  Group { orientation: 'column', \
Top1:  Group { orientation: 'row', alignChildren: 'center', \
            textTop: StaticText {text:' Add Top:'},\
            texte: EditText { preferredSize: [40,20], alignment: 'left', enabled: true},\
			}\
TopCorn:  Group { orientation: 'row', alignChildren: 'center', \
            textw: StaticText {text:'', preferredSize:[1,20]},\
            textLeft: StaticText {text:'                Add Left:'},\
            textel: EditText { preferredSize: [40,20], alignment: 'left', enabled: false},\
		eq:  Checkbox {value: true, enabled: true}, \
			texter: EditText { preferredSize: [40,20], alignment: 'left', enabled: false},\
			textRight: StaticText {text:':Add Right'},\
			}\
Top2:  Group { orientation: 'row', alignChildren: 'center', \
			textDo: StaticText {text:'', preferredSize:[140,20]},\
            texte: EditText { preferredSize: [40,20], alignment: 'left', enabled: false},\
			textDown: StaticText {text:':Add Bottom'},\
						}\
			}\
                                   } \
buttons: Group { orientation: 'row', alignChildren: 'center', \
                ok: Button { text: 'OK', properties:{name:'ok'} }, \
                cencel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";

var dlg = new Window(res);
dlg.text = "Автоматический обработчик    v6.1";
dlg.panel.text= "Параметры заказа:";
//dlg.panel.namb.texte.text=fold;
dlg.panel.namb.texte.text=mans[1];
//dlg.panel.Zak.texte.text=slovo;
dlg.panel.Zak.texte.text=mans[2];
dlg.panel.total.texte.text=1;
dlg.panel.total.texts.text=1;
//dlg.panel.Type.texte.text=pec1;
//dlg.panel.Polim.texte.text=sec ;
dlg.panel.Polim.texte.text=mans2 ;
//dlg.panel.LeftCorn.texte.text='0' ;
//dlg.panel.TopCorn.texte.text='0' ;
	if (mans[8]=='CUT') dlg.panel.Ugroup.Ugol.value=true; 

dlg.panel.LeftCorn.Top1.texte.text='0' ;
dlg.panel.LeftCorn.TopCorn.textel.text='0' ;
dlg.panel.LeftCorn.TopCorn.texter.text='0' ;
dlg.panel.LeftCorn.Top2.texte.text='0' ;
check1 = dlg.panel.LeftCorn.TopCorn.eq;

dlg.panel.LeftCorn.TopCorn.eq.onClick = function(){ if(check1.value) {
		dlg.panel.LeftCorn.TopCorn.textel.enabled=false;
		dlg.panel.LeftCorn.TopCorn.texter.enabled=false;
		dlg.panel.LeftCorn.Top2.texte.enabled=false;}
	else {
		dlg.panel.LeftCorn.TopCorn.textel.enabled=true;
		dlg.panel.LeftCorn.TopCorn.texter.enabled=true;
		dlg.panel.LeftCorn.Top2.texte.enabled=true;
		
		dlg.panel.LeftCorn.TopCorn.textel.text=dlg.panel.LeftCorn.Top1.texte.text;
		dlg.panel.LeftCorn.TopCorn.texter.text=dlg.panel.LeftCorn.Top1.texte.text;
		dlg.panel.LeftCorn.Top2.texte.text=dlg.panel.LeftCorn.Top1.texte.text;}
	}
	
	dlg.panel.LeftCorn.Top1.texte.onChange = function(){if(check1.value) {
		dlg.panel.LeftCorn.TopCorn.textel.text=dlg.panel.LeftCorn.Top1.texte.text;
		dlg.panel.LeftCorn.TopCorn.texter.text=dlg.panel.LeftCorn.Top1.texte.text;
		dlg.panel.LeftCorn.Top2.texte.text=dlg.panel.LeftCorn.Top1.texte.text;}
		}

if (pec1!='Прямая' & pec1!='Оборотная' & pec1!='Обратная') {dlg.panel.Type.rbt.rbtn1.value = false; dlg.panel.Type.rbt.rbtn2.value =  false; alert("Не указан тип печати! "+pec1)};

if (pec1=='Прямая'|pec1=='Пр') {dlg.panel.Type.rbt.rbtn1.value = true; dlg.panel.Type.rbt.rbtn2.value =  false};
if (pec1=='Оборотная' | pec1=='Обратная') {dlg.panel.Type.rbt.rbtn1.value = false; dlg.panel.Type.rbt.rbtn2.value =  true};

ZakazNum = dlg.panel.namb.texte;
ZakazchikNum = dlg.panel.Zak.texte;
//PrintTypeNum = dlg.panel.Type.texte;
PolimerNum = dlg.panel.Polim.texte;
check = dlg.panel.check.Auto;
Rotate90 = dlg.panel.check.Rotate;
Invert = dlg.panel.check.Invert1;
Mirror1 = dlg.panel.check.Mirror;
//addwhidth = dlg.panel.LeftCorn.texte;
//addheight = dlg.panel.TopCorn.texte;

addTop = dlg.panel.LeftCorn.Top1.texte;
addLeft = dlg.panel.LeftCorn.TopCorn.textel;
addRight = dlg.panel.LeftCorn.TopCorn.texter;
addDown = dlg.panel.LeftCorn.Top2.texte;

//Цикл обработки
dlg.buttons.ok.onClick = function(){

if ((!dlg.panel.Type.rbt.rbtn1.value)&(!dlg.panel.Type.rbt.rbtn2.value)) stop();

//if (inFolder != null && outFolder != null) 
//	{
		var ListOfFiles = inFile; // Получить все файлы из папки
k = dlg.panel.total.texte.text;
TotalNumOfFiles = dlg.panel.total.texts.text;
//alert(''+docRef.info.caption);

resol=app.activeDocument.resolution;

Resolu="";
if(resol==2032) {Resolu="_DC ASP"; dlg.panel.Resolu.text="DC ASP";} else dlg.panel.Resolu.text="Resolution: 2540";
dlg.focus=true;

//if((resol==2540&mans[7]=='5080')|(resol==5080&mans[7]=='')) alert('Не соответствие разрешений!');
mm=resol/25.4;
						if (Rotate90.value) docRef.rotateCanvas(90); 
						if (Mirror1.value) docRef.flipCanvas(Direction.HORIZONTAL);
                        if (Invert.value) docRef.activeLayer.invert();
                        if (check.value) CropsSel(); 
                        if (addTop.text !='0' |  addLeft.text!='0' |  addRight.text!='0' |  addDown.text!='0') {
						convas(addTop.text, addDown.text, addLeft.text, addRight.text, mm);}
						//if (Micro.value) MicroRastr();

app.backgroundColor.rgb.red = 0;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

app.foregroundColor.rgb.red = 255;
app.foregroundColor.rgb.green = 255;
app.foregroundColor.rgb.blue = 255;
						
// получаем габариты документа
DocumentWidth=app.activeDocument.width;
DocumentHight=app.activeDocument.height;
//alert(''+mm);

APN  = app.activeDocument.name;
APName = '';
//alert (''+APN + '   ' +APN.length);
for (j=0; j<APN.length-4; j++){

if (APN[j]==' ' &&  APN[j+1]=='(' ) APName = APName+"~" else APName = APName+APN [j];
}

ttitls=docRef.info.title;
titles(APN);
docRef.info.title=ttitls;
docRef.info.caption=ttitls;

//timeStamp(ListOfFiles.length,i,DocumentWidth,DocumentHight,mans,resol,Resolu,ttitls);

if (dlg.panel.Ugroup.Crop.value) NoU=Ugol(); else NoU=0;
if (dlg.panel.Ugroup.Ugol.value) NoU=NoUgol(mm,DocumentWidth,DocumentHight); 

timeStamp(TotalNumOfFiles,k,DocumentWidth,DocumentHight,mans,resol,Resolu,ttitls);





var tiffOptions = new TiffSaveOptions(); // Сохранить в  Tiff
tiffOptions.imageCompression=TIFFEncoding.TIFFLZW;
//app.backgroundColor.rgb.red = 255;
//app.backgroundColor.rgb.green = 255;
//app.backgroundColor.rgb.blue = 255;


//alert (APName);

//var NewOutFolder = new Folder(outFolder + ZakazNum);
// var k=i+1;
 
 /*
var selRegion = Array(Array(0, 0),
 Array(docRef.width.value, 0), 
 Array(docRef.width.value, docRef.height.value), 
 Array(0, docRef.height.value), 
 Array(0, 0));
*/

// docRef.selection.selectAll();

if (dlg.panel.Type.rbt.rbtn1.value) docRef.flipCanvas(Direction.HORIZONTAL);

docRef.activeLayer.invert();

	docRef.saveAs(new File(outFolder + "/"+ k +"_" + ZakazNum.text + "~" + Math.ceil(app.activeDocument.width.value*100/mm) + "x" + Math.ceil((app.activeDocument.height.value-NoU)*100/mm)  + "~" + APName + "~"+'.tif'),tiffOptions);
	// Не вносить изменений в оригинальный файл при закрытии
	docRef.close(SaveOptions.DONOTSAVECHANGES);
	
//					};
//			};
 dlg.hide();	
//	};
};
dlg.buttons.cancel.onClick = function()
{
	stop();
	//win.close(0);
}



dlg.center(); 
dlg.show();

