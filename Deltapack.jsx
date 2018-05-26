//©Klimov S.V. (don@list.ru)

function ellip (ins,hi,wi,Ops,Opaq,Namb,insp,None,Registr,Rapport){

mms = 72/25.4;
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

d=-1;

var  insk = new Array;
for (i = 0; i<ins.length; i++){
if (ins[i]!=Opaq) {d++; insk[d]=ins[i]};

}

var Gr1 = newLayer.groupItems.add();

var Tel1 = Gr1.groupItems.add();
var Tel2 = Gr1.groupItems.add();
var Tel3 = Gr1.groupItems.add();
var Tel4 = Gr1.groupItems.add();
yw1 = 14;
yw2 = 16.15;
ywk = 16;
xh2 = hi-8;

delh = (hi/2) - 70;
kh=delh/3;
kxh = kh/ins.length;
//-------------------------------------------------------------------------01
//alert (''+Ops);
for (i = 0; i<insk.length; i++){

ellipses2 = Tel1.pathItems.add();
xh2 = xh2-10;

ellipsesk = Tel1.pathItems.ellipse(xh2, ywk, 6, 6, false, false );
ellipsesk.stroked = true;
ellipsesk.filled = false;
ellipsesk.strokeWidth = 0.2*mms;
//ellipsesk.left = ywk;

ellipses2 = Tel1.pathItems.ellipse(xh2-1, ywk+1, 4, 4, false, false );
//ellipses2.left = yw2;
fills = ins[i];
//alert (''+fills);
switch (Ops){
	case  'Process Cyan': ellipsesk.strokeColor =PCyan; break;
	case  'Process Magenta': ellipsesk.strokeColor =PMagenta; break;
	case  'Process Yellow': ellipsesk.strokeColor =PYellow; break;
	case  'Process Black': ellipsesk.strokeColor =PBlack; break;
	default: ellipsesk.strokeColor =app.activeDocument.swatches[Ops].color;
	}
if (Opaq!=None & fills == Ops) fills=Opaq;
switch (fills){
	case  'Process Cyan': ellipses2.fillColor = PCyan; break;
	case  'Process Magenta': ellipses2.fillColor = PMagenta; break;
	case  'Process Yellow': ellipses2.fillColor = PYellow; break;
	case  'Process Black': ellipses2.fillColor = PBlack; break;
	default: ellipses2.fillColor =app.activeDocument.swatches[fills].color; 
	}
ellipses2.stroked = false;
ellipses2.filled = true;
ellipses2.fillOverprint = false;	

//alert (''+i+' '+ins[i]+' '+ fills);
};
//---------------------------------------------------------------------------02
xh2 = xh2-Tel1.height-20;

for (i = 0; i<insk.length; i++){

ellipses1 = Tel2.pathItems.add();
xh2 = xh2-15;

ellipses1 = Tel2.pathItems.ellipse(xh2, yw1, 10.03, 10.03, false, false );

fills = insk[i];
//alert (''+fills);
switch (fills){
	case  'Process Cyan': ellipses1.fillColor = PCyan; break;
	case  'Process Magenta': ellipses1.fillColor = PMagenta; break;
	case  'Process Yellow': ellipses1.fillColor = PYellow; break;
	case  'Process Black': ellipses1.fillColor = PBlack; break;
	default: ellipses1.fillColor =app.activeDocument.swatches[fills].color;
	}
ellipses1.stroked = false;
ellipses1.filled = true;
ellipses1.fillOverprint = false;	




Opequ = Tel2.pathItems.add();
Opequ = Tel2.pathItems.ellipse(xh2, yw1, 10.03, 10.03, false, false );
Opequ.fillColor =app.activeDocument.swatches[Opaq].color;
Opequ.stroked = false;
Opequ.filled = true;
Opequ.fillOverprint = true;

if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   
   ellipses1 = Tel2.pathItems.ellipse(xh2-15, yw1, 10.03, 10.03, false, false );
switch (fills){
	case  'Process Cyan': ellipses1.fillColor = PCyan10; break;
	case  'Process Magenta': ellipses1.fillColor = PMagenta10; break;
	case  'Process Yellow': ellipses1.fillColor = PYellow10; break;
	case  'Process Black': ellipses1.fillColor = PBlack10; break;
	default: ;
	}
ellipses1.stroked = false;
ellipses1.filled = true;
ellipses1.fillOverprint = false;	

Opequ = Tel2.pathItems.add();
Opequ = Tel2.pathItems.ellipse(xh2-15, yw1, 10.03, 10.03, false, false );
Opequ.fillColor =app.activeDocument.swatches[Opaq].color;
Opequ.stroked = false;
Opequ.filled = true;
Opequ.fillOverprint = true;

xh2 = xh2-15       };
//alert (''+i+' '+ins[i]+' '+ fills);
};



