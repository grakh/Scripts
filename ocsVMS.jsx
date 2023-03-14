//�Klimov S.V. (don@list.ru)

mm = 72/25.4;
var flag = false;

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

PCyan02 = new CMYKColor();
PCyan02.name = 'Process Cyan';
PCyan02.black =0; 
PCyan02.cyan = 0.2; 
PCyan02.magenta = 0; 
PCyan02.yellow = 0;

PMagenta02 = new CMYKColor();
PMagenta02 .name = 'Process Magenta';
PMagenta02 .black =0; 
PMagenta02 .cyan = 0; 
PMagenta02 .magenta = 0.2; 
PMagenta02 .yellow = 0;

PYellow02 = new CMYKColor();
PYellow02.name = 'Process Yellow';
PYellow02.black =0; 
PYellow02.cyan = 0; 
PYellow02.magenta = 0; 
PYellow02.yellow = 0.2;

PBlack02 = new CMYKColor();
PBlack02.name = 'Process Black';
PBlack02.black =0.2; 
PBlack02.cyan = 0; 
PBlack02.magenta = 0; 
PBlack02.yellow = 0;




// ------------------------------------------------- start

docRef = activeDocument;

for ( i = 0; i < activeDocument.layers.length; i++ ) {
    activeDocument.layers[i].locked = true;
    }

newLayer = activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
newLayer.name="OCS";

wi= docRef.width;
hi = docRef.height;
//lenBool = false;
CMYKBool = false;

docRef.rulerOrigin = Array (0,0);

var Gr1 = newLayer.groupItems.add();
var Gr2 = newLayer.groupItems.add();
var Oporka1 = Gr1.groupItems.add();
var Oporka2 = Gr2.groupItems.add();
var Crest1 = Gr1.groupItems.add();
var Crest2 = Gr2.groupItems.add();
var mirrs1 = Gr1.groupItems.add();
var mirrs2 = Gr2.groupItems.add();
var rect1 = Gr1.groupItems.add();
var rect2 = Gr2.groupItems.add();
var T1 = Gr1.groupItems.add();   
var T2 = Gr2.groupItems.add(); 
var Auto1 = Gr1.groupItems.add();
var Auto2 = Gr2.groupItems.add();
var Trean = newLayer.groupItems.add();

var font ="EuclidCircularA-Regular";
var fontb ="EuclidCircularA-Bold";
u=0;
var sInks = new Array;
var xInks = new Array;
var sI = new Array;

var js=0;
for(var i=0; i<docRef.inkList.length; i++) {
	//alert (docRef.inkList[i].name);
	if (docRef.inkList[i].inkInfo.printingStatus == InkPrintStatus.DISABLEINK) continue;
		sI[js] = docRef.inkList[i].name;
		//alert (sI[js]);
		js++;
	
//alert (docRef.inkList[i].inkInfo.printingStatus);
}

var Da= new Date ();
//Dat=Da.toLocaleString();
var Dat= String (''+Da.getDate() +'.'+ (Da.getMonth()+1)+'.'+  Da.getFullYear() );

/* sI[0]='Process Cyan';
sI[1]='Process Magenta';
sI[2]='Process Yellow';
sI[3]='Process Black'; */

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
namb:  Group { orientation: 'row', alignment: 'left',\
			texte: StaticText { preferredSize: [32,20], alignment: 'left'},\
            text: StaticText {text:'Заказ: '},\
            texte: EditText { preferredSize: [110,20], alignment: 'left'},\
			text1: StaticText {text:',    Дата:'},\
            texte1: EditText { preferredSize: [115,20], alignment: 'left'},\
			}\
txtZ:   Group { orientation: 'row', alignment: 'left',\
			texte: StaticText { preferredSize: [12,20], alignment: 'left'},\
            text: StaticText {text:'Заказчик:  '},\
            texte: EditText { preferredSize: [300,20], alignment: 'left'},\
			}\
