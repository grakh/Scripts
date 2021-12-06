//®Klimov S.V. (don@list.ru)

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

PWhite = new CMYKColor();
PWhite.name = 'PWhite';
PWhite.black =0; 
PWhite.cyan = 0; 
PWhite.magenta = 0; 
PWhite.yellow = 0;

PCyan0 = new CMYKColor();
PCyan0.name = 'Process Cyan';
PCyan0.black =0; 
PCyan0.cyan = 0.2; 
PCyan0.magenta = 0; 
PCyan0.yellow = 0;

PMagenta0 = new CMYKColor();
PMagenta0.name = 'Process Magenta';
PMagenta0.black =0; 
PMagenta0.cyan = 0; 
PMagenta0.magenta = 0.2; 
PMagenta0.yellow = 0;

PYellow0 = new CMYKColor();
PYellow0.name = 'Process Yellow';
PYellow0.black =0; 
PYellow0.cyan = 0; 
PYellow0.magenta = 0; 
PYellow0.yellow = 0.2;

PBlack0 = new CMYKColor();
PBlack0.name = 'Process Black';
PBlack0.black =0.2; 
PBlack0.cyan = 0; 
PBlack0.magenta = 0; 
PBlack0.yellow = 0;



// ------------------------------------------------- start

docRef = app.activeDocument;


for ( i = 0; i < docRef.layers.length; i++ ) {
    docRef.layers[i].locked = true;
    }

var newLayer = docRef.layers;  

mm = 72/25.4;
wi= docRef.width;
hi = docRef.height;

docRef.rulerOrigin = Array (0,0);


u=0;
var sInks = new Array;
var sI = new Array;
var iLength = docRef.inkList.length;
for(var i=0; i<iLength ; i++) {
sI[i] = docRef.inkList[i].name;
}

sI[0]='Process Cyan';
sI[1]='Process Magenta';
sI[2]='Process Yellow';
sI[3]='Process Black';

var None= '[None]';
var Registr= '[Registration]';
bl = false;


for (i=0; i<docRef.swatches.length; i++) {
// alert(''+docRef.swatches[i].name);   
    if (docRef.swatches[i].name == '[Нет]') None = docRef.swatches[i].name;
    if (docRef.swatches[i].name == '[Совмещение]' | docRef.swatches[i].name == '[Совмещение] 1'  | docRef.swatches[i].name == '[Совмещение]1') Registr = docRef.swatches[i].name;

};

//alert(''+None+'  '+Wh+ '  '+Registr);

var res =  
"dialog { orientation: 'column', alignChildren: 'left',\
	text: StaticText {text:'', preferredSize:[60,0]},\
	namb:  Group { orientation: 'row', alignChildren: 'left',\
            text: StaticText {text:'Номер заказа: '},\
			text: StaticText {text:'', preferredSize:[9,0]},\
            texte: EditText { preferredSize: [100,20], alignment: 'left'},\
			}\
	nameOrder:  Group { orientation: 'row', alignChildren: 'left',\
            text: StaticText {text:'Название заказа: '},\
            texte: EditText { preferredSize: [305,20], alignment: 'left'},\
			}\
	Rapp:   Group { orientation: 'row', alignChildren: 'left',\
            text: StaticText {text:'Раппорт: '},\
            texte: EditText { preferredSize: [70,20], alignment: 'left'},\
            text1: StaticText {text:',     Ширина верстки с опорками: '},\
            texte1: EditText { preferredSize: [70,20], alignment: 'left'},\
			}\
	info:   Group { orientation: 'row', alignChildren: 'left',\
			check: Checkbox {  value: false, enabled: true }, \
			text2: StaticText {text:'- Микроточки, '},\
            text: StaticText {text:'Ширина ГП: '},\
            texte: EditText { text: '1', preferredSize: [40,20], alignment: 'left'},\
            text1: StaticText {text:', Количество ручьёв: '},\
            texte1: EditText { text: '1', preferredSize: [30,20], alignment: 'left'},\
			}\
	text: StaticText {text:'', preferredSize:[60,0]},\
	panel2: Panel {text: 'Color:', preferredSize: [370,220], alignChildren: 'left',\
		GR: Group { orientation: 'row', alignChildren: 'center', \
			combo: ListBox {preferredSize: [300,210], properties:{multiselect:false, selected: true}}, \
		GR0: Group { orientation: 'column', alignChildren: 'center', \
			text: StaticText {text:'', preferredSize:[60,0]},\
			white: Button { text: 'White', properties:{name:'white'} }, \
			lak: Button { text: 'Lak', properties:{name:'lak'} }, \
			seporate: Panel {preferredSize: [80,1], alignChildren: 'left'},\
			text: StaticText {text:'', preferredSize:[60,5]},\
   			up: Button { text: 'UP', properties:{name:'up'} }, \
   			down: Button { text: 'Down', properties:{name:'down'} }, \
	text: StaticText {text:'', preferredSize:[60,0]},\
			del: Button { text: 'Delete', properties:{name:'del'} }, \
         								  }\			  }\
												}\
	buttons: Group { orientation: 'row', alignChildren: 'center', \
		text: StaticText {text:'', preferredSize:[120,0]},\
		ok: Button { text: 'OK', properties:{name:'ok'} }, \
		cencel: Button { text: 'Cancel', properties:{name:'cancel'} }, \
                                   } \
}";



