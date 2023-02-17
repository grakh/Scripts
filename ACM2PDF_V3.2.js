

(function () {
  'use strict';
  'utf-8';

        
        // WINDOW PARAMS
        dialog = new Window ('dialog', "acm2pdf v.32");
        dialog.orientation = "row";
        dialog.alignChildren =  "left";
        
        // ++++++++++++++++ LEFT GROUP
        var leftGroup = dialog.add('group');
        leftGroup.orientation = "column";
        leftGroup.alignChildren = "left";
        leftGroup.alignment = "top";
        
        // ++++ SETTINGS FILE PANEL
        var settingsPanel = leftGroup.add ('panel', undefined, "Settings:", { borderStyle: "sunken" });
        settingsPanel.orientation = "row";
        settingsPanel.alignChildren = ["fill", "left"];
        var settingsPanelMeasure = settingsPanel.add ("statictext", undefined, '');
        settingsPanelMeasure.size = [110, 20];
        

    
    //SETTINGS LOAD
        var settingsLoadGroup = settingsPanel.add ('group');
        settingsLoadGroup.orientation = "row";
        settingsLoadGroup.alignChildren = "left";
        
        var settingsLoadButton = settingsLoadGroup.add ('button', undefined, 'Load File', { name: "Dir" });
        settingsLoadButton.size = [100,25];
        settingsLoadButton.onClick = function ()
        {     
                
                settingsLoadFile = File.openDialog( 'Select file to load file.', '*.acm' );
                 
                settingsLoadFile.open ("r");   
               
                var settingLoad = settingsLoadFile.read();  
                var mySettings = settingLoad.split ('\n');
                
				
                acmLoad(mySettings);
                
                settingsLoadFile.close(); 
                dialog.close (false);
                //alert ("Settings loaded.", "Load");
				
                
        }      
    
    
        


        // CANCEL BUTTON
        dialog.cancelBtn = settingsLoadGroup.add ('button', undefined, 'Close', { name: "CANCEL" });
        dialog.cancelBtn.onClick = function () { dialog.close (false); };
	
    	 
        dialog.show();
		


}());

