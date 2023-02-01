/////////////////////////////////////////////////////////////////
//Create Scallop
//>=--------------------------------------
//don@list.ru
//version 2.1
//////////////////////////////////////////////////////////////////


	var mm = 72.0/25.4;	
	var sel = [];
	var fsel = [];
	var offsetvalue=0.6*mm;


var docRef= app.activeDocument;
var layerAct = docRef.activeLayer;

		//if ( docRef.layers.layerName.indexOf("scallop") != -1 )  ;
//			P_Test = docRef.layers.add(); 
		//activeDocument.activeLayer = P_Test; (activeDocument.layers["Layer 1"]; )
		//default_layer.hasSelectedArtwork  =true; // так будет выделено все на дефолтном слое
//		P_Test.zOrder(ZOrderMethod.BRINGTOFRONT);
//		P_Test.name="scallop";
//		P_Test.locked = false;

		
		
		
var PRisk= new CMYKColor();
    PRisk.name = 'labelColor';
    PRisk.black = 0; 
    PRisk.cyan = 0; 
    PRisk.magenta = 100; 
    PRisk.yellow = 0;
		
if ( app.documents.length > 0)
{	
 
 ci_r  = prompt("Scallop Diametr:", 1.2)*mm;
 
 offsetvalue = ci_r/2;





/*
app.executeMenuCommand ('OffsetPath v23'); 
	//if(activeDocument.selection[0].typename =="PathItem" ){
		s = activeDocument.selection[0];
		s.moveToBeginning( Temp );
		s.strokeColor = PRisk;
		s.strokeWidth = 0.1*mm;
		s.filled = false;
	//}
 */

  selal(offsetvalue);
  //layerAct.locked = false;
  selal(-offsetvalue);
  //layerAct.locked = false;  
  offsetvalue = -offsetvalue;
  selal(offsetvalue);
  //layerAct.locked = false;
  selal(-offsetvalue);
  //getPathItemsInSelection(1, sel); // extract pathItems which pathpoints length is greater than 1
  roundAnyCorner(ci_r);
  //scallop(sel, offsetvalue);
  //Temp.remove();
  //P_Test.locked = true;
  //layerAct.locked = false;
  //app.executeMenuCommand ('selectall');

  //getPathItemsInSelection(1, sel);
  //offsets (sel, -offsetvalue);
  //P_Test.locked = false;
  //layerAct.locked = true;
  //scallop(sel, offsetvalue);
  //Temp.remove();
		
} 



else{
alert("Please select a single non-compound path only.");
}

function selal(offsetvalue){
var mSel = docRef.selection;

		Temp = docRef.layers.add();
		//P_Test.zOrder(ZOrderMethod.BRINGTOFRONT);
		Temp.name="Temp";

//Temp.hasSelectedArtwork = true;
var selection = activeDocument.selection;
var groupItem = Temp.groupItems.add();
//var groupItem2 = Temp.groupItems.add();
var count = selection.length;
for(var i = 0; i < count; i++) {
    var item = selection[selection.length - 1];
	//var item2 = item;
    item.moveToBeginning(groupItem);
	//item2.moveToBeginning(groupItem2);
}
groupItem.moveToBeginning(layerAct);
offsets(mSel, offsetvalue);
Temp.remove();
//groupItem2 = groupItem.duplicate();
//groupItem2.moveToBeginning(layerAct);
//layerAct.locked = true;
}

function scallop(sel, offsetvalue){
			try{
			for (var i =0; i<sel.length; i++){
			var cropGroup = P_Test.groupItems.add();
			cropGroup.name= "scallops";
			
			//-- 
			 

			adsspp = sel[i].selectedPathPoints;
			adssppLen = adsspp.length;
			var dif = offsetvalue;
			for (var x = 0;x<adssppLen;x++){
				if(adsspp[x].pointType != PointType.SMOOTH){
					var ellipse = cropGroup.pathItems.ellipse(adsspp[x].anchor[1]+dif, adsspp[x].anchor[0]-dif, ci_r, ci_r, false, true );
						ellipse.strokeColor = PRisk;
						ellipse.strokeWidth = 0.1*mm;
						ellipse.filled = false;
					}
				}

			}
		}
		catch(e) {
			alert("Problem Found:\n"+e);
		}
}

function getPathItemsInSelection(n, pathes){
  if(documents.length < 1) return;
  
  var sel = activeDocument.selection;
  
  if (!(sel instanceof Array) || sel.length < 1) return;

  extractPathes(sel, n, pathes);
}


