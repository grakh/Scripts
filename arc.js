    // See "arc.js" for the code required to find arcs on the curve.

const pi = Math.PI,
  tau = 2 * pi,
  quart = pi / 2,
  epsilon = 0.000001;

    function arc(pnts){

  // float precision significant decimal

      
     var p1 = [pnts[0].anchor[0], pnts[0].anchor[1]];
     var p2 = [pnts[0].rightDirection[0], pnts[0].rightDirection[1]];
     var p3 = [pnts[1].leftDirection[0], pnts[1].leftDirection[1]];
     var p4 = [pnts[1].anchor[0], pnts[1].anchor[1]];


    var a = getArc([p1, p2, p3, p4]);
    alert(a);
   // var arcs = curve.arcs(this.error);
   // arcs.forEach(a => {
   //     [ a.x, a.y, a.r, a.s, a.e ];
   // });

   // return arcs;
  }
    function getArc(curve) {

      var ts = 0,
          te = 1,
          tm = te,
          safety = 0,
          np1 = {x: curve[ts][0], y: curve[ts][1]}, np2, np3,
          arc,
          currGood = false,
          prevGood = false,
          done,
          prev_e = 1,
          step = 0;
  
      // Find where the good/bad boundary is
      te = 1;
  
      // step 2: find the best possible arc
      do {
          prevGood = currGood;
          tm = (ts + te) / 2;
          step++;
          
          np2 = {x: curve[0][0], y: curve[0][1]};
          np3 = {x: curve[1][0], y: curve[1][1]};

          arc = getccenter(np1, np2, np3);
          arc.interval = { start: ts, end: te };
  
          //var error = this.computeError(arc, np1, ts, te);
          //currGood = (error <= this.error);
          currGood = true;
          done = prevGood && !currGood;
          if (!done) prev_e = te;
  
          // this arc is fine: try a wider arc
          if (currGood) {
              // if e is already at max, then we're done for this arc.
              if (te >= 1) {
                  // make sure we cap at t=1
                  arc.interval = {end: prev_e = 1};
                  // if we capped the arc segment to t=1 we also need to make sure that
                  // the arc's end angle is correct with respect to the bezier end point.
                  if (te > 1) {
                      var d = {
                          x: arc.x + arc.r * Math.cos(arc.e),
                          y: arc.y + arc.r * Math.sin(arc.e),
                      };
                      arc.e += angle({ x: arc.x, y: arc.y }, d, curve[3]);
                  }
                  done = true;
                  break;
              }
              // if not, move it up by half the iteration distance
              te = te + (te - ts) / 2;
            }
        
          // This is a bad arc: we need to move 'e' down to find a good arc else { te = tm; }
          }
       while (!done && safety++ < 100);

      return arc;
  }
  
  function computeError(pc, np1, s, e) {
      const q = (e - s) / 4,
            c1 = curve[s + q],
            c2 = curve[e - q],
            ref = dist(pc.x, pc.y, np1.x, np1.y),
            d1 = dist(pc.x, pc.y, c1.x, c1.y),
            d2 = dist(pc.x, pc.y, c2.x, c2.y);
      return Math.abs(d1 - ref) + Math.abs(d2 - ref);
  }

  function getccenter(p1, p2, p3) {
    const dx1 = p2.x - p1.x,
      dy1 = p2.y - p1.y,
      dx2 = p3.x - p2.x,
      dy2 = p3.y - p2.y,
      dx1p = dx1 * Math.cos(quart) - dy1 * Math.sin(quart),
      dy1p = dx1 * Math.sin(quart) + dy1 * Math.cos(quart),
      dx2p = dx2 * Math.cos(quart) - dy2 * Math.sin(quart),
      dy2p = dx2 * Math.sin(quart) + dy2 * Math.cos(quart),
      // chord midpoints
      mx1 = (p1.x + p2.x) / 2,
      my1 = (p1.y + p2.y) / 2,
      mx2 = (p2.x + p3.x) / 2,
      my2 = (p2.y + p3.y) / 2,
      // midpoint offsets
      mx1n = mx1 + dx1p,
      my1n = my1 + dy1p,
      mx2n = mx2 + dx2p,
      my2n = my2 + dy2p,
      // intersection of these lines:
      arc = lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n),
      r = dist(arc, p1);

    // arc start/end values, over mid point:
    var s = Math.atan2(p1.y - arc.y, p1.x - arc.x),
        m = Math.atan2(p2.y - arc.y, p2.x - arc.x),
        e = Math.atan2(p3.y - arc.y, p3.x - arc.x),
      _;

    // determine arc direction (cw/ccw correction)
    if (s < e) {
      // if s<m<e, arc(s, e)
      // if m<s<e, arc(e, s + tau)
      // if s<e<m, arc(e, s + tau)
      if (s > m || m > e) {
        s += tau;
      }
      if (s > e) {
        _ = e;
        e = s;
        s = _;
      }
    } else {
      // if e<m<s, arc(e, s)
      // if m<e<s, arc(s, e + tau)
      // if e<s<m, arc(s, e + tau)
      if (e < m && m < s) {
        _ = e;
        e = s;
        s = _;
      } else {
        e += tau;
      }
    }
    // assign and done.
    arc.s = s;
    arc.e = e;
    arc.r = r;
    return arc;
  }

  function angle(o, v1, v2) {
    const dx1 = v1.x - o.x,
      dy1 = v1.y - o.y,
      dx2 = v2.x - o.x,
      dy2 = v2.y - o.y,
      cross = dx1 * dy2 - dy1 * dx2,
      dot = dx1 * dx2 + dy1 * dy2;
    return Math.atan2(cross, dot);
  }

function lli8(x1, y1, x2, y2, x3, y3, x4, y4) {
    const nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
          ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
           d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d == 0) {
      return false;
    }
    return { x: nx / d, y: ny / d };
  }

function lli4(p1, p2, p3, p4) {
    const x1 = p1.x,
      y1 = p1.y,
      x2 = p2.x,
      y2 = p2.y,
      x3 = p3.x,
      y3 = p3.y,
      x4 = p4.x,
      y4 = p4.y;
    return lli8(x1, y1, x2, y2, x3, y3, x4, y4);
  }

function lli(v1, v2) {
    return lli4(v1, v1.c, v2, v2.c);
  }

function dist(p1, p2) {
    const dx = p1.x - p2.x,
      dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }