//©Klimov S.V. (don@list.ru)

mm = 72/25.4;

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

PCyan40 = new CMYKColor();
PCyan40.name = 'Process Cyan';
PCyan40.black =0; 
PCyan40.cyan = 40; 
PCyan40.magenta = 0; 
PCyan40.yellow = 0;

PMagenta40 = new CMYKColor();
PMagenta40 .name = 'Process Magenta';
PMagenta40 .black =0; 
PMagenta40 .cyan = 0; 
PMagenta40 .magenta = 40; 
PMagenta40 .yellow = 0;

PYellow40 = new CMYKColor();
PYellow40.name = 'Process Yellow';
PYellow40.black =0; 
PYellow40.cyan = 0; 
PYellow40.magenta = 0; 
PYellow40.yellow = 40;

PBlack40 = new CMYKColor();
PBlack40.name = 'Process Black';
PBlack40.black =40; 
PBlack40.cyan = 0; 
PBlack40.magenta = 0; 
PBlack40.yellow = 0;

PCyan10 = new CMYKColor();
PCyan10.name = 'Process Cyan';
PCyan10.black =0; 
PCyan10.cyan = 10; 
PCyan10.magenta = 0; 
PCyan10.yellow = 0;

PMagenta10 = new CMYKColor();
PMagenta10 .name = 'Process Magenta';
PMagenta10 .black =0; 
PMagenta10 .cyan = 0; 
PMagenta10 .magenta = 10; 
PMagenta10 .yellow = 0;

PYellow10 = new CMYKColor();
PYellow10.name = 'Process Yellow';
PYellow10.black =0; 
PYellow10.cyan = 0; 
PYellow10.magenta = 0; 
PYellow10.yellow = 10;

PBlack10 = new CMYKColor();
PBlack10.name = 'Process Black';
PBlack10.black =10; 
PBlack10.cyan = 0; 
PBlack10.magenta = 0; 
PBlack10.yellow = 0;




// ------------------------------------------------- start

docRef = activeDocument;

for ( i = 0; i < activeDocument.layers.length; i++ ) {
    activeDocument.layers[i].locked = true;
    }

newLayer = activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
newLayer.name="Oporki";

wi= docRef.width;
hi = docRef.height;
lenBool = false;
CMYKBool = false;

docRef.rulerOrigin = Array (0,0);

var Oporka1 = newLayer.groupItems.add();
var Oporka2 = newLayer.groupItems.add();
var mirrs1 = newLayer.groupItems.add();
var mirrs2 = newLayer.groupItems.add();
var rect1 = newLayer.groupItems.add();
var rect2 = newLayer.groupItems.add();
var T1 = newLayer.groupItems.add();   
var T2 = newLayer.groupItems.add(); 
var Auto1 = newLayer.groupItems.add();

u=0;
var sInks = new Array;
var xInks = new Array;
var sI = new Array;
var iLength = activeDocument.inkList.length;
for(var i=0; i<iLength ; i++) {
sI[i] = activeDocument.inkList[i].name;
}

sI[0]='Process Cyan';
sI[1]='Process Magenta';
sI[2]='Process Yellow';
sI[3]='Process Black';

None= '[None]';
Registr= '[Registration]';
bl = false;

for (i=0; i<docRef.swatches.length; i++) {
// alert(''+docRef.swatches[i].name);   
    if (docRef.swatches[i].name == '[Нет]') None = docRef.swatches[i].name;
    if (docRef.swatches[i].name == '[Совмещение]') Registr = docRef.swatches[i].name;

};

//alert(''+None+'  '+Wh+ '  '+Registr);

