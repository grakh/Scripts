
var docRef = app.activeDocument;
var fonts="MagistralTT"; 
var PWhite = new CMYKColor();
    PWhite.name = 'WhiteColor';
    PWhite.black =0; 
    PWhite.cyan = 0; 
    PWhite.magenta = 0; 
    PWhite.yellow = 0;
    
var PFull = new CMYKColor();
    PFull.name = 'FullColor';
    PFull.black = 100; 
    PFull.cyan = 100; 
    PFull.magenta = 100; 
    PFull.yellow = 100;

var CText = new CMYKColor();
    CText.name = 'FullColor';
    CText.black = 0; 
    CText.cyan = 0; 
    CText.magenta = 14; 
    CText.yellow = 0;

var L_Test = docRef.layers["L-Test"];

var mm = 72.0/25.4;
var dotPoint = 2.0;
var rr = 700;

rr = prompt("Set distance: ", rr);

var Point0 = L_Test.groupItems.add();
    
var P0K = Point0.pathItems.ellipse(dotPoint/2, -dotPoint/2, dotPoint, dotPoint, false, false );
    P0K.stroked = false;
    P0K.filled = true;
    P0K.fillColor = PFull;
    P0K.fillOverprint = false;
    
var P0W = Point0.pathItems.ellipse(dotPoint/8, -dotPoint/8, dotPoint/4, dotPoint/4, false, false );
    P0W.stroked = false;
    P0W.filled = true;
    P0W.fillColor = PWhite;
    P0W.fillOverprint = false;

Point0.left = rr*mm - dotPoint/2-0.146*mm;

var LText = L_Test.textFrames.add();
    LText.position = [(rr-3.5)*mm,7*mm];
    LText.contents = rr;
    LText.textRange.characterAttributes.size = 11;
    LText.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
    LText.textRange.characterAttributes.fillColor =  CText;