xh2 = xh2-Tel2.height-20;

var rou = Tel3.groupItems.add();
     rou1 = rou.groupItems.add();
for (i = 0; i<insk.length; i++){

//ellipses3 = Tel .pathItems.add();
xh2 = xh2-15;
fills = insk[i];
//alert (''+fills);

	s=18.7;   
for (k=0; k<18; k++){

rect3 = rou1.pathItems.add();
rect3.setEntirePath( Array( Array(s, xh2), Array(s+0.2*mms, xh2), Array(s, xh2-5*mms), Array(s+0.2*mms, xh2-5*mms) ) );
rect3.rotate(10*k);

switch (fills){
	case  'Process Cyan': rect3 .fillColor = PCyan; break;
	case  'Process Magenta': rect3 .fillColor = PMagenta; break;
	case  'Process Yellow': rect3 .fillColor = PYellow; break;
	case  'Process Black': rect3 .fillColor = PBlack; break;
	default: rect3 .fillColor =app.activeDocument.swatches[fills].color;
	

	}

rect3 .closed = true;
rect3 .stroked = false;
rect3 .filled = true;
rect3 .fillOverprint = false;	


                                      };

//alert (''+fills);
};
if (Opaq!=None){
 xh2 = xh2-15;
for (k=0; k<18; k++){

rect4 = rou1.pathItems.add();
rect4.setEntirePath( Array( Array(s, xh2), Array(s+0.2*mms, xh2), Array(s, xh2-5*mms), Array(s+0.2*mms, xh2-5*mms) ) );
rect4.rotate(10*k);

switch (Opaq){
	case  'Process Cyan': rect3 .fillColor = PCyan; break;
	case  'Process Magenta': rect3 .fillColor = PMagenta; break;
	case  'Process Yellow': rect3 .fillColor = PYellow; break;
	case  'Process Black': rect3 .fillColor = PBlack; break;
	default: rect4 .fillColor =app.activeDocument.swatches[Opaq].color;
	

	}

rect4 .closed = true;
rect4 .stroked = false;
rect4 .filled = true;
rect4 .fillOverprint = false;                    
  };                                
/*								  
Opequ = Tel3.pathItems.add();
Opequ = Tel3.pathItems.ellipse(rect3.top-2.0, yw1, 10.03, 10.03, false, false );
Opequ.fillColor =app.activeDocument.swatches[Opaq].color;
Opequ.stroked = false;
Opequ.filled = true;
Opequ.fillOverprint = true;
//alert (''+i+' '+ins[i]+' '+ fills);
*/
                                                 };
											 
											 
											 
//-------------------------------------------------------------------------TXT											 
 var TT = Tel4.groupItems.add();
     T1 = TT.groupItems.add();   
yt = hi/2+10;
T1.top=hi/2+10;
var sk = new Array;
sk = insk;
se=sk.length;

if (Opaq!=None) sk[se] =  Opaq;
//alert(''+sk[se]);
for (i = 0; i<sk.length; i++){
var TextC = "";
var textRef =  T1.textFrames.add();
textRef.textRange.characterAttributes.size = 10;
textRef.contents = TextC;
textRef.rotate(90);
textRef.left = 14;

fills = sk[i];
//alert(''+sk[i]);
switch (fills){
	case  'Process Cyan':  TextC = "C"; textRef.textRange.characterAttributes.fillColor = PCyan; break;
	case  'Process Magenta': TextC = "M"; textRef.textRange.characterAttributes.fillColor = PMagenta; break;
	case  'Process Yellow': TextC = "Y"; textRef.textRange.characterAttributes.fillColor = PYellow; break;
	case  'Process Black': TextC = "K"; textRef.textRange.characterAttributes.fillColor = PBlack; break;
	default: TextC = fills; textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color;
	}
//alert(''+TextC);
if (TextC.indexOf("PANTONE ") ==0) TextC = TextC.substring(7);
if (Opaq!=None && fills == Opaq) {TextC = "W"; textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color};

textRef.top = T1.height;
textRef.contents = TextC;

};
textRef.createOutline();

T1.top=hi/2+10+T1.height;

//rast = Tel1.height+Tel2.height+Tel3.height+Tel4.height;
//kr = (hi/2-20)/ 4;

Tel3.top = Tel3.height+T1.top+20;
Tel2.top =Tel2.height+Tel3.top+20;

var textNamb =  T1.textFrames.add();
textNamb.textRange.characterAttributes.size = 9;
textNamb.contents = Namb;
textNamb.rotate(90);
textNamb.left = 15;
textNamb.textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textNamb.top = hi-Tel1.height-10- 15;

var textRapp =  T1.textFrames.add();
textRapp .textRange.characterAttributes.size = 9;
textRapp .contents = Rapport;
textRapp .rotate(90);
textRapp .left = 15;
textRapp .textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textRapp .top = hi/2-textRapp.height-5;