Opaq = None;
var res =  
"dialog { orientation: 'column', alignChildren: 'center',\
text: StaticText {text:'', preferredSize:[60,0]},\
namb:  Group { orientation: 'row', \
            text: StaticText {text:'Zakaz N: '},\
            texte: EditText { preferredSize: [300,20], alignment: 'center'},\
			}\
Rapp:   Group { orientation: 'row', \
            text: StaticText {text:'Z: '},\
            texte: EditText { preferredSize: [70,20], alignment: 'center'},\
            text1: StaticText {text:' ,          Cut N:'},\
            texte1: EditText { preferredSize: [70,20], alignment: 'center'},\
			}\
text: StaticText {text:'', preferredSize:[60,0]},\
panel2: Panel {text: 'Color:', preferredSize: [370,180], alignChildren: 'left',\
GR: Group { orientation: 'row', alignChildren: 'center', \
			combo: ListBox {preferredSize: [300,230], properties:{multiselect:false, selected: true}}, \
GR0: Group { orientation: 'column', alignChildren: 'center', \
            text1: StaticText {text:'- Опорный цвет'},\
text: StaticText {text:'', preferredSize:[60,20]},\
   up: Button { text: 'UP', properties:{name:'up'} }, \
   down: Button { text: 'Down', properties:{name:'down'} }, \
text: StaticText {text:'', preferredSize:[60,0]},\
			   del: Button { text: 'Delete', properties:{name:'del'} }, \
panel3: Panel {preferredSize: [100,1], alignChildren: 'right'},\
text: StaticText {text:'', preferredSize:[30,0]},\
			   wh: Button { text: 'Add white', properties:{name:'wh'} }, \
         								  }\
												}\
													}\
panel4: Panel {text: 'White:', preferredSize: [370,50], alignChildren: 'left',\
GRW: Group { orientation: 'row', alignChildren: 'center', \
			combo: ListBox {preferredSize: [300,50], properties:{multiselect:false, selected: true}}, \
text: StaticText {text:'', preferredSize:[10,0]},\
			   delW: Button { text: 'Delete', properties:{name:'delW'} }, \
			   	}\
					}\
text: StaticText {text:'', preferredSize:[60,0]},\
buttons: Group { orientation: 'row', alignChildren: 'center', \
                ok: Button { text: 'OK', properties:{name:'ok'} }, \
                cencel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";



var dlg = new Window(res);
dlg.text = "Шкала оперативного контроля G3";
dlg.panel4.GRW.combo.add("item", "[None]");

for(i=0; i<sI.length; i++) {
dlg.panel2.GR.combo.add("item", sI[i]);
}
dlg.panel2.GR.combo.items[0].selected = true;


//dlg.panel2.GR.combo.add("item", Null);

dlg.panel2.GR.GR0.del.onClick= function(){

colorFill = dlg.panel2.GR.combo.selection.text;
//Arrya.remove(sI, colorFill);
//alert(''+sI);
for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
if (dlg.panel2.GR.combo.items[i].text==colorFill) {dlg.panel2.GR.combo.remove(i);
dlg.panel4.GRW.combo.remove(dlg.panel4.GRW.combo.find(colorFill).index);
 if (dlg.panel4.GRW.combo.items.length==0) dlg.panel4.GRW.combo.add("item", "[None]");
		}
	}

}

dlg.panel2.GR.GR0.up.onClick= function(){

ind = dlg.panel2.GR.combo.selection.index;
strInd = dlg.panel2.GR.combo.items[ind-1].text;
dlg.panel2.GR.combo.items[ind-1].text = dlg.panel2.GR.combo.items[ind].text ;
dlg.panel2.GR.combo.items[ind].text = strInd;
dlg.panel2.GR.combo.items[ind-1].selected = true;
//alert(''+strInd);
}

dlg.panel2.GR.GR0.down.onClick= function(){

ind = dlg.panel2.GR.combo.selection.index;
strInd = dlg.panel2.GR.combo.items[ind+1].text;
dlg.panel2.GR.combo.items[ind+1].text = dlg.panel2.GR.combo.items[ind].text ;
dlg.panel2.GR.combo.items[ind].text = strInd;
dlg.panel2.GR.combo.items[ind+1].selected = true;
//alert(''+strInd);

}


dlg.panel2.GR.GR0.wh.onClick= function(){
if (dlg.panel4.GRW.combo.find("[None]")!=null) 
	dlg.panel4.GRW.combo.remove(dlg.panel4.GRW.combo.find("[None]").index);

 //indW = dlg.panel2.GR.combo.selection.index;
 //strIndW = dlg.panel2.GR.combo.items[indW].text;
 if (dlg.panel4.GRW.combo.find(dlg.panel2.GR.combo.selection.text) == null)
			dlg.panel4.GRW.combo.add ("item", dlg.panel2.GR.combo.selection.text);

//dlg.panel2.GR.combo.items[indW].graphics.font = ScriptUI.newFont (ScriptUI.applicationFonts.palette.name, "Bold", 18);
//dlg.panel2.GR.combo.items[indW].fillBrush = dlg.panel2.GR.combo.items[indW].graphics.newBrush( dlg.panel2.GR.combo.items[indW].graphics.BrushType.SOLID_COLOR, [1, 0.7, 0, 0.5] );
//dlg.panel2.GR.combo.items[indW].font = ScriptUI.newFont ("Minion Pro", "Italic", 30);
}