var dlg = new Window(res);
var ver = "v1.2";
dlg.text = "Operational Control Scale  "+ ver;

//Color set menu
for(i=0; i<sI.length; i++) {
dlg.panel2.GR.combo.add("item", sI[i]);
}
dlg.panel2.GR.combo.items[0].selected = true;

dlg.panel2.GR.GR0.white.onClick= function(){

	dlg.panel2.GR.combo.selection.text = (~dlg.panel2.GR.combo.selection.text.indexOf("W-"))? dlg.panel2.GR.combo.selection.text.slice(2):
	"W-" + dlg.panel2.GR.combo.selection.text;
	//alert(dlg.panel2.GR.combo.selection.itemIndex);
	dlg.panel2.GR.combo.items[0].selected = true;
}

dlg.panel2.GR.GR0.lak.onClick= function(){
	dlg.panel2.GR.combo.selection.text = (~dlg.panel2.GR.combo.selection.text.indexOf("L-"))? dlg.panel2.GR.combo.selection.text.slice(2):
	"L-" + dlg.panel2.GR.combo.selection.text;
	dlg.panel2.GR.combo.items[0].selected = true;
}

//dlg.panel2.GR.combo.add("item", Null);
// Delete buttom
dlg.panel2.GR.GR0.del.onClick= function(){

colorFill = dlg.panel2.GR.combo.selection.text;
//Arrya.remove(sI, colorFill);
//alert(''+sI);
for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
if (dlg.panel2.GR.combo.items[i].text==colorFill) dlg.panel2.GR.combo.remove(i);
		}

	}
//Up buttom
dlg.panel2.GR.GR0.up.onClick= function(){

ind = dlg.panel2.GR.combo.selection.index;
strInd = dlg.panel2.GR.combo.items[ind-1].text;
dlg.panel2.GR.combo.items[ind-1].text = dlg.panel2.GR.combo.items[ind].text ;
dlg.panel2.GR.combo.items[ind].text = strInd;
dlg.panel2.GR.combo.items[ind-1].selected = true;
//alert(''+strInd);
}
//Down buttom
dlg.panel2.GR.GR0.down.onClick= function(){

ind = dlg.panel2.GR.combo.selection.index;
strInd = dlg.panel2.GR.combo.items[ind+1].text;
dlg.panel2.GR.combo.items[ind+1].text = dlg.panel2.GR.combo.items[ind].text ;
dlg.panel2.GR.combo.items[ind].text = strInd;
dlg.panel2.GR.combo.items[ind+1].selected = true;
//alert(''+strInd);

}



dlg.Rapp.texte.text = parseFloat(hi/mm).toFixed(2).toString(); //(Math.round((hi/2.83465)/3.175)).toString();
dlg.nameOrder.texte.text = docRef.name.replace(".ai","");
dlg.Rapp.texte1.text = parseFloat(wi/mm).toFixed(1).toString();
dlg.info.texte.text = 0;