Gr2 = Gr1.duplicate();
Gr2.top = Gr1.top;
Gr2.left = wi-6.15*mms;

//Tel1.top = Tel2.top+Tel2.height+kr;



//                 ----------------------------------------------------------------------------------      2      ---------------------------------------------------------------------------------------------

var V1 = newLayer.groupItems.add();

var Vl1 = V1.groupItems.add();

ellip1 = Vl1.pathItems.add();
ellip1 = Vl1.pathItems.ellipse(20.6, 14.8, 3, 3, false, false );

ellip2 = Vl1.pathItems.add();
ellip2 = Vl1.pathItems.ellipse(20.6, 20.6, 3, 3, false, false );

ellip3 = Vl1.pathItems.add();
ellip3 = Vl1.pathItems.ellipse(32, 20.6, 3, 3, false, false );


//alert (''+fills);
switch (ins[0]){
	case  'Process Cyan': ellip1.fillColor = PCyan; ellip2.fillColor = PCyan; ellip3.fillColor = PCyan; break;
	case  'Process Magenta': ellip1.fillColor = PMagenta; ellip2.fillColor =  PMagenta; ellip3.fillColor =  PMagenta; break;
	case  'Process Yellow': ellip1.fillColor = PYellow; ellip2.fillColor = PYellow; ellip3.fillColor = PYellow; break;
	case  'Process Black': ellip1.fillColor = PBlack; ellip2.fillColor = PBlack; ellip3.fillColor = PBlack; break;
	default: ellip1.fillColor =app.activeDocument.swatches[ins[0]].color; 
                  ellip2.fillColor =app.activeDocument.swatches[ins[0]].color; 
                  ellip3.fillColor =app.activeDocument.swatches[ins[0]].color;
	}
ellip1.stroked = false;
ellip1.filled = true;
ellip1.fillOverprint = false;	
ellip2.stroked = false;
ellip2.filled = true;
ellip2.fillOverprint = false;	
ellip3.stroked = false;
ellip3.filled = true;
ellip3.fillOverprint = false;	


Xrec =14.4;
Yrec =91;


var XA = new Array(0, 5.2, 0, 5.2, 0, 5.2, 0, 5.2, 0, 5.2, 0, 5.2, 0, 5.2); 
var YA = new Array(0, 0, 11.8, 11.8, 23.6, 23.6, 35.4, 35.4, 47.2, 47.2, 59, 59, 70.8, 70.8); 

for (i = 0; i<insp.length & i<10; i++){

rectg =Vl1.pathItems.add();
rectg.setEntirePath( Array( Array(Xrec+XA[i], Yrec-YA[i]), Array(Xrec+XA[i]+4.2,Yrec-YA[i]), Array(Xrec+XA[i]+4.2, Yrec-5.9-YA[i]), Array(Xrec+XA[i], Yrec-5.9-YA[i]) ) );

//alert ('i= '+i+' color '+insp[i]);
switch (insp[i]){
	case  'Process Cyan': rectg .fillColor = PCyan; break;
	case  'Process Magenta': rectg .fillColor = PMagenta; break;
	case  'Process Yellow': rectg .fillColor = PYellow; break;
	case  'Process Black': rectg .fillColor = PBlack; break;
	default: rectg .fillColor =app.activeDocument.swatches[insp[i]].color;
		                   }

rectg .closed = true;
rectg .stroked = false;
rectg .filled = true;
rectg .fillOverprint = false;	
                                                 }
                                             
                                             

Xrec1 =12.5;
Yrec1 =63*mms;
ax=11;
ay=-16.5;

var XA = new Array( 5.5, 0, 5.5,    11,     0,    11,       0,    5.5,   11,    5.5,  11,   11); 
var YA = new Array(-5.5, 0,    0,     0, -5.5, -5.5,     -11,   -11, -11, -16.5, -22, -27.5); 

for (i = 0; i<insp.length & i<10; i++){

el1 = Vl1.pathItems.add();
el1 = Vl1.pathItems.ellipse(Yrec1+YA[i], Xrec1+XA[i], 2, 2, false, false );

//alert ('i= '+i+' color '+insp[i]);
switch (insp[i]){
	case  'Process Cyan': el1 .fillColor = PCyan; break;
	case  'Process Magenta': el1 .fillColor = PMagenta; break;
	case  'Process Yellow': el1 .fillColor = PYellow; break;
	case  'Process Black': el1 .fillColor = PBlack; break;
	default: el1 .fillColor =app.activeDocument.swatches[insp[i]].color;
		                   }

el1.closed = true;
el1.stroked = false;
el1.filled = true;
el1.fillOverprint = false;	
                                                 }
                                             
