//�Klimov S.V. (don@list.ru)

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
//var ROOT_PATH=os.path.dirname(__file__);
//alert(ROOT_PATH);


var sFile = new Array;
//var inFile = File.openDialog ('Download File Order', '*.txt');
//alert(''+$.os);
Os = $.os;
//alert(''+Os);
$LOCALE= app.locale;
//alert(app.locale);
$preset='Presets/'+$LOCALE+'/Scripts';
//alert($preset);
var SCRIPTS_FOLDER =  decodeURI(app.path + '/' +$preset);
//alert(SCRIPTS_FOLDER);
//if (Os[0] == 'M') ListOfFiles = File ('/Applications/Adobe Illustrator CS5.1/Presets.localized/en_GB/Scripts/PodvalProof.ai');    else ListOfFiles = File (path+'\\Presets\\en_US\\Scripts\\PodvalProof.ai');
//docRef = open(ListOfFiles, DocumentColorSpace.CMYK);
//SCRIPTS_FILE=SCRIPTS_FOLDER.replace(/[\/]/g, '\\');
//alert(SCRIPTS_FOLDER);
ListOfFiles = File (SCRIPTS_FOLDER + '/VMStop.ai');
BotOfFiles = File (SCRIPTS_FOLDER + '/VMSOffset.ai');

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
var iLength = docRef.inkList.length;
//alert (iLength);
var js=0;
for(var i=0; i<iLength ; i++) {
	//alert (docRef.inkList[i].name);
	if (docRef.inkList[i].inkInfo.printingStatus == InkPrintStatus.DISABLEINK) continue;
		sI[js] = docRef.inkList[i].name;
		//alert (sI[js]);
		js++;
	
//alert (docRef.inkList[i].inkInfo.printingStatus);
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


var iF = new Array;

//iF = infoLine.split(";");

//alert(iF[1]);

var Da= new Date ();
//Dat=Da.toLocaleString();
var Dat= String (''+Da.getDate() +'.'+ (Da.getMonth()+1)+'.'+  Da.getFullYear()+'/1' );
var res =  
"dialog { orientation: 'column', alignChildren: 'center', \
info: Group { orientation: 'row', alignChildren: 'top',\
	panel1: Panel {text: 'Заказ:', preferredSize: [370,170], alignChildren: 'right',\
		list00: Group { orientation: 'row', \
			text: StaticText {text:'Номер: '}, \
			listbox: EditText {text:'O-', preferredSize: [300,20]}, \
		} \
		list01: Group { orientation: 'row', \
			text: StaticText {text:'Заказчик: '}, \
			listbox: EditText {text:'', preferredSize: [300,20]}, \
		} \
		list02: Group { orientation: 'row', \
			text: StaticText {text:'Наименование: '}, \
			listbox: EditText {text:'', preferredSize: [300,20]}, \
		} \
		list03: Group { orientation: 'row', \
			text: StaticText {text:'Дата: '}, \
			listbox: EditText {text: '', preferredSize: [120,20]}, \
			text: StaticText {text:',', preferredSize: [30,20]}, \
			text: StaticText {text:'Размер: '}, \
			listbox2: EditText {text:'x', preferredSize: [65,20]}, \
		} \
		list04: Group { orientation: 'row', \
			text: StaticText {text:'Дизайнер: '}, \
			listbox: EditText {text: '', preferredSize: [300,20]}, \
	} \
							}\
   						}\
panel2: Panel {text: 'Color:', preferredSize: [370,180], alignChildren: 'left',\
	GR: Group { orientation: 'row', alignChildren: 'center', \
			combo: ListBox {preferredSize: [300,280], properties:{multiselect:false, selected: true}}, \
	GR1: Group { orientation: 'column', alignChildren: 'center', \
			up: Button { text: 'Up', properties:{name:'up'} }, \
			down: Button { text: 'Down', properties:{name:'down'} }, \
			text: StaticText {text:' '}, \
			tech: Button { text: 'TechInfo', properties:{name:'tech'} }, \
			noVar: Button { text: 'NoVarnish', properties:{name:'noVar'} }, \
			cut: Button { text: 'Knife', properties:{name:'cut'} }, \
			text: StaticText {text:' '}, \
			del: Button { text: 'Delete', properties:{name:'del'} }, \
															}\
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

/* var O='';
for(j=0; j<sI.length; j++) {

	switch (sI[j]){
		case  'Shtamp':
		case  'shtamp':
		case  'Cut':
		case  'cut':
		case  'Knife':
		case  'knife': O = sI[j]; sI.splice(j, 1); break;
	}

	//alert (sI[j]);
}
//alert (sI.length);

if (O == '') {
	alert("Контур ножа не найден!");
	throw new System.Exception ("Could not find the InkListItem from the string"); 
}

sI.push(O); */

for(i=0; i<sI.length; i++) {
dlg.panel2.GR.combo.add("item", sI[i]);
}
dlg.panel2.GR.combo.items[0].selected = true;


dlg.panel2.GR.GR1.up.onClick= function(){

	ind = dlg.panel2.GR.combo.selection.index;
	if (dlg.panel2.GR.combo.items[ind].text.slice(0, 7) == 'Process') return;
	strInd = dlg.panel2.GR.combo.items[ind-1].text;
	if (strInd.slice(0, 7) == 'Process') return;
	dlg.panel2.GR.combo.items[ind-1].text = dlg.panel2.GR.combo.items[ind].text ;
	dlg.panel2.GR.combo.items[ind].text = strInd;
	dlg.panel2.GR.combo.items[ind-1].selected = true;
	//alert(''+strInd);
	}
	
dlg.panel2.GR.GR1.down.onClick= function(){
	
	ind = dlg.panel2.GR.combo.selection.index;
	if (dlg.panel2.GR.combo.items[ind].text.slice(0, 7) == 'Process') return;
	strInd = dlg.panel2.GR.combo.items[ind+1].text;
	if (strInd.slice(0, 7) == 'Process') return;
	dlg.panel2.GR.combo.items[ind+1].text = dlg.panel2.GR.combo.items[ind].text ;
	dlg.panel2.GR.combo.items[ind].text = strInd;
	dlg.panel2.GR.combo.items[ind+1].selected = true;
	//alert(''+strInd);
	
	}

dlg.panel2.GR.GR1.del.onClick= function(){

	var colorFill = dlg.panel2.GR.combo.selection.text;
//Arrya.remove(sI, colorFill);
//alert(''+sI);

	for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
		if (dlg.panel2.GR.combo.items[i].text==colorFill) {dlg.panel2.GR.combo.remove(i); dlg.info.panel1.list10.listbox.text=dlg.panel2.GR.combo.items.length; }
	}

}

