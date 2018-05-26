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
//alert(""+LeftCY);

newCrestPath1 = newLayer.compoundPathItems.add();
newCrestPath2 = newLayer.compoundPathItems.add();
newCrestPath3 = newLayer.compoundPathItems.add();
newCrestPath4 = newLayer.compoundPathItems.add();

var triangleGroup1 = newLayer.groupItems.add();
newCrestPath1 = triangleGroup1.compoundPathItems.add();
newCrestPath2 = triangleGroup1.compoundPathItems.add();
newCrestPath3 = triangleGroup1.compoundPathItems.add();
newCrestPath4 = triangleGroup1.compoundPathItems.add();

//©Klimov S.V.
newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(LobjX-2*mm, LeftCY), Array(LobjX-5*mm, LeftCY) ) );
newCrest1 = newCrestPath1.pathItems.add();
newCrest1.setEntirePath( Array( Array(LobjX-3.5*mm, LeftCY-1.5*mm), Array(LobjX-3.5*mm, LeftCY+1.5*mm) ) );

newCrest1.stroked = true;
newCrest1.strokeWidth = 0.57;
newCrest1.strokeColor = app.activeDocument.swatches[Registr].color;

newCrest2 = newCrestPath2.pathItems.add();
newCrest2.setEntirePath( Array( Array(RobjX+2*mm, LeftCY), Array(RobjX+5*mm, LeftCY) ) );
newCrest2 = newCrestPath2.pathItems.add();
newCrest2.setEntirePath( Array( Array(RobjX+3.5*mm, LeftCY-1.5*mm), Array(RobjX+3.5*mm, LeftCY+1.5*mm) ) );

newCrest2.stroked = true;
newCrest2.strokeWidth = 0.57;
newCrest2.strokeColor = app.activeDocument.swatches[Registr].color;

newCrest3 = newCrestPath3.pathItems.add();
newCrest3.setEntirePath( Array( Array(LeftCX-1.5*mm, LobjY+3.5*mm), Array(LeftCX+1.5*mm, LobjY+3.5*mm) ) );
newCrest3 = newCrestPath3.pathItems.add();
newCrest3.setEntirePath( Array( Array(LeftCX, LobjY+2*mm), Array(LeftCX, LobjY+5*mm) ) );

newCrest3.stroked = true;
newCrest3.strokeWidth = 0.57;
newCrest3.strokeColor = app.activeDocument.swatches[Registr].color;

newCrest4 = newCrestPath4.pathItems.add();
newCrest4.setEntirePath( Array( Array(LeftCX-1.5*mm, RobjY-3.5*mm), Array(LeftCX+1.5*mm, RobjY-3.5*mm) ) );
newCrest4 = newCrestPath4.pathItems.add();
newCrest4.setEntirePath( Array( Array(LeftCX, RobjY-2*mm), Array(LeftCX, RobjY-5*mm) ) );

newCrest4.stroked = true;
newCrest4.strokeWidth = 0.57;
newCrest4.strokeColor = app.activeDocument.swatches[Registr].color;

}