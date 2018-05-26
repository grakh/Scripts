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

var path = app.activeDocument.path;
//var ROOT_PATH=os.path.dirname(__file__);
//alert(ROOT_PATH);


var sFile = new Array;
//var inFile = File.openDialog ('Download File Order', '*.txt');
//alert(''+$.os);
$LOCALE= app.locale;
//alert(app.locale);
$preset='Presets/'+$LOCALE+'/Scripts';
//alert($preset);
var SCRIPTS_FOLDER =  decodeURI(app.path + '/' +$preset+ '/PodvalDZGU.ai');
//alert(SCRIPTS_FOLDER);
//if (Os[0] == 'M') ListOfFiles = File ('/Applications/Adobe Illustrator CS5.1/Presets.localized/en_GB/Scripts/Podval.ai');    else ListOfFiles = File (path+'\\Presets\\en_US\\Scripts\\Podval.ai');
//docRef = open(ListOfFiles, DocumentColorSpace.CMYK);
//SCRIPTS_FILE=SCRIPTS_FOLDER.replace(/[\/]/g, '\\');
//alert(SCRIPTS_FOLDER);
ListOfFiles = File (SCRIPTS_FOLDER);


var docRef = app.activeDocument;

// docRef = app.activeDocument;
//newLayer = activeDocument.layers.add();
//newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
mm = 72/25.4;
//newLayer.name="Podval";

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
pp = Path;
Path = Path.slice(Path.lastIndexOf('/')+1);

//alert(Path);

for (i=0; i< Path.length; i++){
  if( Path[i]=='/' | Path[i]=='\\') {i++; Na=''; metka=false;}  
  if(metka)Client+= Path[i];
    if( Path[i]=='_'){Namb =Na; Na=''; metka=true};
    Na+= Path[i];
        }

pp=pp+"/tmp/info.txt";
infoFile = File(pp);
//infoFile.encoding = "system";
//infoFile.isEncodingAvailable ('UTF-16');
//infoFile.encoding = 'CP1251';
openFlag = infoFile.open("r","text");
//alert('Open flag = '+openFlag);
if (openFlag) { 
    //alert('Open. Length = '+infoFile.length+ '\n name '+ infoFile.fsName);
 
     infoLine = infoFile.readln();

   } else     alert('No Open');

infoFile.close(); 
var iF = new Array;

iF = infoLine.split(";");

//alert(iF[1]);

var Da= new Date ();
//Dat=Da.toLocaleString();
var Dat= String (''+Da.getDate() +'/'+ (Da.getMonth()+1)+'/'+  Da.getFullYear()+' '+Da.getHours() + ":" + Da.getMinutes() );
var res =  
"dialog { orientation: 'column', alignChildren: 'center', \
info: Group { orientation: 'row', alignChildren: 'top',\
panel1: Panel {text: 'Order:', preferredSize: [230,320], alignChildren: 'right',\
list00: Group { orientation: 'row', \
		text: StaticText {text:'Namber '}, \
		listbox: EditText {text:'-', preferredSize: [220,20]}, \
		 } \
list01: Group { orientation: 'row', \
		text: StaticText {text:'Client: '}, \
		listbox: EditText {text:'-', preferredSize: [220,20]}, \
		 } \
list02: Group { orientation: 'row', \
		text: StaticText {text:'Version jpg: '}, \
		listbox: EditText {text:'1', preferredSize: [220,20]}, \
		 } \
list03: Group { orientation: 'row', \
		text: StaticText {text:'Date: '}, \
		listbox: EditText {text: '', preferredSize: [220,20]}, \
		 } \
list04: Group { orientation: 'row', \
		text: StaticText {text:'Material: '}, \
		listbox: EditText {text:'1,14', preferredSize: [220,20]}, \
		 } \
list05: Group { orientation: 'row', \
		text: StaticText {text:'Print: '}, \
		listbox: EditText {text:'Forward', preferredSize: [220,20]}, \
		 } \
list06: Group { orientation: 'row', \
		text: StaticText {text:'Profile: '}, \
		listbox: EditText {text:'-', preferredSize: [220,20]}, \
		 } \
list07: Group { orientation: 'row', \
		text: StaticText {text:'PhotoLabel Х: '}, \
		listbox: EditText {text:'0', preferredSize: [220,20]}, \
		 } \
list08: Group { orientation: 'row', \
		text: StaticText {text:'PhotoLabel Y: '}, \
		listbox: EditText {text:'0', preferredSize: [220,20]}, \
		 } \
list09: Group { orientation: 'row', \
		text: StaticText {text:'PhotoLabel Color: '}, \
		listbox: EditText {text:'-', preferredSize: [220,20]}, \
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