function extractPathes(sel, pp_length_limit, pathes){
  for(var i = 0; i < sel.length; i++){
    if(sel[i].typename == "PathItem"){
      if(pp_length_limit
         && sel[i].pathPoints.length <= pp_length_limit){
        continue;
      }
      pathes.push(sel[i]);
      
    } else if(sel[i].typename == "GroupItem"){
      // search for PathItems in GroupItem, recursively
      extractPathes(sel[i].pageItems, pp_length_limit, pathes);
      
    } else if(sel[i].typename == "CompoundPathItem"){
      // searches for pathitems in CompoundPathItem, recursively
      // ( ### Grouped PathItems in CompoundPathItem are ignored ### )
      extractPathes(sel[i].pathItems, pp_length_limit , pathes);
    }
  }
}

function offsets (Sel, offsetvalue){
	
var jointype ='Round';
var miterlimitvalue = '4';
// Live заменить на Adobe, иначе выдаст эффект "Feather"
//xmlstring = '<LiveEffect name="Live Offset Path"><Dict data="R mlim '+miterlimitvalue + ' R ofst ' + offsetvalue + ' I jntp ' + jointype + '"/></LiveEffect>';
xmlstring = '<LiveEffect name="Adobe Offset Path"><Dict data="R CornerRadius 10 R mlim '+miterlimitvalue + ' R ofst ' + offsetvalue + ' I jntp ' + jointype + '"/></LiveEffect>';
for (i = 0; i < Sel.length; i++)
{
Sel[i].applyEffect(xmlstring);
} 

//app.executeMenuCommand ('expandStyle');
executeMenuCommand("group");
executeMenuCommand("Live Pathfinder Add");
executeMenuCommand("expandStyle");
}