el2 = Vl1.pathItems.add();
el2 = Vl1.pathItems.ellipse(Yrec1+ay, Xrec1+ax, 2, 2, false, false );
switch (insp[0]){
	case  'Process Cyan': el2 .fillColor = PCyan; break;
	case  'Process Magenta': el2 .fillColor = PMagenta; break;
	case  'Process Yellow': el2 .fillColor = PYellow; break;
	case  'Process Black': el2 .fillColor = PBlack; break;
	default: el2 .fillColor =app.activeDocument.swatches[insp[0]].color;
                         }
el2.closed = true;
el2.stroked = false;
el2.filled = true;
el2.fillOverprint = false;


strelka =Vl1.pathItems.add();
strelka.setEntirePath( Array( Array( 0, 2*mms), Array(1*mms,3*mms), Array(2*mms,2*mms), Array(1.8*mms,1.75*mms), Array(1.15*mms,2.4*mms) , Array(1.15*mms,0), Array(0.85*mms,0), Array(0.85*mms,2.4*mms), Array(0.2*mms,1.75*mms)) );

//alert ('i= '+i+' color '+insp[i]);
switch (insp[0]){
	case  'Process Cyan': strelka .fillColor = PCyan; break;
	case  'Process Magenta': strelka .fillColor = PMagenta; break;
	case  'Process Yellow':strelka .fillColor = PYellow; break;
	case  'Process Black': strelka.fillColor = PBlack; break;
	default: strelka .fillColor =app.activeDocument.swatches[insp[0]].color;
		                   }

strelka .closed = true;
strelka .stroked = false;
strelka .filled = true;
strelka .fillOverprint = false;	

strelka.top = 79*mms;
strelka.left = 13.5;



Xrec1 =14.7;
Yrec1 =83*mms;
Yrec2 =153*mms;
by=-7*mms;

el3 = Vl1.pathItems.add();
el3 = Vl1.pathItems.ellipse(Yrec1, Xrec1, 3, 3, false, false );
switch (insp[0]){
	case  'Process Cyan': el3 .fillColor = PCyan; break;
	case  'Process Magenta': el3 .fillColor = PMagenta; break;
	case  'Process Yellow': el3 .fillColor = PYellow; break;
	case  'Process Black': el3 .fillColor = PBlack; break;
	default: el3 .fillColor =app.activeDocument.swatches[insp[0]].color;
                         }
el3.closed = true;
el3.stroked = false;
el3.filled = true;
el3.fillOverprint = false;

for (i = 0; i<insp.length & i<10; i++){

el4 = Vl1.pathItems.add();
el4 = Vl1.pathItems.ellipse(Yrec2+by*i, Xrec1, 3, 3, false, false );

//alert ('i= '+i+' color '+insp[i]);
switch (insp[i]){
	case  'Process Cyan': el4 .fillColor = PCyan; break;
	case  'Process Magenta': el4 .fillColor = PMagenta; break;
	case  'Process Yellow': el4 .fillColor = PYellow; break;
	case  'Process Black': el4 .fillColor = PBlack; break;
	default: el4 .fillColor =app.activeDocument.swatches[insp[i]].color;
		                   }

el4.closed = true;
el4.stroked = false;
el4.filled = true;
el4.fillOverprint = false;	
                                                 }

Vl2 = Vl1.duplicate();
Vl2.left = wi-6.15*mms;


	};



docRef = activeDocument;

for ( i = 0; i < activeDocument.layers.length; i++ ) {
    activeDocument.layers[i].locked = true;
    }

newLayer=activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
mm = 72/25.4;
newLayer.name="Oporki";

wi= docRef.width;
hi = docRef.height;

docRef.rulerOrigin = Array (0,0);


u=0;
var sInks = new Array;
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

                                                                            PW = new CMYKColor();
                                                                            PW.black =0; 
                                                                            PW.cyan = 0; 
                                                                            PW.magenta = 0; 
                                                                            PW.yellow = 0;

for (i=0; i<docRef.swatches.length; i++) {
// alert(''+docRef.swatches[i].name);   
    if (docRef.swatches[i].name == '[Нет]') None = docRef.swatches[i].name;
    if (docRef.swatches[i].name == '[Совмещение]' | docRef.swatches[i].name == '[Совмещение] 1'  | docRef.swatches[i].name == '[Совмещение]1') Registr = docRef.swatches[i].name;

};

//alert(''+None+'  '+Wh+ '  '+Registr);

Opaq = None;
var res =  