//Ok buttom
dlg.buttons.ok.onClick = function(){

	newLayer = docRef.layers.add();
	newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
	newLayer.name="Reals";

var switchList = parseInt(dlg.Rapp.texte1.text - parseFloat(wi/mm));
//alert(switchList);

	if(dlg.info.check.value){
		var dotLayer = docRef.layers; 
		dotLayer = docRef.layers.add();
		dotLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
		dotLayer.name="microDot";
		var mDot = dotLayer.groupItems.add();
	}
	
	var Group = newLayer.groupItems.add();
	var Group1 = Group.groupItems.add();
	var Group2 = Group.groupItems.add();
	var oW = Group.groupItems.add();
	var T1 = Group.groupItems.add();
	var T2 = Group.groupItems.add();
	var T3 = Group.groupItems.add();
	var TColor = Group.groupItems.add();
	var PColor = Group.groupItems.add();
	var TNamber = Group.groupItems.add();
	var flagNamespace = false;
	//oW.move(Group1, ElementPlacement.PLACEATBEGINNING);

	var ur=0;
	for(i=0; i<dlg.panel2.GR.combo.items.length; i++) {
		if (dlg.panel2.GR.combo.items[i].text!=None) { sInks[ur] = dlg.panel2.GR.combo.items[i].text;  ur++ };
		};

	//alert(''+ sInks);

	Namb = ''+dlg.namb.texte.text;
	Rapport = 'R '+dlg.Rapp.texte.text;
	NameOrder = ''+dlg.nameOrder.texte.text;

	//--------------------------------------------------------functions
	//oporka(Group1, 5);
	//setText(T1, T2, T3, oW, TColor, TNamber, PColor);
	switch (switchList) {
		case  8: oporka(Group1, 4); Group1.left=-6*mm; 
					microDot(Group2, wi/mm+2); 
					flagNamespace = true; setText(T1, T2, T3, oW, TColor, TNamber, PColor, flagNamespace);
					break;
		case  9: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-7*mm; 
					microDot(Group2, wi/mm+2); 
					break;
		case 10: oporka(Group1, 4); Group1.left=-7*mm; 
					microDot(Group2, wi/mm+3); 
					flagNamespace = true; setText(T1, T2, T3, oW, TColor, TNamber, PColor, flagNamespace);
					break;
		case 11: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-8*mm; 
					microDot(Group2, wi/mm+3); 
					break;
		case 12: oporka(Group1, 4); Group1.left=-6*mm;  
					oporka(Group2, 4); Group2.left = wi+2*mm; break;
		case 13: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-7*mm; 
					oporka(Group2, 4); Group2.left = wi+2*mm; break;
		case 14: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-7*mm; 
					oporka(Group2, 4); Group2.left = wi+3*mm; break;
		case 16:
		case 17:
		case 15: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-8*mm; 
					oporka(Group2, 4); Group2.left = wi+3*mm; break;
		case 19:
		case 18: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-7*mm; 
					Group2 = Group.duplicate(); Group2.left = wi+2*mm; rez(Group2, wi+7*mm); break;
		case 21:
		case 22:
		case 20: oporka(Group1, 5); setText(T1, T2, T3, oW, TColor, TNamber, PColor); Group.left=-8*mm; 
					Group2 = Group.duplicate(); Group2.left = wi+3*mm; rez(Group2, wi+8*mm); break;
		default: microDot(Group2, 1); flagNamespace = true; setText(T1, T2, T3, oW, TColor, TNamber, PColor, flagNamespace); microDot(Group2, wi/mm-1);
	}

	if (dlg.info.check.value) {
		var gp = parseInt(dlg.info.texte.text);
		var col = parseInt(dlg.info.texte1.text); //parseInt(wi/mm/gp);

		var	gp2 = 0;
			for (var i = 0; i < col; i++) {
				microDot(mDot, gp2+1);
				gp2 += gp;
				microDot(mDot, gp2-1);
			};
	}
	//----------------------------------------------------end functions

 dlg.hide();	
}
//Cancel buttom
dlg.buttons.cancel.onClick = function()
{
	win.close(0);
}


//Start dialog
dlg.center(); 
dlg.show();

 for ( i = 0; i < docRef.layers.length; i++ ) {
    docRef.layers[i].locked = false;
    }
	
//end body

