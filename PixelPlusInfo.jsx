//©Klimov S.V. (don@list.ru)

//docRefOriginal = app.activeDocument;

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

var docRef = app.activeDocument;
var path = app.activeDocument.path;
sel=docRef.selection;
try{
if (sel.length < 1) throw "No select oject";
}catch(e){

alert("No select oject");
throw "No select oject";
       }

for (i=0; i<app.activeDocument.swatches.length; i++) {
    if (app.activeDocument.swatches[i].name == '[Ñîâìåùåíèå]' | app.activeDocument.swatches[i].name == '[Registration]') Registr = app.activeDocument.swatches[i].name;
};

newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
mm = 72/25.4;
newLayer.name="PixelPlusInfo";

wi= docRef.width;
hi = docRef.height;


docRef.rulerOrigin = Array (0,0);

var sInks = new Array;
var sI = new Array;
var iLength = activeDocument.inkList.length;
for(var i=0; i<iLength ; i++) {
sI[i] = activeDocument.inkList[i].name;
}

Namb=''; 
Client ='';
Na='';
metka=false;

Path = decodeURI(docRef.path.toString());
Path = Path.replace ('[\]' , '/');
Path = Path.substring(Path.lastIndexOf('/'), Path.lenght);
Path = Path.slice(Path.lastIndexOf('/')+1);

//alert(Path);

for (i=0; i< Path.length; i++){
  if( Path[i]=='/' | Path[i]=='\\') {i++; Na=''; metka=false;}  
  if(metka)Client+= Path[i];
    if( Path[i]=='_'){Namb =Na; Na=''; metka=true};
    Na+= Path[i];
        }

//inFile.encoding = "system";
 //  inFile.isEncodingAvailable ('UTF-16');
 /* inFile.encoding = 'CP1251';
openFlag = inFile.open("r","text");
//alert('Open flag = '+openFlag);
if ( openFlag) { 
    //alert('Open. Length = '+inFile.length+ '\n name '+ inFile.fsName);
 for (i=0; i<inFile.length; i++){
     sFile[i] = inFile.readln();
     }
   } else     alert('No Open');

inFile.close(); */


var Da= new Date ();
//Dat=Da.toLocaleString();
var Dat= String (''+Da.getDate() +'/'+ (Da.getMonth()+1)+'/'+  Da.getFullYear()+' '+Da.getHours() + ":" + Da.getMinutes() );
var res =  
"dialog { orientation: 'column', alignChildren: 'center', \
info: Group { orientation: 'row', alignChildren: 'top',\
panel1: Panel {text: 'Order:', preferredSize: [230,250], alignChildren: 'right',\
list00: Group { orientation: 'row', \
		text: StaticText {text:'Namber '}, \
		listbox: EditText {text:'-', preferredSize: [220,20]}, \
		 } \
list01: Group { orientation: 'row', \
		text: StaticText {text:'Client: '}, \
		listbox: EditText {text:'-', preferredSize: [220,20]}, \
		 } \
list03: Group { orientation: 'row', \
		text: StaticText {text:'Technology '}, \
		listbox: EditText {text: 'HD 81 Pixel Plus Pryam', preferredSize: [220,20]}, \
		 } \
list04: Group { orientation: 'row', \
		text: StaticText {text:'Material: '}, \
		listbox: EditText {text:'1,14 ACE', preferredSize: [220,20]}, \
		 } \
list05: Group { orientation: 'row', \
		text: StaticText {text:'Print: '}, \
		listbox: EditText {text:'Ïðÿìàÿ', preferredSize: [220,20]}, \
		 } \
list10: Group { orientation: 'row', \
		text: StaticText {text:'Number of colors: '}, \
		listbox: EditText {text:'0', preferredSize: [60,20]}, \
		 } \
         											  }\
                                                      }\
panel2: Panel {text: 'Color:', preferredSize: [370,180], alignChildren: 'left',\
	GR: Group { orientation: 'row', alignChildren: 'center', \
			combo: ListBox {preferredSize: [300,170], properties:{multiselect:false, selected: true}}, \
			   del: Button { text: 'Delete', properties:{name:'del'} }, \
         											  }\
												}\
text: StaticText {text:'', preferredSize:[60,0]},\
buttons: Group { orientation: 'row', alignChildren: 'center', \
                ok: Button { text: 'OK', properties:{name:'ok'} }, \
                cencel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";

