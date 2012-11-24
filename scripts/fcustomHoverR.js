function customhoverR(){
	var hoverMsg="";
	var molIndex=document.molChooseRight.molChooseRight.selectedIndex; //index of the molecule - used to determine what site names are used
	var hoverMsgVal=0;
	var searchHover=0;
	jmolScript("select all;halos off;hover off","Right");
	var i=1;
 
	for(k=1;k<=sitesShown[1];k++){
		searchedSite = jmolEvaluate('script("var j=\'true\';if({atomIndex=_atomHovered}&{siteSearchRight'+k+'});print j;end if")','Right')
		if(searchedSite&&(document.getElementById("searchRight").value!="")){
			searchHover=1;
			hoverMsgVal=hoverMsgVal+1;
			hoverMsg=k+'.'+stringerR
			jmolScript('select siteSearchRight;halos 45%;color halos yellow;select all','Right');
		}
	}
		
	if(sitesPickedR[0]==1 && searchHover==0){
		jmolScript("select all; halos off;hover %U","Right");
	}
	if(sitesPickedR[0]==1 && searchHover==1){
		jmolScript('select siteSearchRight;halos 45%;color halos yellow;hover '+hoverMsg+';select all','Right');
	}
	else{
		while(i < sitesPickedR.length){
			if(sitesPickedR[i]===1){
			//goes through every site and determines if it is being hovered..
				boolSite = jmolEvaluate('script("var i=\'true\';if({atomIndex=_atomHovered}&{site'+i+'});print i;end if")',"Right")
				if(boolSite){
					hoverMsgVal=hoverMsgVal+1;
					if(hoverMsgVal>1){hoverMsg=hoverMsg+"|"}
					hoverMsg=hoverMsg+hoverMsgR[molIndex][i];
					jmolScript('select site'+i+';halos 45%;color halos '+hoverColorR[i]+';select all',"Right");
				}
			}
			i=i+1;
		}
		jmolScript('hover '+hoverMsg+'',"Right");
	}
}
//document.myform.selectname - DOM document object model