function setText(T1, T2, T3, oW, TColor, TNamber, PColor, flagNamespace){											 
//-------------------------------------------------------------------------TXT											 

				 
		
		var fonts ="Verdana"
		
			T1.top=hi/2+10;
		var wColor = new Array;
		var sk = new Array;
			sk = sInks;
			se=sk.length;
		var xh = hi/2 - 13*mm;
		var xh1 = 10*mm;
		var xh2 = hi/2+5*mm;
		var namber = 1;
		
		var textName =  T3.textFrames.add();
			textName.textRange.characterAttributes.size = 8;
			textName.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
			textName.contents =  NameOrder;
			textName.rotate(90);
			textName.left = 14;
			textName.textRange.characterAttributes.fillColor = docRef.swatches[Registr].color;
			textName.textRange.characterAttributes.fillColor.tint = 99;
			textName.textRange.characterAttributes.overprintFill = false;

			
			if (hi/2-14*mm-T3.height < 100*mm) {
				textName.height = hi/2-12*mm - 102*mm;
				xh = 100*mm;
			} else xh -= T3.height;

			
			//alert(sk);
			for (i = 0; i<sk.length; i++){


			var TextC = "";
			var textRef =  T1.textFrames.add();
			textRef.textRange.characterAttributes.size = 8;
			textRef.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
			//textRef.contents = TextC;
			textRef.rotate(90);
			textRef.left = 14;
		
			fills = sk[i];
			var flagWhite = true;
			var flagLak = true;

			TextC = fills;
			if (~fills.indexOf("W-")) {fills=fills.slice(2);TextC = "W "; flagWhite = false; wColor.push(fills)};
			if (~fills.indexOf("L-")) {fills=fills.slice(2);TextC = "Lak "; flagLak = false;};


			switch (fills){
				case  'Process Cyan':  TextC=(TextC=="W ")?TextC: (TextC=="Lak ")?
										TextC: "C "; textRef.textRange.characterAttributes.fillColor = PCyan; break;
				case  'Process Magenta': TextC=(TextC=="W ")?TextC: (TextC=="Lak ")?
										TextC: "M "; textRef.textRange.characterAttributes.fillColor = PMagenta; break;
				case  'Process Yellow':TextC=(TextC=="W ")?TextC: (TextC=="Lak ")?
										TextC: "Y "; textRef.textRange.characterAttributes.fillColor = PYellow; break;
				case  'Process Black': TextC=(TextC=="W ")?TextC: (TextC=="Lak ")?
										TextC: "K "; textRef.textRange.characterAttributes.fillColor = PBlack; break;
				default: textRef.textRange.characterAttributes.fillColor = docRef.swatches[fills].color;
							//textName.textRange.characterAttributes.fillColor = docRef.swatches[fills].color;
							//textD.textRange.characterAttributes.fillColor = docRef.swatches[fills].color;
				}
			//alert(TextC);
			
			if (~TextC.indexOf("PANTONE ")) {TextC = TextC.substring(8); TextC = TextC.slice(0,-1);}

			textRef.top = T1.height;
			textRef.contents = TextC;
			textRef.textRange.characterAttributes.overprintFill = true;

			//textName.textRange.characterAttributes.overprintFill = true;
			//textD.textRange.characterAttributes.overprintFill = true;
	
if(flagNamespace) continue;

			if (!flagWhite) {
				textRef.textRange.characterAttributes.fillColor = PWhite;
				textRef.textRange.characterAttributes.overprintFill = false;
				//T3.fillColor = PWhite;
				//T3.overprintFill = false;
			}

			setTextNamber(TNamber, oW, fills, flagWhite, namber++, xh1 += 4*mm);

			if (flagLak || flagWhite) {
				targetColor (TColor, oW, fills, xh2 += 6*mm);
				pointColor (PColor, oW, fills, xh -= 6*mm);
				}
			

		};

		
		//textRef.createOutline();
if(flagNamespace) { T1.top = T1.height+10*mm;
					T1.left = wi+3*mm;
					T3.top = hi/2+T3.height+10*mm;
					T3.left = wi+3*mm;
					return
				};		

			T3.top=hi/2-12*mm;
			T3.left = -4*mm;

			var TextDate = new Date();
			var textD =  T2.textFrames.add();
				textD.textRange.characterAttributes.size = 8;
				textD.textRange.characterAttributes.textFont = app.textFonts.getByName(fonts);
				textD.contents =  Namb + "  "+ TextDate.getDate()+"/"+TextDate.getMonth()+"/"+TextDate.getFullYear();
				textD.rotate(90);
				textD.left = 14;
				textD.textRange.characterAttributes.fillColor = docRef.swatches[Registr].color;
				textD.textRange.characterAttributes.fillColor.tint = 99;
				textD.textRange.characterAttributes.overprintFill = false;

			T2.top=hi-13*mm;
			T2.left = -4*mm;
		
			T1.top = hi-13*mm-T2.height-10*mm;
			T1.left = -4*mm;



			ObjectWhite(oW, T1.height, T2.height, T3.height);

			//oW.selected = true;
			//app.executeMenuCommand('Live Outline Stroke');
			//app.executeMenuCommand('expandStyle');

				for ( var j = 0; j<wColor.length; j++) {

					var LWhite = oW.duplicate();
					//alert(LWhite);
					for ( var i=0; i<LWhite.pathItems.length; i++) {
						switch (wColor[j]){
							case  'Process Cyan':  
								LWhite.pathItems[i].fillColor = PCyan; 
							break;
							case  'Process Magenta': 
								LWhite.pathItems[i].fillColor = PMagenta; 
							break;
							case  'Process Yellow': 
								LWhite.pathItems[i].fillColor = PYellow; 
							break;
							case  'Process Black': 
								LWhite.pathItems[i].fillColor = PBlack; 
							break;
							default: 
								LWhite.pathItems[i].fillColor = docRef.swatches[wColor[j]].color;

							}
						LWhite.pathItems[i].fillOverprint =	true;
					}

				
					for ( var i=0; i<LWhite.textFrames.length; i++) {
						switch (wColor[j]){
							
							case  'Process Cyan':  
								LWhite.textFrames[i].textRange.characterAttributes.fillColor = PCyan;
								LWhite.textFrames[i].textRange.characterAttributes.strokeColor = PCyan; 
								break;
							case  'Process Magenta':
								LWhite.textFrames[i].textRange.characterAttributes.fillColor = PMagenta;
								LWhite.textFrames[i].textRange.characterAttributes.strokeColor = PMagenta; 
								break;
							case  'Process Yellow': 
								LWhite.textFrames[i].textRange.characterAttributes.fillColor = PYellow;
								LWhite.textFrames[i].textRange.characterAttributes.strokeColor = PYellow; 
								break;
							case  'Process Black': 
								LWhite.textFrames[i].textRange.characterAttributes.fillColor = PBlack;
								LWhite.textFrames[i].textRange.characterAttributes.strokeColor = PBlack; 
								break;
							default: 
								LWhite.textFrames[i].textRange.characterAttributes.fillColor = docRef.swatches[wColor[j]].color;
								LWhite.textFrames[i].textRange.characterAttributes.strokeColor =docRef.swatches[wColor[j]].color; 
							}
							LWhite.textFrames[i].textRange.characterAttributes.overprintFill = true;
							LWhite.textFrames[i].textRange.characterAttributes.overprintStroke = true;
					}
				}

				//var textNameW =  T3.textFrames.add();
				//var textDataW =  T2.textFrames.add();
		
				for ( var i=0; i< wColor.length; i++) {

					textNameW = textName.duplicate();
					textDataW = textD.duplicate();

					switch (wColor[i]){
						
						case  'Process Cyan':  
						textNameW.textRange.characterAttributes.fillColor = PCyan0;
						textDataW.textRange.characterAttributes.fillColor = PCyan0;
							break;
						case  'Process Magenta':
						textNameW.textRange.characterAttributes.fillColor = PMagenta0;
						textDataW.textRange.characterAttributes.fillColor = PMagenta0;
							break;
						case  'Process Yellow': 
						textNameW.textRange.characterAttributes.fillColor = PYellow0;
						textDataW.textRange.characterAttributes.fillColor = PYellow0;
							break;
						case  'Process Black': 
						textNameW.textRange.characterAttributes.fillColor = PBlack0;
						textDataW.textRange.characterAttributes.fillColor = PBlack0;
							break;
						default: 
						textNameW.textRange.characterAttributes.fillColor = docRef.swatches[wColor[i]].color;
						textNameW.textRange.characterAttributes.fillColor.tint = 0;
						textDataW.textRange.characterAttributes.fillColor = docRef.swatches[wColor[i]].color;
						textDataW.textRange.characterAttributes.fillColor.tint = 0;
						}

						textNameW.textRange.characterAttributes.overprintFill = true;
						textDataW.textRange.characterAttributes.overprintFill = true;
				}

}