dlg.panel2.GR.GR1.cut.onClick= function(){

	var colorFill = dlg.panel2.GR.combo.selection.index;
	if (~dlg.panel2.GR.combo.items[colorFill].text.lastIndexOf("-КОНТУР ВЫСЕЧКИ"))
		dlg.panel2.GR.combo.items[colorFill].text = dlg.panel2.GR.combo.items[colorFill].text.substring(0,
			dlg.panel2.GR.combo.items[colorFill].text.lastIndexOf("-КОНТУР ВЫСЕЧКИ"));
		else dlg.panel2.GR.combo.items[colorFill].text += "-КОНТУР ВЫСЕЧКИ";


}
dlg.panel2.GR.GR1.noVar.onClick= function(){

	var colorFill = dlg.panel2.GR.combo.selection.index;
	if (~dlg.panel2.GR.combo.items[colorFill].text.lastIndexOf("-ОКНО БЕЗ ЛАКА"))
		dlg.panel2.GR.combo.items[colorFill].text = dlg.panel2.GR.combo.items[colorFill].text.substring(0,
			dlg.panel2.GR.combo.items[colorFill].text.lastIndexOf("-ОКНО БЕЗ ЛАКА"));
		else dlg.panel2.GR.combo.items[colorFill].text += "-ОКНО БЕЗ ЛАКА";


}
dlg.panel2.GR.GR1.tech.onClick= function(){

	var colorFill = dlg.panel2.GR.combo.selection.index;
	if (~dlg.panel2.GR.combo.items[colorFill].text.lastIndexOf("-ЗОНА ТЕХ. ДОЛИВКИ"))
		dlg.panel2.GR.combo.items[colorFill].text = dlg.panel2.GR.combo.items[colorFill].text.substring(0,
			dlg.panel2.GR.combo.items[colorFill].text.lastIndexOf("-ЗОНА ТЕХ. ДОЛИВКИ"));
		else dlg.panel2.GR.combo.items[colorFill].text += "-ЗОНА ТЕХ. ДОЛИВКИ";


}