txtN:   Group { orientation: 'row', alignment: 'left',\
			texte: StaticText { preferredSize: [10,20], alignment: 'left'},\
            text1: StaticText {text:'Название:'},\
            texte1: EditText { preferredSize: [300,20], alignment: 'left'},\
			}\
Rapp:   Group { orientation: 'row', alignment: 'left',\
			texte: StaticText { preferredSize: [54,20], alignment: 'left'},\
            text: StaticText {text:'Z= '},\
            texte: EditText { preferredSize: [50,20], alignment: 'left'},\
            text1: StaticText {text:',    Дизайнер:'},\
            texte1: EditText { preferredSize: [147,20], alignment: 'left'},\
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
dlg.text = "Operational Control Scale VMS";
dlg.panel4.GRW.combo.add("item", "[None]");

for(i=0; i<sI.length; i++) {
dlg.panel2.GR.combo.add("item", sI[i]);
}
dlg.panel2.GR.combo.items[0].selected = true;

dlg.namb.texte1.text = Dat;
dlg.Rapp.texte.text =(Math.round((wi/2.83465)/3.175)).toString();
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



//start
dlg.buttons.ok.onClick = function(){



Opaq = None;

ur=0;
for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
    if (dlg.panel2.GR.combo.items[i].text!=Opaq) { 
	  sInks[ur] = dlg.panel2.GR.combo.items[i].text;  ur++ };
    };

//alert(''+ sInks);


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

var textM = 'Z='+dlg.Rapp.texte.text+'/'+dlg.namb.texte1.text+'/'+dlg.Rapp.texte1.text+'/'+dlg.txtN.texte1.text+'/'+dlg.namb.texte.text+'/'+dlg.txtZ.texte.text;
//alert(textM);

		oporka();
	le = crest();
		txt(le);
		
		auto();
		
	
  lent = rect();
	mi= mirrs(lent);
		 
		txtColor(le, textM);
		treangle();
	
}