dlg.panel4.GRW.delW.onClick= function(){

WhFill = dlg.panel4.GRW.combo.selection.text;
//Arrya.remove(sI, colorFill);
//alert(''+sI);
for(i=0; i<dlg.panel4.GRW.combo.items.length; i++) {

	if (dlg.panel4.GRW.combo.items[i].text==WhFill) dlg.panel4.GRW.combo.remove(i);

	}
 if (dlg.panel4.GRW.combo.items.length==0) dlg.panel4.GRW.combo.add("item", "[None]");
}

dlg.Rapp.texte.text =(Math.round((hi/2.83465)/3.175)).toString();

//Цикл обработки
dlg.buttons.ok.onClick = function(){


Opaq = None;

ur=0;
for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
    if (dlg.panel2.GR.combo.items[i].text!=Opaq) { 
	  sInks[ur] = dlg.panel2.GR.combo.items[i].text;  ur++ };
    };

//alert(''+ sInks);


var Da= new Date ();
//Dat=Da.toLocaleString();
var Dat= String (''+Da.getDate() +'.'+ (Da.getMonth()+1)+'.'+  Da.getFullYear());

Namb = 'G3 '+dlg.namb.texte.text+' от '+Dat+' (Z-'+dlg.Rapp.texte.text+' '+(wi/2.83465).toFixed(3)+') Cut #'+dlg.Rapp.texte1.text;


//ellip (ins,hi,wi,Ops,Opaq,Namb,insp,None,Registr,Rapport);
start();

 dlg.hide();	
}





dlg.buttons.cancel.onClick = function()
{
	win.close(0);
}



dlg.center(); 
dlg.show();

 for ( i = 0; i < activeDocument.layers.length; i++ ) {
    activeDocument.layers[i].locked = false;
    }
	
// END ------------------------------------------------------------------------------------------------

function start(){
	   oporka();
	    crest();
	
	Oporka2 = Oporka1.duplicate();
	Oporka2.top = hi+5*mm;
	
	mi= mirrs();
		 auto();

lent = rect(mi);
	  txt(lent);

	
}