function roundAnyCorner(ofval){
  // setting ----------------------------------------------
  
  var rr = mm*parseFloat(ofval);

  // ------------------------------------------------------

  var s = [];
  getPathItemsInSelection(1, s); // extract pathItems which pathpoints length is greater than 1
  if(s.length < 1) return;


    
    try{
      var eval_rr = eval(rr);
    } catch(e){
      alert("ERROR:\n" + e.description);
      return;
    }
    
    if(isNaN(eval_rr) || eval_rr <= 0){
      alert("\nERROR: fail to convert the expression to a positive number.");
      return;
    }

    rr = eval_rr;
  
  var p, op, pnts;
  var skipList, adjRdirAtEnd, redrawFlg;
  var i, nxi, pvi, q, d,ds, r, g, t, qb;
  var anc1, ldir1, rdir1, anc2, ldir2, rdir2;
  
  var hanLen = 4 * (Math.sqrt(2) - 1) / 3;
  var ptyp = PointType.SMOOTH;

  for(var j = 0; j < s.length; j++){
    p = s[j].pathPoints;
   if(readjustAnchors(p) < 2) continue; // reduce anchors
    op = !s[j].closed;
    pnts = op ? [getDat(p[0])] : [];
    redrawFlg = false;
    adjRdirAtEnd = 0;

    skipList = [(op || !isSelected(p[0]) || ! isCorner(p, 0))];
    for(i = 1; i < p.length; i++){
      skipList.push((! isSelected(p[i])
                     || ! isCorner(p,i)
                     || (op && i == p.length - 1)));
    }
    
    for(i = 0; i < p.length; i++){
      nxi = parseIdx(p, i + 1);
      if(nxi < 0) break;
      
      pvi = parseIdx(p, i - 1);

      q = [p[i].anchor,          p[i].rightDirection,
           p[nxi].leftDirection, p[nxi].anchor];

      ds = dist(q[0], q[3]) / 2;
      if(arrEq(q[0], q[1]) && arrEq(q[2], q[3])){  // straight side
        r = Math.min(ds, rr);
        g = getRad(q[0], q[3]);
        anc1 = getPnt(q[0], g, r);
        ldir1 = getPnt(anc1, g + Math.PI, r * hanLen);
        
        if(skipList[nxi]){
          if(!skipList[i]){
            pnts.push([anc1, anc1, ldir1, ptyp]);
            redrawFlg = true;
          }
          pnts.push(getDat(p[nxi]));
        } else {
          if(r<rr){  // when the length of the side is less than rr * 2
            pnts.push([anc1,
                       getPnt(anc1, getRad(ldir1, anc1), r * hanLen),
                       ldir1,
                       ptyp]);
          } else {
            if(!skipList[i]) pnts.push([anc1, anc1, ldir1, ptyp]);
            anc2 = getPnt(q[3], g+Math.PI, r);
            pnts.push([anc2,
                       getPnt(anc2, g, r * hanLen),
                       anc2,
                       ptyp]);
          }
          redrawFlg = true;
        }
      } else {  // not straight side
        d = getT4Len(q, 0) / 2;
        r = Math.min(d,rr);
        t = getT4Len(q, r);
        anc1 = bezier(q, t);
        rdir1 = defHan(t, q, 1);
        ldir1 = getPnt(anc1, getRad(rdir1, anc1), r * hanLen);

        if(skipList[nxi]){
          if(skipList[i]){
            pnts.push(getDat(p[nxi]));
          } else {
            pnts.push([anc1, rdir1, ldir1, ptyp]);
            with(p[nxi]) pnts.push([anchor,
                                    rightDirection,
                                    adjHan(anchor, leftDirection, 1 - t),
                                    ptyp]);
            redrawFlg = true;
          }
        } else { // skipList[nxi] = false
          if(r < rr){  // the length of the side is less than rr * 2
            if(skipList[i]){
              if(!op && i == 0){
                adjRdirAtEnd = t;
              } else {
                pnts[pnts.length-1][1] = adjHan(q[0], q[1], t);
              }
              pnts.push([anc1,
                         getPnt(anc1, getRad(ldir1, anc1), r * hanLen),
                         defHan(t, q, 0),
                         ptyp]);
            } else {
              pnts.push([anc1,
                         getPnt(anc1, getRad(ldir1, anc1), r * hanLen),
                         ldir1,
                         ptyp]);
            }
          } else {  // round the corner with the radius rr
            if(skipList[i]){
              t = getT4Len(q, -r);
              anc2 = bezier(q, t);
              
              if(!op && i==0) {
                adjRdirAtEnd = t;
              } else {
                pnts[pnts.length - 1][1] = adjHan(q[0], q[1], t);
              }

              ldir2 = defHan(t, q, 0);
              rdir2 = getPnt(anc2, getRad(ldir2, anc2), r * hanLen);

              pnts.push([anc2, rdir2, ldir2 , ptyp]);
            } else {
              qb = [anc1, rdir1, adjHan(q[3], q[2], 1 - t), q[3]];
              t = getT4Len(qb, -r);
              anc2 = bezier(qb, t);
              ldir2 = defHan(t,qb,0);
              rdir2 = getPnt(anc2, getRad(ldir2, anc2), r*hanLen);
              rdir1 = adjHan(anc1, rdir1, t);

              pnts.push([anc1, rdir1, ldir1, ptyp],
                        [anc2, rdir2, ldir2, ptyp]);
            }
          }
          redrawFlg = true;
        }
      }
    }
    if(adjRdirAtEnd > 0){
      pnts[pnts.length - 1][1] = adjHan(p[0].anchor, p[0].rightDirection, adjRdirAtEnd);
    }
    
    if(redrawFlg){
      // redraw
      for(i = p.length-1; i > 0; i--) p[i].remove();
      
      for(i = 0; i < pnts.length; i++){
        pt = i > 0 ? p.add() : p[0];
        with(pt){
          anchor         = pnts[i][0];
          rightDirection = pnts[i][1];
          leftDirection  = pnts[i][2];
          pointType      = pnts[i][3];
        }
      }
    }
  }
  activeDocument.selection = s;
  // alert(new Date() - tim);
}

// ------------------------------------------------
function getRadius(pi){
  with(pi){
    var gb = geometricBounds;
    var w = (gb[2] - gb[0]);
    var h = (gb[1] - gb[3]);
    if(Math.abs(w - h) > 1
       && !confirm("There's a difference between width and\n"
                   + "height of foreground path. Continue?")){
      return -1;
    }
    return w / 2;
  }
}

// ------------------------------------------------
// return [x,y] of the distance "len" and the angle "rad"(in radian)
// from "pt"=[x,y]
function getPnt(pt, rad, len){
  return [pt[0] + Math.cos(rad) * len,
          pt[1] + Math.sin(rad) * len];
}

// ------------------------------------------------
// return the [x, y] coordinate of the handle of the point on the bezier curve
// that corresponds to the parameter "t"
// n=0:leftDir, n=1:rightDir
function defHan(t, q, n){
  return [t * (t * (q[n][0] - 2 * q[n+1][0] + q[n+2][0]) + 2 * (q[n+1][0] - q[n][0])) + q[n][0],
          t * (t * (q[n][1] - 2 * q[n+1][1] + q[n+2][1]) + 2 * (q[n+1][1] - q[n][1])) + q[n][1]];
}