function acmLoad(loadFile) {
	
var PRisk= new CMYKColor();
    PRisk.name = 'labelColor';
    PRisk.black =100; 
    PRisk.cyan = 0; 
    PRisk.magenta = 0; 
    PRisk.yellow = 0;

docName = settingsLoadFile.name.slice(0,-4);	
	//alert (loadFile);
	var docPreset        = new DocumentPreset;
		docPreset.colorMode = DocumentColorSpace.CMYK;
		docPreset.title  = docName + "_Plotter";
		docPreset.units = RulerUnits.Millimeters;

	var presetArt = app.startupPresetsList[0];

	var docRef = app.documents.addDocument(presetArt, docPreset);
//newLayer = docRef.layers.add();
//newLayer.zOrder(ZOrderMethod.SENDTOBACK);
	docRef.rulerOrigin = Array (0,0);
    app.preferences.setIntegerPreference("strokeUnits", 3);

	
	i=9;
	mm = 72.0/25.4;
	
var	crestLag = 0;

var units = 3; // 2-inches, 3-milllimeters, 0-points


	while (loadFile[i]!="M0"){
		if (loadFile[i]== "P6") {crestLag = i+3;};
		if (~loadFile[i].indexOf("P")) {
		
		P_Test = docRef.layers.add();
		P_Test.zOrder(ZOrderMethod.BRINGTOFRONT);
		P_Test.name=loadFile[i];
		i++;
			X1 = loadFile[i].substring(loadFile[i].indexOf("X")+1, loadFile[i].indexOf("Y"))/100;
			Y1 = loadFile[i].substring(loadFile[i].indexOf("Y")+1, loadFile[i].indexOf("D"))/100;
			D1 = loadFile[i].substring(loadFile[i].indexOf("D")+1);	

		}
		else {

			i++;
			if (loadFile[i]=="M0") break;
			if (~loadFile[i].indexOf("P")) continue; 
						
				X2 = loadFile[i].substring(loadFile[i].indexOf("X")+1, loadFile[i].indexOf("Y"))/100;
				Y2 = loadFile[i].substring(loadFile[i].indexOf("Y")+1, loadFile[i].indexOf("D"))/100;
				D2 = loadFile[i].substring(loadFile[i].indexOf("D")+1);
		if (loadFile[i]== "P7") {crestLag = -1;};
		if (i == crestLag) {D2 = 1; crestLag +=4;};
//		alert(i+' '+ "X2="+X2+" Y2="+Y2+" D2="+D2);
		if (D2=="2") {X1=X2; Y1=Y2; continue;}
				LabelSw1 = P_Test.pathItems.add();
				LabelSw1.setEntirePath( Array( Array(X1*mm, Y1*mm), Array(X2*mm, Y2*mm)) );
				LabelSw1.stroked = true;
				LabelSw1.strokeColor = PRisk;
				LabelSw1.strokeWidth = 0.1*mm;
				LabelSw1.filled = false;
				
		X1=X2; Y1=Y2;
		
		}
	}



    
//delete unused layers 

	app.activeDocument.layers.getByName('P1').remove();
	app.activeDocument.layers.getByName('P3').remove();
	app.activeDocument.layers.getByName('P7').remove();
	app.activeDocument.layers.getByName('Layer 1').remove();


//select all objects and fit artboard and merge

	app.activeDocument.layers["P9"].hasSelectedArtwork = true;
	app.activeDocument.fitArtboardToSelectedArt(0);
	app.activeDocument.selection = null;
	app.redraw();
	
// move text

	app.activeDocument.layers["P5"].hasSelectedArtwork = true;
	var aiApp5 = app.activeDocument;
	var aSelection5 = aiApp5.selection;
	//var aGroup5 = app.activeDocument.groupItems.add();

	for (i=0; i < aSelection5.length; i++){
	aSelection5[i].top -=4*mm;
 }


	app.activeDocument.selection = null;

// scale and move text

	app.activeDocument.layers["P8"].hasSelectedArtwork = true;
	var aiApp = app.activeDocument;
	var aSelection = aiApp.selection;
	var aGroup = app.activeDocument.groupItems.add();

	for (i=0; i < aSelection.length; i++){
	aSelection[i].move( aGroup, ElementPlacement.INSIDE); 
	aSelection[i].move( aGroup, ElementPlacement.PLACEATEND);  
 }
  //aGroup.top -= 2*mm;
 

//moves left and up points and scales by 150
	
	aGroup.resize(150, 150, undefined, undefined, undefined, undefined, 100,Transformation.TOPLEFT);
	aGroup.translate(70,170);
	
	aGroup.remove();

	app.activeDocument.selection = null;
	
	

	
var fonts="OLFSimpleSansCJK-Regular";
	
//new layer

    var newLayer = docRef.layers.add();
    var p9Layer = docRef.layers["P9"];
    newLayer.name="Knife";
    newLayer.zOrder(ZOrderMethod.SENDTOBACK);

	var correct = 0.05*mm;
    var activeAB = docRef.artboards[docRef.artboards.getActiveArtboardIndex()];
        // Get the Width of the Artboard
        var height = -(activeAB.artboardRect[3]+correct - activeAB.artboardRect[1]+correct);
        // Get the Height of the Artboard
        var width = activeAB.artboardRect[2]-correct - activeAB.artboardRect[0]-correct;

	
		
        activeDocument.rulerOrigin[0] = 0;
        activeDocument.rulerOrigin[1] = activeDocument.height;
        wi = activeAB.artboardRect[0] +correct;
        hi = activeAB.artboardRect[3] +correct; 
		
	app.preferences.setIntegerPreference("rulerType", units);
    app.preferences.setIntegerPreference("strokeUnits", units);

    Oporka = newLayer.pathItems.rectangle( wi, hi, width, -height);
    Oporka.closed = true;
    Oporka.filled = false;
    Oporka.stroked = true;
    Oporka.strokeColor = PRisk;
    Oporka.fillOverprint = false;
    Oporka.strokeWidth = 0.3*mm;

    riskCenter = p9Layer.pathItems.add();
    riskCenter.setEntirePath( Array( Array(wi + 10.05*mm, hi + 80.05*mm), Array(wi + width-10.05*mm, hi + 80.05*mm)) );
    riskCenter.stroked = true;
    riskCenter.strokeColor = PRisk;
    riskCenter.strokeWidth = 0.1*mm;
    riskCenter.filled = false;
	
//alert (settingsLoadFile.path);

//infoFile = File(settingsLoadFile.path.slice(0, settingsLoadFile.path.lastIndexOf('/')) + "/tmp/planki.txt");
infoFile = File(settingsLoadFile.path + "/tmp/planki.txt");
//infoFile.encoding = "system";
//infoFile.isEncodingAvailable ('UTF-16');
//infoFile.encoding = 'CP1251';
openFlag = infoFile.open("r","text");
//alert('Open flag = '+openFlag);
if (openFlag) { 
    //alert('Open. Length = '+infoFile.length+ '\n name '+ infoFile.fsName);
 
     infoLine = infoFile.readln().toUpperCase();

   } else     alert('No Open planki.txt');

infoFile.close(); 

var PL = new Array;

PL = infoLine.split(";");

var cont = prompt("Название заказа:", docName);

//docRef.name = docName;
	
var Llog = p9Layer.textFrames.add();
    Llog.position = [wi + 10*mm, hi + 68*mm];
    Llog.contents = PL[0] + "\t\t" + cont.toUpperCase();
    Llog.textRange.characterAttributes.size = 42;
	//Llog.textRange.characterAttributes.tracking = 30;
    //Llog.textRange.characterAttributes.alignment = StyleRunAlignmentType.center;
    Llog.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
    Llog.textRange.characterAttributes.filled = false;
	Llog.textRange.characterAttributes.strokeColor = PRisk;
	
var Spec = p9Layer.textFrames.add();
    Spec.position = [wi + 10*mm, hi + 50*mm];
    Spec.contents = PL[1];
    Spec.textRange.characterAttributes.size = 42;
	//Llog.textRange.characterAttributes.tracking = 30;
    //Llog.textRange.characterAttributes.alignment = StyleRunAlignmentType.center;
    Spec.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
    Spec.textRange.characterAttributes.filled = false;
	Spec.textRange.characterAttributes.strokeColor = PRisk;
	
var Llog2 = p9Layer.textFrames.add();
    Llog2.contents = PL[2] + "\t\t" + cont.toUpperCase();
	Llog2.rotate(180);
    Llog2.textRange.characterAttributes.size = 42;
	//Llog2.textRange.characterAttributes.tracking = 30;
    //Llog2.textRange.characterAttributes.alignment = StyleRunAlignmentType.center;
    Llog2.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
    Llog2.textRange.characterAttributes.filled = false;
	Llog2.textRange.characterAttributes.strokeColor = PRisk;
	Llog2.position = [width - Llog2.width - 10*mm, height - 68*mm];
	
var Spec2 = p9Layer.textFrames.add();
    Spec2.contents = PL[3];
	Spec2.rotate(180);
    Spec2.textRange.characterAttributes.size = 42;
	//Llog.textRange.characterAttributes.tracking = 30;
    //Llog.textRange.characterAttributes.alignment = StyleRunAlignmentType.center;
    Spec2.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
    Spec2.textRange.characterAttributes.filled = false;
	Spec2.textRange.characterAttributes.strokeColor = PRisk;
	Spec2.position = [width - Spec2.width - 10*mm, height - 50*mm];	
	
Llog.createOutline();
Spec.createOutline();
Llog2.createOutline();
Spec2.createOutline();

var KL = p9Layer.groupItems.add();
var K  = KL.pathItems.add();
    K.setEntirePath( Array( Array(wi + 11*mm, hi + 82*mm), Array(wi + 11*mm, hi + 89*mm)) );
    K.stroked = true;
    K.strokeColor = PRisk;
    K.strokeWidth = 0.3*mm;
    K.filled = false;
    K  = KL.pathItems.add();
    K.setEntirePath( Array( Array(wi + 14.5*mm, hi + 89*mm), Array(wi + 11*mm, hi + 85*mm)) );
    K.stroked = true;
    K.strokeColor = PRisk;
    K.strokeWidth = 0.3*mm;
    K.filled = false;
    K  = KL.pathItems.add();
    K.setEntirePath( Array( Array(wi + 11.9*mm, hi + 86.1*mm), Array(wi + 14.5*mm, hi + 82*mm)) );
    K.stroked = true;
    K.strokeColor = PRisk;
    K.strokeWidth = 0.3*mm;
    K.filled = false;

    var L  = KL.pathItems.add();
    L.setEntirePath( Array( Array(wi + 16*mm, hi + 82*mm), Array(wi + 18*mm, hi + 89*mm), Array(wi + 20*mm, hi + 82*mm)) );
    L.stroked = true;
    L.strokeColor = PRisk;
    L.strokeWidth = 0.3*mm;
    L.filled = false;

    var KL2 = KL.duplicate();
    KL2.left = wi + width-11.05*mm - KL.width;

    docRef.layers["Knife"].locked = true;

// Record all original content layers
for(var i=0; i<docRef.layers.length; i++) {
	if ( docRef.layers[i].name !== "Knife" &&  docRef.layers[i].name !== "P9" ) {
		group( p9Layer, docRef.layers[i].pageItems, true );
	}
}

	app.activeDocument.layers.getByName('P2').remove();
	app.activeDocument.layers.getByName('P5').remove();
	app.activeDocument.layers.getByName('P8').remove();

for(var i=0; i<docRef.layers.length; i++) {
	if ( docRef.layers[i].name !== "Knife" &&  docRef.layers[i].name !== "P9" ) {
		docRef.layers[i].remove();
	}
}

    app.preferences.setIntegerPreference("rulerType", units);
    app.preferences.setIntegerPreference("strokeUnits", units);
	docRef.rulerUnits = RulerUnits.Millimeters;
	app.redraw();	
	
	
}

function group( gg, items, isDuplicate ) {
	for(var i=items.length-1; i>=0; i--) {

		if (items[i]!=gg) { 
			if (isDuplicate) {
				newItem = items[i].duplicate (gg, ElementPlacement.PLACEATBEGINNING);
			} else {
				items[i].move( gg, ElementPlacement.PLACEATBEGINNING );
			}
		}
	}
}