function microDot(mDot, s){

	s = (s-1)*mm;

	var mD = mDot.groupItems.add();
	var mD2 = mDot.groupItems.add();
	var mD3 = mDot.groupItems.add();

	var	White1 = mD.pathItems.add();
		White1 = mD.pathItems.ellipse(1.3*mm, 0.7*mm+s, 0.6*mm, 0.6*mm, false, true );
		White1.fillColor = PWhite;
		White1.stroked = false;
		White1.filled = true;
		White1.fillOverprint = false;

	var	R1 = mD.pathItems.add();
		R1 = mD.pathItems.ellipse(1.2*mm, 0.8*mm+s, 0.4*mm, 0.4*mm, false, true );
		R1.strokeColor = docRef.swatches[Registr].color;
		R1.strokeColor.tint = 99;
		R1.strokeWidth = 0.05*mm;
		R1.stroked = true;
		R1.filled = false;

	var	R2 = mD.pathItems.add();
		R2 = mD.pathItems.ellipse(1.1*mm, 0.9*mm+s, 0.2*mm, 0.2*mm, false, true );
		R2.fillColor = docRef.swatches[Registr].color;
		R2.fillColor.tint = 99;
		R2.stroked = false;
		R2.filled = true;
		R2.fillOverprint = false;

		mD2 = mD.duplicate();
		mD2.top = hi/2+0.3*mm;

		mD3 = mD.duplicate();
		mD3.top = hi-0.7*mm;

}

