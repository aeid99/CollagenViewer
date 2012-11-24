//WHEN CLEARING SITES, NEED TO DELETE THE SITE TOO - BECAUSE THEN THE HOVER IS STILL ON..

function customhoverL(){
	var hoverMsg="";
	var molIndex=document.molChooseLeft.molChooseLeft.selectedIndex; //index of the molecule - used to determine what site names are used
	var hoverMsgVal=0;
	var searchHover=0;
	jmolScript("select all;halos off;hover off","Left");
	var i=1;
	 
	for(k=1;k<=sitesShown[0];k++){
		searchedSite = jmolEvaluate('script("var j=\'true\';if({atomIndex=_atomHovered}&{siteSearchLeft'+k+'});print j;end if")','Left')
		if(searchedSite&&(document.getElementById("searchLeft").value!="")){
			searchHover=1;
			hoverMsgVal=hoverMsgVal+1;
			hoverMsg=k+'.'+stringerL;
			jmolScript('select siteSearchLeft;halos 45%;color halos yellow;select all','Left');
		}
	}
		
	if(sitesPickedL[0]==1 && searchHover==0){
		jmolScript("select all; halos off;hover %U","Left");
	}
	if(sitesPickedL[0]==1 && searchHover==1){
		jmolScript('select siteSearchLeft;halos 45%;color halos yellow;hover '+hoverMsg+';select all','Left');
	}
	else{
		while(i < sitesPickedL.length){
			if(sitesPickedL[i]===1){
			//goes through every site and determines if it is being hovered..
				boolSite = jmolEvaluate('script("var i=\'true\';if({atomIndex=_atomHovered}&{site'+i+'});print i;end if")',"Left")
				if(boolSite){
					hoverMsgVal=hoverMsgVal+1;
					if(hoverMsgVal>1){hoverMsg=hoverMsg+"|"}
					hoverMsg=hoverMsg+hoverMsgL[molIndex][i];
					jmolScript('select site'+i+';halos 45%;color halos '+hoverColorL[i]+';select all',"Left");
				}
			}
			i=i+1;
		}
		jmolScript('hover '+hoverMsg,"Left");
	}
}
//document.myform.selectname - DOM document object model
