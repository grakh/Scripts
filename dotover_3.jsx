sel=activeDocument.selection;
if (sel.length < 1) {alert("No select oject")} else
{
newLayer=activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
const mm=72/25.4;

newLayer.name="Dots";

for (i=0; i<app.activeDocument.swatches.length; i++) {
    if (app.activeDocument.swatches[i].name == '[Ñîâìåùåíèå]' | app.activeDocument.swatches[i].name == '[Registration]') Registr = app.activeDocument.swatches[i].name;
};

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

LeftCY=(LobjY+RobjY)/2;
LeftCX=(LobjX+RobjX)/2;
//alert(""+LeftCY);

PWhite = new CMYKColor();
PWhite .name = 'PWhite';
PWhite .black =0; 
PWhite .cyan = 0; 
PWhite .magenta = 0; 
PWhite .yellow = 0;

var triangleLeft= newLayer.groupItems.add();
var triangleRight= newLayer.groupItems.add();

var triangleGroup1 = triangleLeft.groupItems.add();
var triangleGroup2 = triangleLeft.groupItems.add();
var triangleGroup3 = triangleLeft.groupItems.add();


//©Klimov S.V.
/*ellipsesk  = triangleGroup1.pathItems.add();
ellipsesk = triangleGroup1.pathItems.ellipse(0, 0, 0.177*mm, 0.177*mm, false, false );
ellipsesk.stroked = true;
ellipsesk.filled = true;
ellipsesk.strokeWidth= 0.3*mm;
ellipsesk.fillColor = PWhite;
ellipsesk.strokeColor = PWhite;
*/
ellipses2 = triangleGroup1.pathItems.add();
ellipses2 = triangleGroup1.pathItems.ellipse(0, 0, 0.212*mm, 0.212*mm, false, false );
ellipses2.stroked = false;
ellipses2.filled = true;
ellipses2.fillColor = app.activeDocument.swatches[Registr].color;

triangleGroup1.top = LobjY-2.41;
triangleGroup1.left = LobjX+2.41;

triangleGroup2=triangleGroup1.duplicate();
triangleGroup2.top = LeftCY+0.15*mm;
triangleGroup2.left = LobjX+2.41;

triangleGroup3=triangleGroup1.duplicate();
triangleGroup3.top = RobjY +2.41 + 0.3*mm;
triangleGroup3.left = LobjX+2.41;

triangleLeft.left = LobjX-mm-0.15*mm;
triangleRight = triangleLeft.duplicate();
triangleRight.left = RobjX+mm-0.15*mm;

/*
newCrest2 = newCrestPath1.duplicate();
newCrest2.top=LobjY;

newCrest3 = newCrestPath1.duplicate();
newCrest3.top=RobjY+3*mm;

triangleGroup2 = triangleGroup1.duplicate();
triangleGroup2.left = RobjX+2*mm;
*/
}