function setTextNamber(TNamber, oW, fills, flagWhite, namber, xh1){

	var textNamber =  TNamber.textFrames.add();
		textNamber.textRange.characterAttributes.size = 10;
		textNamber.textRange.characterAttributes.textFont = app.textFonts.getByName("impact");
		textNamber.contents =  ''+namber;
		textNamber.rotate(90);
		textNamber.left = -4*mm;
		textNamber.top = xh1;
		switch (fills){
			case  'Process Cyan':  textNamber.textRange.characterAttributes.fillColor = PCyan; break;
			case  'Process Magenta': textNamber.textRange.characterAttributes.fillColor = PMagenta; break;
			case  'Process Yellow': textNamber.textRange.characterAttributes.fillColor = PYellow; break;
			case  'Process Black': textNamber.textRange.characterAttributes.fillColor = PBlack; break;
			default: textNamber.textRange.characterAttributes.fillColor = docRef.swatches[fills].color;

			}
			//alert(flagWhite);
			if (flagWhite) textNamber.textRange.characterAttributes.overprintFill = true
				else {
				textNamber.textRange.characterAttributes.fillColor = PWhite;
				textNamber.textRange.characterAttributes.overprintFill = false;
			}

	var textNamberWhite =  oW.textFrames.add();
		textNamberWhite.textRange.characterAttributes.size = 10;
		textNamberWhite.textRange.characterAttributes.textFont = app.textFonts.getByName("impact");
		textNamberWhite.contents =  ''+namber;
		textNamberWhite.rotate(90);
		textNamberWhite.left = -4*mm;
		textNamberWhite.top = xh1;
		textNamberWhite.textRange.characterAttributes.fillColor = PWhite;
		textNamberWhite.textRange.characterAttributes.overprintFill = false;
		textNamberWhite.textRange.characterAttributes.strokeColor = PWhite;
		textNamberWhite.textRange.characterAttributes.strokeWeight = 0.7*mm;
		//textNamberWhite.createOutline();

}

function targetColor(TColor, oW, fills, xh2){

var s = -2.6*mm;
	

	for (var k=0; k<15; k++){
		
	var rect3 = TColor.pathItems.add();
		rect3.setEntirePath( Array( Array(s, xh2+0.2*mm), Array(s+0.22*mm, xh2+0.2*mm), Array(s, xh2-4.3*mm), Array(s+0.22*mm, xh2-4.3*mm) ) );
		rect3 .closed = true;
		rect3 .stroked = false;
		rect3 .filled = true;
		rect3 .fillOverprint = true;
		
		switch (fills){
			case  'Process Cyan': rect3 .fillColor = PCyan; break;
			case  'Process Magenta': rect3 .fillColor = PMagenta; break;
			case  'Process Yellow': rect3 .fillColor = PYellow; break;
			case  'Process Black': rect3 .fillColor = PBlack; break;
			default: rect3.fillColor = docRef.swatches[fills].color;	
			}
		rect3.rotate(12*k);


	var	Opequ = oW.pathItems.add();
		Opequ = oW.pathItems.ellipse(xh2+0.45*mm, -5*mm, 5*mm, 5*mm, false, true );
		Opequ.fillColor = PWhite;
		Opequ.stroked = false;
		Opequ.filled = true;
		Opequ.fillOverprint = false;

	}
}

