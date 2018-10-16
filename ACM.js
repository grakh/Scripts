(function () {
  'use strict';
  
        var lastUnits = 0;
        
        //LOAD VALUES BY DEFAULT
        var settingsLoadFileDefault;
        settingsLoadFileDefault = new File( '~/Downloads/' + '1.acm');
         
         var lazerOnDefault ="";
        var lazerOffDefault ="";
        var passesDefault ="";
        var feedRateDefault ="";
        var seekRateDefault="";
        var directoryDefault ="";
        var filenameDefault="";
        var lazerPowerDefault="";
        var powerOnDelayDefault="";
        var commandBetweenPassesDefault="";
        
        
         if(settingsLoadFileDefault.exists){
                settingsLoadFileDefault.open ("r");   
               
                var settingLoadDefault = settingsLoadFileDefault.read();  
                var mySettingsDefault = settingLoadDefault.split ('|');
                
                lazerOnDefault =mySettingsDefault[0];
                lazerOffDefault =mySettingsDefault[1];
                passesDefault =mySettingsDefault[2];
                 feedRateDefault =mySettingsDefault[3];
                 seekRateDefault=mySettingsDefault[4];
                 directoryDefault =mySettingsDefault[5];
                 filenameDefault=mySettingsDefault[6];
                 powerOnDelayDefault=mySettingsDefault[7];
                 commandBetweenPassesDefault=mySettingsDefault[8];
                
                settingsLoadFileDefault.close();
        }
        
        
        
        // WINDOW PARAMS
        dialog = new Window ('dialog', "G-code generator");
        dialog.orientation = "row";
        dialog.alignChildren =  "left";
        
        // ++++++++++++++++ LEFT GROUP
        var leftGroup = dialog.add('group');
        leftGroup.orientation = "column";
        leftGroup.alignChildren = "left";
        leftGroup.alignment = "top";
        
        // ++++ SETTINGS FILE PANEL
        var settingsPanel = leftGroup.add ('panel', undefined, "Settings:", { borderStyle: "sunken" });
        settingsPanel.orientation = "row";
        settingsPanel.alignChildren = ["fill", "left"];
        var settingsPanelMeasure = settingsPanel.add ("statictext", undefined, '');
        settingsPanelMeasure.size = [110, 20];
        
  
    
    //SETTINGS LOAD
        var settingsLoadGroup = settingsPanel.add ('group');
        settingsLoadGroup.orientation = "row";
        settingsLoadGroup.alignChildren = "left";
        
        var settingsLoadButton = settingsLoadGroup.add ('button', undefined, 'Load File', { name: "Dir" });
        settingsLoadButton.size = [100,25];
        settingsLoadButton.onClick = function ()
        {     
                
                settingsLoadFile = File.openDialog( 'Select file to load file.', '*.acm' );
                 
                settingsLoadFile.open ("r");   
               
                var settingLoad = settingsLoadFile.read();  
                var mySettings = settingLoad.split ('\n');
                
				
                acmLoad(mySettings);
                
                settingsLoadFile.close(); 
                dialog.close (false);
                //alert ("Settings loaded.", "Load");
				
                
        }      
    
    
        


        // CANCEL BUTTON
        dialog.cancelBtn = settingsLoadGroup.add ('button', undefined, 'Close', { name: "CANCEL" });
        dialog.cancelBtn.onClick = function () { dialog.close (false); };
		
		


        dialog.show();
		


}());

function acmLoad(loadFile) {
	
var PRisk= new CMYKColor();
    PRisk.name = 'labelColor';
    PRisk.black =100; 
    PRisk.cyan = 0; 
    PRisk.magenta = 0; 
    PRisk.yellow = 0;
	
	//alert (loadFile);
	var docRef = app.activeDocument;
//newLayer = docRef.layers.add();
//newLayer.zOrder(ZOrderMethod.SENDTOBACK);
	docRef.rulerOrigin = Array (0,0);
    var units = 1; 
    app.preferences.setIntegerPreference("rulerType", units);
    app.preferences.setIntegerPreference("strokeUnits", units);
	i=9;
	mm = 72.0/25.4;

	while (loadFile[i]!="M0"){
		if (~loadFile[i].indexOf("P")) {
		P_Test = docRef.layers.add();
		P_Test.zOrder(ZOrderMethod.BRINGTOFRONT);
		P_Test.name=loadFile[i];
		i++;
			X1 = loadFile[i].substring(loadFile[i].indexOf("X")+1, loadFile[i].indexOf("Y"))/100;
			Y1 = loadFile[i].substring(loadFile[i].indexOf("Y")+1, loadFile[i].indexOf("D"))/100;
			D1 = loadFile[i].substring(loadFile[i].indexOf("D")+1);	
		
		}
		else {

			i++;
			if (loadFile[i]=="M0") break;
			if (~loadFile[i].indexOf("P")) continue; 
						
				X2 = loadFile[i].substring(loadFile[i].indexOf("X")+1, loadFile[i].indexOf("Y"))/100;
				Y2 = loadFile[i].substring(loadFile[i].indexOf("Y")+1, loadFile[i].indexOf("D"))/100;
				D2 = loadFile[i].substring(loadFile[i].indexOf("D")+1);
		//alert ("X2="+X2+" Y2="+Y2+" D2="+D2);
		if (D2=="2") {X1=X2; Y1=Y2; continue;}
				LabelSw1 = P_Test.pathItems.add();
				LabelSw1.setEntirePath( Array( Array(X1*mm, Y1*mm), Array(X2*mm, Y2*mm)) );
				LabelSw1.stroked = true;
				LabelSw1.strokeColor = PRisk;
				LabelSw1.strokeWidth = 0.1*mm;
				LabelSw1.filled = false;
				
		X1=X2; Y1=Y2;
		
		}
		

	}
    

	
	
}