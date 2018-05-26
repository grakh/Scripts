//©Klimov S.V. (don@list.ru)


function ellip (ins,hi,wi,Ops,Opaq,Namb,insp,None,Registr,Rapport){

mms = 72/25.4;
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


PCyan70 = new CMYKColor();
PCyan70.name = 'Process Cyan';
PCyan70.black =0; 
PCyan70.cyan = 80; 
PCyan70.magenta = 0; 
PCyan70.yellow = 0;

PMagenta70 = new CMYKColor();
PMagenta70 .name = 'Process Magenta';
PMagenta70 .black =0; 
PMagenta70 .cyan = 0; 
PMagenta70 .magenta = 80; 
PMagenta70 .yellow = 0;

PYellow70 = new CMYKColor();
PYellow70.name = 'Process Yellow';
PYellow70.black =0; 
PYellow70.cyan = 0; 
PYellow70.magenta = 0; 
PYellow70.yellow = 80;

PBlack70 = new CMYKColor();
PBlack70.name = 'Process Black';
PBlack70.black =80; 
PBlack70.cyan = 0; 
PBlack70.magenta = 0; 
PBlack70.yellow = 0;


PCyan30 = new CMYKColor();
PCyan30.name = 'Process Cyan';
PCyan30.black =0; 
PCyan30.cyan = 60; 
PCyan30.magenta = 0; 
PCyan30.yellow = 0;

PMagenta30 = new CMYKColor();
PMagenta30 .name = 'Process Magenta';
PMagenta30 .black =0; 
PMagenta30 .cyan = 0; 
PMagenta30 .magenta = 60; 
PMagenta30 .yellow = 0;

PYellow30 = new CMYKColor();
PYellow30.name = 'Process Yellow';
PYellow30.black =0; 
PYellow30.cyan = 0; 
PYellow30.magenta = 0; 
PYellow30.yellow = 60;

PBlack30 = new CMYKColor();
PBlack30.name = 'Process Black';
PBlack30.black =60; 
PBlack30.cyan = 0; 
PBlack30.magenta = 0; 
PBlack30.yellow = 0;

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

PCyan20 = new CMYKColor();
PCyan20.name = 'Process Cyan';
PCyan20.black =0; 
PCyan20.cyan = 20; 
PCyan20.magenta = 0; 
PCyan20.yellow = 0;

PMagenta20 = new CMYKColor();
PMagenta20 .name = 'Process Magenta';
PMagenta20 .black =0; 
PMagenta20 .cyan = 0; 
PMagenta20 .magenta = 20; 
PMagenta20 .yellow = 0;

PYellow20 = new CMYKColor();
PYellow20.name = 'Process Yellow';
PYellow20.black =0; 
PYellow20.cyan = 0; 
PYellow20.magenta = 0; 
PYellow20.yellow = 20;

PBlack20 = new CMYKColor();
PBlack20.name = 'Process Black';
PBlack20.black =20; 
PBlack20.cyan = 0; 
PBlack20.magenta = 0; 
PBlack20.yellow = 0;


d=-1;

var  insk = new Array;
for (i = 0; i<ins.length; i++){
if (ins[i]!=Opaq) {d++; insk[d]=ins[i]};

}

var Gr1 = newLayer.groupItems.add();
var Cr1 = newLayer.groupItems.add();


var Tel1 = newLayer.groupItems.add();
var Tel2 = newLayer.groupItems.add();
var Tel3 = newLayer.groupItems.add();
var Tel32 = newLayer.groupItems.add();
var Tel33 = newLayer.groupItems.add();
var Tel34 = newLayer.groupItems.add();

var Cr = newLayer.groupItems.add();
var Cr1 = newLayer.groupItems.add();
var Cr2 = newLayer.groupItems.add();
var Cr3 = newLayer.groupItems.add();

Tel2.top =hi;


yw1 = 14;
yw2 = 16.15;
ywk = 16;
xh2 = hi-8;

xCr=0.5*mm;
delta=3.5*mm;

delh = (hi/2) - 70;
kh=delh/3;
kxh = kh/ins.length;
//-------------------------------------------------------------------------01
//alert (''+Ops);
for (i = 1; i<insk.length; i++){


delta+=3*mm;

Crest0 = Cr.pathItems.add();
Crest0.setEntirePath( Array( Array(xCr, -0.05*mm+delta), Array(xCr+1.45*mm, -0.05*mm+delta),  Array(xCr+1.45*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -0.05*mm+delta), Array(xCr+3*mm, -0.05*mm+delta), Array(xCr+3*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +1.5*mm+delta), Array(xCr+1.45*mm, +1.5*mm+delta), Array(xCr+1.45*mm, 0.05*mm+delta), Array(xCr, 0.05*mm+delta)) );
Crest0.closed = true;
Crest0.filled = true;
Crest0.stroked = false;
Crest0.fillOverprint = true;

fills1 = ins[0];
//alert (''+fills);

if (Opaq!=None & fills1 == Ops) fills1=Opaq;
switch (fills1){
	case  'Process Cyan': Crest0.fillColor = PCyan; break;
	case  'Process Magenta': Crest0.fillColor = PMagenta; break;
	case  'Process Yellow': Crest0.fillColor = PYellow; break;
	case  'Process Black':Crest0.fillColor =PBlack; break;
	default: Crest0.fillColor =app.activeDocument.swatches[fills1].color; break;
	}

Crest1 = Cr.pathItems.add();
Crest1.setEntirePath( Array( Array(xCr, -0.05*mm+delta), Array(xCr+1.45*mm, -0.05*mm+delta),  Array(xCr+1.45*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -0.05*mm+delta), Array(xCr+3*mm, -0.05*mm+delta), Array(xCr+3*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +1.5*mm+delta), Array(xCr+1.45*mm, +1.5*mm+delta), Array(xCr+1.45*mm, 0.05*mm+delta), Array(xCr, 0.05*mm+delta)) );
Crest1.closed = true;
Crest1.filled = true;
Crest1.stroked = false;
Crest1.fillOverprint = true;




xh2 = xh2-10;

fills = ins[i];


if (Opaq!=None & fills == Ops) fills=Opaq;
switch (fills){
	case  'Process Cyan': Crest1.fillColor = PCyan; break;
	case  'Process Magenta': Crest1.fillColor = PMagenta; break;
	case  'Process Yellow': Crest1.fillColor = PYellow; break;
	case  'Process Black': Crest1.fillColor = PBlack; break;
	default: Crest1.fillColor =app.activeDocument.swatches[fills].color; break;
	}
};

Cr1 = Cr.duplicate();
Cr1.left = wi-3.5*mm;
Cr2 = Cr1.duplicate();
Cr2.rotate(180);
Cr2.top = hi-5*mm;

Cr3 = Cr.duplicate();
Cr3.rotate(180);
Cr3.top = hi-5*mm;


//---------------------------------------------------------------------------02

xh2 = hi/2-3*mm;

for (i = 0; i<insk.length; i++){

ellipses1 = Tel2.pathItems.add();
delta3 =4;

ellipses1 = Tel2.pathItems.rectangle( 0*mms+xh2, 0, 4*mms, 4*mms);

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

if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   delta3 =20;
   ellipses1 = Tel2.pathItems.rectangle( -4*mms+xh2, 0, 4*mms, 4*mms);
switch (fills){
	case  'Process Cyan': ellipses1.fillColor = PCyan70; break;
	case  'Process Magenta': ellipses1.fillColor = PMagenta70; break;
	case  'Process Yellow': ellipses1.fillColor = PYellow70; break;
	case  'Process Black': ellipses1.fillColor = PBlack70; break;
	default: ellipses1.fillColor =app.activeDocument.swatches[fills].color;
	}
ellipses1.stroked = false;
ellipses1.filled = true;
ellipses1.fillOverprint = false;	

       };


if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   
   ellipses1 = Tel2.pathItems.rectangle( -8*mms+xh2, 0, 4*mms, 4*mms);
switch (fills){
	case  'Process Cyan': ellipses1.fillColor = PCyan30; break;
	case  'Process Magenta': ellipses1.fillColor = PMagenta30; break;
	case  'Process Yellow': ellipses1.fillColor = PYellow30; break;
	case  'Process Black': ellipses1.fillColor = PBlack30; break;
	default: ellipses1.fillColor =app.activeDocument.swatches[fills].color;
	}
ellipses1.stroked = false;
ellipses1.filled = true;
ellipses1.fillOverprint = false;	

       };
	   