//alert(dlg.info.panel1.list03.listbox2.text);
//dlg.info.panel1.list00.listbox.text=Namb;
//dlg.info.panel1.list01.listbox.text=Client;

//elemSize = selAll(O, mm);

dlg.info.panel1.list01.listbox.text = "";
dlg.info.panel1.list03.listbox.text = Dat;

//path1 = decodeURI(inFile.fsName);
dlg.text = "Spec";
//���� ���������
dlg.buttons.ok.onClick= function(){

newLayer=activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.SENDTOBACK);
newLayer.name="Spec";

var placed = docRef.groupItems.createFromFile( ListOfFiles );
placed.moveToBeginning( newLayer );
placed.left = wi / 2 - placed.width / 2;
placed.top = hi - 7*mm;

var placed2 = docRef.groupItems.createFromFile( BotOfFiles );
placed2.moveToBeginning( newLayer );
placed2.left = wi / 2 - placed2.width / 2;
placed2.top = placed2.height + 7*mm; 

ugroup(newLayer.groupItems[0].groupItems[0]);
ugroup(newLayer.groupItems[1].groupItems[0]);
var newLayer1 = newLayer.groupItems;
var group = newLayer.groupItems.add();
/* var points = new Array ([3.325*mm, 0],			[3.325*mm, 0],			[1.55*mm, 0],
						[0, 3.325*mm],			[0, 1.55*mm],			[0, 3.325*mm],
						[0, 4.102*mm],			[0, 4.102*mm],			[0, 6.102*mm],
						[3.325*mm, 7.427*mm],	[1.55*mm, 7.427*mm],	[4.9*mm, 7.427*mm],
						[6.649*mm, 4.102*mm],	[6.649*mm, 6.102*mm],	[6.649*mm, 4.102*mm] ); */

var points = [];

	points[0] = [[0, 0], [2.15*mm, 2.15*mm], [0, 4.3*mm]];
	points[1] = [[0, 4.3*mm], [2.15*mm, 2.15*mm], [4.3*mm, 4.3*mm]];
	points[2] = [[4.3*mm, 4.3*mm], [2.15*mm, 2.15*mm], [4.3*mm, 0]];
	points[3] = [[0, 0], [2.15*mm, 2.15*mm], [4.3*mm, 0]];
	points[4] = [[0, 0], [0, 4.3*mm], [4.3*mm, 4.3*mm], [4.3*mm, 0]];

var c = 4,
	t = hi,
	y = -3.2*mm,
	x = 0,
	xt = 0,
	xYel = 0, yB = 0;

//var SI = dlg.panel2.GR.combo.items;
//alert (SI);

for(j=0; j<dlg.panel2.GR.combo.items.length; j++) {

var sp = dlg.panel2.GR.combo.items[j].text.split("-");
	Ops = sp[0];
var Works = sp[1];


var line = group.pathItems.add();
//line.setEntirePath( Array(	[0, 0], ) );
/* 
		switch (Ops){
			case  'Process Cyan': c = 0; y += 3.2*mm; x = 1; break;
			case  'Process Magenta': c = 1; y += 3.2*mm; x = 1; break;
			case  'Process Yellow': c = 2; y += 3.2*mm; xYel = 2.15*mm; x = 1; break;
			case  'Process Black': c = 3; y += 3.2*mm; yB = -2.15*mm; x = 1; break;
			default: c = 4; t -= 5.5*mm; y = 0;
		} */
		c = 4; t -= 5.5*mm; y = 0;
		for (i = 0; i < points[c].length; i++){ //points[c]
			var newPoint = line.pathPoints.add();
				newPoint.anchor = points[c][i];
				 newPoint.leftDirection = newPoint.anchor;
				newPoint.rightDirection = newPoint.anchor;
				//newPoint.pointType = PointType.SMOOTH;
		}		
//line = group.pathItems.rectangle( 0, 0, 4.3*mm, 4.3*mm);
line.closed = true;
line.filled = true;
line.stroked = false;
line.fillOverprint = false;
line.top = t + yB;
line.left = xt + xYel;

 switch (Ops){
	case  'Process Cyan': line.fillColor = PCyan; break;
	case  'Process Magenta': line.fillColor = PMagenta; break;
	case  'Process Yellow': line.fillColor = PYellow; break;
	case  'Process Black': line.fillColor = PBlack; break;


	default: line.fillColor = app.activeDocument.swatches[Ops].color; 
	} 

	if (Works != undefined) {
		line.filled = false;
		line.stroked = true;
		line.strokeWidth = 0.3*mm;
		if (Works != 'КОНТУР ВЫСЕЧКИ') line.strokeDashes = [2,2,2,2];
		line.strokeColor = app.activeDocument.swatches[Ops].color;
		Ops = Works;
	}
	
	var textRef =  group.textFrames.add();
	textRef.textRange.characterAttributes.size = 11;
	textRef.contents = Ops;
	textRef.top = t;
	textRef.left = 6*mm + y + xt;
	textRef.textRange.characterAttributes.fillColor = PBlack;

	x++; xYel = 0; yB = 0;
	if (x > 3) { x = 0; xt += 44*mm; t = hi;};
}


