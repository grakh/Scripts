del2Points();

function del2Points(){
  var s = [];
  getPathItemsInSelection(1, s); // extract pathItems which pathpoints length is greater than 1
  if(s.length < 1) return;
  
  var p, op, pnts;
  var skipList, adjRdirAtEnd, redrawFlg;
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
	
	activeDocument.selection = s;
	
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

function readjustAnchors(p){
  // Settings ==========================

  // merge the anchor points when the distance between
  // 2 points is within ### square root ### of this value (in point)
  var minDist = 0.1; 
  
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

function getDat(p){ // pathPoint
  with(p) return [anchor, rightDirection, leftDirection, pointType];
}

function dist2(p1, p2) {
  return Math.pow(p1[0] - p2[0],2)
       + Math.pow(p1[1] - p2[1],2);
}

function isSelected(p){ // PathPoint
  return p.selected == PathPointSelection.ANCHORPOINT;
}

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

// --------------------------------------
// if the contents of both arrays are equal, return true (lengthes must be same)
function arrEq(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++){
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
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
}