if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   
   ellipses1 = Tel2.pathItems.rectangle( -12*mms+xh2, 0, 4*mms, 4*mms);
switch (fills){
	case  'Process Cyan': ellipses1.fillColor = PCyan40; break;
	case  'Process Magenta': ellipses1.fillColor = PMagenta40; break;
	case  'Process Yellow': ellipses1.fillColor = PYellow40; break;
	case  'Process Black': ellipses1.fillColor = PBlack40; break;
	default: ellipses1.fillColor =app.activeDocument.swatches[fills].color;
	}
ellipses1.stroked = false;
ellipses1.filled = true;
ellipses1.fillOverprint = false;	

       };

if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   
   ellipses1 = Tel2.pathItems.rectangle( -16*mms+xh2, 0, 4*mms, 4*mms);
switch (fills){
	case  'Process Cyan': ellipses1.fillColor = PCyan20; break;
	case  'Process Magenta': ellipses1.fillColor = PMagenta20; break;
	case  'Process Yellow': ellipses1.fillColor = PYellow20; break;
	case  'Process Black': ellipses1.fillColor = PBlack20; break;
	default: ellipses1.fillColor =app.activeDocument.swatches[fills].color;
	}
ellipses1.stroked = false;
ellipses1.filled = true;
ellipses1.fillOverprint = false;	

       };

 xh2 = xh2-delta3*mm;
