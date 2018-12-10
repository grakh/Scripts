(function () {
  'use strict';
  
/////  deleteUnusedSwatches

var keepRegistration = true;
var keepNoColor = true;
var brag = 1;
var skipSwatches = 0;
var swtsRem = 0;
deleteUnusedSwatches();
var DELTA200=200;
  
docRef = activeDocument;
sel=docRef.selection;

PWhite = new CMYKColor();
PWhite.name = 'PWhite';
PWhite.black =0; 
PWhite.cyan = 0; 
PWhite.magenta = 0; 
PWhite.yellow = 0;

PCyan = new CMYKColor();
PCyan.name = 'Process Cyan';
PCyan.black =0; 
PCyan.cyan = 100; 
PCyan.magenta = 0; 
PCyan.yellow = 0;

PMagenta = new CMYKColor();
PMagenta .name = 'Process Magenta';
PMagenta .black =0; 
PMagenta .cyan = 0; 
PMagenta .magenta = 100; 
PMagenta .yellow = 0;

PYellow = new CMYKColor();
PYellow.name = 'Process Yellow';
PYellow.black =0; 
PYellow.cyan = 0; 
PYellow.magenta = 0; 
PYellow.yellow = 100;

PBlack = new CMYKColor();
PBlack.name = 'Process Black';
PBlack.black =100; 
PBlack.cyan = 0; 
PBlack.magenta = 0; 
PBlack.yellow = 0;


if (sel.length < 1) {alert("No select oject"); return} 

/////  deleteUnusedSwatches
// название скрипта
var the_title = "ASTROLON";
// версия скрипта
var the_version = "0.2";

var SWATCHES = new Array();
//None= '[None]';
//Registr= '[Registration]';
//SWATCHES[0] = None;
//SWATCHES[1] = Registr;
	

//var iLength = docRef.inkList.length;
//for(var i=0; i<iLength ; i++) {
//SWATCHES[i+2] = docRef.inkList[i].name;
//}


k=0;	
	// цикл по свотчам документа
	for( var i = 0; i < docRef.swatches.length; i++) 
	{
		// заполняем массив свотчей
		SWATCHES[k] = docRef.swatches[i].name;
		// получаем индекс для свотча None 
		if( IS_NO_COLOR( i ) ) continue;
		k++;
	};// for i


 


//for(var i=0; i<iLength ; i++) {
//SWATCHES[i+2] = sI[i];
//}

  
// Make a dialog box and dropdown list, using the array.  
var dlg = new Window("dialog"); 
	dlg.text = the_title+" v."+the_version; // заголовок диалога

	// создание главной панели
var mp = dlg.add('panel');
	mp.text = "Properties:";
	//mp.bounds = [mp_left, mp_top, mp_right, mp_bottom];
var np = dlg.add('panel');
	np.text = "Bounds:";


var L_LR = MAKE_GROUP( mp, 'row', 'left' ); 
var lText = L_LR.add("statictext");
	lText.text="Line: ";
var Line = L_LR.add("edittext");
	Line.text="0.1";
	Line.bounds = [10,40,60,65];
var lText2 = L_LR.add("statictext");
	lText2.text="mm";

var F_S_G = MAKE_GROUP( mp, 'row', 'left' ); 
var t = F_S_G.add("statictext");	
	t.text="SWATCHES:";
var dropDown = F_S_G.add("dropdownlist", undefined, SWATCHES); 
/*
var myList = Array(['Design Float','designfloat'], ['Digg','digg'], ['Email','email'], ['Evernote','evernote'], ['Facebook','facebook'], ['Flickr','flickr'], ['Google','google'], ['Google Voice','google_voice'], ['Google Talk','googletalk'], ['Last.fm','lastfm'], ['MySpace','myspace'], ['Picasa','picasa'], ['Skype','skype'], ['Twitter','twitter'], ['Vimeo','vimeo'], ['Wordpress','wordpress'], ['YouTube','youtube']);
var myDropDown = win.add ('dropdownlist');
for(var i = 0; i < myList.length; i++){
    myDropDown.add('item',myList[i][0]);
    if(myList[i][1]){
        myDropDown.items[i].image = ScriptUI.newImage('/c/!myIcons/'+myList[i][1]+'.png');
    }
}

myDropDown.selection = 0;
myDropDown.itemSize = [350,20];

myDropDown.items[0].image = ScriptUI.newImage('/c/!myIcons/youtube.png');
var myListIndex = myDropDown.selection.index;
var myListText = myDropDown.selection.text;
var myListIcon = myDropDown.selection.image;

*/

dropDown.selection = SWATCHES[0];  

var H_LR = MAKE_GROUP( np, 'row', 'center' ); 
var hr = H_LR.add("statictext");
	hr.text="Height: ";
var editHeight = H_LR.add("edittext");
	editHeight.text="0";
	editHeight.bounds = [10,40,60,65];	

var E_LR = MAKE_GROUP( np, 'row', 'center' ); 

var editLeft = E_LR.add("edittext");
	editLeft.text="150";
	editLeft.bounds = [10,40,60,65];
	editLeft.onChange= function()
	{if (ch.value) editRight.text=editLeft.text};
var le = E_LR.add("statictext");
	le.text="Left";
var ch = E_LR.add("checkbox");
	ch.value = true;
	ch.onClick= function()
	{if (ch.value) editRight.text=editLeft.text};
var lr = E_LR.add("statictext");
	lr.text="Right";
var editRight = E_LR.add("edittext");
	editRight.text="150";
	editRight.bounds = [10,40,60,65];
	
var H_CK = MAKE_GROUP( np, 'row', 'left' ); 
var check = H_CK.add("checkbox");
	check.value=false;
var cht = H_CK.add("statictext");
	cht.text="Сдвинуть изображение к планке";
	
var myList = Array([' Без планки','NoPlank'], [' L-планка','LPlank'], [' C-планка','CPlank'], [' Г-планка','GPlank'], [' ГУ-планка','GUPlank']);

var myDropDown = np.add ('dropdownlist');
$LOCALE= app.locale;
//alert(app.locale);
$preset='Presets/'+$LOCALE+'/Scripts';
//alert($preset);
var SCRIPTS_FOLDER =  decodeURI(app.path + '/' +$preset);

//alert(GetScriptsFolder());

for(var i = 0; i < myList.length; i++){
    myDropDown.add('item',myList[i][0]);
    if(myList[i][1]){
        myDropDown.items[i].image = ScriptUI.newImage(SCRIPTS_FOLDER+'/myIcons/'+myList[i][1]+'.png');
    }
}

myDropDown.selection = 0;
myDropDown.itemSize = [190,40];

	
var okPanel = MAKE_GROUP( dlg, 'row', 'center' );
	// кнопка ОК
var okBtn = okPanel.add('button', undefined, 'OK');
	// кнопка Cancel
var cancelBtn = okPanel.add('button',undefined, 'Cancel');

okBtn.onClick = function ()
{
	
	selBounds(SWATCHES[dropDown.selection.index]);
	dlg.hide();
}

cancelBtn.onClick = function()
{
	win.close(0);
}
  
dlg.center(); 
dlg.show(); 

// END ------------------------------------------------------------------------------------------------

// ====functions start here====

function GetScriptsFolder() {
          var scriptsFolder = null;
          do{
          // On Mac this is a folder inside the app package
                    var appFolder = Folder.startup;
					
                    if (! appFolder.exists){break;}
                    scriptsFolder = Folder(appFolder + "/Scripts");
                    while (appFolder.exists && ! scriptsFolder.exists){
                              appFolder = appFolder.parent;
                              scriptsFolder = Folder(appFolder + "/Scripts");
                    }
                    if (! scriptsFolder.exists){
                              scriptsFolder = null;
                              break;
                    }
          }
          while (false);
          return scriptsFolder;
}

function selBounds(fills)
	{
	if (fills=='[Registration]') {alert ("Не пантон!");return};
	mm=72/25.4;
if (parseInt(editHeight.text)<100) {alert ("Ширину астролона введем?\nВ миллиметрах."); return;}
	newlayer = docRef.layers.add();
	newlayer.name = "AST";
	//alert(fills);
	

var nSpot = app.activeDocument.swatches.getByName(fills);
NameAST = "AST_"+fills;
var newSpot;

//var newSpot;
//var spotvalue = [];		
var p = fills.split(" ");
if (p[0]=="PANTONE") {	
		//newSpot = app.activeDocument.swatches.add();
		//newSpot = new SpotColor();
		//newSpot.spot = nSpot.spot;
		//newSpot = app.activeDocument.swatches.duplicate(nSpot);
		//newSpot.color = nSpot.color;
		newSpot = addProcSwatch(fills);
		//nSpot.colorType = ColorModel.PROCESS;
//		spotvalue = nSpot.color.spot.getInternalColor(); 
    //alert(spotvalue);
//	var newColor = new CMYKColor();  
		//newColor.cyan = spotvalue[0];  
		//newColor.magenta = spotvalue[1];  
		//newColor.yellow = spotvalue[2];  
		//newColor.black = spotvalue[3];
		//newSpot.color = newColor;
	}
else {
newSpot = app.activeDocument.spots.add();
newSpot.color = nSpot.color; 


}

newSpot.colorType = ColorModel.SPOT;
newSpot.name = NameAST;

fills = newSpot.name;
	
LobjX=sel[0].position[0];
LobjY=sel[0].position[1];
RobjX=sel[0].position[0]+sel[0].width;
RobjY=sel[0].position[1]-sel[0].height;

for (i=1; i<sel.length; i++){
if (LobjX>sel[i].position[0]) LobjX=sel[i].position[0];
if (LobjY<sel[i].position[1]) LobjY=sel[i].position[1];
if (RobjX<sel[i].position[0]+sel[i].width) RobjX=sel[i].position[0]+sel[i].width;
if (RobjY>sel[i].position[1]-sel[i].height) RobjY=sel[i].position[1]-sel[i].height;
}
if ((LobjY-RobjY) > editHeight.text*mm) alert ("Клеим за пределами астролона?");

LobjX -= editLeft.text*mm;
RobjX += editRight.text*mm;

if (check.value){
RobjY = RobjY-DELTA200*mm;
LobjY = RobjY+editHeight.text*mm;
} else {
LobjY = (LobjY+RobjY)/2-editHeight.text*mm/2;
RobjY = LobjY+editHeight.text*mm;
}


//var LI = newlayer.groupItems.add();
Oporka = newlayer.pathItems.add();

Oporka.setEntirePath( Array( Array(LobjX, LobjY), Array(RobjX, LobjY), Array(RobjX, RobjY), Array(LobjX, RobjY) ) );
Oporka.closed = true;
Oporka.filled = false;
Oporka.stroked = true;

Oporka.strokeOverprint = true;
Oporka.strokeWidth = Line.text*mm;
//alert (fills);
switch (fills){
	case  'Process Cyan': Oporka.strokeColor = PCyan; break;
	case  'Process Magenta': Oporka.strokeColor = PMagenta; break;
	case  'Process Yellow': Oporka.strokeColor = PYellow; break;
	case  'Process Black': Oporka.strokeColor = PBlack; break;
	default: Oporka.strokeColor =app.activeDocument.swatches[fills].color;
	}

	
Bes = newlayer.pathItems.add();

Bes.setEntirePath( Array( Array((LobjX+RobjX)/2, LobjY), Array((LobjX+RobjX)/2, RobjY) ) );
Bes.filled = false;
Bes.stroked = true;

Bes.strokeOverprint = true;
Bes.strokeWidth = Line.text*mm;
//alert (fills);
switch (fills){
	case  'Process Cyan': Bes.strokeColor = PCyan; break;
	case  'Process Magenta': Bes.strokeColor = PMagenta; break;
	case  'Process Yellow': Bes.strokeColor = PYellow; break;
	case  'Process Black': Bes.strokeColor = PBlack; break;
	default: Bes.strokeColor =app.activeDocument.swatches[fills].color;
	}
alert("Совмещаем линию центра!");	
}		
	
// подпрограмма создания группы в диалоге
function MAKE_GROUP( where, g_orient, g_a )
	{
		// создаем группу в заданном объекте
		var g = where.add('group');
		// ориентация группы
		if( g_orient !== false ) g.orientation = g_orient;
		// выравнивание в группе
		if( g_a !== false ) g.alignChildren = g_a;
		return g;
};// end MAKE_GROUP

function IS_NO_COLOR( i )
{
	// тип свотча
	var tn = "";
	try
	{
		tn = docRef.swatches[i].color.typename;
	} catch( error ) {};
	if( tn == "NoColor" ) return true
	else return false;
};// end IS_NO_COLOR


// ====functions start here====

function addProcSwatch(swatchToGet)  
{  
          var bridgeSwatch = app.activeDocument.swatches.getByName(swatchToGet);  
          
		  var newCMYKColor = new CMYKColor();
		  newCMYKColor.cyan = 100;
		  newCMYKColor.magenta = 0;
		  newCMYKColor.yellow = 100;
		  newCMYKColor.black = 0;
		  var spotvalue = [];
		  //var neSpot = app.activeDocument.spots.add();
		  //neSpot.name = "AST_"+swatchToGet;
		  //neSpot.color.spot = bridgeSwatch.color.spot.getInternalColor();
		  
		  //var newSwatch = new SpotColor();  
		  //newSwatch.spot = neSpot;
	var color = new LabColor();
	spotvalue = bridgeSwatch.color.spot.getInternalColor();
    color.l = spotvalue[0];
    color.a = spotvalue[1];
    color.b = spotvalue[2];

    var newSpot = app.activeDocument.spots.add();
    newSpot.name = "AST_"+swatchToGet;
    newSpot.colorType = ColorModel.SPOT;
    newSpot.spotKind = SpotColorKind.SPOTLAB;
    newSpot.color = color;

		  //newSwatch=bridgeSwatch.duplicate();
		  //newSwatch.color = bridgeSwatch.color;
          //var spotName = bridgeSwatch.color.spot.name;  
          //var spotValue = bridgeSwatch.color.spot.getInternalColor();  
          //newSwatch.color = new CMYKColor();  
          //newSwatch.name = "AST_"+swatchToGet;  
		  //alert(spotValue);
          //newSwatch.properties = {model:ColorModel.SPOT, colorValue:spotValue}; 
		  //newSwatch.colorType = ColorModel.SPOT;
		  
		  
	
          return newSpot;  
} 

function deleteUnusedSwatches(){
	killed = "";
	saved = "";
	var usedSwatches = findUsedSwatches();
	//alert("UsedSwatchesLength = "+usedSwatches.length);
	var x = lastIndex = app.activeDocument.swatches.length;
	total = x;
	var isSpotReg = 0;
	/*
	*/
	try
	{
		while(x > skipSwatches){
		var lastIndex = app.activeDocument.swatches.length - 1;
			var swatchToDelete = app.activeDocument.swatches[x-1];
			//initialize vars to 0
			save = ulen = noSwt = regSwt = 0;
			try
			{
				isSpotReg =	swatchToDelete.color.spot.colorType == ColorModel.REGISTRATION;
			}
			catch (e)
			{
				// do nothing, we don't care if it fails, only if it succeeds.
			}
			for (var u in usedSwatches)
			{
				ulen ++;
				if (compareColors(usedSwatches[u],swatchToDelete.color) )
				{
					saved+= swatchToDelete+"\n";
					save = 1;
					x--
				}
			}
			if (isSpotReg && keepRegistration)
			{   // For Registration swatch..
				saved+= swatchToDelete+"\n";
				save = 1;
				x--;
				//resetting variable to 0 because every subsequent "try" will fail
				isSpotReg = 0;
				regSwt=1;

			} else if (swatchToDelete.color.typename == "NoColor" && keepNoColor)
			
			{// for "NoColor" swatch
				saved+= swatchToDelete+"\n";
				save = 1;
				x--;
				noSwt=1;
				 
			} 
			if (save == 0)
			{
				killed += swatchToDelete+"\n";
				swatchToDelete.remove();
				x--; 
				
			}
		}
		// for tracking...
		swtsRem =total-(ulen+noSwt+regSwt);
	}
	catch (e)
	{
		alert( e+"\nThe specified swatch doesn't exist. x = " +x);
	} 
 //}
 }


function contains(array,item){
	for (var each in array)
	{
		if (item == array[each])
		{
		return(true);
		}
	}
	return false;
}
function findUsedSwatches(){
	allitems = activeDocument.pageItems.length;

	var found = [];
	while (allitems > 0)
		{
		
		if(activeDocument.pageItems[allitems-1].stroked == true){
			stk = activeDocument.pageItems[allitems-1].strokeColor;
			if (!inList(stk,found))
			{
				found.push(stk);
			}

		}
		if(activeDocument.pageItems[allitems-1].filled == true){
			fil = activeDocument.pageItems[allitems-1].fillColor;
			if (!inList(fil,found))
			{
				found.push(fil);
			}
		} else if(activeDocument.pageItems[allitems-1].typename == "TextFrame"){
			 
			fil = activeDocument.pageItems[allitems-1].textRange.fillColor;
			if (!inList(fil,found))
			{
				found.push(fil);
			}
		}
		//
			
			allitems--;
		}
		

	 return(found);
}
function inList(a,b){
	if (b.length == 0)
	{
		return false;
	}
	
	for (var all in b)
	{
		if(compareColors(a,b[all])){
			return true;
		}
	}
	return false;
}
function compareColors(a,b){

	if (a.pattern == b.pattern && a.pattern != undefined)
	{
		//Compare patterns
		return true;
	} 
	else if (a.gradient == b.gradient && a.gradient != undefined)
		{
			//Compare gradients
			return true;
		} 
	else 
	{
		//innocent until proven guilty..
		answer = true;
		//Compare contents...
		for (var each in a)
		{
			if (a[each] != b[each] && each!= "tint")
			{
				//if anything doesn't match:
				answer = false;
			}	
		}

		return answer; 
	
		 
	}
}

//////End Delete Unused color//////	


}());