var dI = new Array;
var dlg = new Window(res);

for(i=0; i<sI.length; i++) {
dlg.panel2.GR.combo.add("item", sI[i]);
}
dlg.panel2.GR.combo.items[0].selected = true;

dlg.info.panel1.list10.listbox.text=dlg.panel2.GR.combo.items.length;
//dlg.panel2.GR.combo.add("item", Null);

dlg.panel2.GR.del.onClick= function(){

colorFill = dlg.panel2.GR.combo.selection.text;
//Arrya.remove(sI, colorFill);
//alert(''+sI);

for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
if (dlg.panel2.GR.combo.items[i].text==colorFill) {dlg.panel2.GR.combo.remove(i); dlg.info.panel1.list10.listbox.text=dlg.panel2.GR.combo.items.length; }
}

}



dlg.info.panel1.list00.listbox.text=Namb;
dlg.info.panel1.list01.listbox.text=Client;
//dlg.info.panel1.list03.listbox.text=Dat;
//path1 = decodeURI(inFile.fsName);
dlg.text = "PixelPlusInfo";


//Öèêë îáðàáîòêè
dlg.buttons.ok.onClick= function(){

Corn5(newLayer, sel);
Print5();
                         




docRef.rulerOrigin = Array (0,0);

TextC = dlg.info.panel1.list04.listbox.text+"_"+dlg.info.panel1.list01.listbox.text+"_"+dlg.info.panel1.list05.listbox.text+"_"+dlg.info.panel1.list00.listbox.text+"_"+dlg.info.panel1.list03.listbox.text+"_"+dlg.info.panel1.list10.listbox.text+"-";
//alert(TextC);
var textRef = newLayer.textFrames.add();
textRef.contents = TextC;
textRef.top=docRef.height+1.3*mm;
textRef.left = 5*mm;
textRef.textRange.characterAttributes.size = 8;
textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;


for (i=0; i<dlg.panel2.GR.combo.items.length;i++){


Text01 = dlg.panel2.GR.combo.items[i].text;

var textRef1 = newLayer.textFrames.add();
textRef1.contents = Text01;
textRef1.top=docRef.height+1.3*mm;
textRef1.left = 5*mm+textRef.width;
textRef1.textRange.characterAttributes.size = 8;
textRef1.textRange.characterAttributes.overprintFill=true;

switch (Text01){
	case  'Process Cyan': textRef1.textRange.characterAttributes.fillColor =PCyan; break;
	case  'Process Magenta': textRef1.textRange.characterAttributes.fillColor =PMagenta; break;
	case  'Process Yellow': textRef1.textRange.characterAttributes.fillColor =PYellow; break;
	case  'Process Black': textRef1.textRange.characterAttributes.fillColor =PBlack; break;
	default: textRef1.textRange.characterAttributes.fillColor =app.activeDocument.swatches[Text01].color;
	}
textRef1.contents = (i+1)+" ("+Text01+")";
textRef1.createOutline();
}
textRef.createOutline();






 dlg.hide();	
}

dlg.buttons.cancel.onClick= function()
{
	win.close(0);
}



dlg.center(); 
dlg.show();


/*
var sInks = new Array;
var sI = new Array;
var iLength = activeDocument.inkList.length;
for(var i=0; i<iLength ; i++) {
sI[i] = activeDocument.inkList[i].name;
}

var triangleGroup = docRef.groupItems.add();
var trianglePath = triangleGroup.pathItems.add();

var newItem;
if ( docRef.pathItems.length > 0 ) {
for ( i = 0; i <docRef.pathItems.length; i++ ) {
trianglePath.pathItems[i].add();
}
}
//newItem = trianglePath.duplicate(docRefOriginal, ElementPlacement.PLACEATEND );
//var docSelected = app.activeDocument.selection;
//if ( docSelected.length > 0 ) {
//for ( i = 0; i < docSelected.length; i++ ) {
//docSelected[i].selected = false;
//newItem = docSelected[i].duplicate(docRefOriginal,
//ElementPlacement.PLACEATEND );
//}
//}

//docRef.close( SaveOptions.DONOTSAVECHANGES );
*/
function ugroup(){
var doc;
var itemKinds = new Array("pathItems","compoundPathItems","textFrames","placedItems","rasterItems","meshItems","pluginItems","graphItems","symbolItems","groupItems");

	function getChildAll(obj)
	{
	var childsArr = new Array();
	for(var i=0;i<obj.pageItems.length;i++)childsArr.push(obj.pageItems[i]);
	return childsArr;
	}



	doc = newLayer;
	ungroup(doc);


	function ungroup(obj)
	{
	var elements = getChildAll(obj);
	if(elements.length<1){
		obj.remove();
		return;
	}else{
		for(var i=0;i<elements.length;i++)
		{
			try{
				if(elements[i].parent.typename!="Layer")elements[i].moveBefore(obj);
				if(elements[i].typename=="GroupItem")ungroup(elements[i]);
			}catch(e){

				}
			}
		}
	}
}