function oporka(){
	
Oporka = Oporka1.pathItems.rectangle( -2*mm, 0, wi, 5.4*mm);
//Oporka.setEntirePath( Array( Array(0, 0), Array(wi, 0), Array(wi, -5*mm), Array(0, -5*mm) ) );
Oporka.closed = true;
Oporka.filled = true;
Oporka.stroked = false;
Oporka.fillColor =app.activeDocument.swatches[Registr].color;
//Oporka.fillColor.tint=85;
//Oporka.fillOverprint = true;

//var OW1 = Oporka1.groupItems.add();
//var OW2 = OW1;

countColor = sInks.length;
crestLen = countColor*5*mm - 5*mm;

Line2 = Oporka1.pathItems.rectangle( -7.2*mm, 10*mm, 30*mm, -5*mm );
Line2.setEntirePath( Array( Array(1.7*mm, -3*mm), Array(1.7*mm, -6.4*mm), Array(0.3*mm, -4.7*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

var trian = wi/2 - 4*mm;
Line2 = Oporka1.pathItems.rectangle( -7.2*mm, 10*mm, 30*mm, -5*mm );
Line2.setEntirePath( Array( Array(trian - 0.3*mm, -3.8*mm), Array(trian - 0.3*mm, -5.6*mm), Array(trian - 1.7*mm, -4.7*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

var trian = wi - 9*mm;
Line2 = Oporka1.pathItems.rectangle( -7.2*mm, 10*mm, 30*mm, -5*mm );
Line2.setEntirePath( Array( Array(trian - 0.3*mm, -3.8*mm), Array(trian - 0.3*mm, -5.6*mm), Array(trian - 1.7*mm, -4.7*mm) ) );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

Oporka2 = Oporka1.duplicate();
Oporka2.top = hi+7.4*mm;

	
}


function crest(){
V = wi/2 - crestLen - 7*mm;
Line1 = Crest1.pathItems.rectangle( -2.2*mm, wi/2 - crestLen - 7*mm, crestLen, 5*mm);
//Line2.setEntirePath( Array( Array(3*mm, -mm), Array(crestLen, -mm), Array(crestLen, -6*mm), Array(3*mm, -6*mm) ) );
Line1.closed = true;
Line1.filled = true;
Line1.stroked = false;
Line1.fillColor = PWhite;
Line1.fillOverprint = false;
	


fills = sInks[0];

col = (sInks.length < 2 ? 1 : sInks.length);

for (i=1; i< col; i++){

CrNV = Crest1.pathItems.add();
CrNV.setEntirePath( Array( Array(V, -4.7*mm), Array(V+5*mm, -4.7*mm) ) );
CrNV.stroked = true;
CrNV.strokeWidth = 0.05*mm;
CrNV.filled = false;
CrNV.strokeOverprint = false;

CrNR = Crest1.pathItems.add();
CrNR.setEntirePath( Array( Array(V+2.5*mm, -2.2*mm), Array(V+2.5*mm, -7.2*mm) ) );
CrNR.stroked = true;
CrNR.strokeWidth = 0.05*mm;
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
CrV.setEntirePath( Array( Array(V, -4.7*mm), Array(V+5*mm, -4.7*mm) ) );
CrV.stroked = true;
CrV.strokeWidth = 0.05*mm;
CrV.filled = false;
CrV.strokeOverprint = true;

CrR = Crest1.pathItems.add();
CrR.setEntirePath( Array( Array(V+2.5*mm, -2.2*mm), Array(V+2.5*mm, -7.2*mm) ) );
CrR.stroked = true;
CrR.strokeWidth = 0.05*mm;
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
	V += 5*mm;
	}
	
/* 	Crest2 = Crest1.duplicate();
	Crest2.top = hi+7.2*mm; */

return Crest1.left;
	
}


function mirrs(ret){
var xret = ret-5*mm;
var mir = mirrs1.groupItems.add();
Line2 = mir.pathItems.rectangle( -7.2*mm, xret, -countColor*5.2*mm, -5*mm );
Line2.closed = true;
Line2.filled = true;
Line2.stroked = false;
Line2.fillColor = PWhite;
Line2.fillOverprint = false;

if (dlg.panel4.GRW.combo.find("[None]")==null){
	for (i=0; i < dlg.panel4.GRW.combo.items.length; i++){
		Line3 = mir.pathItems.rectangle( -7.2*mm, xret, -countColor*5.2*mm, -5*mm );
		Line3.closed = true;
		Line3.filled = true;
		Line3.stroked = false;
		Line3.fillOverprint = true;

		switch (dlg.panel4.GRW.combo.items[i].text){
			
			case  'Process Cyan': Line3.fillColor = PCyan; break;
			case  'Process Magenta': Line3.fillColor = PMagenta; break;
			case  'Process Yellow': Line3.fillColor = PYellow; break;
			case  'Process Black':Line3.fillColor =PBlack; break;
			default: Line3.fillColor =app.activeDocument.swatches[dlg.panel4.GRW.combo.items[i].text].color; break;
			}

		}
}

xh2 = xret - countColor*5.2*mm;
s = -4.9*mm;

var m1 = mir.groupItems.add();

for (i = 0; i<sInks.length; i++){

xh2 += 5.2*mm;
fills = sInks[i];

for (k=0; k<12; k++){

rect3 = m1.pathItems.add();
rect3.setEntirePath( Array( Array(xh2, s), Array(xh2, s+0.327*mm), Array(xh2-5*mm, s), Array(xh2-5*mm, s+0.327*mm) ) );
rect3.rotate(15*k);
rect3 .closed = true;
rect3 .stroked = false;
rect3 .filled = true;
rect3 .fillOverprint = true;	

switch (fills){
	case  'Process Cyan': rect3 .fillColor = PCyan; break;
	case  'Process Magenta': rect3 .fillColor = PMagenta; break;
	case  'Process Yellow': rect3 .fillColor = PYellow; break;
	case  'Process Black': rect3 .fillColor = PBlack; break;
	default: rect3.fillColor =app.activeDocument.swatches[fills].color;

	}
//alert(dlg.panel4.GRW.combo.find(fills) + ' - ' + fills);
	if (dlg.panel4.GRW.combo.find(fills) != null) {
		switch (fills){
			case  'Process Cyan': rect3 .fillColor = PCyan02; break;
			case  'Process Magenta': rect3 .fillColor = PMagenta02; break;
			case  'Process Yellow': rect3 .fillColor = PYellow02; break;
			case  'Process Black': rect3 .fillColor = PBlack02; break;
			default: rect3.fillColor.tint = 0;
		
			}
	}

   };
   //m1.top = -5.2*mm;
};
if (mirrs1.left >= wi/2 + 5*mm){
		mirrs2 = mirrs1.duplicate();
		mirrs2.top = hi + 7.2*mm;
		rect2 = rect1.duplicate();
		rect2.top = hi + 7.2*mm;
	} else {
		mirrs1.top = hi + 7.2*mm;
		mirrs1.left = wi/2 + 5*mm;
	}

return xh2 + 5.2*mm;
}

function rect() {
	

	//x15 = xw;
	j1=0;
	for (i=0; i < sInks.length; i++){
	 if (dlg.panel4.GRW.combo.find(sInks[i])==null){
		
		 xInks[j1]=sInks[i];
		 j1++;
	 }

 }

 xh = 0;
 xw = xh;

//if (xInks.length*5*3*mm > wi/3) lenBool = true;
 //alert (xInks.length*5*3*mm+" "+wi/2+" "+lenBool);


 
for (i = 0; i<sInks.length; i++){

Rangle100 = rect1.pathItems.add();
Rangle40 = rect1.pathItems.add();

fills = sInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': CMYKBool = true; break;
	case  'Process Magenta': CMYKBool = true; break;
	case  'Process Yellow': CMYKBool = true; break;
	case  'Process Black': CMYKBool = true; break;
	default: CMYKBool = true;	break;
	}


if (CMYKBool){

Rangle40 = rect1.pathItems.rectangle( 40*mm, -5*mm+xh, 5*mm, 5*mm);
Rangle40.stroked = true;
Rangle40.filled = true;
Rangle40.strokeWidth = 0.1*mm;
Rangle40.fillOverprint = false;
Rangle40.strokeOverprint = false;	
Rangle40.strokeColor = app.activeDocument.swatches[Registr].color;

fills = sInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': Rangle40.fillColor = PCyan40; break;
	case  'Process Magenta': Rangle40.fillColor = PMagenta40; break;
	case  'Process Yellow': Rangle40.fillColor = PYellow40; break;
	case  'Process Black': Rangle40.fillColor = PBlack40; break;
	default: Rangle40.fillColor =app.activeDocument.swatches[fills].color; 
				Rangle40.fillColor.tint = 40;
	}

xh+=5*mm;
	}
	
Rangle100 = rect1.pathItems.rectangle( 40*mm, -5*mm+xh, 5*mm, 5*mm);
Rangle100.stroked = true;
Rangle100.filled = true;
Rangle100.strokeWidth = 0.1*mm;
Rangle100.fillOverprint = false;	
Rangle100.strokeOverprint = false;	
Rangle100.strokeColor = app.activeDocument.swatches[Registr].color;

fills = sInks[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': Rangle100.fillColor = PCyan; break;
	case  'Process Magenta': Rangle100.fillColor = PMagenta; break;
	case  'Process Yellow': Rangle100.fillColor = PYellow; break;
	case  'Process Black': Rangle100.fillColor = PBlack; break;
	default: Rangle100.fillColor =app.activeDocument.swatches[fills].color; 
	}

xh+=5*mm;

	};
	rect1.top = -2.2*mm;
	rect1.left = wi-15*mm - xh;
/* if (!lenBool)	{
	rect2 = rect1.duplicate();
	rect2.top = hi+10*mm;
		} */


	return rect1.left + 3*mm;

}

function txt(lent){
	
	
		for (i = 1; i<sInks.length; i++){

			var textRef =  Crest1.textFrames.add();
			textRef.textRange.characterAttributes.size = 5;
			textRef.textRange.characterAttributes.textFont = app.textFonts.getByName(font);
			textRef.textRange.characterAttributes.overprintFill = true;
			//textRef.contents = TextC;
			//textRef.rotate(90);
			//textRef.left = 14;
		
			fills = sInks[i];


			textRef.contents = i;

			switch (fills){
				case  'Process Cyan':  textRef.textRange.characterAttributes.fillColor = PCyan; break;
				case  'Process Magenta': textRef.textRange.characterAttributes.fillColor = PMagenta; break;
				case  'Process Yellow': textRef.textRange.characterAttributes.fillColor = PYellow; break;
				case  'Process Black':  textRef.textRange.characterAttributes.fillColor = PBlack; break;
				default: textRef.textRange.characterAttributes.fillColor = docRef.swatches[fills].color;

				}

			var c = i-1;
			textRef.top = -2.9*mm;
			textRef.left = lent + 2.8*mm + c*5*mm;

		};

		Crest2 = Crest1.duplicate();
		Crest2.top = hi+7.2*mm;

}


function auto(){

var Auto = Auto1.groupItems.add();
var re = Auto.pathItems.ellipse( -3.5*mm, 2.7*mm, 5.8*mm, 2.4*mm, false, true );
//re.setEntirePath( Array( Array(wi-d*mm, hi+5*mm), Array(wi-d*mm, hi+8*mm), Array(wi-(d+2.5)*mm, hi+8*mm), Array(wi-(d+2.5)*mm, hi+5*mm) ) );
re.closed = true;
re.filled = true;
re.stroked = false;
re.fillOverprint = false;
re.fillColor = PWhite;

var liV = Auto.pathItems.add();
liV.setEntirePath( Array( Array(2.7*mm, -4.7*mm), Array(8.5*mm, -4.7*mm)) );
liV.filled = false;
liV.stroked = true;
liV.strokeWidth = 0.05*mm;
liV.strokeColor = app.activeDocument.swatches[Registr].color;

var liV = Auto.pathItems.add();
liV.setEntirePath( Array( Array(5.6*mm, -3.5*mm), Array(5.6*mm, -5.9*mm)) );
liV.filled = false;
liV.stroked = true;
liV.strokeWidth = 0.05*mm;
liV.strokeColor = app.activeDocument.swatches[Registr].color;

var re1 = Auto.pathItems.ellipse( -3.9*mm, 4.7*mm, 0.5*mm, 0.5*mm, false, true );
re1.closed = true;
re1.filled = true;
re1.stroked = false;
re1.fillOverprint = false;
re1.fillColor = app.activeDocument.swatches[Registr].color;

var re2 = re1.duplicate();
re2.left = 6.0*mm;

var re3 = re1.duplicate();
re3.top = -5.0*mm;

var re4 = re1.duplicate();
re4.top = -5.0*mm;
re4.left = 6.0*mm;

var A2 = Auto.duplicate();
	A2.left = wi/2 - 2.9*mm;
var A3 = Auto.duplicate();
	A3.left = wi - 7.9*mm;


Auto2 = Auto1.duplicate();
Auto2.top = hi + 5.9*mm;

}

function txtColor(cLeft, txt){

	for (i = 0; i<sInks.length; i++){
		var TextC = "";
		var textRefC =  T1.textFrames.add();
		textRefC.textRange.characterAttributes.textFont = app.textFonts.getByName(fontb);
		textRefC.textRange.characterAttributes.size = 7;
		
		fills = sInks[i];

		//.textRange.characters[i].characterAttributes.horizontalScale;
		switch (fills){
			case  'Process Cyan':  TextC = "C"; textRefC.textRange.characterAttributes.fillColor = PCyan; break;
			case  'Process Magenta': TextC = "M"; textRefC.textRange.characterAttributes.fillColor = PMagenta; break;
			case  'Process Yellow': TextC = "Y"; textRefC.textRange.characterAttributes.fillColor = PYellow; break;
			case  'Process Black': TextC = "K"; textRefC.textRange.characterAttributes.fillColor = PBlack; break;
			default: TextC = fills; textRefC.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color;
			}
		//alert(''+TextC);
		if (TextC.indexOf("PANTONE ") == 0) TextC = 'P'+TextC.substring(8, TextC.lastIndexOf(' '));
		if (dlg.panel4.GRW.combo.find(fills) != null) {TextC = "W"; textRefC.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color};
		
		textRefC.left = T1.width;
		textRefC.contents = TextC;
		
		};
		//textRef.createOutline();
		T1.top =   -3.3*mm;
		T1.left = 10.5*mm;
		if (T1.left + T1.width + 2*mm >= cLeft) T1.width = cLeft - T1.left - 2*mm;
	
	Line2 = Oporka1.pathItems.rectangle( -7.2*mm, 10*mm, T1.width+2*mm, -5*mm );
	Line2.closed = true;
	Line2.filled = true;
	Line2.stroked = false;
	Line2.fillColor = PWhite;
	Line2.fillOverprint = false;

var textRef2 =  T2.textFrames.add();
	textRef2.textRange.characterAttributes.textFont = app.textFonts.getByName(fontb);
	textRef2.textRange.characterAttributes.size = 7;
	textRef2.textRange.characterAttributes.fillColor = app.activeDocument.swatches[Registr].color;
	textRef2.contents = txt;
	T2.top =   hi + 6*mm;
	T2.left = 10.5*mm;
	if (T1.left + T2.width + 2*mm >= cLeft) T2.width = cLeft - T1.left - 2*mm;

	Line2 = Oporka2.pathItems.rectangle( hi+7.2*mm, 10*mm, T2.width+2*mm, 5*mm );
	Line2.closed = true;
	Line2.filled = true;
	Line2.stroked = false;
	Line2.fillColor = PWhite;
	Line2.fillOverprint = false;

}

function treangle(){

angle = Trean.pathItems.add();
angle.setEntirePath( Array( Array(-mm, -10.4*mm), Array(-3*mm, -10.4*mm), Array(-3*mm, -8.4*mm) ) );
angle.stroked = true;
angle.strokeWidth = 0.2*mm;
angle.filled = false;
angle.strokeOverprint = false;
angle.strokeColor = app.activeDocument.swatches[Registr].color;

angle = Trean.pathItems.add();
angle.setEntirePath( Array( Array(wi+3*mm, -8.4*mm), Array(wi+3*mm, -10.4*mm), Array(wi+mm, -10.4*mm) ) );
angle.stroked = true;
angle.strokeWidth = 0.2*mm;
angle.filled = false;
angle.strokeOverprint = false;
angle.strokeColor = app.activeDocument.swatches[Registr].color;

angle = Trean.pathItems.add();
angle.setEntirePath( Array( Array(wi+3*mm, hi+8.4*mm), Array(wi+3*mm, hi+10.4*mm), Array(wi+mm, hi+10.4*mm) ) );
angle.stroked = true;
angle.strokeWidth = 0.2*mm;
angle.filled = false;
angle.strokeOverprint = false;
angle.strokeColor = app.activeDocument.swatches[Registr].color;

angle = Trean.pathItems.add();
angle.setEntirePath( Array( Array(-3*mm, hi+8.4*mm), Array(-3*mm, hi+10.4*mm), Array(-mm, hi+10.4*mm) ) );
angle.stroked = true;
angle.strokeWidth = 0.2*mm;
angle.filled = false;
angle.strokeOverprint = false;
angle.strokeColor = app.activeDocument.swatches[Registr].color;

}