"dialog { orientation: 'column', alignChildren: 'center', \
text: StaticText {text:'', preferredSize:[60,0]},\
namb:  Group { orientation: 'row', \
            text: StaticText {text:'Номер заказа №'},\
            texte: EditText { preferredSize: [50,20], alignment: 'center'},\
			}\
Rapp:   Group { orientation: 'row', \
            text: StaticText {text:'Раппорт R'},\
            texte: EditText { preferredSize: [50,20], alignment: 'center'},\
			}\
text: StaticText {text:'', preferredSize:[60,0]},\
panel: Panel {text: 'Цветность работы:', preferredSize: [230,300], alignChildren: 'left',\
            info: Group { orientation: 'column', alignChildren: 'left', \
text: StaticText {text:'', preferredSize:[60,0]},\
t00: Group { orientation: 'row', \
		text: StaticText {text:'01: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t01: Group { orientation: 'row', \
		text: StaticText {text:'02: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t02: Group { orientation: 'row', \
		text: StaticText {text:'03: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t03: Group { orientation: 'row', \
		text: StaticText {text:'04: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t04: Group { orientation: 'row', \
		text: StaticText {text:'05: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t05: Group { orientation: 'row', \
		text: StaticText {text:'06: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t06: Group { orientation: 'row', \
		text: StaticText {text:'07: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t07: Group { orientation: 'row', \
		text: StaticText {text:'08: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t08: Group { orientation: 'row', \
		text: StaticText {text:'09: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t09: Group { orientation: 'row', \
		text: StaticText {text:'10: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t10: Group { orientation: 'row', \
		text: StaticText {text:'11: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t11: Group { orientation: 'row', \
		text: StaticText {text:'12: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t12: Group { orientation: 'row', \
		text: StaticText {text:'13: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t13: Group { orientation: 'row', \
		text: StaticText {text:'14: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t14: Group { orientation: 'row', \
		text: StaticText {text:'15: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
t15: Group { orientation: 'row', \
		text: StaticText {text:'16: '},\
		check:  Checkbox {  text: 'No color', value: true, enabled: false}, \
											  }\
                      } \
		   }\
rq: Group { orientation: 'column', alignChildren: 'left', \
		text: StaticText {text:'Цвет опорки:'},\
		combo: ListBox {preferredSize: [220,70], properties:{multiselect:false, selected: true}}, \
		 } \
rq1: Group { orientation: 'column', alignChildren: 'left', \
		text: StaticText {text:'Белый цвет:'},\
		combo1: ListBox {preferredSize: [220,70], properties:{multiselect:false, focus: true}}, \
		 } \
