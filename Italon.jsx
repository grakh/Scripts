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
PCyan70.cyan = 70; 
PCyan70.magenta = 0; 
PCyan70.yellow = 0;

PMagenta70 = new CMYKColor();
PMagenta70 .name = 'Process Magenta';
PMagenta70 .black =0; 
PMagenta70 .cyan = 0; 
PMagenta70 .magenta = 70; 
PMagenta70 .yellow = 0;

PYellow70 = new CMYKColor();
PYellow70.name = 'Process Yellow';
PYellow70.black =0; 
PYellow70.cyan = 0; 
PYellow70.magenta = 0; 
PYellow70.yellow = 70;

PBlack70 = new CMYKColor();
PBlack70.name = 'Process Black';
PBlack70.black =70; 
PBlack70.cyan = 0; 
PBlack70.magenta = 0; 
PBlack70.yellow = 0;


PCyan30 = new CMYKColor();
PCyan30.name = 'Process Cyan';
PCyan30.black =0; 
PCyan30.cyan = 30; 
PCyan30.magenta = 0; 
PCyan30.yellow = 0;

PMagenta30 = new CMYKColor();
PMagenta30 .name = 'Process Magenta';
PMagenta30 .black =0; 
PMagenta30 .cyan = 0; 
PMagenta30 .magenta = 30; 
PMagenta30 .yellow = 0;

PYellow30 = new CMYKColor();
PYellow30.name = 'Process Yellow';
PYellow30.black =0; 
PYellow30.cyan = 0; 
PYellow30.magenta = 0; 
PYellow30.yellow = 30;

PBlack30 = new CMYKColor();
PBlack30.name = 'Process Black';
PBlack30.black =30; 
PBlack30.cyan = 0; 
PBlack30.magenta = 0; 
PBlack30.yellow = 0;


d=-1;

var  insk = new Array;
for (i = 0; i<ins.length; i++){
if (ins[i]!=Opaq) {d++; insk[d]=ins[i]};

}

var Gr1 = newLayer.groupItems.add();
var Cr1 = newLayer.groupItems.add();
/*
Oporka = newLayer.pathItems.rectangle( 0, 0, 1.5*mms, hi);
Oporka.setEntirePath( Array( Array(0, 0), Array(0, hi), Array(1.5*mms, hi), Array(1.5*mms, 0) ) );
Oporka.closed = true;
Oporka.filled = true;
Oporka.stroked = false;
Oporka.fillColor =app.activeDocument.swatches[Registr].color;
Oporka.fillOverprint = false;
Oporka.left = 5*mms;

LineW1 =newLayer.pathItems.add();
LineW1.setEntirePath( Array( Array(5.75*mm, 0), Array(5.75*mm, hi) ) );
LineW1.stroked = true;
LineW1.strokeWidth = 0.57;
LineW1.strokeColor =PWhite;

Oporka2=Oporka.duplicate();
Oporka2.left = wi-6.5*mms;


LineW2 =newLayer.pathItems.add();
LineW2.setEntirePath( Array( Array(wi-5.75*mm, 0), Array(wi-5.75*mm, hi) ) );
LineW2.stroked = true;
LineW2.strokeWidth = 0.57;
LineW2.strokeColor =PWhite;
*/

var Tel1 = newLayer.groupItems.add();
var Tel2 = newLayer.groupItems.add();
var Tel3 = newLayer.groupItems.add();
var Tel32 = newLayer.groupItems.add();

var Cr = newLayer.groupItems.add();
var Cr1 = newLayer.groupItems.add();
var Cr2 = newLayer.groupItems.add();
var Cr3 = newLayer.groupItems.add();

Tel2.top =hi;


yw1 = 14;
yw2 = 16.15;
ywk = 16;
xh2 = hi-8;

xCr=1*mm;
delta=2.5*mm;

