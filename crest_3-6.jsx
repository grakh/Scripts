sel=activeDocument.selection;
if (sel.length < 1) {alert("No select oject")} else
{
newLayer=activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
const mm=72/25.4;

newLayer.name="Crop";

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

PWhite = new CMYKColor();
PWhite .name = 'PWhite';
PWhite .black =0; 
PWhite .cyan = 0; 
PWhite .magenta = 0; 
PWhite .yellow = 0;
//alert(""+LeftCY);

var triangleGroup1 = newLayer.groupItems.add();
var triangleGroup2 = newLayer.groupItems.add();
var triangleEllipses = triangleGroup1.groupItems.add();

newCrestPath1 = triangleEllipses.groupItems.add();
newCrestPath2 = triangleGroup1.groupItems.add();
newCrestPath3 = triangleGroup1.groupItems.add();

ellipsesk  = newCrestPath1.pathItems.add();
ellipsesk = newCrestPath1.pathItems.ellipse(0, 0, 2.15*mm, 2.15*mm, false, false );
ellipsesk.stroked = false;
ellipsesk.filled = true;
ellipsesk.fillColor = PWhite;
ellipsesk.top = LeftCY+1.5*mm;
ellipsesk.left = LobjX-5*mm;

//©Klimov S.V.

newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(LobjX-2*mm, LeftCY), Array(LobjX-5*mm, LeftCY) ) );
newCrest1.stroked = true;
newCrest1.strokeWidth = 0.57;
newCrest1.strokeColor = app.activeDocument.swatches[Registr].color;
newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(LobjX-3.5*mm, LeftCY-1.5*mm), Array(LobjX-3.5*mm, LeftCY+1.5*mm) ) );
newCrest1.stroked = true;
newCrest1.strokeWidth = 0.57;
newCrest1.strokeColor = app.activeDocument.swatches[Registr].color;


newCrest2 = triangleEllipses.duplicate();
newCrest2.top=LobjY;

newCrest3 = triangleEllipses.duplicate();
newCrest3.top=RobjY+3*mm;

triangleGroup2 = triangleGroup1.duplicate();
triangleGroup2.left = RobjX+2*mm;

}