buttons: Group { orientation: 'row', alignChildren: 'center', \
                ok: Button { text: 'OK', properties:{name:'ok'} }, \
                cencel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";


var dlg = new Window(res);
dlg.text = "Автоматическая расстановка опорок";
if( sI[0]!=null) {dlg.panel.info.t00.check.enabled=true; dlg.panel.info.t00.check.text = sI[0];}
if( sI[1]!=null) {dlg.panel.info.t01.check.enabled=true; dlg.panel.info.t01.check.text = sI[1];}
if( sI[2]!=null) {dlg.panel.info.t02.check.enabled=true; dlg.panel.info.t02.check.text = sI[2];}
if( sI[3]!=null) {dlg.panel.info.t03.check.enabled=true; dlg.panel.info.t03.check.text = sI[3];}
if( sI[4]!=null) {dlg.panel.info.t04.check.enabled=true; dlg.panel.info.t04.check.text = sI[4];}
if( sI[5]!=null) {dlg.panel.info.t05.check.enabled=true; dlg.panel.info.t05.check.text = sI[5];}
if( sI[6]!=null) {dlg.panel.info.t06.check.enabled=true; dlg.panel.info.t06.check.text = sI[6];}
if( sI[7]!=null) {dlg.panel.info.t07.check.enabled=true; dlg.panel.info.t07.check.text = sI[7];}
if( sI[8]!=null) {dlg.panel.info.t08.check.enabled=true; dlg.panel.info.t08.check.text = sI[8];}
if( sI[9]!=null) {dlg.panel.info.t09.check.enabled=true; dlg.panel.info.t09.check.text = sI[9];}
if( sI[10]!=null) {dlg.panel.info.t10.check.enabled=true; dlg.panel.info.t10.check.text = sI[10];}
if( sI[11]!=null) {dlg.panel.info.t11.check.enabled=true; dlg.panel.info.t11.check.text = sI[11];}
if( sI[12]!=null) {dlg.panel.info.t12.check.enabled=true; dlg.panel.info.t12.check.text = sI[12];}
if( sI[13]!=null) {dlg.panel.info.t13.check.enabled=true; dlg.panel.info.t13.check.text = sI[13];}
if( sI[14]!=null) {dlg.panel.info.t14.check.enabled=true; dlg.panel.info.t14.check.text = sI[14];}
if( sI[15]!=null) {dlg.panel.info.t15.check.enabled=true; dlg.panel.info.t15.check.text = sI[15];}

dlg.Rapp.texte.text ='450';
for(i=0; i<sI.length; i++) {
dlg.rq.combo.add("item", sI[i]);
dlg.rq.combo.items[0].selected = true;
}
dlg.rq1.combo1.add("item", None);
dlg.rq1.combo1.items[0].selected = true;
for(i=0; i<sI.length; i++) {
	
	switch (sI[i]){
	case  'Process Cyan':  Opaq = None; break;
	case  'Process Magenta':  Opaq = None; break;
	case  'Process Yellow':  Opaq =None; break;
	case  'Process Black':  Opaq = None; break;
	default: dlg.rq1.combo1.add("item", sI[i]);
		}

}



//Цикл обработки
dlg.buttons.ok.onClick = function(){

Ops = dlg.rq.combo.selection.text;
Opsn = dlg.rq.combo.selection;
Opaq = dlg.rq1.combo1.selection.text;
ur=0;
for(i=0; i<sI.length; i++) {if (sI[i]!=Opaq) { sInks[ur] = sI[i];  ur++ };};


//alert(''+Opsn);

Oporka = docRef.pathItems.rectangle( 0, 0, 3*mm, hi);
Oporka.setEntirePath( Array( Array(0, 0), Array(0, hi), Array(3*mm, hi), Array(3*mm, 0) ) );
Oporka.closed = true;
//Oporka.top = hi;
//Oporka.left = 0;
Oporka.filled = true;
Oporka.stroked = false;

newCMYKColor = new CMYKColor();
newCMYKColor.black =0; 
newCMYKColor.cyan = 0; 
newCMYKColor.magenta = 0; 
newCMYKColor.yellow = 0;

if (Opsn ==0 ) {newCMYKColor.cyan = 100; Oporka.fillColor = newCMYKColor;}
if (Opsn ==1 ) {newCMYKColor.magenta = 100; Oporka.fillColor = newCMYKColor;}
if (Opsn ==2 ) {newCMYKColor.yellow = 100; Oporka.fillColor = newCMYKColor;}
if (Opsn ==3 ) {newCMYKColor.black =100; Oporka.fillColor = newCMYKColor;}
if (Opsn > 3) {
						for (j=0; j<docRef.swatches.length; j++){
						if (Ops ==docRef.swatches[j].name) namb =j; 
																				}
						Oporka.fillColor =docRef.swatches[namb].color;
						}
Oporka.fillOverprint = true;
//Группа крестов
//newCrestPath1 = newLayer.compoundPathItems.add();

var TG = newLayer.groupItems.add();
var triangleGroup = TG.groupItems.add();

var triangleGroup1 = triangleGroup.groupItems.add();
newCrestPath1 = triangleGroup1.compoundPathItems.add();
newCrestPath2 = triangleGroup1.compoundPathItems.add();
newCrestPath3 = triangleGroup1.compoundPathItems.add();

//©Klimov S.V.

//Крест 1

newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(-0.1*mm, -2*mm), Array(-0.1*mm, -0.5*mm),  Array(0.1*mm, -0.5*mm), Array(0.1*mm, -2*mm)) );
newCrest1.closed = true;
newCrest1.filled = true;
newCrest1.stroked = false;
newCrest1.fillColor = app.activeDocument.swatches[Registr].color;
newCrest1.fillOverprint = true;

newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(-0.1*mm, 0.5*mm), Array(-0.1*mm, 2*mm),  Array(0.1*mm, 2*mm), Array(0.1*mm, 0.5*mm)) );
newCrest1.closed = true;
newCrest1.filled = true;
newCrest1.stroked = false;
newCrest1.fillColor = app.activeDocument.swatches[Registr].color;
newCrest1.fillOverprint = true;

newCrest2 = newCrestPath1.pathItems.add();
newCrest2.setEntirePath( Array( Array(-2*mm, -0.1*mm), Array(-0.5*mm,-0.1*mm), Array(-0.5*mm, 0.1*mm), Array(-2*mm, 0.1*mm)) );
newCrest2.closed = true;
newCrest2.filled = true;
newCrest2.stroked = false;
newCrest2.fillColor = app.activeDocument.swatches[Registr].color;
newCrest2.fillOverprint = true;

newCrest2 = newCrestPath1.pathItems.add();
newCrest2.setEntirePath( Array( Array(0.5*mm, -0.1*mm), Array(2*mm,-0.1*mm), Array(2*mm, 0.1*mm), Array(0.5*mm, 0.1*mm)) );
newCrest2.closed = true;
newCrest2.filled = true;
newCrest2.stroked = false;
newCrest2.fillColor = app.activeDocument.swatches[Registr].color;
newCrest2.fillOverprint = true;

ellipses = triangleGroup1.pathItems.add();
ellipses = triangleGroup1.pathItems.ellipse(0.3*mm, -0.3*mm, 0.6*mm, 0.6*mm, false, false );
ellipses.stroked = true;
ellipses.strokeWidth = 0.2*mm;
ellipses.strokeColor = app.activeDocument.swatches[Registr].color;
ellipses.filled = false;