//alert (''+i+' '+ins[i]+' '+ fills);
};



xh2 = xh2-Tel2.height-20;


//---------------------------------------------------------------------------03

var rou = Tel3.groupItems.add();
     rou1 = rou.groupItems.add();
	s=18.7;   

strelka = newLayer.pathItems.add();
strelka.setEntirePath( Array( Array(wi-1*mm, hi/2-20*mm), Array(wi-2.5*mm, hi/2-17*mm), Array(wi-4*mm, hi/2-20*mm), Array(wi-3.2*mm, hi/2-20*mm), Array(wi-3.2*mm, hi/2-23*mm), Array(wi-1.8*mm, hi/2-23*mm), Array(wi-1.8*mm, hi/2-20*mm), Array(wi-1.5*mm, hi/2-20*mm)) );
strelka.fillColor =app.activeDocument.swatches[Registr].color;
strelka.stroked = false;
strelka.top = hi/2+30*mm;

//-------------------------------------------------------------- ростиск
xh2 = Cr.height+3*mm;
for (i = 0; i<insk.length; i++){

//ellipses3 = Tel .pathItems.add();



xh2 = xh2-10;
fills = insk[i];
//alert (''+fills);
/*
ellipseR = rou1.pathItems.ellipse(xh2-2.09, s-4.73, 2*mms, 2*mms, false, false );
ellipseR.fillColor = PWhite;
ellipseR.stroked = false;
ellipseR.filled = true;
ellipseR.fillOverprint = false;	
*/
for (k=0; k<18; k++){

rect3 = rou1.pathItems.add();
rect3.setEntirePath( Array( Array(s, xh2), Array(s+0.14*mms, xh2), Array(s, xh2-3*mms), Array(s+0.14*mms, xh2-3*mms) ) );
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

//alert (''+fills);
};


if (Opaq!=None){
 xh2 = xh2-10;
 /*
ellipseR = rou1.pathItems.ellipse(xh2-2.09, s-4.73, 2*mms, 2*mms, false, false );
ellipseR.fillColor = PWhite;
ellipseR.stroked = false;
ellipseR.filled = true;
ellipseR.fillOverprint = false;
*/
for (k=0; k<18; k++){

rect4 = rou1.pathItems.add();
rect4.setEntirePath( Array( Array(s, xh2), Array(s+0.1*mms, xh2), Array(s, xh2-3*mms), Array(s+0.1*mms, xh2-3*mms) ) );
rect4.rotate(10*k);

switch (Opaq){
	case  'Process Cyan': rect4 .fillColor = PCyan; break;
	case  'Process Magenta': rect4 .fillColor = PMagenta; break;
	case  'Process Yellow': rect4 .fillColor = PYellow; break;
	case  'Process Black': rect4 .fillColor = PBlack; break;
	default: rect4.fillColor =app.activeDocument.swatches[Opaq].color;
	

	}

rect4 .closed = true;
rect4 .stroked = false;
rect4 .filled = true;
rect4 .fillOverprint = false;                    
  };           

                                                 };
												 

Tel33=Tel3.duplicate();
Tel33.left = 0.5*mm;
Tel33.top = Tel33.height+Cr1.top+3*mm;
Tel3.top=hi-Cr1.top-3*mm;
Tel3.left = 0.5*mm;

Tel32=Tel3.duplicate();
Tel32.left = wi-3.5*mm;
Tel32.top = Tel3.top;
Tel34=Tel3.duplicate();
Tel34.left = wi-3.5*mm;
Tel34.top = Tel34.height+Cr1.top+3*mm;
//-------------------------------------------------------------------------TXT											
     T1 = newLayer.groupItems.add();   
T2 = newLayer.groupItems.add(); 


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
textRef.left = 1*mm;

fills = sk[i];
//alert(''+sk[i]);
switch (fills){
	case  'Process Cyan':  TextC = "C"; textRef.textRange.characterAttributes.fillColor = PCyan; break;
	case  'Process Magenta': TextC = "M"; textRef.textRange.characterAttributes.fillColor = PMagenta; break;
	case  'Process Yellow': TextC = "Y"; textRef.textRange.characterAttributes.fillColor = PYellow; break;
	case  'Process Black': TextC = "Black1"; textRef.textRange.characterAttributes.fillColor = PBlack; break;
	default: TextC = fills; textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color;
	}
//alert(''+TextC);
if (TextC.indexOf("PANTONE ") ==0) TextC = TextC.substring(7);
if (Opaq!=None && fills == Opaq) {TextC = "W"; textRef.textRange.characterAttributes.fillColor =app.activeDocument.swatches[fills].color};

textRef.top = T1.height;
textRef.contents = TextC;

};
//textRef.createOutline();