//dlg.info.panel1.list00.listbox.text=Namb;
//dlg.info.panel1.list01.listbox.text=Client;
dlg.info.panel1.list00.listbox.text=iF[1];
dlg.info.panel1.list01.listbox.text=iF[0];
dlg.info.panel1.list03.listbox.text=Dat;
dlg.info.panel1.list04.listbox.text=iF[2];
dlg.info.panel1.list05.listbox.text=iF[4];
dlg.info.panel1.list06.listbox.text=iF[5]+", "+iF[6];
//path1 = decodeURI(inFile.fsName);
dlg.text = "Podval";
//Цикл обработки
dlg.buttons.ok.onClick= function(){

newLayer=activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.SENDTOBACK);

var placed = docRef.groupItems.createFromFile( ListOfFiles );
newLayer.name="Podval";
placed.moveToBeginning( newLayer );
placed.left = 0;
placed.top = 0;


//ugroup()




//alert(''+newLayer.groupItems[0].groupItems[0].pathItems.length);
i=13;
for(j=0; j<dlg.panel2.GR.combo.items.length; j++) {

Ops= dlg.panel2.GR.combo.items[j].text;
i--;
switch (Ops){
	case  'Process Cyan': newLayer.groupItems[0].groupItems[0].pathItems[i].fillColor =PCyan; break;
	case  'Process Magenta': newLayer.groupItems[0].groupItems[0].pathItems[i].fillColor =PMagenta; break;
	case  'Process Yellow': newLayer.groupItems[0].groupItems[0].pathItems[i].fillColor =PYellow; break;
	case  'Process Black': newLayer.groupItems[0].groupItems[0].pathItems[i].fillColor =PBlack; break;
	default: newLayer.groupItems[0].groupItems[0].pathItems[i].fillColor =app.activeDocument.swatches[Ops].color;
	}
}
newLayer1=newLayer.groupItems[0].groupItems[0].textFrames;
//alert(''+newLayer1.length);
for (i=0; i<newLayer1.length; i++){
T = newLayer1[i].contents;
//alert(''+T);
switch (T){
	case  '#01':  newLayer1[i].contents = dlg.info.panel1.list00.listbox.text; break;
    case  '#02':  newLayer1[i].contents = dlg.info.panel1.list01.listbox.text; break;
    case  '#03':  newLayer1[i].contents = dlg.info.panel1.list02.listbox.text; break;
    case  '#04':  newLayer1[i].contents = dlg.info.panel1.list03.listbox.text; break;
    case  '#05':  newLayer1[i].contents = dlg.info.panel1.list04.listbox.text; break;
    case  '#06':  newLayer1[i].contents = dlg.info.panel1.list05.listbox.text; break;
    case  '#07':  newLayer1[i].contents = dlg.info.panel1.list06.listbox.text; break;
    case  '#08':  newLayer1[i].contents = dlg.info.panel1.list07.listbox.text; break;
    case  '#09':  newLayer1[i].contents = dlg.info.panel1.list08.listbox.text; break;
    case  '#10':  newLayer1[i].contents = dlg.info.panel1.list09.listbox.text; break;
    case  '#11':  newLayer1[i].contents = dlg.info.panel1.list10.listbox.text; break;
    case  '#12':  newLayer1[i].contents = iF[8]; break;
	case  '#20':  if (dlg.panel2.GR.combo.items[0]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[0].text else newLayer1[i].contents =''; break;
	case  '#21':  if (dlg.panel2.GR.combo.items[1]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[1].text else newLayer1[i].contents =''; break;
	case  '#22':  if (dlg.panel2.GR.combo.items[2]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[2].text else newLayer1[i].contents =''; break;
	case  '#23':  if (dlg.panel2.GR.combo.items[3]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[3].text else newLayer1[i].contents =''; break;
	case  '#24':  if (dlg.panel2.GR.combo.items[4]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[4].text else newLayer1[i].contents =''; break;
	case  '#25':  if (dlg.panel2.GR.combo.items[5]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[5].text else newLayer1[i].contents =''; break;
	case  '#26':  if (dlg.panel2.GR.combo.items[6]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[6].text else newLayer1[i].contents =''; break;
	case  '#27':  if (dlg.panel2.GR.combo.items[7]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[7].text else newLayer1[i].contents =''; break;
	case  '#28':  if (dlg.panel2.GR.combo.items[8]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[8].text else newLayer1[i].contents =''; break;
	case  '#29':  if (dlg.panel2.GR.combo.items[8]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[9].text else newLayer1[i].contents =''; break;
	case  '#30':  if (dlg.panel2.GR.combo.items[10]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[10].text else newLayer1[i].contents =''; break;
	case  '#31':  if (dlg.panel2.GR.combo.items[11]!=null) newLayer1[i].contents = dlg.panel2.GR.combo.items[11].text else newLayer1[i].contents =''; break;
    
	// default: alert('Неизвестное поле: '+T);
	}
}
                         
//docRef.selection = null;

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