// -----------------------------------------------
// return the [x, y] coordinate on the bezier curve
// that corresponds to the paramter "t"
function bezier(q, t) {
  var u = 1 - t;
  return [u*u*u * q[0][0] + 3*u*t*(u* q[1][0] + t* q[2][0]) + t*t*t * q[3][0],
          u*u*u * q[0][1] + 3*u*t*(u* q[1][1] + t* q[2][1]) + t*t*t * q[3][1]];
}

// ------------------------------------------------
// adjust the length of the handle "dir"
// by the magnification ratio "m",
// returns the modified [x, y] coordinate of the handle
// "anc" is the anchor [x, y]
function adjHan(anc, dir, m){
  return [anc[0] + (dir[0] - anc[0]) * m,
          anc[1] + (dir[1] - anc[1]) * m];
}

// ------------------------------------------------
// return true if the pathPoints "p[idx]" is a corner
function isCorner(p, idx){
  var pnt0 = getAnglePnt(p, idx, -1);
  var pnt1 = getAnglePnt(p, idx,  1);
  if(! pnt0 || ! pnt1) return false;                    // at the end of a open-path
  if(pnt0.length < 1 || pnt1.length<1) return false;   // anchor is overlapping, so cannot determine the angle
  var rad = getRad2(pnt0, p[idx].anchor, pnt1, true);
  if(rad > Math.PI - 0.1) return false;   // set the angle tolerance here
  return true;
}
// ------------------------------------------------
// "p"=pathPoints, "idx1"=index of pathpoint
// "dir" = -1, returns previous point [x,y] to get the angle of tangent at pathpoints[idx1]
// "dir" =  1, returns next ...
function getAnglePnt(p, idx1, dir){
  if(!dir) dir = -1;
  var idx2 = parseIdx(p, idx1 + dir);
  if(idx2 < 0) return null;  // at the end of a open-path
  var p2 = p[idx2];
  with(p[idx1]){
    if(dir<0){
      if(arrEq(leftDirection, anchor)){
        if(arrEq(p2.anchor, anchor)) return [];
        if(arrEq(p2.anchor, p2.rightDirection)
           || arrEq(p2.rightDirection, anchor)) return p2.anchor;
        else return p2.rightDirection;
      } else {
        return leftDirection;
      }
    } else {
      if(arrEq(anchor, rightDirection)){
        if(arrEq(anchor, p2.anchor)) return [];
        if(arrEq(p2.anchor, p2.leftDirection)
           || arrEq(anchor, p2.leftDirection)) return p2.anchor;
        else return p2.leftDirection;
      } else {
        return rightDirection;
      }
    }
  }
}
// --------------------------------------
// if the contents of both arrays are equal, return true (lengthes must be same)
function arrEq(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++){
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}

// ------------------------------------------------
// return the distance between p1=[x,y] and p2=[x,y]
function dist(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2)
                   + Math.pow(p1[1] - p2[1], 2));
}
// ------------------------------------------------
// return the squared distance between p1=[x,y] and p2=[x,y]
function dist2(p1, p2) {
  return Math.pow(p1[0] - p2[0],2)
       + Math.pow(p1[1] - p2[1],2);
}
// --------------------------------------
// return the angle in radian
// of the line drawn from p1=[x,y] from p2
function getRad(p1,p2) {
  return Math.atan2(p2[1] - p1[1],
                    p2[0] - p1[0]);
}

// --------------------------------------
// return the angle between two line segments
// o-p1 and o-p2 ( 0 - Math.PI)
function getRad2(p1, o, p2){
  var v1 = normalize(p1, o);
  var v2 = normalize(p2, o);
  return Math.acos(v1[0] * v2[0] + v1[1] * v2[1]);
}
// ------------------------------------------------
function normalize(p, o){
  var d = dist(p, o);
  return d == 0 ? [0, 0] : [(p[0] - o[0]) / d,
                            (p[1] - o[1]) / d];
}