function oporka(){
	

if (dlg.panel4.GRW.combo.find("[None]")==null){

	for (i=0; i < dlg.panel4.GRW.combo.items.length; i++){
OporkaW = Oporka1.pathItems.rectangle( 0, 0, wi, -5*mm);
OporkaW.setEntirePath( Array( Array(0, 0), Array(wi, 0), Array(wi, -5*mm), Array(0, -5*mm) ) );
OporkaW.closed = true;
OporkaW.filled = true;
OporkaW.stroked = false;
switch (dlg.panel4.GRW.combo.items[i].text){
	case  'Process Cyan': OporkaW.fillColor = PCyan; break;
	case  'Process Magenta': OporkaW.fillColor = PMagenta; break;
	case  'Process Yellow': OporkaW.fillColor = PYellow; break;
	case  'Process Black':OporkaW.fillColor =PBlack; break;
	default: OporkaW.fillColor =app.activeDocument.swatches[dlg.panel4.GRW.combo.items[i].text].color; break;
			}
	OporkaW.fillOverprint = true;
		}
	
	}

Oporka = Oporka1.pathItems.rectangle( 0, 0, wi, -5*mm);
Oporka.setEntirePath( Array( Array(0, 0), Array(wi, 0), Array(wi, -5*mm), Array(0, -5*mm) ) );
Oporka.closed = true;
Oporka.filled = true;
Oporka.stroked = false;
Oporka.fillColor =app.activeDocument.swatches[Registr].color;
Oporka.fillColor.tint=85;
Oporka.fillOverprint = true;


Line1 = Oporka1.pathItems.rectangle( 0, -2.25*mm, wi, -2.75*mm);
Line1.setEntirePath( Array( Array(0, -2.25*mm), Array(wi, -2.25*mm), Array(wi, -2.75*mm), Array(0, -2.75*mm) ) );
Line1.closed = true;
Line1.filled = true;
Line1.stroked = false;
Line1.fillColor = PWhite;
Line1.fillOverprint = false;

var OW1 = Oporka1.groupItems.add();
var OW2 = OW1;

Line2 = OW1.pathItems.rectangle( 0, -mm, 3*mm, -0.2*mm);
Line2.setEntirePath( Array( Array(0, -mm), Array(3*mm, -mm), Array(3*mm, -mm-0.2*mm), Array(0, -mm-0.2*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

Line2 = OW1.pathItems.rectangle( 0, -mm, 3*mm, -0.2*mm);
Line2.setEntirePath( Array( Array(0, -mm-0.3*mm), Array(3*mm, -mm-0.3*mm), Array(3*mm, -mm-0.5*mm), Array(0, -mm-0.5*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

Line2 = OW1.pathItems.rectangle( 0, -mm, 3*mm, -0.2*mm);
Line2.setEntirePath( Array( Array(0, -3.5*mm), Array(3*mm, -3.5*mm), Array(3*mm, -3.5*mm-0.2*mm), Array(0, -3.5*mm-0.2*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

Line2 = OW1.pathItems.rectangle( 0, -mm, 3*mm, -0.2*mm);
Line2.setEntirePath( Array( Array(0, -3.5*mm-0.3*mm), Array(3*mm, -3.5*mm-0.3*mm), Array(3*mm, -3.5*mm-0.5*mm), Array(0, -3.5*mm-0.5*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

countColor = sInks.length;
crestLen = countColor*3.5*mm - 0.5*mm + 3*mm;

Line2 = OW1.pathItems.rectangle( 3*mm, -mm, crestLen, -4*mm);
Line2.setEntirePath( Array( Array(3*mm, -mm), Array(crestLen, -mm), Array(crestLen, -4*mm), Array(3*mm, -4*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

Line2 = Oporka1.pathItems.rectangle( wi/2 - 0.25*mm, -mm, wi/2 + 0.25*mm, -4*mm);
Line2.setEntirePath( Array( Array(wi/2 - 0.25*mm, -mm), Array(wi/2 + 0.25*mm, -mm), Array(wi/2 + 0.25*mm, -4*mm), Array(wi/2 - 0.25*mm, -4*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

OW2 = OW1.duplicate();
OW2.rotate(180);
OW2.left = wi - crestLen;
	
}


function crest(){
var Crest1 = Oporka1.groupItems.add();
var Crest2 = Crest1;
var Crest3 = Oporka1.groupItems.add();
	
CrRV = Crest1.pathItems.add();
CrRV.setEntirePath( Array( Array(3*mm, -2.5*mm), Array(6*mm, -2.5*mm) ) );
CrRV.stroked = true;
CrRV.strokeWidth = 0.1*mm;
CrRV.strokeColor = app.activeDocument.swatches[Registr].color;
CrRV.filled = false;
CrRV.strokeOverprint = false;

CrRR = Crest1.pathItems.add();
CrRR.setEntirePath( Array( Array(4.5*mm, -mm), Array(4.5*mm, -4*mm) ) );
CrRR.stroked = true;
CrRR.strokeWidth = 0.1*mm;
CrRR.strokeColor = app.activeDocument.swatches[Registr].color;
CrRR.filled = false;
CrRR.strokeOverprint = false;

CrRL = Crest1.pathItems.add();
CrRL.setEntirePath( Array( Array(6*mm, -mm), Array(6*mm, -4*mm) ) );
CrRL.stroked = true;
CrRL.strokeWidth = 0.1*mm;
CrRL.strokeColor = app.activeDocument.swatches[Registr].color;
CrRL.filled = false;
CrRL.strokeOverprint = false;


V = 6.5*mm;

fills = sInks[0];

col = (sInks.length < 2 ? 1 : sInks.length);

for (i=1; i< col; i++){

CrNV = Crest1.pathItems.add();
CrNV.setEntirePath( Array( Array(V, -2.5*mm), Array(V+3*mm, -2.5*mm) ) );
CrNV.stroked = true;
CrNV.strokeWidth = 0.1*mm;
CrNV.filled = false;
CrNV.strokeOverprint = false;

CrNR = Crest1.pathItems.add();
CrNR.setEntirePath( Array( Array(V+1.5*mm, -mm), Array(V+1.5*mm, -4*mm) ) );
CrNR.stroked = true;
CrNR.strokeWidth = 0.1*mm;
CrNR.filled = false;
CrNR.strokeOverprint = false;

switch (fills){
	case  'Process Cyan': CrNV.strokeColor = PCyan; CrNR.strokeColor = PCyan; break;
	case  'Process Magenta': CrNV.strokeColor = PMagenta; CrNR.strokeColor = PMagenta; break;
	case  'Process Yellow': CrNV.strokeColor = PYellow; CrNR.strokeColor = PYellow; break;
	case  'Process Black':CrNV.strokeColor = PBlack; CrNR.strokeColor = PBlack; break;
	default:	CrNV.strokeColor=app.activeDocument.swatches[fills].color; 
				CrNR.strokeColor=app.activeDocument.swatches[fills].color; break;
	}
	
	
CrV = Crest1.pathItems.add();
CrV.setEntirePath( Array( Array(V, -2.5*mm), Array(V+3*mm, -2.5*mm) ) );
CrV.stroked = true;
CrV.strokeWidth = 0.1*mm;
CrV.filled = false;
CrV.strokeOverprint = true;

CrR = Crest1.pathItems.add();
CrR.setEntirePath( Array( Array(V+1.5*mm, -mm), Array(V+1.5*mm, -4*mm) ) );
CrR.stroked = true;
CrR.strokeWidth = 0.1*mm;
CrR.filled = false;
CrR.strokeOverprint = true;

switch (sInks[i]){
	case  'Process Cyan': CrV.strokeColor = PCyan; CrR.strokeColor = PCyan; break;
	case  'Process Magenta': CrV.strokeColor = PMagenta; CrR.strokeColor = PMagenta; break;
	case  'Process Yellow': CrV.strokeColor = PYellow; CrR.strokeColor = PYellow; break;
	case  'Process Black':CrV.strokeColor = PBlack; CrR.strokeColor = PBlack; break;
	default:	CrV.strokeColor=app.activeDocument.swatches[sInks[i]].color; 
				CrR.strokeColor=app.activeDocument.swatches[sInks[i]].color; break;
		}
	V += 3.5*mm;
	}
	
Crest2 = Crest1.duplicate();
Crest2.rotate(180);
Crest2.left = wi - crestLen;

CrCV = Crest3.pathItems.add();
CrCV.setEntirePath( Array( Array(wi/2 - 1.5*mm, -2.5*mm), Array(wi/2 + 1.5*mm, -2.5*mm) ) );
CrCV.stroked = true;
CrCV.strokeWidth = 0.1*mm;
CrCV.strokeColor = app.activeDocument.swatches[Registr].color;
CrCV.filled = false;
CrCV.strokeOverprint = false;

CrCR = Crest3.pathItems.add();
CrCR.setEntirePath( Array( Array(wi/2, -mm), Array(wi/2, -4*mm) ) );
CrCR.stroked = true;
CrCR.strokeWidth = 0.1*mm;
CrCR.strokeColor = app.activeDocument.swatches[Registr].color;
CrCR.filled = false;
CrCR.strokeOverprint = false;
	
}


function mirrs(){
	
xh2 = 0;
s = -7*mm;

var m1 = mirrs1.groupItems.add();

for (i = 0; i<sInks.length; i++){

xh2 = xh2+4.5*mm;
fills = sInks[i];

for (k=0; k<18; k++){

rect3 = m1.pathItems.add();
rect3.setEntirePath( Array( Array(xh2, s), Array(xh2, s+0.175*mm), Array(xh2-4*mm, s), Array(xh2-4*mm, s+0.175*mm) ) );
rect3.rotate(10*k);

switch (fills){
	case  'Process Cyan': rect3 .fillColor = PCyan; break;
	case  'Process Magenta': rect3 .fillColor = PMagenta; break;
	case  'Process Yellow': rect3 .fillColor = PYellow; break;
	case  'Process Black': rect3 .fillColor = PBlack; break;
	default: rect3.fillColor =app.activeDocument.swatches[fills].color;
	

	}

rect3 .closed = true;
rect3 .stroked = false;
rect3 .filled = true;
rect3 .fillOverprint = false;	


   };

};
mirrs1.top = -5*mm;
mirrs2 = mirrs1.duplicate();
mirrs2.top = hi+9*mm;

return xh2+4.5*mm;
}

function rect(mi) {
	
	xh = mi + 5*mm;
	xw = xh;
	//x15 = xw;
	j1=0;
	for (i=0; i < sInks.length; i++){
	 if (dlg.panel4.GRW.combo.find(sInks[i])==null){
		
		 xInks[j1]=sInks[i];
		 j1++;
	 }

 }

if (xInks.length*5*3*mm > wi/2) lenBool = true;
 //alert (xInks.length*5*3*mm+" "+wi/2+" "+lenBool);
if (dlg.panel4.GRW.combo.find("[None]")==null){
	
for (a = 0; a<xInks.length; a++){
	for (i=0; i < dlg.panel4.GRW.combo.items.length; i++){
		//xw = x15;
switch (xInks[a]){
	case  'Process Cyan': CMYKBool = true; break;
	case  'Process Magenta': CMYKBool = true; break;
	case  'Process Yellow': CMYKBool = true; break;
	case  'Process Black': CMYKBool = true; break;
	default: CMYKBool = false;	break;
	}

		 for (j = 0; j< 3; j++){
if (lenBool & !CMYKBool) j=3;			 
RangleW = rect1.pathItems.add();	
RangleW = rect1.pathItems.rectangle( 40*mm, -5*mm+xw, 4.9*mm, 4.9*mm);
RangleW.stroked = false;
RangleW.filled = true;
RangleW.fillOverprint = true;	

switch (dlg.panel4.GRW.combo.items[i].text){
	case  'Process Cyan': RangleW.fillColor = PCyan; break;
	case  'Process Magenta': RangleW.fillColor = PMagenta; break;
	case  'Process Yellow': RangleW.fillColor = PYellow; break;
	case  'Process Black':RangleW.fillColor =PBlack; break;
	default: RangleW.fillColor =app.activeDocument.swatches[dlg.panel4.GRW.combo.items[i].text].color; break;
			}
				xw+=5*mm;
		  }	 

//x15 += 15*mm;
	 	 }
    }
 }

 
for (i = 0; i<xInks.length; i++){

Rangle100 = rect1.pathItems.add();
Rangle40 = rect1.pathItems.add();
Rangle10 = rect1.pathItems.add();

fills = xInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': CMYKBool = true; break;
	case  'Process Magenta': CMYKBool = true; break;
	case  'Process Yellow': CMYKBool = true; break;
	case  'Process Black': CMYKBool = true; break;
	default: CMYKBool = false;	break;
	}


if (!lenBool || CMYKBool){
Rangle10 = rect1.pathItems.rectangle( 40*mm, -5*mm+xh, 4.9*mm, 4.9*mm);
Rangle10.stroked = true;
Rangle10.filled = true;
Rangle10.strokeWidth = 0.1*mm;
Rangle10.fillOverprint = true;	
Rangle10.strokeOverprint = true;

fills = xInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': Rangle10.fillColor = PCyan10; Rangle10.strokeColor = PCyan; break;
	case  'Process Magenta': Rangle10.fillColor = PMagenta10; Rangle10.strokeColor = PMagenta; break;
	case  'Process Yellow': Rangle10.fillColor = PYellow10; Rangle10.strokeColor = PYellow; break;
	case  'Process Black': Rangle10.fillColor = PBlack10; Rangle10.strokeColor = PBlack; break;
	default: Rangle10.fillColor =app.activeDocument.swatches[fills].color; 
	         Rangle10.fillColor.tint=10;
			 Rangle10.strokeColor =app.activeDocument.swatches[fills].color;	break;
	}

xh+=5*mm;

Rangle40 = rect1.pathItems.rectangle( 40*mm, -5*mm+xh, 4.9*mm, 4.9*mm);
Rangle40.stroked = true;
Rangle40.filled = true;
Rangle40.strokeWidth = 0.1*mm;
Rangle40.fillOverprint = true;
Rangle40.strokeOverprint = true;	

fills = xInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': Rangle40.fillColor = PCyan40; Rangle40.strokeColor = PCyan; break;
	case  'Process Magenta': Rangle40.fillColor = PMagenta40; Rangle40.strokeColor = PMagenta; break;
	case  'Process Yellow': Rangle40.fillColor = PYellow40; Rangle40.strokeColor = PYellow; break;
	case  'Process Black': Rangle40.fillColor = PBlack40; Rangle40.strokeColor = PBlack; break;
	default: Rangle40.fillColor =app.activeDocument.swatches[fills].color; 
	         Rangle40.fillColor.tint=40;
			 Rangle40.strokeColor =app.activeDocument.swatches[fills].color;	break;
	}

xh+=5*mm;
	}
	
Rangle100 = rect1.pathItems.rectangle( 40*mm, -5*mm+xh, 4.9*mm, 4.9*mm);
Rangle100.stroked = true;
Rangle100.filled = true;
Rangle100.strokeWidth = 0.1*mm;
Rangle100.fillOverprint = true;	
Rangle100.strokeOverprint = true;

fills = xInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': Rangle100.fillColor = PCyan; Rangle100.strokeColor = PCyan; break;
	case  'Process Magenta': Rangle100.fillColor = PMagenta; Rangle100.strokeColor = PMagenta; break;
	case  'Process Yellow': Rangle100.fillColor = PYellow; Rangle100.strokeColor = PYellow; break;
	case  'Process Black': Rangle100.fillColor = PBlack; Rangle100.strokeColor = PBlack; break;
	default: Rangle100.fillColor =app.activeDocument.swatches[fills].color; 
			 Rangle100.strokeColor =app.activeDocument.swatches[fills].color;	break;
	}

xh+=5*mm;

	};
	rect1.top = -5*mm;
if (!lenBool)	{
	rect2 = rect1.duplicate();
	rect2.top = hi+10*mm;
		}
	return xh+5*mm;

}

function txt( lent){
	

yt = hi/2+10;
T1.top=hi/2+10;
var sk = new Array;
sk = sInks;
se=sk.length;

var textNamb =  newLayer.textFrames.add();
textNamb.textRange.characterAttributes.size = 10;
textNamb.contents = Namb;
//textNamb.rotate(90);
textNamb.left = lent;
textNamb.textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textNamb.top =   -5*mm;

if (Opaq!=None) sk[se] =  Opaq;
//alert(''+sk[se]);
for (i = 0; i<sk.length; i++){
var TextC = "";
var textRef =  T1.textFrames.add();
textRef.textRange.characterAttributes.size = 10;
textRef.contents = TextC;
textRef.rotate(90);
textRef.left = 1*mm;

fills = sk[i];
//.textRange.characters[i].characterAttributes.horizontalScale;
switch (fills){
	case  'Process Cyan':  TextC = "C"; textRef.textRange.characterAttributes.fillColor = PCyan; break;
	case  'Process Magenta': TextC = "M"; textRef.textRange.characterAttributes.fillColor = PMagenta; break;
	case  'Process Yellow': TextC = "Y"; textRef.textRange.characterAttributes.fillColor = PYellow; break;
	case  'Process Black': TextC = "K1"; textRef.textRange.characterAttributes.fillColor = PBlack; break;
	default: TextC = fills; textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color;
	}
//alert(''+TextC);
if (TextC.indexOf("PANTONE ") ==0) TextC = TextC.substring(7);
if (Opaq!=None && fills == Opaq) {TextC = "W"; textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color};

textRef.top = T1.height;
textRef.contents = TextC;

};
//textRef.createOutline();

T1.rotate(-90);
T1.top =   -5*mm;
T1.left = textNamb.left + textNamb.textRange.characters.length*4.5;

strelka = newLayer.pathItems.add();
strelka.setEntirePath( Array( Array(0, 0), Array(0, -1.314*mm), Array(2.95*mm, -1.314*mm), Array(2.47*mm, -0.487*mm), Array(4.778*mm, -1.43*mm),Array(2.47*mm, -2.373*mm),Array(2.95*mm, -1.546*mm),Array(0, -1.546*mm),Array(0, -3*mm),Array(5*mm, -3*mm),Array(5*mm, 0) ) );
strelka.closed = true;
strelka.filled = true;
strelka.stroked = false;
strelka.fillColor =app.activeDocument.swatches[Registr].color;
strelka.fillOverprint = true;
strelka.top =   -5*mm;
strelka.left= T1.left+T1.width +5*mm;
}


function auto(){
	d = 10;

re = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re.setEntirePath( Array( Array(wi-d*mm, hi+5*mm), Array(wi-d*mm, hi+9*mm), Array(wi-(d+2.5)*mm, hi+9*mm), Array(wi-(d+2.5)*mm, hi+5*mm) ) );
re.closed = true;
re.filled = true;
re.stroked = false;
re.fillOverprint = true;
switch (sInks[0]){
    case  'Process Cyan': re.fillColor = PCyan; break;
    case  'Process Magenta': re.fillColor = PMagenta; break;
    case  'Process Yellow': re.fillColor = PYellow; break;
    case  'Process Black':re.fillColor =PBlack; break;
    default: re.fillColor =app.activeDocument.swatches[sInks[0]].color; break;

}

re = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re.setEntirePath( Array( Array(wi-(d+7.5)*mm, hi+5*mm), Array(wi-(d+7.5)*mm, hi+9*mm), Array(wi-(d+12.5)*mm, hi+9*mm), Array(wi-(d+12.5)*mm, hi+5*mm) ) );
re.closed = true;
re.filled = true;
re.stroked = false;
re.fillOverprint = true;
switch (sInks[0]){
    case  'Process Cyan': re.fillColor = PCyan; break;
    case  'Process Magenta': re.fillColor = PMagenta; break;
    case  'Process Yellow': re.fillColor = PYellow; break;
    case  'Process Black':re.fillColor =PBlack; break;
    default: re.fillColor =app.activeDocument.swatches[sInks[0]].color; break;
                }
re = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re.setEntirePath( Array( Array(wi-(d+15)*mm, hi+5*mm), Array(wi-(d+15)*mm, hi+9*mm), Array(wi-(d+17.5)*mm, hi+9*mm), Array(wi-(d+17.5)*mm, hi+5*mm) ) );
re.closed = true;
re.filled = true;
re.stroked = false;
re.fillOverprint = true;
switch (sInks[0]){
    case  'Process Cyan': re.fillColor = PCyan; break;
    case  'Process Magenta': re.fillColor = PMagenta; break;
    case  'Process Yellow': re.fillColor = PYellow; break;
    case  'Process Black':re.fillColor =PBlack; break;
    default: re.fillColor =app.activeDocument.swatches[sInks[0]].color; break;
                }
                
re = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re.setEntirePath( Array( Array(wi-(d+25.5)*mm, hi+5*mm), Array(wi-(d+25.5)*mm, hi+9*mm), Array(wi-(d+27.5)*mm, hi+9*mm), Array(wi-(d+29.8)*mm, hi+5*mm) ) );
re.closed = true;
re.filled = true;
re.stroked = false;
re.fillOverprint = true;
switch (sInks[0]){
    case  'Process Cyan': re.fillColor = PCyan; break;
    case  'Process Magenta': re.fillColor = PMagenta; break;
    case  'Process Yellow': re.fillColor = PYellow; break;
    case  'Process Black':re.fillColor =PBlack; break;
    default: re.fillColor =app.activeDocument.swatches[sInks[0]].color; break;
                }
                
autoX = re.left;

//alert (sInks);
                
for (i=1; i < sInks.length; i++){
    
re = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re.setEntirePath( Array( Array(wi-(d+25.5)*mm, hi+5*mm), Array(wi-(d+25.5)*mm, hi+9*mm), Array(wi-(d+27.5)*mm, hi+9*mm), Array(wi-(d+29.8)*mm, hi+5*mm) ) );
re.closed = true;
re.filled = true;
re.stroked = false;
re.fillOverprint = true;
switch (sInks[0]){
    case  'Process Cyan': re.fillColor = PCyan; break;
    case  'Process Magenta': re.fillColor = PMagenta; break;
    case  'Process Yellow': re.fillColor = PYellow; break;
    case  'Process Black':re.fillColor =PBlack; break;
    default: re.fillColor =app.activeDocument.swatches[sInks[0]].color; break;
                }
autoX -= 13*mm;
            
re1 = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re1.setEntirePath( Array( Array(wi-(d+25.5)*mm, hi+5*mm), Array(wi-(d+25.5)*mm, hi+9*mm), Array(wi-(d+27.5)*mm, hi+9*mm), Array(wi-(d+29.8)*mm, hi+5*mm) ) );
re1.closed = true;
re1.filled = true;
re1.stroked = false;
re1.fillOverprint = true;
switch (sInks[i]){
    case  'Process Cyan': re1.fillColor = PCyan; break;
    case  'Process Magenta': re1.fillColor = PMagenta; break;
    case  'Process Yellow': re1.fillColor = PYellow; break;
    case  'Process Black':re1.fillColor =PBlack; break;
    default: re1.fillColor =app.activeDocument.swatches[sInks[i]].color; break;
                }
re1.left = autoX;    
i++;
autoX -= 13*mm;
if (i < sInks.length){
re2 = Auto1.pathItems.rectangle( 0, hi, 1, hi+4*mm);
re2.setEntirePath( Array( Array(wi-(d+25.5)*mm, hi+5*mm), Array(wi-(d+25.5)*mm, hi+9*mm), Array(wi-(d+27.5)*mm, hi+9*mm), Array(wi-(d+29.8)*mm, hi+5*mm) ) );
re2.closed = true;
re2.filled = true;
re2.stroked = false;
re2.fillOverprint = true;
switch (sInks[i]){
    case  'Process Cyan': re2.fillColor = PCyan; break;
    case  'Process Magenta': re2.fillColor = PMagenta; break;
    case  'Process Yellow': re2.fillColor = PYellow; break;
    case  'Process Black':re2.fillColor =PBlack; break;
    default: re2.fillColor =app.activeDocument.swatches[sInks[i]].color; break;
                }
    
re2.left = autoX;
    
    } else break;
autoX -= 13*mm;
re.left = autoX ;    
                    
        }
    
    


}