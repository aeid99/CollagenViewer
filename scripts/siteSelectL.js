//STILL PROBLEMS WITH GEOSURFACE.. WORKING ON IT - WAIT FOR RESOPNSE FROM JMOL GANG

//molecular surfaces are nicer but take more time than solvent 0
//TRY DELETEING ALL BUT THE BACKBONE..
//CHANGING THE COLOR OF THE MENU and selecting the site.
function siteSelectL(siteMenuIndex,imageSel,selectionType){
	var idName=siteMenuIndex+imageSel+selectionType;	
	$("#"+idName).toggleClass("highlight");
//--------------Default-------------------------------//
	if(modelNumberL==0){ //Default
		if ( $("#"+idName).hasClass("highlight")) {
			hoverColorL=["","red","orange","yellow"];
			sitesPickedL[0]=0;
			sitesPickedL[siteMenuIndex]=1;
			if(siteMenuIndex==1){
				siteString='define site1 atomno=2;';
			}
			else if(siteMenuIndex==2){
				siteString='define site2 atomno=1;';
			}
			else if(siteMenuIndex==3){
				siteString='define site3 atomno=1,atomno=3;';	
			}
			jmolScript(siteString+'select site'+siteMenuIndex+';isosurface id sCol'+siteMenuIndex+' solvent 0; color isosurface '+hoverColorL[siteMenuIndex],imageSel); 	
		} 
		else{
			sitesPickedL[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}
	}

//--------------Collagen!!-----------------------------//	
	else if(modelNumberL==1){ //collagen
		if ( $("#"+idName).hasClass("highlight")) {
			if(selectionType == "Bind")
			{
				sitesPickedL[0]=0;
				sitesPickedL[siteMenuIndex]=1;
				var initialR=siteListNumL[1][siteMenuIndex];
				var finalR=siteListNumL[2][siteMenuIndex];
				if(siteListNumL[0][siteMenuIndex]==1){ // A or C chains
					siteString='select (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';
				}
				else if(siteListNumL[0][siteMenuIndex]==2){ // B chain
					siteString='select (:b and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';	
				}
				else if((siteListNumL[0][siteMenuIndex]==3)){ // All three chains, will need to shift one by 7aa's
					var initialR2=initialR-7;
					var finalR2=finalR-7;
					siteString='select (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')) or (:b and ('+initialR2+'-'+finalR2+')); define site'+siteMenuIndex+' selected;';
				}			
				jmolScript(siteString+';isosurface sCol'+siteMenuIndex+' select(site'+siteMenuIndex+') ignore(not site'+siteMenuIndex+') solvent 0; center selected;color isosurface '+hoverColorL[siteMenuIndex]+';select *',imageSel); 	
			}
			else if(selectionType == "Mutation")
			{
				sitesPickedLMutation[0]=0;
				sitesPickedLMutation[siteMenuIndex]=1;
				var initialR=siteListNumLMutation[1][siteMenuIndex];
				var finalR=siteListNumLMutation[2][siteMenuIndex];
				if(siteListNumLMutation[0][siteMenuIndex]==1){ // A or C chains
					siteString='select (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';
				}
				else if(siteListNumL[0][siteMenuIndex]==2){ // B chain
					siteString='select (:b and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';	
				}
				else if((siteListNumL[0][siteMenuIndex]==3)){ // All three chains, will need to shift one by 7aa's
					var initialR2=initialR-7;
					var finalR2=finalR-7;
					siteString='select (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')) or (:b and ('+initialR2+'-'+finalR2+')); define site'+siteMenuIndex+' selected;';
				}	
				jmolScript(siteString+';isosurface sCol'+siteMenuIndex+' select(site'+siteMenuIndex+') ignore(not site'+siteMenuIndex+') solvent 0; center selected;color isosurface '+hoverColorLMutation[siteMenuIndex]+';select *',imageSel); 	
			}
		} 
		else{
			sitesPickedL[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}
	}
		
		
//--------------Decorin!!-----------------------------//		
	else if(modelNumberL==3){ //Decoron
		if ( $("#"+idName).hasClass("highlight")) {
			sitesPickedL[0]=0;
			sitesPickedL[siteMenuIndex]=1;
			var siteString="";
			
			if(siteMenuIndex==1){//d-band common
				siteString='select (1006,1007,1017,1019,1024,1028,1031,1032,1033,1220,1243,1244,1295,1296,1321,1323,1325,1326); define site'+siteMenuIndex+' selected;';//color atoms '+hoverColorL[siteMenuIndex]+';';

			}
			else if(siteMenuIndex==2){//e-band common
			siteString='select (1014,1019,1024,1030,1032,1033,1037,1058,1060,1079,1103,1196,1243,1244,1248,1266,1324); define site'+siteMenuIndex+' selected;';//color atoms '+hoverColorL[siteMenuIndex]+';';

			
			}
			else if(siteMenuIndex==3){//d-band wide
			siteString='select (1009,1010,1014,1019,1021,1030,1032,1048,1104,1109,1125,1129,1130,1196,1244,1266,1296,1321,1324,1325); define site'+siteMenuIndex+' selected;';//color atoms '+hoverColorL[siteMenuIndex]+';';

			
			}
			else if(siteMenuIndex==4){//e-band wide
			siteString='select (1009,1014,1037,1080,1103,1127,1130,1177,1200,1220,1244,1266,1296,1316,1317,1319,1321,1325); define site'+siteMenuIndex+' selected;';//color atoms '+hoverColorL[siteMenuIndex]+';';

			}
			jmolScript(siteString+'isosurface sCol'+siteMenuIndex+' select(site'+siteMenuIndex+') ignore(not site'+siteMenuIndex+') solvent 0;center selected;color isosurface '+hoverColorL[siteMenuIndex]+';halos 45%;color halos '+hoverColorL[siteMenuIndex]+'; select *',imageSel); 	
		
			//jmolScript(siteString+'set dotsSelectedOnly on;geosurface 1.3; color geosurface '+hoverColorL[siteMenuIndex]+';center selected;select *',imageSel); 	
		} 
		else{
			sitesPickedL[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}
	}

}


function siteClear(imageSel,selectionType){
	if(imageSel=='Left'){
		sitesPickedL[0]=1;
		for (j=1;j<=sitesPickedL.length-1;j++){
			sitesPickedL[j]=0;
		}
	}
	else{
		sitesPickedR[0]=1;
		for (j=1;j<=sitesPickedR.length-1;j++){
			sitesPickedR[j]=0;
		}
	}

	var idName='';	//idName is the name of hte li
	for (i=1;i<=140;i++){	//TODO: MAKE SURE THIS GOES THROUGH ALL OF THEM DYNAMICALY
		idName=i+imageSel+selectionType;
		if ( $("#"+idName).hasClass("highlight")) {
			$("#"+idName).toggleClass("highlight");
			jmolScript('select all; hover off; halos off; isosurface id sCol'+i+' delete;',imageSel); 				
		}	
	}
}