T1.top=hi/2+10+T1.height;
//T2=T1.duplicate();
T1.left = wi-3.5*mm;
strelka.top = hi/2+15*mm+T1.height;
strelka.left = wi-3.5*mm;


//Tel3.top = Tel3.height+T1.top+20;
//Tel3.left = 0;
Tel2.left = 0;

var textNamb =  newLayer.textFrames.add();
textNamb.textRange.characterAttributes.size = 9;
textNamb.contents = Namb;
textNamb.rotate(90);
textNamb.left = wi-3.5*mm;
textNamb.textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textNamb.top =   hi/2-10*mm;

var textRapp =  newLayer.textFrames.add();
textRapp .textRange.characterAttributes.size = 9;
textRapp .contents = Rapport;
textRapp .rotate(90);
textRapp .left = wi-3.5*mm;
textRapp .textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textRapp .top =    strelka.top+30*mm;



Oporka = newLayer.pathItems.rectangle( 0, 0, 3*mms, hi);
Oporka.setEntirePath( Array( Array(0, 0), Array(0, hi), Array(3*mms, hi), Array(3*mms, 0) ) );
Oporka.closed = true;
Oporka.filled = true;
Oporka.stroked = false;
Oporka.fillColor =app.activeDocument.swatches[Registr].color;
Oporka.fillColor.tint=85;
Oporka.fillOverprint = false;
Oporka.left = 3.5*mm;