delh = (hi/2) - 70;
kh=delh/3;
kxh = kh/ins.length;
//-------------------------------------------------------------------------01
//alert (''+Ops);
for (i = 1; i<insk.length; i++){


delta+=3*mm;

Crest0 = Cr.pathItems.add();
Crest0.setEntirePath( Array( Array(xCr, -0.1*mm+delta), Array(xCr+1.4*mm, -0.1*mm+delta),  Array(xCr+1.4*mm, -1.5*mm+delta), Array(xCr+1.6*mm, -1.5*mm+delta), Array(xCr+1.6*mm, -0.1*mm+delta), Array(xCr+3*mm, -0.1*mm+delta), Array(xCr+3*mm, +0.1*mm+delta), Array(xCr+1.6*mm, +0.1*mm+delta), Array(xCr+1.6*mm, +1.5*mm+delta), Array(xCr+1.4*mm, +1.5*mm+delta), Array(xCr+1.4*mm, 0.1*mm+delta), Array(xCr, 0.1*mm+delta)) );
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
Crest1.setEntirePath( Array( Array(xCr, -0.1*mm+delta), Array(xCr+1.4*mm, -0.1*mm+delta),  Array(xCr+1.4*mm, -1.5*mm+delta), Array(xCr+1.6*mm, -1.5*mm+delta), Array(xCr+1.6*mm, -0.1*mm+delta), Array(xCr+3*mm, -0.1*mm+delta), Array(xCr+3*mm, +0.1*mm+delta), Array(xCr+1.6*mm, +0.1*mm+delta), Array(xCr+1.6*mm, +1.5*mm+delta), Array(xCr+1.4*mm, +1.5*mm+delta), Array(xCr+1.4*mm, 0.1*mm+delta), Array(xCr, 0.1*mm+delta)) );
Crest1.closed = true;
Crest1.filled = true;
Crest1.stroked = false;
Crest1.fillOverprint = true;



//ellipses2 = Tel1.pathItems.add();
xh2 = xh2-10;

fills = ins[i];
//ellipses2 = Tel1.pathItems.ellipse(xh2-1, ywk+1, 4, 4, false, false );
//ellipses2.left = yw2;

//alert (''+fills);

if (Opaq!=None & fills == Ops) fills=Opaq;
switch (fills){
	case  'Process Cyan': Crest1.fillColor = PCyan; break;
	case  'Process Magenta': Crest1.fillColor = PMagenta; break;
	case  'Process Yellow': Crest1.fillColor = PYellow; break;
	case  'Process Black': Crest1.fillColor = PBlack; break;
	default: Crest1.fillColor =app.activeDocument.swatches[fills].color; break;
	}
//ellipses2.stroked = false;
//ellipses2.filled = true;
//ellipses2.fillOverprint = false;	

//alert (''+i+' '+ins[i]+' '+ fills);

};

Cr1 = Cr.duplicate();
Cr1.left = wi-4*mm;
Cr2 = Cr1.duplicate();
Cr2.rotate(180);
Cr2.top = hi-4*mm;

Cr3 = Cr.duplicate();
Cr3.rotate(180);
Cr3.top = hi-4*mm;


//---------------------------------------------------------------------------02

xh2 = hi/2-20;

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

if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   
   ellipses1 = Tel2.pathItems.ellipse(xh2-15, yw1, 10.03, 10.03, false, false );
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

xh2 = xh2-15       };


if (fills=='Process Cyan' | fills=='Process Magenta' | fills=='Process Yellow'| fills=='Process Black' ) {
   
   ellipses1 = Tel2.pathItems.ellipse(xh2-15, yw1, 10.03, 10.03, false, false );
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

xh2 = xh2-15       };
//alert (''+i+' '+ins[i]+' '+ fills);
};



xh2 = xh2-Tel2.height-20;




var rou = Tel3.groupItems.add();
     rou1 = rou.groupItems.add();
	s=18.7;   

strelka = newLayer.pathItems.add();
strelka.setEntirePath( Array( Array(wi-1*mm, hi/2-20*mm), Array(wi-2.5*mm, hi/2-17*mm), Array(wi-4*mm, hi/2-20*mm), Array(wi-3.2*mm, hi/2-20*mm), Array(wi-3.2*mm, hi/2-23*mm), Array(wi-1.8*mm, hi/2-23*mm), Array(wi-1.8*mm, hi/2-20*mm), Array(wi-1.5*mm, hi/2-20*mm)) );
strelka.fillColor =app.activeDocument.swatches[Registr].color;
strelka.stroked = false;
strelka.top = hi/2+30*mm;
//-------------------------------------------------------------- ростиск