group.left = placed2.left + 65*mm;
group.top = 56*mm;

//alert();


for (j=0; j < newLayer.groupItems.length; j++){



		if (newLayer1[j].textFrames.length > 0) {
for (i=0; i < newLayer1[j].textFrames.length; i++){
T = newLayer1[j].textFrames[i].contents;
//alert(T);
switch (T){

    case  '#08':  newLayer1[j].textFrames[i].paragraphs[0].paragraphAttributes.justification = Justification.LEFT;
					newLayer1[j].textFrames[i].contents = dlg.info.panel1.list03.listbox2.text + ' мм';//elemSize[0]+"x"+elemSize[1]+" мм";
					break;
	case  '#09':  newLayer1[j].textFrames[i].paragraphs[0].paragraphAttributes.justification = Justification.LEFT;
					newLayer1[j].textFrames[i].contents = dlg.info.panel1.list04.listbox.text;
					break;
	case  '#02':  newLayer1[j].textFrames[i].paragraphs[0].paragraphAttributes.justification = Justification.LEFT;
					newLayer1[j].textFrames[i].contents = dlg.info.panel1.list02.listbox.text;
					break;   
	case  '#04':  newLayer1[j].textFrames[i].paragraphs[0].paragraphAttributes.justification = Justification.LEFT;
					newLayer1[j].textFrames[i].contents = dlg.info.panel1.list03.listbox.text;
					//newLayer1[j].textFrames[i].left = placed.left + placed.width - newLayer1[j].textFrames[i].width;
						break;
	case  '#05':  newLayer1[j].textFrames[i].paragraphs[0].paragraphAttributes.justification = Justification.LEFT;
					newLayer1[j].textFrames[i].contents = dlg.info.panel1.list01.listbox.text+' / '+dlg.info.panel1.list00.listbox.text;
					//newLayer1[j].textFrames[i].left = placed.left + placed.width - newLayer1[j].textFrames[i].width;
						break;
		
		 default: ;
			}
		}

	  } //if
	}

	//alert();                  
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
function ugroup(doc){

var itemKinds = new Array("pathItems","compoundPathItems","textFrames","placedItems","rasterItems","meshItems","pluginItems","graphItems","symbolItems","groupItems");

	function getChildAll(obj)
	{
	var childsArr = new Array();
	for(var i=0;i<obj.pageItems.length;i++)childsArr.push(obj.pageItems[i]);
	return childsArr;
	}


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

function selAll(O, mm){
	var j = 0;
	var SAll = new Array([0],[0]);
	
   for(var i = 0; i < documents[0].pathItems.length; i++){
	  docSelection  = documents[0].pathItems[i]; 

	  if (docSelection.stroked == true && docSelection.strokeColor instanceof SpotColor){
	  //alert(docSelection.strokeColor.spot.name + "  " + documents[0].swatches.getByName(O).name);
	  if (docSelection.strokeColor.spot.name == documents[0].swatches.getByName(O).name) {
		SAll[j] = (docSelection.width/mm).toFixed(1);
		j++;
		SAll[j] = (docSelection.height/mm).toFixed(1);
		j++;
		//alert(docSelection.width+"  "+ docSelection.height);
	  }
	}
   }
   //alert(SAll[0]+"  "+ SAll[1]);
  return SAll;
	// if (parseInt((parseFloat(perimetr)*Distor)) > parseFloat(parseFloat(iSel).toFixed(1)))
	//    alert(parseInt((parseFloat(perimetr)*Distor))+"\n"+parseFloat(parseFloat(iSel).toFixed(1))+"\n"+"Не совпадение длины периметра!\nВозможна двойная дисторция");
   }