function pointColor (PColor, oW, fills, xh){
	var s = -2.6*mm;
	var cirlce = PColor.pathItems.add();
		cirlce = PColor.pathItems.ellipse(xh+0.2*mm, -4.75*mm, 4.5*mm, 4.5*mm, false, true );
		cirlce.stroked = false;
		cirlce.filled = true;
		cirlce.fillOverprint = true;
		
		switch (fills){
			case  'Process Cyan': cirlce.fillColor = PCyan; break;
			case  'Process Magenta': cirlce.fillColor = PMagenta; break;
			case  'Process Yellow': cirlce.fillColor = PYellow; break;
			case  'Process Black': cirlce.fillColor = PBlack; break;
			default: cirlce.fillColor = docRef.swatches[fills].color;	
			}

	var	Opequ = oW.pathItems.add();
		Opequ = oW.pathItems.ellipse(xh+0.45*mm, -5*mm, 5*mm, 5*mm, false, true );
		Opequ.fillColor = PWhite;
		Opequ.stroked = false;
		Opequ.filled = true;
		Opequ.fillOverprint = false;

	
}

function ObjectWhite(oW, heightT1, heightT2, heightT3){
	
	var hi3 = hi/2-14*mm-heightT3;
//alert(hi3);
	rectW = oW.pathItems.rectangle( hi-11*mm, -4.25*mm, 3.5*mm, heightT2+4*mm);
	rectW .closed = true;
	rectW .stroked = false;
	rectW .filled = true;
	rectW .fillOverprint = false; 
	rectW .fillColor = PWhite;

	rectW2 = oW.pathItems.add();
	rectW2.setEntirePath( Array( Array(-4.25*mm, hi-13*mm-heightT2-8*mm), Array(-0.75*mm, hi-13*mm-heightT2-8*mm),Array(-0.75*mm, hi-13*mm-heightT2-12*mm - heightT1), Array(-4.25*mm, hi-13*mm-heightT2-12*mm - heightT1)) );
	rectW2 .closed = true;
	rectW2 .stroked = false;
	rectW2 .filled = true;
	rectW2 .fillOverprint = false; 
	rectW2 .fillColor = PWhite;

	if (hi3 < 100*mm) hi3 = 100*mm;
//alert(hi3);
	rectW3 = oW.pathItems.add();
	rectW3.setEntirePath( Array( Array(-4.25*mm, hi/2-10*mm), Array(-0.75*mm, hi/2-10*mm), Array(-0.75*mm, hi3), Array(-4.25*mm, hi3)) );
	rectW3 .closed = true;
	rectW3 .stroked = false;
	rectW3 .filled = true;
	rectW3 .fillOverprint = false; 
	rectW3 .fillColor = PWhite;

}

function oporka(groups, recWi){

	var recX = 0;
	if (recWi == 4) recX = -0.5*mm;

	Oporka = groups.pathItems.rectangle( 0, recX, -recWi*mm, -hi);
	//Oporka.setEntirePath( Array( Array(-8*mm, 0), Array(-8*mm, hi), Array(-3*mm, hi), Array(-3*mm, 0) ) );
	Oporka.closed = true;
	Oporka.filled = true;
	Oporka.stroked = false;
	Oporka.fillColor =docRef.swatches[Registr].color;
	Oporka.fillColor.tint = 30;
	Oporka.fillOverprint = false;


	lineWhite = groups.pathItems.add();
	lineWhite.setEntirePath( Array( Array(-2.5*mm, 0), Array(-2.5*mm, hi)) );
	lineWhite.closed = false;
	lineWhite.filled = false;
	lineWhite.stroked = true;
	lineWhite.strokeWidth = 0.1*mm;
	lineWhite.strokeColor = PWhite;
	lineWhite.strokeOverprint = false;


	targets(groups);


}