ellipsesc = triangleGroup1.pathItems.add();
ellipsesc = triangleGroup1.pathItems.ellipse(0.1*mm, -0.1*mm, 0.2*mm, 0.2*mm, false, false );
ellipsesc.stroked = false;
ellipsesc.filled = true;
ellipsesc.fillColor =app.activeDocument.swatches[Registr].color;
ellipsesc.fillOverprint = false;

if (Opaq !=None) {
    
newCrest11 = newCrestPath3.pathItems.add();
newCrest11.setEntirePath( Array( Array(-0.1*mm, -2*mm), Array(-0.1*mm, -0.5*mm),  Array(0.1*mm, -0.5*mm), Array(0.1*mm, -2*mm)) );
newCrest11.closed = true;
newCrest11.filled = true;
newCrest11.stroked = false;
newCrest11.fillColor = app.activeDocument.swatches[Opaq].color;
newCrest11.fillOverprint = true;

newCrest11 = newCrestPath3.pathItems.add();
newCrest11.setEntirePath( Array( Array(-0.1*mm, 0.5*mm), Array(-0.1*mm, 2*mm),  Array(0.1*mm, 2*mm), Array(0.1*mm, 0.5*mm)) );
newCrest11.closed = true;
newCrest11.filled = true;
newCrest11.stroked = false;
newCrest11.fillColor = app.activeDocument.swatches[Opaq].color;
newCrest11.fillOverprint = true;

newCrest21 = newCrestPath3.pathItems.add();
newCrest21.setEntirePath( Array( Array(-2*mm, -0.1*mm), Array(-0.5*mm,-0.1*mm), Array(-0.5*mm, 0.1*mm), Array(-2*mm, 0.1*mm)) );
newCrest21.closed = true;
newCrest21.filled = true;
newCrest21.stroked = false;
newCrest21.fillColor = app.activeDocument.swatches[Opaq].color;
newCrest21.fillOverprint = true;

newCrest21 = newCrestPath3.pathItems.add();
newCrest21.setEntirePath( Array( Array(0.5*mm, -0.1*mm), Array(2*mm,-0.1*mm), Array(2*mm, 0.1*mm), Array(0.5*mm, 0.1*mm)) );
newCrest21.closed = true;
newCrest21.filled = true;
newCrest21.stroked = false;
newCrest21.fillColor = app.activeDocument.swatches[Opaq].color;
newCrest21.fillOverprint = true;

ellipses1 = triangleGroup1.pathItems.add();
ellipses1 = triangleGroup1.pathItems.ellipse(0.3*mm, -0.3*mm, 0.6*mm, 0.6*mm, false, false );
ellipses1.stroked = true;
ellipses1.strokeWidth = 0.2*mm;
ellipses1.strokeColor = app.activeDocument.swatches[Opaq].color;
ellipses1.filled = false;
ellipses1.strokeOverprint = true;

ellipsesc1 = triangleGroup1.pathItems.add();
ellipsesc1 = triangleGroup1.pathItems.ellipse(0.1*mm, -0.1*mm, 0.2*mm, 0.2*mm, false, false );
ellipsesc1.stroked = false;
ellipsesc1.filled = true;
ellipsesc1.fillColor =app.activeDocument.swatches[Opaq].color;
ellipsesc1.fillOverprint = true;
                                        };

triangleGroup1.top = 4*mm;
triangleGroup1.left = 4.75*mm;

triangleGroup2 = triangleGroup1.duplicate();
triangleGroup2.top = hi/2+2*mm;
triangleGroup2.left = 4.75*mm;

triangleGroup3 = triangleGroup1.duplicate();
triangleGroup3.top = hi;
triangleGroup3.left = 4.75*mm;

TG1 = TG.duplicate();
TG1.top = hi;
TG1.left = wi-5.75*mm;

var ins = new Array();
j=-1;