// ------------------------------------------------
// return the bezier curve parameter "t"
// at the point which the length of the bezier curve segment
// (from the point start drawing) is "len"
// when "len" is 0, return the length of whole this segment.
function getT4Len(q, len){
  var m = [ q[3][0] - q[0][0] + 3 * (q[1][0] - q[2][0]),
            q[0][0] - 2 * q[1][0] + q[2][0],
            q[1][0] - q[0][0] ];
  var n = [ q[3][1] - q[0][1] + 3 * (q[1][1] - q[2][1]),
            q[0][1] - 2 * q[1][1] + q[2][1],
            q[1][1] - q[0][1] ];
  var k = [ m[0] * m[0] + n[0] * n[0],
            4 * (m[0] * m[1] + n[0] * n[1]),
            2 * ((m[0] * m[2] + n[0] * n[2]) + 2 * (m[1] * m[1] + n[1] * n[1])),
            4 * (m[1] * m[2] + n[1] * n[2]),
            m[2] * m[2] + n[2] * n[2] ];
  
   var fullLen = getLength(k, 1);

  if(len == 0){
    return fullLen;
    
  } else if(len < 0){
    len += fullLen;
    if(len < 0) return 0;

  } else if(len > fullLen){
    return 1;
  }
  
  var t, d;
  var t0 = 0;
  var t1 = 1;
  var torelance = 0.001;
  
  for(var h = 1; h < 30; h++){
    t = t0 + (t1 - t0) / 2;
    d = len - getLength(k, t);
    if(Math.abs(d) < torelance) break;
    else if(d < 0) t1 = t;
    else t0 = t;
  }
  return t;
}

// ------------------------------------------------
// return the length of bezier curve segment
// in range of parameter from 0 to "t"
function getLength(k, t){
  var h = t / 128;
  var hh = h * 2;
  var fc = function(t, k){
    return Math.sqrt(t * (t * (t * (t * k[0] + k[1]) + k[2]) + k[3]) + k[4]) || 0 };
  var total = (fc(0, k) - fc(t, k)) / 2;
  for(var i = h; i < t; i += hh) total += 2 * fc(i, k) + fc(i + h, k);
  return total * hh;
}

// ------------------------------------------------
// extract PathItems from the selection which length of PathPoints
// is greater than "n"
function getPathItemsInSelection(n, pathes){
  if(documents.length < 1) return;
  
  var s = activeDocument.selection;
  
  if (!(s instanceof Array) || s.length < 1) return;

  extractPathes(s, n, pathes);
}

// --------------------------------------
// extract PathItems from "s" (Array of PageItems -- ex. selection),
// and put them into an Array "pathes".  If "pp_length_limit" is specified,
// this function extracts PathItems which PathPoints length is greater
// than this number.
function extractPathes(s, pp_length_limit, pathes){
  for(var i = 0; i < s.length; i++){
    if(s[i].typename == "PathItem"){
      if(pp_length_limit
         && s[i].pathPoints.length <= pp_length_limit){
        continue;
      }
      pathes.push(s[i]);
      
    } else if(s[i].typename == "GroupItem"){
      // search for PathItems in GroupItem, recursively
      extractPathes(s[i].pageItems, pp_length_limit, pathes);
      
    } else if(s[i].typename == "CompoundPathItem"){
      // searches for pathitems in CompoundPathItem, recursively
      // ( ### Grouped PathItems in CompoundPathItem are ignored ### )
      extractPathes(s[i].pathItems, pp_length_limit , pathes);
    }
  }
}

// --------------------------------------
// merge nearly overlapped anchor points 
// return the length of pathpoints after merging
function readjustAnchors(p){
  // Settings ==========================

  // merge the anchor points when the distance between
  // 2 points is within ### square root ### of this value (in point)
  var minDist = 0.01; 
  
  // ===================================
  if(p.length < 2) return 1;
  var i;

  if(p.parent.closed){
    for(i = p.length - 1; i >= 1; i--){
      if(dist2(p[0].anchor, p[i].anchor) < minDist){
        p[0].leftDirection = p[i].leftDirection;
        p[i].remove();
      } else {
        break;
      }
    }
  }
  
  for(i = p.length - 1; i >= 1; i--){
    if(dist2(p[i].anchor, p[i - 1].anchor) < minDist){
      p[i - 1].rightDirection = p[i].rightDirection;
      p[i].remove();
    }
  }
  
  return p.length;
}
// -----------------------------------------------
// return pathpoint's index. when the argument is out of bounds,
// fixes it if the path is closed (ex. next of last index is 0),
// or return -1 if the path is not closed.
function parseIdx(p, n){ // PathPoints, number for index
  var len = p.length;
  if(p.parent.closed){
    return n >= 0 ? n % len : len - Math.abs(n % len);
  } else {
    return (n < 0 || n > len - 1) ? -1 : n;
  }
}
// -----------------------------------------------
function getDat(p){ // pathPoint
  with(p) return [anchor, rightDirection, leftDirection, pointType];
}
// -----------------------------------------------
function isSelected(p){ // PathPoint
  return p.selected == PathPointSelection.ANCHORPOINT;
}
 