

	#target photoshop
	
	var myPattern = "31e90d87-5caf-11e7-9525-b7b4665cd7aa";
//var myPattern = "";

function fill_with_pattern(patternID)
{
    var idFl = charIDToTypeID( "Fl  " );
    var desc1283 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idPtrn = charIDToTypeID( "Ptrn" );
    desc1283.putEnumerated( idUsng, idFlCn, idPtrn );
    var idPtrn = charIDToTypeID( "Ptrn" );
    var desc1284 = new ActionDescriptor();
    var idNm = charIDToTypeID( "Nm  " );
    desc1284.putString( idNm, """40x40""" ); // id name
    var idIdnt = charIDToTypeID( "Idnt" );
    desc1284.putString( idIdnt, patternID );
    var idPtrn = charIDToTypeID( "Ptrn" );
    desc1283.putObject( idPtrn, idPtrn, desc1284 );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc1283.putUnitDouble( idOpct, idPrc, 100.000000 ); //opacity
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc1283.putEnumerated( idMd, idBlnM, idNrml );
    executeAction( idFl, desc1283, DialogModes.NO );
}
	
	function pattern()
	{
		//newLayera = app.activeDocument.artLayers.add();
		//newLayera.kind = LayerKind.PATTERNFILL;
		//newLayera.fill = "Patt1";
		//applyTextureFill (textureFile: File)
		//var pattern = RenderAPI.getParameter(kpsPattern);
			//artLayers.kind = LayerKind.PATTERNFILL;
			//artLayers.fill = "Rastr1";
			//PatFile
			//alert (PatFile);
RRef = open(ListRFiles[index]);
	DRWidth=RRef.width;
	DRHight=RRef.height;
	RRef.selection.selectAll();
	RRef.selection.copy();
	RRef.close(SaveOptions.DONOTSAVECHANGES);
	
/*	//alert (DRWidth+'  '+DRHight);
var selR = app.activeDocument.selection;	
//var targetLayer = myNewDoc.artLayers.add();
var Dx=0; Dy=0;

	do{
var selB =Array(Array(Dx, Dy), Array(Dx, DRHight), Array(DRWidth, DRHight), Array(DRWidth, Dy)); 
	selR.select(selB);	

	app.activeDocument.paste();
	Dx+=DRWidth;
	//Dy+=DRHight;

	}while(Dx<app.activeDocument.width);
	
		 selR.deselect();
		 selR = null;
*/	
	}
	
	
	function readPatFile(){
		var patFile = new File(app.path +"\\presets\\scripts\\Rastr\\Micror.pat");

patFile.open('r');

var str = "";


	
	while(!patFile.eof) {
		str = patFile.readln();
			if (~str.indexOf("M i c r o ")) {
var tar = str.slice(str.indexOf("M i c r o "));
	alert (tar.substr(str.indexOf("$"))+1,36);
		//var pos = -1;
		//while ((pos = str.indexOf(target, pos + 1)) != -1) {


			}
		
		}
	

patFile.close();

//alert(str);
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



	function MicroRastr() {
		
	var dref1 = app.activeDocument;

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
	
	var fil= parseInt(dlg.panel.GF.field);
	
	if (fil!=0) selRef.contract(fil);
	
	readPatFile();
	
	//doAction('Rastr1', 'MicroRastr');

 //pattern();
 
 fill_with_pattern(myPattern);

//app.activeDocument.paste(true);
//try{  
//   activeDocument.mergeVisibleLayers();  
//    }catch(e){};  
 
 
	   selRef = null;
	   var bitmapOptions = new BitmapConversionOptions;
	bitmapOptions.resolution=resol;
	bitmapOptions.method=BitmapConversionType.DIFFUSIONDITHER;
	dref1.changeMode(ChangeMode.BITMAP, bitmapOptions);

		};
		
		
		

	//function convas(addwhidth, addheight,mm)
	function convas(addTop, addDown, addLeft, addRight, mm) {

	//if (dlg.panel.Ugroup.Repro.value)

	//app.activeDocument.resizeCanvas (app.activeDocument.width+parseInt(addwhidth)*2*mm, app.activeDocument.height+parseInt(addheight)*2*mm);
	//alert(""+parseInt(addTop)*mm+"  "+parseInt(addDown)*mm+"  "+parseInt(addLeft)*mm+"  "+parseInt(addRight)*mm);

							DocumentWidth=app.activeDocument.width;
							DocumentHight=app.activeDocument.height;
var Colour = new SolidColor();  
Colour.rgb.hexValue = '000000';  
app.backgroundColor=Colour;  
							
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

	//dref1.duplicate();
	//var dref2 = app.activeDocument;
	//dref2.changeMode(ChangeMode.GRAYSCALE);
	   //var strtRulerUnits = app.preferences.rulerUnits;
		//app.preferences.rulerUnits = Units.PIXELS;
		
	 
			var strtRulerUnits = app.preferences.rulerUnits;
			app.preferences.rulerUnits = Units.PIXELS;
			var selRef = dref1.selection;
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

	//dref2.close(SaveOptions.DONOTSAVECHANGES);
	 dref1.crop(Array(crops1, crops2, crops3, crops4));
	   
	   selRef = null;
	//pattern();	
		};


		
		
//==================================================================================================================================		


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
    var RFolder = new Folder(app.path +"\\presets\\scripts\\Rastr");





	k=0;

   
	var fileF = new Array();
	var comboF = new Array();
	var PatFile;
	var index;



	var res =  
	"dialog { orientation: 'column', alignChildren: 'center', \
	panel: Panel {preferredSize: [320,300], alignChildren: 'left',\
	text: StaticText {text:'', preferredSize:[60,0]},\
	dividerLine: Panel { preferredSize: [310,1], margins:0,},\
	check: Group { orientation: 'row', \
				textw: StaticText {text:'', preferredSize:[0,5]},\
			Auto:  Checkbox {  text: 'AutoCrop', value: false, enabled: true}, \
			   textw: StaticText {text:'', preferredSize:[10,1]},\
					Rotate27:  Checkbox {  text: ' -90 Rotate 90', assignmet: 'left'}, \
					Rotate:  Checkbox {assignmet: 'left'}, \
			   textw: StaticText {text:'', preferredSize:[10,1]},\
			Invert1:  Checkbox {  text: 'Crop', value: false, enabled: true}, \
												  }\
	panel2: Panel {text: 'AutoCrop:', preferredSize: [300,140], alignChildren: 'left',\
		GR: Group { orientation: 'row', alignChildren: 'center', \
		combo: ListBox {preferredSize: [280,120], properties:{multiselect:false, selected: true, numberOfColumns: 1, showHeaders: true, columnTitles: ['Microrastr'], columnWidths: [275]}}, \
										}\
												}\
	dividerLine: Panel { preferredSize: [310,1], margins:0,},\
	GF: Group { orientation: 'row', alignChildren: 'center', \
		text: StaticText {text:'', preferredSize:[50,1]},\
			Mirror:  Checkbox {  text: 'MicroRastr', value: true, enabled: true}, \
		text: StaticText {text:'', preferredSize:[10,0]},\
		text: StaticText {text:'Field:'},\
			field: EditText { preferredSize: [30,20], text:'1', alignment: 'left', enabled: true},\
		text: StaticText {text:'px'},\
		  }\
	dividerLine: Panel { preferredSize: [310,1], margins:0,},\
	LeftCorn:  Group { orientation: 'column', alignChildren: 'left', \
	Top1:  Group { orientation: 'row', alignChildren: 'left', \
	text: StaticText {text:'', preferredSize:[63,0]},\
				textTop: StaticText {text:'Add Top:'},\
				texte: EditText { preferredSize: [30,20], text: '0', alignment: 'left', enabled: true},\
				}\
	TopCorn:  Group { orientation: 'row', alignChildren: 'left', \
				textw: StaticText {text:'', preferredSize:[0,20]},\
	text: StaticText {text:'', preferredSize:[15,0]},\
				textLeft: StaticText {text:'  Add Left:'},\
				textel: EditText { preferredSize: [30,20], text: '0', alignment: 'left', enabled: false},\
			eq:  Checkbox {value: true, enabled: true}, \
				texter: EditText { preferredSize: [30,20], text: '0', alignment: 'left', enabled: false},\
				textRight: StaticText {text:':Add Right'},\
				}\
	Top2:  Group { orientation: 'row', alignChildren: 'left', \
				textDo: StaticText {text:'', preferredSize:[114,20]},\
	text: StaticText {text:'', preferredSize:[0,0]},\
				texte: EditText { preferredSize: [30,20], text: '0', alignment: 'left', enabled: false},\
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
	dlg.text = "Microrastr    v1.01";
	dlg.panel.text= "Settings:";
	//dlg.panel.namb.texte.text=fold;

	check1 = dlg.panel.LeftCorn.TopCorn.eq;
	//check2 = dlg.panel.panel2.CornCrop.check;

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
			
	check = dlg.panel.check.Auto;
	Rotate90 = dlg.panel.check.Rotate;
	Rotate270 = dlg.panel.check.Rotate27;
	Cropp = dlg.panel.check.Invert1;
	Micro = dlg.panel.GF.Mirror;
	
	Rotate90.onClick = function(){if(Rotate90.value) {dlg.panel.check.Rotate27.value=false}}
	Rotate270.onClick = function(){if(Rotate270.value) {dlg.panel.check.Rotate.value=false}}
	//addwhidth = dlg.panel.LeftCorn.texte;
	//addheight = dlg.panel.TopCorn.texte;

	addTop = dlg.panel.LeftCorn.Top1.texte;
	addLeft = dlg.panel.LeftCorn.TopCorn.textel;
	addRight = dlg.panel.LeftCorn.TopCorn.texter;
	addDown = dlg.panel.LeftCorn.Top2.texte;

	dlg.panel.panel2.enabled=true;
	
	
		if (RFolder != null) 
		{
			var ListRFiles = RFolder.getFiles("*.tif"); // Получить все файлы из папки
			
//alert(ListRFiles.length);
	for(i=0; i<ListRFiles.length; i++) {
	if (ListRFiles[i] instanceof File && ListRFiles[i].hidden == false) {
								
			dlg.panel.panel2.GR.combo.add("item", ListRFiles[i].name);
					
				}
		}

		
	}
	
	
	
var item1 = new Array();
	if (inFolder != null && outFolder != null) 
		{
			var ListOfFiles = inFolder.getFiles("*.tif"); // Получить все файлы из папки
			

	for(i=0; i<ListOfFiles.length; i++) {
	if (ListOfFiles[i] instanceof File && ListOfFiles[i].hidden == false) {
								
			//item1[i] = dlg.panel.panel2.GR.combo.add("item", ListOfFiles[i].name);
					
				}
		}

		
	}
	
		dlg.panel.panel2.GR.combo.selection=0;
	//dlg.panel.panel2.GR.combo.removeAll();
/*			//var pattern = RenderAPI.getParameter(kpsPattern);
	try{
    var ref = new ActionReference();
     ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
	var patternDesc = executeActionGet(ref).getList(charIDToTypeID('Adjs')).getObjectValue(0).getObjectValue(charIDToTypeID( "Ptrn"));
		//var patternName = patternDesc.getString(charIDToTypeID('Nm  '));
		//var patternID = patternDesc.getString(charIDToTypeID('Idnt'));
				dlg.panel.panel2.GR.combo.add("item", pattern);
				//dlg.panel.panel2.GR.combo.add("item", patternID);
	}catch(err){}
*/	



	//Цикл обработки
	dlg.buttons.ok.onClick = function(){
		
		iz=0;
		
	index = dlg.panel.panel2.GR.combo.selection.index;
				
	PatFile=app.path+"\\"+dlg.panel.panel2.GR.combo.selection.text;
//alert(PatFile);

	dlg.panel.enabled = false;


			for (var i = 0; i < ListOfFiles.length; i++) // Задаем количество повторений равное количеству выбранных файлов
				{ 					// Открываем только файлы текущей папки, игнорируем вложенные папки
					if (ListOfFiles[i] instanceof File && ListOfFiles[i].hidden == false) 
						{

							// Открываем следующий файл
							var docRef = open(ListOfFiles[i]);

	//alert(''+docRef.info.caption);

	resol=app.activeDocument.resolution;


//app.activeDocument.changeMode(ChangeMode.GRAYSCALE);

	mm=resol/25.4;
							if (Rotate90.value) docRef.rotateCanvas(90); 
							if (Rotate270.value) docRef.rotateCanvas(270);

						if (check.value) {CropsSel();
						
							if (addTop.text !='0' |  addLeft.text!='0' |  addRight.text!='0' |  addDown.text!='0') {
							convas(addTop.text, addDown.text, addLeft.text, addRight.text, mm);}
						}
							if (Cropp.value) Ugol();
							if (Micro.value) MicroRastr();

				

							
	// получаем габариты документа
	DocumentWidth=app.activeDocument.width
	DocumentHight=app.activeDocument.height
	//alert(''+mm);

	var APN  = app.activeDocument.name;


	ttitls=docRef.info.title;
	//titles(APN);
	docRef.info.title=ttitls;
	docRef.info.caption=ttitls;



	var tiffOptions = new TiffSaveOptions(); // Сохранить в  Tiff
	tiffOptions.imageCompression=TIFFEncoding.TIFFLZW;



	//alert (APName);

	var NewOutFolder = new Folder(outFolder);
	 var k=i+1;
	 

	
	//docRef.activeLayer.invert();
	
//var bitmapOptions1 = new BitmapConversionOptions;
//	bitmapOptions1.resolution=resol;
	//bitmapOptions1.method=BitmapConversionType.DIFFUSIONDITHER;
	//app.activeDocument.changeMode(ChangeMode.BITMAP, bitmapOptions1);


		docRef.saveAs(new File(outFolder + "/"+ k + "~" + Math.ceil(app.activeDocument.width.value*100/mm) + "x" + Math.ceil((app.activeDocument.height.value)*100/mm)  + "~" + APN + "~"+'.tif'),tiffOptions);
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

