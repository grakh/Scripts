

	#target photoshop
	function pattern()
	{
			artLayers.kind = LayerKind.PATTERNFILL;
			artLayers.fill = "Rastr1";
	}


	function Reprop(mm, ppl, mans){


							DocumentWidth=app.activeDocument.width;
							DocumentHight=app.activeDocument.height;
							

							//alert(mans[3]);
							ppl = parseInt(mans[3]);
							if (ppl<2)rp=5; else rp=10;
							
							min=rp*mm;
							//alert(rp+"  "+min);

	// Левый верхний угол ставим точку
	region= Array (Array (min,min), Array (min-1,min), Array (min-1,min-1), Array (min,min-1));
	app.activeDocument.selection.select (region);
	app.activeDocument.selection.fill (foregroundColor);
	app.activeDocument.selection.deselect ();

	// Левый нижний угол ставим точку
	region= Array (Array (min,DocumentHight-min), Array (min-1,DocumentHight-min), Array (min-1,DocumentHight-min-1), Array (min,DocumentHight-min-1));
	app.activeDocument.selection.select (region);
	app.activeDocument.selection.fill (foregroundColor);
	app.activeDocument.selection.deselect ();

	// Правый Верхний угол ставим точку
	region= Array (Array (DocumentWidth-min,min), Array (DocumentWidth-min-1,min), Array (DocumentWidth-min-1,min-1), Array (DocumentWidth-min,min-1));
	app.activeDocument.selection.select (region);
	app.activeDocument.selection.fill (foregroundColor);
	app.activeDocument.selection.deselect ();

	// Правый нижний угол ставим точку
	region= Array (Array (DocumentWidth-min, DocumentHight-min), Array (DocumentWidth-min-1,DocumentHight-min), Array (DocumentWidth-min-1,DocumentHight-min-1), Array (DocumentWidth-min,DocumentHight-min-1));
	app.activeDocument.selection.select (region);
	app.activeDocument.selection.fill (foregroundColor);
	app.activeDocument.selection.deselect ();

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
	retFl=0;

	//app.activeDocument.trim(TrimType.TOPLEFT, true, true, true, true);
if (DocumentWidth > DocumentHight){
DocumentWidth+=3*mm;
	app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight, AnchorPosition.MIDDLELEFT);
	region= Array (Array (DocumentWidth-2.2*mm, DocumentHight-5*mm), Array (DocumentWidth-2.2*mm, DocumentHight), Array (DocumentWidth,DocumentHight), Array (DocumentWidth,0), Array (DocumentWidth-2.2*mm,0), Array (DocumentWidth-2.2*mm, 5*mm), Array (DocumentWidth-2*mm, 5*mm), Array (DocumentWidth-2*mm,0.2*mm), Array (DocumentWidth-0.2*mm, 0.2*mm), Array (DocumentWidth-0.2*mm,DocumentHight-0.2*mm), Array (DocumentWidth-2*mm, DocumentHight-0.2*mm), Array (DocumentWidth-2*mm, DocumentHight-5*mm), Array (DocumentWidth-2.2*mm, DocumentHight-5*mm));
	retFl=1;
		} 
		else {
	app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight+3*mm, AnchorPosition.BOTTOMCENTER);
	region= Array (Array (5*mm, 2.2*mm), Array (0,2.2*mm), Array (0,0), Array (DocumentWidth,0), Array (DocumentWidth,2.2*mm), Array (DocumentWidth-5*mm, 2.2*mm), Array (DocumentWidth-5*mm, 2*mm), Array (DocumentWidth-0.2*mm, 2*mm), Array (DocumentWidth-0.2*mm, 0.2*mm), Array (0.2*mm,0.2*mm), Array (0.2*mm, 2*mm), Array (5*mm, 2*mm), Array (5*mm, 2.2*mm));
	retFl=3*mm;
			}
			
	app.activeDocument.selection.select (region);
	app.activeDocument.selection.fill (foregroundColor);
	app.activeDocument.selection.deselect ();

	return retFl;

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
	function timeStamp(TotalNumOfFiles,i,DocumentWidth,DocumentHight,mans,resol,Resolu,ttitlst, mm)
	{
	var tempDoc = app.documents.add (15000,230,2540,"Temp Doc");
		var docRef = tempDoc;
			
			// Create a text layer at the front
			
		var myLayerRef = docRef.artLayers.add();
			myLayerRef.kind = LayerKind.TEXT;
			myLayerRef.name = "Filename";
			//var mn='';
			//for (j = 6; j< mans.length; j++) mn = mn+" "+mans[j];
			//alert (mn);

			var myTextRef = myLayerRef.textItem;
			   if(resol > 2540)	{myTextRef.size = 9; kf=1000; tt=230} else {myTextRef.size = 6; kf=600; tt=170}
					myTextRef.position = new Array(5, tt );
			myTextRef.font = "MS Sans Serif";
			myTextRef.color.foregroundColor;
			var k=i;
			var namberZak =  ZakazchikNum.text.substr(0, ZakazchikNum.text.indexOf("-"));
			if (dlg.panel.Type.rbt.rbtn1.value) PrintTypeNum = "Прямая" else PrintTypeNum = "Оборотная";
			if (dlg.panel.Type.Short.value){ myTextRef.size = 5;
			myTextRef.contents =ZakazNum.text+"_"+TotalNumOfFiles+"-"+k+"_"+mans[3]+"_"+namberZak;
			}
			else
			 myTextRef.contents =ZakazNum.text+"_"+TotalNumOfFiles+"-"+k+"_"+PolimerNum.text+"_"+ZakazchikNum.text+"_"+PrintTypeNum+"_"+mans[6]+"_"+mans[7]+"_"+mans[9]+"  ("+ttitls+")";

//  wid=myTextRef.width;
		  //  alert(''+wid);

			var selRef1 = docRef.selection;
var selBounds1 =Array(Array(0, 0), Array(0, 1), Array(1, 1), Array(1, 0)); 
	selRef1.select(selBounds1);

	var pixelLoc1 = [UnitValue(0) , UnitValue(0)];
	var myColorSampler = app.activeDocument.colorSamplers.add(pixelLoc1);

	selRef1.similar(1,false);
	selRef1.invert();

var crops1s, crops2s, crops3s, crops4s= new Array;
	crops1s = selRef1.bounds[0];
	crops2s = selRef1.bounds[1];
	crops3s = selRef1.bounds[2];
	crops4s = selRef1.bounds[3];
			 docRef.flatten();
			 
	 docRef.crop(Array(crops1s, crops2s, crops3s, crops4s));

hiz= docRef.height;
wiz= docRef.width;

				docRef.backgroundLayer.invert();
				if ((DocumentWidth > DocumentHight)&& dlg.panel.Ugroup.Ugol.value==true) docRef.rotateCanvas(90); //docRef.flipCanvas(Direction.HORIZONTAL);} 
				  docRef.selection.selectAll();
			docRef.selection.copy();
	   //  alert(''+myTextRef.height);

			   tempDoc.close(SaveOptions.DONOTSAVECHANGES);
			if ((DocumentWidth > DocumentHight)&& dlg.panel.Ugroup.Ugol.value==true){
			 region= Array (Array (DocumentWidth-250+3*mm,DocumentHight-kf-wiz), Array (DocumentWidth+3*mm-20, DocumentHight-kf-wiz), Array (DocumentWidth+3*mm-20, DocumentHight-kf), Array (DocumentWidth+3*mm-250, DocumentHight-kf));
			} else {
			region= Array (Array (kf,20), Array (kf,250), Array (kf+wiz,250), Array (kf+wiz,20));
		  //  app.activeDocument.selection.translate(0,0);
		 }
		 	app.activeDocument.selection.select (region);
			app.activeDocument.paste();
			
		//	app.activeDocument.selection.fill (foregroundColor);
			app.activeDocument.selection.deselect ();
			
			
	}

	//function convas(addwhidth, addheight,mm)
	function convas(addTop, addDown, addLeft, addRight, mm) {
	app.backgroundColor.rgb.red = 0;
	app.backgroundColor.rgb.green = 0;
	app.backgroundColor.rgb.blue = 0;

	//if (dlg.panel.Ugroup.Repro.value)

	//app.activeDocument.resizeCanvas (app.activeDocument.width+parseInt(addwhidth)*2*mm, app.activeDocument.height+parseInt(addheight)*2*mm);
	//alert(""+parseInt(addTop)*mm+"  "+parseInt(addDown)*mm+"  "+parseInt(addLeft)*mm+"  "+parseInt(addRight)*mm);

							DocumentWidth=app.activeDocument.width;
							DocumentHight=app.activeDocument.height;
							
	if (addTop == addDown & addTop == addRight & addTop == addLeft)
			app.activeDocument.resizeCanvas (DocumentWidth+parseInt(addTop)*2*mm, DocumentHight+parseInt(addTop)*2*mm);
		else{
	app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight+parseInt(addTop)*mm, AnchorPosition.BOTTOMCENTER);
							DocumentHight=app.activeDocument.height;
	app.activeDocument.resizeCanvas (DocumentWidth, DocumentHight+parseInt(addDown)*mm, AnchorPosition.TOPCENTER);
							DocumentHight=app.activeDocument.height;
	app.activeDocument.resizeCanvas (DocumentWidth+parseInt(addRight)*mm, DocumentHight, AnchorPosition.MIDDLELEFT);
							DocumentWidth=app.activeDocument.width;
	app.activeDocument.resizeCanvas (DocumentWidth+parseInt(addLeft)*mm, DocumentHight, AnchorPosition.MIDDLERIGHT);
		}
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


	var inFolder = Folder.selectDialog("Open folder","\\\\Server\\rip\\outputTiff\\архив"); // Задаем исходную папку
	var outFolder = inFolder; //Folder.selectDialog("Save images to"); // Задаем папку, куда сохранить измененные файлы


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
	panel: Panel {preferredSize: [520,300], alignChildren: 'left',\
	text: StaticText {text:'', preferredSize:[60,0]},\
	namb:  Group { orientation: 'row', \
				textw: StaticText {text:'', preferredSize:[76,20]},\
				text: StaticText {text:'Номер заказа №'},\
				texte: EditText { preferredSize: [120,20], alignment: 'left'},\
				}\
	Zak:  Group { orientation: 'row', \
				textw: StaticText {text:'', preferredSize:[112,20]},\
				text: StaticText {text:'Заказчик: '},\
				texte: EditText { preferredSize: [250,20], alignment: 'left'},\
				}\
	Polim:  Group { orientation: 'row', \
				textw: StaticText {text:'', preferredSize:[110,20]},\
				text: StaticText {text:'Полимер: '},\
				texte: EditText { preferredSize: [120,20], alignment: 'left'},\
				}\
	Type: Group { orientation: 'row', \
			   textw: StaticText {text:'', preferredSize:[95,20]},\
			  text: StaticText {text:'Тип печати:'},\
			   textw: StaticText {text:'', preferredSize:[10,20]},\
	rbt:  Group { orientation: 'row', alignChildren: 'left',\
										rbtn1:  RadioButton {  text: 'Прямая', assignmet: 'left'}, \
										rbtn2:  RadioButton {  text: 'Оборотная', assignmet: 'left'}, \
				}\
textw: StaticText {text:'', preferredSize:[40,5]},\
Short:  Checkbox {  text: 'Short label', value: false, enabled: true}, \
							}\
	text: StaticText {text:'', preferredSize:[60,0]},\
	dividerLine: Panel { preferredSize: [500,1], margins:0,},\
	check: Group { orientation: 'row', \
				textw: StaticText {text:'', preferredSize:[10,5]},\
			Auto:  Checkbox {  text: 'AutoCrop', value: false, enabled: true}, \
			   textw: StaticText {text:'', preferredSize:[15,1]},\
			Rotate:  Checkbox {  text: 'Rotate 90', value: false, enabled: true}, \
			   textw: StaticText {text:'', preferredSize:[15,1]},\
			Rotate27:  Checkbox {  text: 'Rotate -90', value: false, enabled: true}, \
			   textw: StaticText {text:'', preferredSize:[15,1]},\
			Invert1:  Checkbox {  text: 'Invert', value: false, enabled: true}, \
					  textw: StaticText {text:'', preferredSize:[15,1]},\
			Mirror:  Checkbox {  text: 'Flip', value: false, enabled: true}, \
												  }\
	panel2: Panel {text: 'AutoCrop:', preferredSize: [500,140], alignChildren: 'left',\
		CornCrop:  Group { orientation: 'row', alignChildren: 'center', \
				text1: StaticText {text:'', preferredSize:[170,1]},\
				text: StaticText {text:'Add a field:'},\
		check:  Checkbox {value: true, enabled: true}, \
				textw1: EditText { preferredSize: [20,20], enabled: true, alignment: 'left'},\
				textw2: EditText { preferredSize: [20,20], enabled: false, alignment: 'left'},\
				textw3: EditText { preferredSize: [20,20], enabled: false, alignment: 'left'},\
				textw4: EditText { preferredSize: [20,20], enabled: false, alignment: 'left'},\
		text1:  StaticText {text:'', preferredSize:[5,20]},\
	    btnAdd: Button { text: 'add', preferredSize:[50,30], properties:{name:'btnAdd'} }, \
				}\
		GR: Group { orientation: 'row', alignChildren: 'center', \
		combo: ListBox {preferredSize: [400,120], properties:{multiselect:false, selected: true, numberOfColumns: 5, showHeaders: true, columnTitles: ['File Name', 'Top', 'Bottom', 'Left', 'Right'], columnWidths: [275,30,30,30,30]}}, \
	GR0: Group { orientation: 'column', alignChildren: 'center', \
	text: StaticText {text:'', preferredSize:[20,0]},\
				   del: Button { text: 'Delete', preferredSize:[60,30], properties:{name:'del'} }, \
								}\
										}\
												}\
		  Ugroup: Group { orientation: 'row', alignChildren: 'center', \
			text: StaticText {text:'', preferredSize:[10,0]},\
			Crop:  Checkbox {  text: 'Crop', value: true, enabled: true}, \
			text: StaticText {text:'', preferredSize:[10,0]},\
			AddText:  Checkbox {  text: 'Add text', value: true, enabled: true}, \
			text: StaticText {text:'', preferredSize:[10,0]},\
			Ugol:  Checkbox {  text: 'Cut information text', value: false, enabled: true}, \
			text: StaticText {text:'', preferredSize:[10,0]},\
			Repro:  Checkbox {  text: 'Repropark only', value: false, enabled: true}, \
				}\
	dividerLine: Panel { preferredSize: [500,1], margins:0,},\
	Resolu: StaticText {text:'', preferredSize:[100,20]},\
	LeftCorn:  Group { orientation: 'column', alignChildren: 'center', \
	Top1:  Group { orientation: 'row', alignChildren: 'center', \
	text: StaticText {text:'', preferredSize:[50,0]},\
				textTop: StaticText {text:' Add Top:'},\
				texte: EditText { preferredSize: [40,20], alignment: 'left', enabled: true},\
				}\
	TopCorn:  Group { orientation: 'row', alignChildren: 'center', \
				textw: StaticText {text:'', preferredSize:[1,20]},\
	text: StaticText {text:'', preferredSize:[50,0]},\
				textLeft: StaticText {text:'                Add Left:'},\
				textel: EditText { preferredSize: [40,20], alignment: 'left', enabled: false},\
			eq:  Checkbox {value: true, enabled: true}, \
				texter: EditText { preferredSize: [40,20], alignment: 'left', enabled: false},\
				textRight: StaticText {text:':Add Right'},\
				}\
	Top2:  Group { orientation: 'row', alignChildren: 'center', \
				textDo: StaticText {text:'', preferredSize:[140,20]},\
	text: StaticText {text:'', preferredSize:[50,0]},\
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
	dlg.text = "Автоматический обработчик    v6.9";
	dlg.panel.text= "Параметры заказа:";
	//dlg.panel.namb.texte.text=fold;
	dlg.panel.namb.texte.text=mans[1];
	//dlg.panel.Zak.texte.text=slovo;
	dlg.panel.Zak.texte.text=mans[2];
	//dlg.panel.Type.texte.text=pec1;
	//dlg.panel.Polim.texte.text=sec ;
	dlg.panel.Polim.texte.text=mans[4] ;
	//dlg.panel.LeftCorn.texte.text='0' ;
	//dlg.panel.TopCorn.texte.text='0' ;
	if (mans[8]=='CUT') dlg.panel.Ugroup.Ugol.value=true; 
	if (mans[10]=='short') dlg.panel.Type.Short.value=true; 

	dlg.panel.LeftCorn.Top1.texte.text='0' ;
	dlg.panel.LeftCorn.TopCorn.textel.text='0' ;
	dlg.panel.LeftCorn.TopCorn.texter.text='0' ;
	dlg.panel.LeftCorn.Top2.texte.text='0' ;
	check1 = dlg.panel.LeftCorn.TopCorn.eq;
	check2 = dlg.panel.panel2.CornCrop.check;

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
			
	dlg.panel.panel2.CornCrop.textw1.text='5' ;
	dlg.panel.panel2.CornCrop.textw2.text='5' ;
	dlg.panel.panel2.CornCrop.textw3.text='5' ;
	dlg.panel.panel2.CornCrop.textw4.text='5' ;



	dlg.panel.panel2.CornCrop.check.onClick = function(){ if(check2.value) {
			dlg.panel.panel2.CornCrop.textw2.enabled=false;
			dlg.panel.panel2.CornCrop.textw3.enabled=false;
			dlg.panel.panel2.CornCrop.textw4.enabled=false;}
		else {
			dlg.panel.panel2.CornCrop.textw2.enabled=true;
			dlg.panel.panel2.CornCrop.textw3.enabled=true;
			dlg.panel.panel2.CornCrop.textw4.enabled=true;
			
			dlg.panel.panel2.CornCrop.textw2.text=dlg.panel.panel2.CornCrop.textw1.text;
			dlg.panel.panel2.CornCrop.textw3.text=dlg.panel.panel2.CornCrop.textw1.text;
			dlg.panel.panel2.CornCrop.textw4.text=dlg.panel.panel2.CornCrop.textw1.text;}
		}
		
		dlg.panel.panel2.CornCrop.textw1.onChange = function(){if(check2.value) {
			dlg.panel.panel2.CornCrop.textw2.text=dlg.panel.panel2.CornCrop.textw1.text;
			dlg.panel.panel2.CornCrop.textw3.text=dlg.panel.panel2.CornCrop.textw1.text;
			dlg.panel.panel2.CornCrop.textw4.text=dlg.panel.panel2.CornCrop.textw1.text;}
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
Rotate270 = dlg.panel.check.Rotate27;
	Invert = dlg.panel.check.Invert1;
	Mirror1 = dlg.panel.check.Mirror;
	//addwhidth = dlg.panel.LeftCorn.texte;
	//addheight = dlg.panel.TopCorn.texte;

	addTop = dlg.panel.LeftCorn.Top1.texte;
	addLeft = dlg.panel.LeftCorn.TopCorn.textel;
	addRight = dlg.panel.LeftCorn.TopCorn.texter;
	addDown = dlg.panel.LeftCorn.Top2.texte;

	dlg.panel.panel2.enabled=false;

	if (inFolder != null && outFolder != null) 
		{
			var ListOfFiles = inFolder.getFiles("*.tif"); // Получить все файлы из папки
			

	for(i=0; i<ListOfFiles.length; i++) {
	if (ListOfFiles[i] instanceof File && ListOfFiles[i].hidden == false) {
							    comboF[i] = ListOfFiles[i].name;
								
			with(dlg.panel.panel2.GR.combo.add("item", ListOfFiles[i].name))
					{
						subItems[0].text = "0";
						subItems[1].text = "0";
						subItems[2].text = "0";
						subItems[3].text = "0";
					}
				}
	}

	//dlg.panel.panel2.GR.combo.items[0].selected = true;
	dlg.panel.panel2.GR.GR0.del.onClick= function(){
	//fileFill = dlg.panel.panel2.GR.combo.selection.text;
	//for(i=0; i<dlg.panel.panel2.GR.combo.items.length; i++) {
	//if (dlg.panel.panel2.GR.combo.items[i].text==fileFill) dlg.panel.panel2.GR.combo.remove(i);
		
			    index = dlg.panel.panel2.GR.combo.selection.index;
				
	dlg.panel.panel2.GR.combo.remove(index);
			//}
            comboF.splice(index, 1);
			
			//alert(comboF.hasOwnProperty(index)+"  "+comboF[index] );
			//alert(comboF);
		}
		
	dlg.panel.panel2.CornCrop.btnAdd.onClick= function(){
		
		index=-1;
		
		if(dlg.panel.panel2.GR.combo.selection) index = dlg.panel.panel2.GR.combo.selection.index;
//alert(index);
		

			
		if(index != -1){
			

					//alert(dlg.panel.panel2.GR.combo.items[index].text+" = "+index+" = "+comboF[index].toString());
											dlg.panel.panel2.GR.combo.remove(index);
		//alert(comboF[index]);
		
				with(dlg.panel.panel2.GR.combo.add("item", comboF[index].toString(), index))
					{
						subItems[0].text = dlg.panel.panel2.CornCrop.textw1.text;
						subItems[1].text = dlg.panel.panel2.CornCrop.textw2.text;
						subItems[2].text = dlg.panel.panel2.CornCrop.textw3.text;
						subItems[3].text = dlg.panel.panel2.CornCrop.textw4.text;
					}

				} else {
					
						dlg.panel.panel2.GR.combo.removeAll();
						
		
				for(i=0; i<comboF.length; i++) {
			with(dlg.panel.panel2.GR.combo.add("item", comboF[i].toString()))
					{
						subItems[0].text = dlg.panel.panel2.CornCrop.textw1.text;
						subItems[1].text = dlg.panel.panel2.CornCrop.textw2.text;
						subItems[2].text = dlg.panel.panel2.CornCrop.textw3.text;
						subItems[3].text = dlg.panel.panel2.CornCrop.textw4.text;
					}
				 }
					
			}
		}
	}

	dlg.panel.check.Auto.onClick = function(){ if(check.value) dlg.panel.panel2.enabled=true;
		else {dlg.panel.panel2.enabled=false;
		dlg.panel.panel2.GR.combo.removeAll();
		for(i=0; i<ListOfFiles.length; i++) {
			comboF[i] = ListOfFiles[i].name;
			with(dlg.panel.panel2.GR.combo.add("item", ListOfFiles[i].name))
					{
						subItems[0].text = "0";
						subItems[1].text = "0";
						subItems[2].text = "0";
						subItems[3].text = "0";
					}
				}
			}
		}


	//Цикл обработки
	dlg.buttons.ok.onClick = function(){
		
		iz=0;

	dlg.panel.enabled = false;

	//for(i=0; i<dlg.panel.panel2.GR.combo.items.length; i++) fileF[i] = dlg.panel.panel2.GR.combo.items[i].text;

	if ((!dlg.panel.Type.rbt.rbtn1.value)&(!dlg.panel.Type.rbt.rbtn2.value)) stop();

			for (var i = 0; i < ListOfFiles.length; i++) // Задаем количество повторений равное количеству выбранных файлов
				{ flag = false;
					// Открываем только файлы текущей папки, игнорируем вложенные папки
					if (ListOfFiles[i] instanceof File && ListOfFiles[i].hidden == false) 
						{
						
						for(j=0; j<comboF.length; j++) if(comboF[j]==ListOfFiles[i].name) flag=true; 
						
						
							//if(!flag) continue;
							
						
							// Открываем следующий файл
							var docRef = open(ListOfFiles[i]);

	//alert(''+docRef.info.caption);

	dlg.focus=true;
	resol=app.activeDocument.resolution;
	Resolu="";
	dlg.panel.Resolu.text="Resolution: "+resol;

	//if((resol==2540&mans[7]=='5080')|(resol==5080&mans[7]=='')) alert('Не соответствие разрешений!');
	mm=resol/25.4;
	if (i==0)	if ((app.activeDocument.height > 880*mm)&&(app.activeDocument.height > app.activeDocument.width))	if ((Rotate90.value==false)&&(Rotate270.value==false)) Rotate90.value=true;
							if (Rotate90.value) docRef.rotateCanvas(90); 
							if (Rotate270.value) docRef.rotateCanvas(270);
							if (Mirror1.value) docRef.flipCanvas(Direction.HORIZONTAL);
							if (Invert.value) docRef.activeLayer.invert();
//alert(dlg.panel.panel2.GR.combo.items[iz].text);							
//alert(dlg.panel.panel2.GR.combo.items[iz].text+"  "+dlg.panel.panel2.GR.combo.items[iz].subItems[0].text+dlg.panel.panel2.GR.combo.items[iz].subItems[1].text+dlg.panel.panel2.GR.combo.items[iz].subItems[2].text+dlg.panel.panel2.GR.combo.items[iz].subItems[3].text)
						if (check.value&flag) {CropsSel();
//alert("iz = " +iz); 
							convas(dlg.panel.panel2.GR.combo.items[iz].subItems[0].text, dlg.panel.panel2.GR.combo.items[iz].subItems[1].text, dlg.panel.panel2.GR.combo.items[iz].subItems[2].text, dlg.panel.panel2.GR.combo.items[iz].subItems[3].text, mm); iz++;} 
//alert("3");							
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
	DocumentWidth=app.activeDocument.width
	DocumentHight=app.activeDocument.height
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

	//timeStamp(ListOfFiles.length,i,DocumentWidth,DocumentHight,mans,resol,Resolu,ttitls, mm);
NoW = 0;
	if (!dlg.panel.Ugroup.Repro.value){
		if (dlg.panel.Ugroup.Crop.value) NoU=Ugol(); else NoU=0;
		if (dlg.panel.Ugroup.Ugol.value) NoU=NoUgol(mm,DocumentWidth,DocumentHight); 
		if  (NoU==1) {NoU=0; NoW=3*mm;}
	if (dlg.panel.Ugroup.AddText.value) timeStamp(ListOfFiles.length,i+1,DocumentWidth,DocumentHight,mans,resol,Resolu,ttitls,mm);
		} else {Reprop(mm, dlg.panel.Polim.texte.text, mans); NoU=0; NoW=0;};

	//alert (""+dlg.panel.Ugroup.Repro.value);


	var tiffOptions = new TiffSaveOptions(); // Сохранить в  Tiff
	tiffOptions.imageCompression=TIFFEncoding.TIFFLZW;
	//app.backgroundColor.rgb.red = 255;
	//app.backgroundColor.rgb.green = 255;
	//app.backgroundColor.rgb.blue = 255;


	//alert (APName);

	var NewOutFolder = new Folder(outFolder + ZakazNum);
	 var k=i+1;
	 
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

		docRef.saveAs(new File(outFolder + "/"+ k +"_" + ZakazNum.text + "~" + Math.ceil((app.activeDocument.width.value-NoW)*100/mm) + "x" + Math.ceil((app.activeDocument.height.value-NoU)*100/mm)  + "~" + APName + "~"+'.tif'),tiffOptions);
		// Не вносить изменений в оригинальный файл при закрытии
		docRef.close(SaveOptions.DONOTSAVECHANGES);
		
						};
				};
	 dlg.hide();	

	};
	dlg.buttons.cancel.onClick = function()
	{
		stop();
		//win.close(0);
	}



	dlg.center(); 
	dlg.show();

