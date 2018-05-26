sel=activeDocument.selection;
mm = 72/24.8;
if (sel.length < 1) {alert("No select oject")} else
{
newLayer=activeDocument.layers;
newLayer = activeDocument.layers.add();
newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

newLayer.name="Corn";

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


newCompoundPath1 = newLayer.compoundPathItems.add();
newCompoundPath2 = newLayer.compoundPathItems.add();
newCompoundPath3 = newLayer.compoundPathItems.add();
newCompoundPath4 = newLayer.compoundPathItems.add();

var triangleGroup = newLayer.groupItems.add();
newCompoundPath1 = triangleGroup.compoundPathItems.add();
newCompoundPath2 = triangleGroup.compoundPathItems.add();
newCompoundPath3 = triangleGroup.compoundPathItems.add();
newCompoundPath4 = triangleGroup.compoundPathItems.add();

newPath1 = newCompoundPath1.pathItems.add();
newPath1.setEntirePath( Array( Array(RobjX+10*mm, LobjY+10*mm), Array(RobjX+5*mm, LobjY+10*mm) ) );
newPath1 = newCompoundPath1.pathItems.add();
newPath1.setEntirePath( Array( Array(RobjX+10*mm, LobjY+10*mm), Array(RobjX+10*mm, LobjY+5*mm) ) );

newPath1.stroked = true;
newPath1.strokeWidth = 0.57;
newPath1.strokeColor = app.activeDocument.swatches[Registr].color;

newPath2 = newCompoundPath2.pathItems.add();
newPath2.setEntirePath( Array( Array(LobjX-10*mm, LobjY+10*mm), Array(LobjX-5*mm, LobjY+10*mm) ) );
newPath2 = newCompoundPath2.pathItems.add();
newPath2.setEntirePath( Array( Array(LobjX-10*mm, LobjY+10*mm), Array(LobjX-10*mm, LobjY+5*mm) ) );

newPath2.stroked = true;
newPath2.strokeWidth = 0.57;
newPath2.strokeColor = app.activeDocument.swatches[Registr].color;

newPath3 = newCompoundPath3.pathItems.add();
newPath3.setEntirePath( Array( Array(LobjX-10*mm, RobjY-10*mm), Array(LobjX-5*mm, RobjY-10*mm) ) );
newPath3 = newCompoundPath3.pathItems.add();
newPath3.setEntirePath( Array( Array(LobjX-10*mm, RobjY-10*mm), Array(LobjX-10*mm, RobjY-5*mm) ) );

newPath3.stroked = true;
newPath3.strokeWidth = 0.57;
newPath3.strokeColor = app.activeDocument.swatches[Registr].color;

newPath4 = newCompoundPath4.pathItems.add();
newPath4.setEntirePath( Array( Array(RobjX+10*mm, RobjY-10*mm), Array(RobjX+5*mm, RobjY-10*mm) ) );
newPath4 = newCompoundPath4.pathItems.add();
newPath4.setEntirePath( Array( Array(RobjX+10*mm, RobjY-10*mm), Array(RobjX+10*mm, RobjY-5*mm) ) );

newPath4.stroked = true;
newPath4.strokeWidth = 0.57;
newPath4.strokeColor = app.activeDocument.swatches[Registr].color;

}



//----------------------------------------------------
var doc = app.activeDocument;
var obj = doc.selection;

var bnd = new Array();
if (documents.length > 0){	
	if (obj.length > 0) {
		bnd = getBounds(obj);	
		W = bnd[2] - bnd[0];
		H = bnd[1] - bnd[3];
		X = bnd[0];
		Y = bnd[1];		
	}
	else {
		doc.rulerOrigin = Array(0, 0);
		bnd[0] = 0;
		bnd[2] = doc.width;
		bnd[1] = doc.height;
		bnd[3] = 0;		
	}
		bnd[0] =bnd[0]-15*mm;
		bnd[2] =bnd[2]+15*mm;
		bnd[1] =bnd[1]+15*mm;
		bnd[3] =bnd[3]-15*mm;
			
	doc.cropBox = bnd;
	doc.cropStyle = CropOptions.Standard;
	doc.outputResolution = 2400;
	doc.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL2;
	
}

function getBounds(obj) {
	var selObj1 = new Array();
	var selObj2 = new Array();
	var vgb1 = new Array();
	var vgb2 = new Array();
	var n = obj.length;
//©Klimov S.V.	
	if (n>0){		
		if( (obj[0].typename == 'GroupItem') && obj[0].clipped && (obj[0].pageItems.length > 1) ){
			clipObj = obj[0].pathItems[0].geometricBounds;
			vgb1 = clipObj;
		}
		else {
			selObj1 = obj[0];
			vgb1 = selObj1.visibleBounds;
		}
		if (n > 1) {
			for (i=1; i<n; i++) {
				selObj2 = obj[i];
				if( (obj[i].typename == 'GroupItem') && obj[i].clipped && (obj[i].pageItems.length > 1) ) {
					vgb2 = obj[i].pathItems[0].geometricBounds;
				}		
				else {
					vgb2 = selObj2.visibleBounds;
				}
				if( vgb1[0] > vgb2[0] ) vgb1[0] = vgb2[0];
				if( vgb1[1] < vgb2[1] ) vgb1[1] = vgb2[1];
				if( vgb1[2] < vgb2[2] ) vgb1[2] = vgb2[2];
				if( vgb1[3] > vgb2[3] ) vgb1[3] = vgb2[3];
			}
		}
	}
	return vgb1;
}