Oporka1 = newLayer.pathItems.rectangle( 0, 0, 1.2*mms, hi);
Oporka1.setEntirePath( Array( Array(0, 0), Array(0, hi), Array(1.2*mms, hi), Array(1.2*mms, 0) ) );
Oporka1.closed = true;
Oporka1.filled = true;
Oporka1.stroked = false;
Oporka1.fillColor =app.activeDocument.swatches[Registr].color;
Oporka1.fillOverprint = false;
Oporka1.left = 4.4*mm;

LineW1 =newLayer.pathItems.add();
LineW1.setEntirePath( Array( Array(5*mm, 0), Array(5*mm, hi) ) );
LineW1.stroked = true;
LineW1.strokeWidth = 0.57;
LineW1.strokeColor =PWhite;
LineW1.strokeOverprint = false;

Oporka2=Oporka.duplicate();
Oporka3=Oporka1.duplicate();
Oporka2.left = wi-6.5*mm;
Oporka3.left = wi-5.6*mm;


LineW2 =newLayer.pathItems.add();
LineW2.setEntirePath( Array( Array(wi-5*mm, 0), Array(wi-5*mm, hi) ) );
LineW2.stroked = true;
LineW2.strokeWidth = 0.57;
LineW2.strokeColor =PWhite;
LineW2.strokeOverprint = false;


Gr1.left=0;
Gr1.zOrder(ZOrderMethod.BRINGTOFRONT);
Gr2 = Gr1.duplicate();

Gr2.top = Gr1.top;
Gr2.left = wi-5*mm;


//---------------------------------------------------------------Группа крестов
var TG = newLayer.groupItems.add();
var triangleGroup = TG.groupItems.add();

var triangleGroup1 = triangleGroup.groupItems.add();




newCrestPath1 = triangleGroup1.compoundPathItems.add();
newCrestPath2 = triangleGroup1.compoundPathItems.add();
newCrestPath3 = triangleGroup1.compoundPathItems.add();

//©Klimov S.V.

//Крест 1


newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(xCr, -0.05*mm+delta), Array(xCr+1.45*mm, -0.05*mm+delta),  Array(xCr+1.45*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -0.05*mm+delta), Array(xCr+3*mm, -0.05*mm+delta), Array(xCr+3*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +1.5*mm+delta), Array(xCr+1.45*mm, +1.5*mm+delta), Array(xCr+1.45*mm, 0.05*mm+delta), Array(xCr, 0.05*mm+delta)) );
newCrest1.closed = true;
newCrest1.filled = true;
newCrest1.stroked = false;
newCrest1.fillColor = app.activeDocument.swatches[Registr].color;
newCrest1.fillOverprint = true;



if (Opaq !=None) {
    
newCrest11 = newCrestPath3.pathItems.add();
newCrest11.setEntirePath( Array( Array(xCr, -0.05*mm+delta), Array(xCr+1.45*mm, -0.05*mm+delta),  Array(xCr+1.45*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -1.5*mm+delta), Array(xCr+1.55*mm, -0.05*mm+delta), Array(xCr+3*mm, -0.05*mm+delta), Array(xCr+3*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +0.05*mm+delta), Array(xCr+1.55*mm, +1.5*mm+delta), Array(xCr+1.45*mm, +1.5*mm+delta), Array(xCr+1.45*mm, 0.05*mm+delta), Array(xCr, 0.05*mm+delta)) );
newCrest11.closed = true;
newCrest11.filled = true;
newCrest11.stroked = false;
newCrest11.fillColor = app.activeDocument.swatches[Opaq].color;
newCrest11.fillOverprint = true;



                                        };