if (sInks[0]!=null&&dlg.panel.info.t00.check.value) { j++; ins[j] = dlg.panel.info.t00.check.text};
if (sInks[1]!=null&&dlg.panel.info.t01.check.value) { j++; ins[j] = dlg.panel.info.t01.check.text}; 
if (sInks[2]!=null&&dlg.panel.info.t02.check.value) { j++; ins[j] = dlg.panel.info.t02.check.text};
if (sInks[3]!=null&&dlg.panel.info.t03.check.value) { j++; ins[j] = dlg.panel.info.t03.check.text}; 
if (sInks[4]!=null&&dlg.panel.info.t04.check.value) { j++; ins[j] = dlg.panel.info.t04.check.text}; 
if (sInks[5]!=null&&dlg.panel.info.t05.check.value) { j++; ins[j] = dlg.panel.info.t05.check.text};
if (sInks[6]!=null&&dlg.panel.info.t06.check.value) { j++; ins[j] = dlg.panel.info.t06.check.text};
if (sInks[7]!=null&&dlg.panel.info.t07.check.value) { j++; ins[j] = dlg.panel.info.t07.check.text};
if (sInks[8]!=null&&dlg.panel.info.t08.check.value) { j++; ins[j] = dlg.panel.info.t08.check.text};
if (sInks[9]!=null&&dlg.panel.info.t09.check.value) { j++; ins[j] = dlg.panel.info.t09.check.text};
if (sInks[10]!=null&&dlg.panel.info.t10.check.value) { j++; ins[j] = dlg.panel.info.t10.check.text};
if (sInks[11]!=null&&dlg.panel.info.t11.check.value) { j++; ins[j] = dlg.panel.info.t11.check.text}; 
if (sInks[12]!=null&&dlg.panel.info.t12.check.value) { j++; ins[j] = dlg.panel.info.t12.check.text}; 
if (sInks[13]!=null&&dlg.panel.info.t13.check.value) { j++; ins[j] = dlg.panel.info.t13.check.text}; 
if (sInks[14]!=null&&dlg.panel.info.t14.check.value) { j++; ins[j] = dlg.panel.info.t14.check.text}; 
if (sInks[15]!=null&&dlg.panel.info.t15.check.value) { j++; ins[j] = dlg.panel.info.t15.check.text}; 


var insp = new Array();
j=-1;

if (sI[0]!=null&&dlg.panel.info.t00.check.value) { j++; insp[j] = sI[0]};
if (sI[1]!=null&&dlg.panel.info.t01.check.value) { j++; insp[j] = sI[1]}; 
if (sI[2]!=null&&dlg.panel.info.t02.check.value) { j++; insp[j] = sI[2]};
if (sI[3]!=null&&dlg.panel.info.t03.check.value) { j++; insp[j] = sI[3]}; 
if (sI[4]!=null&&dlg.panel.info.t04.check.value) { j++; insp[j] = sI[4]}; 
if (sI[5]!=null&&dlg.panel.info.t05.check.value) { j++; insp[j] = sI[5]};
if (sI[6]!=null&&dlg.panel.info.t06.check.value) { j++; insp[j] = sI[6]};
if (sI[7]!=null&&dlg.panel.info.t07.check.value) { j++; insp[j] = sI[7]};
if (sI[8]!=null&&dlg.panel.info.t08.check.value) { j++; insp[j] = sI[8]};
if (sI[9]!=null&&dlg.panel.info.t09.check.value) { j++; insp[j] = sI[9]};
if (sI[10]!=null&&dlg.panel.info.t10.check.value) { j++; insp[j] = sI[10]};
if (sI[11]!=null&&dlg.panel.info.t11.check.value) { j++; insp[j] = sI[11]}; 
if (sI[12]!=null&&dlg.panel.info.t12.check.value) { j++; insp[j] = sI[12]}; 
if (sI[13]!=null&&dlg.panel.info.t13.check.value) { j++; insp[j] = sI[13]}; 
if (sI[14]!=null&&dlg.panel.info.t14.check.value) { j++; insp[j] = sI[14]}; 
if (sI[15]!=null&&dlg.panel.info.t15.check.value) { j++; insp[j] = sI[15]}; 


Namb = '№'+dlg.namb.texte.text;
Rapport = 'R'+dlg.Rapp.texte.text;

ellip (ins,hi,wi,Ops,Opaq,Namb,insp,None,Registr,Rapport);

if (Opaq !=None) {
newLayer1=activeDocument.layers;
newLayer1 = activeDocument.layers.add();
newLayer1.zOrder(ZOrderMethod.BRINGTOFRONT);

newLayer1.name="White";

//alert (''+ activeDocument.pathItems[10].fillColor.spot.name);
//alert (''+activeDocument.pathItems.length); 
for(i=0;i<activeDocument.pathItems.length;i++){
//alert (''+activeDocument.pathItems.length+'\n'+ activeDocument.pathItems[i].fillColor.typename+'\n'+activeDocument.pathItems[i].fillColor.spot.name+'\n'+Opaq);
   if (activeDocument.pathItems[i].fillColor.typename == 'SpotColor' && activeDocument.pathItems[i].fillColor.spot.name == Opaq) activeDocument.pathItems[i].moveToBeginning (newLayer1);
   if (activeDocument.pathItems[i].strokeColor.typename == 'SpotColor' && activeDocument.pathItems[i].strokeColor.spot.name == Opaq )  activeDocument.pathItems[i].moveToBeginning (newLayer1);
//obj.selected=true;
}

                             } //if
                            
//docRef.selection = null;

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