function Print5() {
	var doc = app.activeDocument;
mm = 72/25.4;
	var indexAB = doc.artboards.getActiveArtboardIndex();
	
	doc.fitArtboardToSelectedArt(indexAB);
	doc.cropStyle = CropOptions.Standard;
	doc.outputResolution = 2400;
	doc.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL2;
}


function Corn5(newLayer, sel) {


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
//alert(""+i);

//newCompoundPath1 = newLayer.compoundPathItems.add();
//newCompoundPath2 = newLayer.compoundPathItems.add();
//newCompoundPath3 = newLayer.compoundPathItems.add();
//newCompoundPath4 = newLayer.compoundPathItems.add();


var triangleGroup = newLayer.groupItems.add();
newCompoundPath1 = triangleGroup.compoundPathItems.add();
newCompoundPath2 = triangleGroup.compoundPathItems.add();
newCompoundPath3 = triangleGroup.compoundPathItems.add();
newCompoundPath4 = triangleGroup.compoundPathItems.add();

newPath1 = newCompoundPath1.pathItems.add();
newPath1.setEntirePath( Array( Array(RobjX+14.174, LobjY+14.174), Array(RobjX, LobjY+14.174) ) );
newPath1 = newCompoundPath1.pathItems.add();
newPath1.setEntirePath( Array( Array(RobjX+14.174, LobjY+14.174), Array(RobjX+14.174, LobjY) ) );
//©Klimov S.V.
newPath1.stroked = true;
newPath1.strokeWidth = 0.57;
newPath1.strokeColor = app.activeDocument.swatches[Registr].color;

newPath2 = newCompoundPath2.pathItems.add();
newPath2.setEntirePath( Array( Array(LobjX-14.174, LobjY+14.174), Array(LobjX, LobjY+14.174) ) );
newPath2 = newCompoundPath2.pathItems.add();
newPath2.setEntirePath( Array( Array(LobjX-14.174, LobjY+14.174), Array(LobjX-14.174, LobjY) ) );

newPath2.stroked = true;
newPath2.strokeWidth = 0.57;
newPath2.strokeColor = app.activeDocument.swatches[Registr].color;

newPath3 = newCompoundPath3.pathItems.add();
newPath3.setEntirePath( Array( Array(LobjX-14.174, RobjY-14.174), Array(LobjX, RobjY-14.174) ) );
newPath3 = newCompoundPath3.pathItems.add();
newPath3.setEntirePath( Array( Array(LobjX-14.174, RobjY-14.174), Array(LobjX-14.174, RobjY) ) );

newPath3.stroked = true;
newPath3.strokeWidth = 0.57;
newPath3.strokeColor = app.activeDocument.swatches[Registr].color;

newPath4 = newCompoundPath4.pathItems.add();
newPath4.setEntirePath( Array( Array(RobjX+14.174, RobjY-14.174), Array(RobjX, RobjY-14.174) ) );
newPath4 = newCompoundPath4.pathItems.add();
newPath4.setEntirePath( Array( Array(RobjX+14.174, RobjY-14.174), Array(RobjX+14.174, RobjY) ) );

newPath4.stroked = true;
newPath4.strokeWidth = 0.57;
newPath4.strokeColor = app.activeDocument.swatches[Registr].color;

 
 activeDocument.selection = null;
 triangleGroup.selected = true;
}