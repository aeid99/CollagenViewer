//CHANGING THE COLOR OF THE MENU and selecting the site.
function siteSelectR(siteMenuIndex,imageSel, selectionType)
{	var idName=siteMenuIndex+imageSel+selectionType;	
	$("#"+idName).toggleClass("highlight");
//--------------Default-----------------------------//		
	if(modelNumberR==0){
		hoverColorR=["","red","orange","yellow"];
		if ( $("#"+idName).hasClass("highlight")) {
			sitesPickedR[0]=0;
			sitesPickedR[siteMenuIndex]=1;
			if(siteMenuIndex==1){
				siteString='define site1 atomno=2;';
			}
			else if(siteMenuIndex==2){
				siteString='define site2 atomno=1;';
			}
			else if(siteMenuIndex==3){
				siteString='define site3 atomno=1,atomno=3;';	
			}
			jmolScript(siteString+'select site'+siteMenuIndex+';isosurface id sCol'+siteMenuIndex+' solvent 0; center selected; color isosurface '+hoverColorR[siteMenuIndex]+';select *;',imageSel); 	
		} 
		else{
			sitesPickedR[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}	
	}	
//--------------Collagen!!-----------------------------//			
	else if(modelNumberR==1){
		if ( $("#"+idName).hasClass("highlight")) {
			if(selectionType == "Bind")
			{		
				sitesPickedR[0]=0;
				sitesPickedR[siteMenuIndex]=1;
				var siteString="";
				var initialR=siteListNumR[1][siteMenuIndex];
				var finalR=siteListNumR[2][siteMenuIndex];
				if(siteListNumR[0][siteMenuIndex]==1){
					siteString=siteString+'select backbone and (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';
				}
				else if(siteListNumR[0][siteMenuIndex]==2){
					siteString=siteString+'select backbone and (:b and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';	
				}
				else if((siteListNumR[0][siteMenuIndex]==3)){
					var initialR2=initialR-7;
					var finalR2=finalR-7;
					siteString=siteString+'select backbone and (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')) or (:b and ('+initialR2+'-'+finalR2+')); define site'+siteMenuIndex+' selected;';
				}
				jmolScript(siteString+';isosurface id sCol'+siteMenuIndex+' solvent 0; center selected; color isosurface '+hoverColorR[siteMenuIndex]+';select *;',imageSel); 	
			}
			else if(selectionType == "Mutation")
			{
				sitesPickedRMutation[0]=0;
				sitesPickedRMutation[siteMenuIndex]=1;
				var initialR=siteListNumRMutation[1][siteMenuIndex];
				var finalR=siteListNumRMutation[2][siteMenuIndex];
				if(siteListNumRMutation[0][siteMenuIndex]==1){ // A or C chains
					siteString='select (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';
				}
				else if(siteListNumR[0][siteMenuIndex]==2){ // B chain
					siteString='select (:b and ('+initialR+'-'+finalR+')); define site'+siteMenuIndex+' selected;';	
				}
				else if((siteListNumR[0][siteMenuIndex]==3)){ // All three chains, will need to shift one by 7aa's
					var initialR2=initialR-7;
					var finalR2=finalR-7;
					siteString='select (:a and ('+initialR+'-'+finalR+')) or (:c and ('+initialR+'-'+finalR+')) or (:b and ('+initialR2+'-'+finalR2+')); define site'+siteMenuIndex+' selected;';
				}	
				jmolScript(siteString+';isosurface sCol'+siteMenuIndex+' select(site'+siteMenuIndex+') ignore(not site'+siteMenuIndex+') solvent 0; center selected;color isosurface '+hoverColorRMutation[siteMenuIndex]+';select *',imageSel); 	
			}		
		
		} 
		
		else{
			sitesPickedR[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}
	}


	
	
	
//--------------Decorin!!-----------------------------//		
	else if(modelNumberR=3){ //Decoron
		if ( $("#"+idName).hasClass("highlight")) {
			sitesPickedR[0]=0;
			sitesPickedR[siteMenuIndex]=1;
			var siteString="";
			
			if(siteMenuIndex==1){//d-band common
				siteString='select (1006,1007,1017,1019,1024,1028,1031,1032,1033,1220,1243,1244,1295,1296,1321,1323,1325,1326); define site'+siteMenuIndex+' selected;';
			}
			else if(siteMenuIndex==2){//e-band common
				siteString='select (1014,1019,1024,1030,1032,1033,1037,1058,1060,1079,1103,1196,1243,1244,1248,1266,1324); define site'+siteMenuIndex+' selected;';
			}
			else if(siteMenuIndex==3){//d-band wide
				siteString='select (1009,1010,1014,1019,1021,1030,1032,1048,1104,1109,1125,1129,1130,1196,1244,1266,1296,1321,1324,1325); define site'+siteMenuIndex+' selected;';
			}
			else if(siteMenuIndex==4){//e-band wide
				siteString='select (1009,1014,1037,1080,1103,1127,1130,1177,1200,1220,1244,1266,1296,1316,1317,1319,1321,1325); define site'+siteMenuIndex+' selected;';
			}
			
			jmolScript(siteString+'isosurface sCol'+siteMenuIndex+' select(site'+siteMenuIndex+') ignore(not site'+siteMenuIndex+') solvent 0;center selected;color isosurface '+hoverColorR[siteMenuIndex]+';halos 45%;color halos '+hoverColorR[siteMenuIndex]+'; select *',imageSel); 	
		} 
		else{
			sitesPickedL[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}
	}	
	
/*
	
	
//--------------Decorin!!-----------------------------//		
	else if(modelNumberR==3){ //Decoron
		if ( $("#"+idName).hasClass("highlight")) {
			sitesPickedR[0]=0;
			sitesPickedR[siteMenuIndex]=1;
			var siteString="";
			var initialR=siteListNumR[1][siteMenuIndex];
			var finalR=siteListNumR[2][siteMenuIndex];
			siteString=siteString+'select backbone and resno>='+initialR+' and resno<='+finalR+'; define site'+siteMenuIndex+' selected;';
			
			jmolScript(siteString+';isosurface id sCol'+siteMenuIndex+' molecular; center selected;color isosurface '+hoverColorR[siteMenuIndex]+';select *',imageSel); 	
		} 
		else{
			sitesPickedR[siteMenuIndex]=0;
			jmolScript('select site'+siteMenuIndex+';halos off;isosurface sCol'+siteMenuIndex+' off;',imageSel);
		}
	}
*/




}