function targets(groupTarget){


	var gTarget = groupTarget.groupItems.add();

	square = gTarget.pathItems.add();
	square.setEntirePath( Array( Array(-1.25*mm, 3*mm), Array(-3.75*mm, 3*mm),  Array(-3.75*mm, 7*mm), Array(-1.25*mm, 7*mm)) );
	square.closed = true;
	square.filled = true;
	square.stroked = true;
	square.strokeWidth = 0.1*mm;
	square.strokeColor = docRef.swatches[Registr].color;
	square.strokeColor.tint = 99;
	square.strokeOverprint = true;
	square.fillColor = PWhite;
	square.fillOverprint = false;
	
	//circle = gTarget.pathItems.add();
	circle = gTarget.pathItems.ellipse(6*mm, -3.5*mm, 2*mm, 2*mm, false, true );
	circle.stroked = true;
	circle.filled = true;
	circle.fillColor = PWhite;
	circle.strokeWidth = 0.1*mm;
	circle.strokeColor = docRef.swatches[Registr].color;
	circle.strokeColor.tint = 99;
	circle.strokeOverprint = true;

	crestW = gTarget.pathItems.add();
	crestW.setEntirePath( Array( Array(-1.25*mm, 5*mm), Array(-3.75*mm, 5*mm)) );
	crestW.closed = false;
	crestW.filled = false;
	crestW.stroked = true;
	crestW.strokeWidth = 0.1*mm;
	crestW.strokeColor = docRef.swatches[Registr].color;
	crestW.strokeColor.tint = 99;
	crestW.strokeOverprint = true;

	crestH = gTarget.pathItems.add();
	crestH.setEntirePath( Array( Array(-2.5*mm, 3*mm), Array(-2.5*mm, 7*mm)) );
	crestH.closed = false;
	crestH.filled = false;
	crestH.stroked = true;
	crestH.strokeWidth = 0.1*mm;
	crestH.strokeColor = docRef.swatches[Registr].color;
	crestH.strokeColor.tint = 99;
	crestH.strokeOverprint = true;

	circleW = gTarget.pathItems.ellipse(5.2*mm, -2.7*mm, 0.4*mm, 0.4*mm, false, true );
	circleW.stroked = false;
	circleW.filled = true;
	circleW.fillColor = PWhite;

	circleR = gTarget.pathItems.ellipse(5.075*mm, -2.575*mm, 0.15*mm, 0.15*mm, false, true );
	circleR.stroked = false;
	circleR.filled = true;
	circleR.fillColor = docRef.swatches[Registr].color;
	circleR.fillColor.tint = 99;


var	gTargetTop = gTarget.duplicate();
	gTargetTop.position = Array(-3.75*mm, hi-3*mm);

var	gTargetCenter = gTarget.duplicate();
	gTargetCenter.resize(120,120);
	gTargetCenter.position = Array(-4*mm, hi/2+2.4*mm);
	gTargetCenter.pathItems[5].resize(100,167);
	gTargetCenter.pathItems[2].resize(100,167);

	circle = gTargetCenter.pathItems.ellipse(hi/2+2*mm, -4*mm, 3*mm, 4*mm, false, true );
	circle.stroked = true;
	circle.filled = false;
	circle.strokeWidth = 0.1*mm;
	circle.strokeColor = docRef.swatches[Registr].color;
	circle.strokeColor.tint = 99;
	circle.strokeOverprint = true;

	circle = gTargetCenter.pathItems.ellipse(hi/2+4*mm, -4*mm, 3*mm, 8*mm, false, true );
	circle.stroked = true;
	circle.filled = false;
	circle.strokeWidth = 0.1*mm;
	circle.strokeColor = docRef.swatches[Registr].color;
	circle.strokeColor.tint = 99;
	circle.strokeOverprint = true;

}

function rez(groups, recWi){

	Rez = groups.pathItems.rectangle( 0, recWi, 4*mm, -hi);
	Rez.closed = true;
	Rez.filled = true;
	Rez.stroked = false;
	Rez.fillColor =docRef.swatches[Registr].color;
	Rez.fillColor.tint = 50;
	Rez.fillOverprint = false;

}

//end function