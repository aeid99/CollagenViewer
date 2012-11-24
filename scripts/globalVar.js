//Global variables

	var modelNumberL=0;
	var modelNumberR=0;	
	var sitesPickedL=[1,0,0];  //DEFAULT there are no sites picked - length SHOULD BE UPDATED WHEN A NEW MOLECULE IS CHOSEN
	var sitesPickedLMutation=[1,0,0];  //DEFAULT there are no sites picked - length SHOULD BE UPDATED WHEN A NEW MOLECULE IS CHOSEN
	var sitesPickedR=[1,0,0];
	var sitesPickedRMutation=[1,0,0];
	var searchIndex=[0,0];
	var hoverMsgL=new Array();
		hoverMsgL[0] = new Array();
		hoverMsgL[0][1]="Site 1";
		hoverMsgL[0][2]="Site 2";
		hoverMsgL[0][3]="Site 3";
	var hoverMsgLMutation=new Array();
		hoverMsgLMutation[0] = new Array();
		hoverMsgLMutation[0][1]="Site 1";
		hoverMsgLMutation[0][2]="Site 2";
		hoverMsgLMutation[0][3]="Site 3";		
	var hoverMsgR=new Array();
		hoverMsgR[0]=new Array();
		hoverMsgR[0][1]="Site 1";
		hoverMsgR[0][2]="Site 2";
		hoverMsgR[0][3]="Site 3";
	var hoverMsgRMutation=new Array();
		hoverMsgRMutation[0]=new Array();
		hoverMsgRMutation[0][1]="Site 1";
		hoverMsgRMutation[0][2]="Site 2";
		hoverMsgRMutation[0][3]="Site 3";		
	var sitesTotal=[0,0];	//Number of sites Found for left and right sides
	var sitesShown=[0,0];//Number of sites shown for left and right sides - that were Searched
	var headers=new Array(20);
	var headersMutation=new Array(20);
	var hoverColorL=["","red","orange","yellow"];
	var hoverColorLMutation=["","red","orange","yellow"];
	var hoverColorR=["","red","orange","yellow","lime","teal","green","cyan","blue","purple","red","orange","yellow","lime","green","blue","purple"];
	var hoverColorRMutation=["","red","orange","yellow","lime","teal","green","cyan","blue","purple","red","orange","yellow","lime","green","blue","purple"];
	var aMapL=0; 	//value indicating accessibility map is off
	var aMapR=0; 	//value indicating accessibility map is off	
	var aSize=new Array(35,35);  //left image,right image
	var bSize=new Array(.25,.25);
	var stringerL;
	var stringerR;
	
	var siteListNumL = new Array(2);  //instantiates the  number of rows
		siteListNumL[0]=new Array(200); 	//instantiates the number of columns for row 0 -  chain number
		siteListNumL[1]=new Array(200); 	//instantiates the number of columns for row 1 - initial values
		siteListNumL[2]=new Array(200); 	//instantiates the number of columns for row 1 - final values
	var siteListNumR = new Array(2);  //instantiates the  number of rows
		siteListNumR[0]=new Array(200); 	//instantiates the number of columns for row 0 -  chain number
		siteListNumR[1]=new Array(200); 	//instantiates the number of columns for row 1 - initial values
		siteListNumR[2]=new Array(200); 	//instantiates the number of columns for row 1 - final values
			
	var siteListNumLMutation = new Array(2);  //instantiates the  number of rows
		siteListNumLMutation[0]=new Array(200); 	//instantiates the number of columns for row 0 -  chain number
		siteListNumLMutation[1]=new Array(200); 	//instantiates the number of columns for row 1 - initial values
		siteListNumLMutation[2]=new Array(200); 	//instantiates the number of columns for row 1 - final values

	var siteListNumRMutation = new Array(2);  //instantiates the  number of rows
		siteListNumRMutation[0]=new Array(200); 	//instantiates the number of columns for row 0 -  chain number
		siteListNumRMutation[1]=new Array(200); 	//instantiates the number of columns for row 1 - initial values
		siteListNumRMutation[2]=new Array(200); 	//instantiates the number of columns for row 1 - final values
						