for (i = 0; i<insk.length; i++){

//ellipses3 = Tel .pathItems.add();



xh2 = xh2-15;
fills = insk[i];
//alert (''+fills);

ellipseR = rou1.pathItems.ellipse(xh2-2.09, s-4.73, 10.03, 10.03, false, false );
ellipseR.fillColor = PWhite;
ellipseR.stroked = false;
ellipseR.filled = true;
ellipseR.fillOverprint = false;	

for (k=0; k<18; k++){

rect3 = rou1.pathItems.add();
rect3.setEntirePath( Array( Array(s, xh2), Array(s+0.2*mms, xh2), Array(s, xh2-5*mms), Array(s+0.2*mms, xh2-5*mms) ) );
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
 xh2 = xh2-15;
ellipseR = rou1.pathItems.ellipse(xh2-2.09, s-4.73, 10.03, 10.03, false, false );
ellipseR.fillColor = PWhite;
ellipseR.stroked = false;
ellipseR.filled = true;
ellipseR.fillOverprint = false;
for (k=0; k<18; k++){

rect4 = rou1.pathItems.add();
rect4.setEntirePath( Array( Array(s, xh2), Array(s+0.2*mms, xh2), Array(s, xh2-5*mms), Array(s+0.2*mms, xh2-5*mms) ) );
rect4.rotate(10*k);

switch (Opaq){
	case  'Process Cyan': rect3 .fillColor = PCyan; break;
	case  'Process Magenta': rect3 .fillColor = PMagenta; break;
	case  'Process Yellow': rect3 .fillColor = PYellow; break;
	case  'Process Black': rect3 .fillColor = PBlack; break;
	default: rect4.fillColor =app.activeDocument.swatches[Opaq].color;
	

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
											 
  Tel32=Tel3.duplicate();
Tel32.left = wi-5*mm;
Tel32.top = Tel32.height+Cr1.top+20;											 
											 
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
T2=T1.duplicate();
T2.left = wi-4.3*mm;
strelka.top = hi/2+15*mm+T1.height;

/*
rectW = newLayer.pathItems.add();
rectW.setEntirePath( Array( Array(0, 0), Array(3*mms, 0), Array(3*mms, T1.height), Array(0, T1.height) ) );
rectW .closed = true;
rectW .stroked = false;
rectW .filled = true;
rectW .fillOverprint = false; 
rectW .fillColor =PWhite;
rectW .left = mms;
rectW .top = T1.top;
rectW1=rectW.duplicate();
rectW1.left = wi-4*mms;
*/
//rast = Tel1.height+Tel2.height+Tel3.height+Tel4.height;
//kr = (hi/2-20)/ 4;

Tel3.top = Tel3.height+T1.top+20;
Tel3.left = 0;
Tel2.left = 0;

var textNamb =  newLayer.textFrames.add();
textNamb.textRange.characterAttributes.size = 9;
textNamb.contents = Namb;
textNamb.rotate(90);
textNamb.left = wi-4*mm;
textNamb.textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textNamb.top =   hi/2-10*mm;

var textRapp =  newLayer.textFrames.add();
textRapp .textRange.characterAttributes.size = 9;
textRapp .contents = Rapport;
textRapp .rotate(90);
textRapp .left = wi-4*mm;
textRapp .textRange.characterAttributes.fillColor =app.activeDocument.swatches[Registr].color;
textRapp .top =    hi-Cr2.height-20*mm;

//Cr1=Cr.dulicate();
//Cr1.left = wi-4;


Oporka = newLayer.pathItems.rectangle( 0, 0, 1.5*mms, hi);
Oporka.setEntirePath( Array( Array(0, 0), Array(0, hi), Array(1.5*mms, hi), Array(1.5*mms, 0) ) );
Oporka.closed = true;
Oporka.filled = true;
Oporka.stroked = false;
Oporka.fillColor =app.activeDocument.swatches[Registr].color;
Oporka.fillOverprint = false;
Oporka.left = 5*mms;

LineW1 =newLayer.pathItems.add();
LineW1.setEntirePath( Array( Array(5.75*mm, 0), Array(5.75*mm, hi) ) );
LineW1.stroked = true;
LineW1.strokeWidth = 0.57;
LineW1.strokeColor =PWhite;
LineW1.strokeOverprint = false;

Oporka2=Oporka.duplicate();
Oporka2.left = wi-6.5*mms;


LineW2 =newLayer.pathItems.add();
LineW2.setEntirePath( Array( Array(wi-5.75*mm, 0), Array(wi-5.75*mm, hi) ) );
LineW2.stroked = true;
LineW2.strokeWidth = 0.57;
LineW2.strokeColor =PWhite;
LineW2.strokeOverprint = false;


Gr1.left=0;
Gr1.zOrder(ZOrderMethod.BRINGTOFRONT);
Gr2 = Gr1.duplicate();

Gr2.top = Gr1.top;
Gr2.left = wi-5*mms;



//Tel1.top = Tel2.top+Tel2.height+kr;


/*
//                 ----------------------------------------------------------------------------------      2      ---------------------------------------------------------------------------------------------

var V1 = newLayer.groupItems.add();
var V2 = newLayer.groupItems.add();
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
	default: el3.fillColor =app.activeDocument.swatches[insp[0]].color;
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
	default: el4.fillColor =app.activeDocument.swatches[insp[i]].color;
		                   }

el4.closed = true;
el4.stroked = false;
el4.filled = true;
el4.fillOverprint = false;	
                                                 }

Vl2 = Vl1.duplicate();

Vl2.left = wi-6.15*mms;
*/



 //alert('Stop');

//---------------------------------------------------------------Группа крестов
var TG = newLayer.groupItems.add();
var triangleGroup = TG.groupItems.add();

var triangleGroup1 = triangleGroup.groupItems.add();

ellipsesW = triangleGroup1.pathItems.add();
ellipsesW = triangleGroup1.pathItems.ellipse(1.42*mm, -1.42*mm, 2.84*mm, 2.84*mm, false, false );
ellipsesW.stroked = false;
ellipsesW.filled = true;
ellipsesW.fillColor = PWhite;
ellipsesW.fillOverprint = false;



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
triangleGroup1.left = 0.5*mm;

triangleGroup2 = triangleGroup1.duplicate();
triangleGroup2.top = hi/2+2*mm;
triangleGroup2.left = 0.5*mm;

triangleGroup3 = triangleGroup1.duplicate();
triangleGroup3.top = hi;
triangleGroup3.left = 0.5*mm;




TG1 = TG.duplicate();
TG1.top = hi;
TG1.left = wi-4.5*mm;



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

Namb = ''+dlg.namb.texte.text;
Rapport = 'Z '+dlg.Rapp.texte.text+'            Cut #'+dlg.Rapp.texte1.text+'          '+Dat;

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