triangleGroup1.top = 4*mm;
triangleGroup1.left = 0.5*mm;

triangleGroup2 = triangleGroup1.duplicate();
triangleGroup2.top = hi/2+1.5*mm;
triangleGroup2.left = 0.5*mm;

triangleGroup3 = triangleGroup1.duplicate();
triangleGroup3.top = hi-mm;
triangleGroup3.left = 0.5*mm;




TG1 = TG.duplicate();
TG1.top = hi-mm;
TG1.left = wi-3.5*mm;



	};

// ------------------------------------------------- start

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
"dialog { orientation: 'column', alignChildren: 'center',\
text: StaticText {text:'', preferredSize:[60,0]},\
namb:  Group { orientation: 'row', \
            text: StaticText {text:'Заказ: '},\
            texte: EditText { preferredSize: [300,20], alignment: 'center'},\
			}\
Rapp:   Group { orientation: 'row', \
            text: StaticText {text:'Зуб Z: '},\
            texte: EditText { preferredSize: [70,20], alignment: 'center'},\
            text1: StaticText {text:' ,              Нож: '},\
            texte1: EditText { preferredSize: [70,20], alignment: 'center'},\
			}\
text: StaticText {text:'', preferredSize:[60,0]},\
panel2: Panel {text: 'Color:', preferredSize: [370,180], alignChildren: 'left',\
	GR: Group { orientation: 'row', alignChildren: 'center', \
			combo: ListBox {preferredSize: [300,170], properties:{multiselect:false, selected: true}}, \
GR0: Group { orientation: 'column', alignChildren: 'center', \
            text1: StaticText {text:'- Опорный цвет'},\
text: StaticText {text:'', preferredSize:[60,40]},\
   up: Button { text: 'UP', properties:{name:'up'} }, \
   down: Button { text: 'Down', properties:{name:'down'} }, \
text: StaticText {text:'', preferredSize:[60,0]},\
			   del: Button { text: 'Delete', properties:{name:'del'} }, \
         								  }\			  }\
												}\
text: StaticText {text:'', preferredSize:[60,0]},\
buttons: Group { orientation: 'row', alignChildren: 'center', \
                ok: Button { text: 'OK', properties:{name:'ok'} }, \
                cencel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";



var dlg = new Window(res);
dlg.text = "Шкала оперативного контроля";

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
if (dlg.panel2.GR.combo.items[i].text==colorFill) dlg.panel2.GR.combo.remove(i);
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



dlg.Rapp.texte.text =(Math.round((hi/2.83465)/3.175)).toString();
//for(i=0; i<sI.length; i++) {
//dlg.rq.combo.add("item", sI[i]);
//dlg.rq.combo.items[0].selected = true;
//}

/*
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
*/

//Цикл обработки
dlg.buttons.ok.onClick = function(){

Ops = Registr;
//Opsn = dlg.rq.combo.selection;
Opaq = None;
var SIS = new Array();

for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
SIS=dlg.panel2.GR.combo.items[i].text;
//alert(''+SIS);
}

ur=0;
for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
    if (dlg.panel2.GR.combo.items[i].text!=Opaq) { sInks[ur] = dlg.panel2.GR.combo.items[i].text;  ur++ };
    };

//alert(''+ sInks);



var ins = new Array();
var insp = new Array();

ins=sInks;
insp=sInks

var Da= new Date ();
//Dat=Da.toLocaleString();
var Dat= String (''+Da.getDate() +'.'+ (Da.getMonth()+1)+'.'+  Da.getFullYear());

Namb = ''+dlg.namb.texte.text+' от '+Dat;
Rapport = 'Z '+dlg.Rapp.texte.text+'('+Math.round(hi/2.83465)+')  Cut #'+dlg.Rapp.texte1.text;

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