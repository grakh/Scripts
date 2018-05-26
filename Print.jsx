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
