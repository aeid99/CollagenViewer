/*This function will load in the model chosen from the drop down menu, and change "hoverOptL" according to the model chosen.  
//It also defines the sites shown in the menu, currently with arbitrarily chosen atoms
siteListL = FORM name//
selSiteL = SELECT name

//modelID=getElementById("mydropdownL").value;
document.formname.selectname.options
id? = selMultiL*/

//must make headers a global variable
function molSelectL(modelID)
{

	window = 'Left';
	
	var s0 = 'zap; set echo middle center; echo Loading...; refresh;'

	
	document.getElementById("searchLeft").value="";  //Clears the search
	sitesPickedL[0]=1;
	var atomSize=aSize[0];	// where is this coming from?!
	var bondSize=bSize[0];
	var siteListName=new Array(200);
	var siteString='';
	var numSites=0;
	var headersNum=new Array(5)
	var headersNumMutation=new Array(5)
	//	siteListNumL[0][indexofSite] = //Chain (1 is alpha 1=AC, and 2 is alpha2 = B and 3 = both!)
		//	siteListNumL[1][indexofSite] = //initial value - for first chain
		//	siteListNumL[2][indexofSite] = //final value	
	if(modelID=="practiceLeft")
	{	modelNumberL=0;
		headers[modelNumberL]=['','Model 1','Model 2']
		headersNum[modelNumberL]=[0,1,3]
		numSites=3;
		hoverColorL=["","red","orange","yellow"];
		hoverColorLMutation=["","red","orange","yellow"];
		hoverMsgL[0][1]="Site 1";
		hoverMsgL[0][2]="Site 2";
		hoverMsgL[0][3]="Site 3";
		siteString='define site1 atomno=1; define site2 atomno=2,atomno=3;define site3 atomno=1,atomno=3;';
		//jmolScript('load models/practice.pdb;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 80;'+siteString, "Left");	

		Jmol.script(myJmol, s0+'load models/practice.pdb;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 80;')		
	}
	
	else if(modelID=="Collagen1")
	{	


		Jmol.script(myJmol, s0+'load models/collagen-Access.pdb;display backbone;select hidden; delete selected;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 200;')
	
	
		//jmolScript('load models/collagen-Access.pdb;display backbone;select hidden; delete selected;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 200;', "Left");	
		modelNumberL=1;
		numSites=142;	//TODO: automatic
		sitesPickedL=new Array(numSites+1);
		sitesPickedL[0]=1; // WHY IS THIS AGAIN? 
		hoverMsgL[1]=new Array(numSites);
		headers[modelNumberL]=['','Proteoglycan','Cell Attachment','Cell Interaction','Signaling','Mineralization','Post Trans Modify','Collagenolysis','X-Link','Polymerizatin','Immunological','Misc:THP', 'Misc:HSP47','Misc'];
		headersNum[modelNumberL]=[0,26,44,48,53,60,69,71,74,78,79,89,140,142];
		//NOTE: indexed as follows: hoverMsgL[modelNumberL][protein}
//TODO: this should be parsed from a text file	
//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
//PG
siteListNumL[0][1]=1;	siteListNumL[1][1]=175;		siteListNumL[2][1]=214;		hoverMsgL[1][1]="1. GE-Decorin";		hoverColorL[1]="red";
siteListNumL[0][2]=1;	siteListNumL[1][2]=363;		siteListNumL[2][2]=402;		hoverMsgL[1][2]="2. GE-Decorin";		hoverColorL[2]="red";	
siteListNumL[0][3]=1;	siteListNumL[1][3]=103;		siteListNumL[2][3]=106;		hoverMsgL[1][3]="HEP";					hoverColorL[3]="red";	
siteListNumL[0][4]=1;	siteListNumL[1][4]=467;		siteListNumL[2][4]=477;		hoverMsgL[1][4]="[PS]KSPG";				hoverColorL[4]="red";	
siteListNumL[0][5]=1;	siteListNumL[1][5]=581;		siteListNumL[2][5]=591;		hoverMsgL[1][5]="[PS]KSPG";				hoverColorL[5]="red";	
siteListNumL[0][6]=1;	siteListNumL[1][6]=617;		siteListNumL[2][6]=627;		hoverMsgL[1][6]="1. [PS]DSPG";			hoverColorL[6]="red";	
siteListNumL[0][7]=1;	siteListNumL[1][7]=638;		siteListNumL[2][7]=648;		hoverMsgL[1][7]="2. [PS]DSPG";			hoverColorL[7]="red";	
siteListNumL[0][8]=1;	siteListNumL[1][8]=872;		siteListNumL[2][8]=882;		hoverMsgL[1][8]="3. [PS]DSPG";			hoverColorL[8]="red";	
siteListNumL[0][9]=1;	siteListNumL[1][9]=902;		siteListNumL[2][9]=912;		hoverMsgL[1][9]="4. [PS]DSPG";			hoverColorL[9]="red";	
siteListNumL[0][10]=1;	siteListNumL[1][10]=869;	siteListNumL[2][10]=877;	hoverMsgL[1][10]="DSPG";				hoverColorL[10]="red";	
siteListNumL[0][11]=1;	siteListNumL[1][11]=869;	siteListNumL[2][11]=879;	hoverMsgL[1][11]="1. Decoron";			hoverColorL[11]="red";
siteListNumL[0][12]=1;	siteListNumL[1][12]=899;	siteListNumL[2][12]=909;	hoverMsgL[1][12]="2. Decoron";			hoverColorL[12]="red";
siteListNumL[0][13]=1;	siteListNumL[1][13]=950;	siteListNumL[2][13]=980;	hoverMsgL[1][13]="3. Decoron";			hoverColorL[13]="red";
siteListNumL[0][14]=3;	siteListNumL[1][14]=1;		siteListNumL[2][14]=33;		hoverMsgL[1][14]="1. Keratan Sulfate";	hoverColorL[14]="red";	
siteListNumL[0][15]=3;	siteListNumL[1][15]=91;		siteListNumL[2][15]=133;	hoverMsgL[1][15]="2. Keratan Sulfate";	hoverColorL[15]="red";	
siteListNumL[0][16]=3;	siteListNumL[1][16]=216;	siteListNumL[2][16]=266;	hoverMsgL[1][16]="3. Keratan Sulfate";	hoverColorL[16]="red";	
siteListNumL[0][17]=3;	siteListNumL[1][17]=324;	siteListNumL[2][17]=366;	hoverMsgL[1][17]="4. Keratan Sulfate";	hoverColorL[17]="red";	
siteListNumL[0][18]=3;	siteListNumL[1][18]=449;	siteListNumL[2][18]=499;	hoverMsgL[1][18]="5. Keratan Sulfate";	hoverColorL[18]="red";	
siteListNumL[0][19]=3;	siteListNumL[1][19]=557;	siteListNumL[2][19]=599;	hoverMsgL[1][19]="6. Keratan Sulfate";	hoverColorL[19]="red";	
siteListNumL[0][20]=3;	siteListNumL[1][20]=682;	siteListNumL[2][20]=735;	hoverMsgL[1][20]="7. Keratan Sulfate";	hoverColorL[20]="red";	
siteListNumL[0][21]=3;	siteListNumL[1][21]=793;	siteListNumL[2][21]=835;	hoverMsgL[1][21]="8. Keratan Sulfate";	hoverColorL[21]="red";	
siteListNumL[0][22]=3;	siteListNumL[1][22]=918;	siteListNumL[2][22]=968;	hoverMsgL[1][22]="9. Keratan Sulfate";	hoverColorL[22]="red";	
siteListNumL[0][23]=3;	siteListNumL[1][23]=147;	siteListNumL[2][23]=209;	hoverMsgL[1][23]="1.  Dermatan Sulfate";	hoverColorL[23]="red";
siteListNumL[0][24]=3;	siteListNumL[1][24]=380;	siteListNumL[2][24]=442;	hoverMsgL[1][24]="2.  Dermatan Sulfate";	hoverColorL[24]="red";	
siteListNumL[0][25]=3;	siteListNumL[1][25]=613;	siteListNumL[2][25]=675;	hoverMsgL[1][25]="3.  Dermatan Sulfate";	hoverColorL[25]="red";	
siteListNumL[0][26]=3;	siteListNumL[1][26]=849;	siteListNumL[2][26]=911;	hoverMsgL[1][26]="4.  Dermatan Sulfate";	hoverColorL[26]="red";	

//Cell Attachment
siteListNumL[0][27]=1;	siteListNumL[1][27]=100;	siteListNumL[2][27]=185;	hoverMsgL[1][27]="1. a1B1 Integrin";		hoverColorL[27]="orange";	
siteListNumL[0][28]=2;	siteListNumL[1][28]=93;		siteListNumL[2][28]=174;	hoverMsgL[1][28]="2. a1B1 Integrin";		hoverColorL[28]="orange";	
siteListNumL[0][29]=2;	siteListNumL[1][29]=497;	siteListNumL[2][29]=548;	hoverMsgL[1][29]="3. a1B1 Integrin";		hoverColorL[29]="orange";	
siteListNumL[0][30]=1;	siteListNumL[1][30]=506;	siteListNumL[2][30]=557;	hoverMsgL[1][30]="4. a1B1 Integrin";		hoverColorL[30]="orange";	
siteListNumL[0][31]=2;	siteListNumL[1][31]=733;	siteListNumL[2][31]=768;	hoverMsgL[1][31]="5. a1B1 Integrin";		hoverColorL[31]="orange";	
siteListNumL[0][32]=1;	siteListNumL[1][32]=742;	siteListNumL[2][32]=777;	hoverMsgL[1][32]="6. a1B1 Integrin";		hoverColorL[32]="orange";	
siteListNumL[0][33]=1;	siteListNumL[1][33]=518;	siteListNumL[2][33]=523;	hoverMsgL[1][33]="a1,2,11-B1 Integrin";		hoverColorL[33]="orange";
siteListNumL[0][34]=2;	siteListNumL[1][34]=16;		siteListNumL[2][34]=335;	hoverMsgL[1][34]="1. a2B1 Integrin";		hoverColorL[34]="orange";	
siteListNumL[0][35]=1;	siteListNumL[1][35]=132;	siteListNumL[2][35]=202;	hoverMsgL[1][35]="2. a2B1 Integrin";		hoverColorL[35]="orange";	
siteListNumL[0][36]=2;	siteListNumL[1][36]=127;	siteListNumL[2][36]=195;	hoverMsgL[1][36]="3. a2B1 Integrin";		hoverColorL[36]="orange";	
siteListNumL[0][37]=1;	siteListNumL[1][37]=451;	siteListNumL[2][37]=454;	hoverMsgL[1][37]="4. a2B1 Integrin";		hoverColorL[37]="orange";	
siteListNumL[0][38]=1;	siteListNumL[1][38]=506;	siteListNumL[2][38]=557;	hoverMsgL[1][38]="5. a2B1 Integrin";		hoverColorL[38]="orange";	
siteListNumL[0][39]=2;	siteListNumL[1][39]=497;	siteListNumL[2][39]=548;	hoverMsgL[1][39]="6. a2B1 Integrin";		hoverColorL[39]="orange";	
siteListNumL[0][40]=1;	siteListNumL[1][40]=791;	siteListNumL[2][40]=845;	hoverMsgL[1][40]="7. a2B1 Integrin";		hoverColorL[40]="orange";	
siteListNumL[0][41]=2;	siteListNumL[1][41]=784;	siteListNumL[2][41]=835;	hoverMsgL[1][41]="8. a2B1 Integrin";		hoverColorL[41]="orange";	
siteListNumL[0][42]=1;	siteListNumL[1][42]=583;	siteListNumL[2][42]=585;	hoverMsgL[1][42]="DC Integrin";				hoverColorL[42]="orange";	
siteListNumL[0][43]=1;	siteListNumL[1][43]=773;	siteListNumL[2][43]=807;	hoverMsgL[1][43]="Fibronectin";				hoverColorL[43]="orange";
siteListNumL[0][44]=1;	siteListNumL[1][44]=412;	siteListNumL[2][44]=420;	hoverMsgL[1][44]="VWF";						hoverColorL[44]="orange";	

//Cell Interaction
siteListNumL[0][45]=1;	siteListNumL[1][45]=598;	siteListNumL[2][45]=645;		hoverMsgL[1][45]="1. COMP";		hoverColorL[45]="blue";	
siteListNumL[0][46]=1;	siteListNumL[1][46]=697;	siteListNumL[2][46]=761;		hoverMsgL[1][46]="2. COMP";		hoverColorL[46]="blue";	
siteListNumL[0][47]=1;	siteListNumL[1][47]=1052;	siteListNumL[2][47]=1056;		hoverMsgL[1][47]="3. COMP";		hoverColorL[47]="blue";	
siteListNumL[0][48]=1;	siteListNumL[1][48]=667;	siteListNumL[2][48]=816;		hoverMsgL[1][48]="SPARC";		hoverColorL[48]="blue";	

//Signaling
siteListNumL[0][49]=1;	siteListNumL[1][49]=139;	siteListNumL[2][49]=418;		hoverMsgL[1][49]="1. Interleukin 2";	hoverColorL[49]="teal";	
siteListNumL[0][50]=1;	siteListNumL[1][50]=839;	siteListNumL[2][50]=1030;		hoverMsgL[1][50]="2. Interleukin 2";	hoverColorL[50]="teal";	
siteListNumL[0][51]=1;	siteListNumL[1][51]=233;	siteListNumL[2][51]=259;		hoverMsgL[1][51]="1. DDR2";				hoverColorL[51]="teal";	
siteListNumL[0][52]=1;	siteListNumL[1][52]=410;	siteListNumL[2][52]=421;		hoverMsgL[1][52]="2. DDR2";				hoverColorL[52]="teal";	
siteListNumL[0][53]=1;	siteListNumL[1][53]=791;	siteListNumL[2][53]=817;		hoverMsgL[1][53]="3. DDR2";				hoverColorL[53]="teal";

//Mineralization
siteListNumL[0][54]=3;	siteListNumL[1][54]=147;	siteListNumL[2][54]=174;	hoverMsgL[1][54]="1. Phosphoryn";	hoverColorL[54]="green";	
siteListNumL[0][55]=3;	siteListNumL[1][55]=380;	siteListNumL[2][55]=407;	hoverMsgL[1][55]="2. Phosphoryn";	hoverColorL[55]="green";	
siteListNumL[0][56]=2;	siteListNumL[1][56]=511;	siteListNumL[2][56]=628;	hoverMsgL[1][56]="3. Phosphoryn";	hoverColorL[56]="green";	
siteListNumL[0][57]=3;	siteListNumL[1][57]=613;	siteListNumL[2][57]=640;	hoverMsgL[1][57]="4. Phosphoryn";	hoverColorL[57]="green";	
siteListNumL[0][58]=1;	siteListNumL[1][58]=696;	siteListNumL[2][58]=766;	hoverMsgL[1][58]="5. Phosphoryn";	hoverColorL[58]="green";	
siteListNumL[0][59]=3;	siteListNumL[1][59]=849;	siteListNumL[2][59]=876;	hoverMsgL[1][59]="6. Phosphoryn";	hoverColorL[59]="green";	
siteListNumL[0][60]=1;	siteListNumL[1][60]=991;	siteListNumL[2][60]=996;	hoverMsgL[1][60]="7. Phosphoryn";	hoverColorL[60]="green";	

//Post-Trans Modify
siteListNumL[0][61]=3;	siteListNumL[1][61]=28;		siteListNumL[2][61]=33;		hoverMsgL[1][61]="1. Glycation";		hoverColorL[61]="lime";	
siteListNumL[0][62]=3;	siteListNumL[1][62]=261;	siteListNumL[2][62]=266;	hoverMsgL[1][62]="2. Glycation";		hoverColorL[62]="lime";	
siteListNumL[0][63]=1;	siteListNumL[1][63]=449;	siteListNumL[2][63]=450;	hoverMsgL[1][63]="3. Glycation";		hoverColorL[63]="lime";
siteListNumL[0][64]=2;	siteListNumL[1][64]=461;	siteListNumL[2][64]=462;	hoverMsgL[1][64]="4. Glycation";		hoverColorL[64]="lime";	
siteListNumL[0][65]=2;	siteListNumL[1][65]=488;	siteListNumL[2][65]=489;	hoverMsgL[1][65]="5. Glycation";		hoverColorL[65]="lime";	
siteListNumL[0][66]=3;	siteListNumL[1][66]=494;	siteListNumL[2][66]=499;	hoverMsgL[1][66]="6. Glycation";		hoverColorL[66]="lime";	
siteListNumL[0][67]=3;	siteListNumL[1][67]=730;	siteListNumL[2][67]=735;	hoverMsgL[1][67]="7. Glycation";		hoverColorL[67]="lime";	
siteListNumL[0][68]=2;	siteListNumL[1][68]=932;	siteListNumL[2][68]=933;	hoverMsgL[1][68]="8. Glycation";		hoverColorL[68]="lime";	
siteListNumL[0][69]=3;	siteListNumL[1][69]=963;	siteListNumL[2][69]=968;	hoverMsgL[1][69]="9. Glycation";		hoverColorL[69]="lime";	

//Collagenolysis
siteListNumL[0][70]=1;	siteListNumL[1][70]=783;	siteListNumL[2][70]=802;	hoverMsgL[1][70]="MMP Domain";		hoverColorL[70]="fuchsia";	
siteListNumL[0][71]=1;	siteListNumL[1][71]=791;	siteListNumL[2][71]=792;	hoverMsgL[1][71]="MMP-1";			hoverColorL[71]="fuchsia";	

//X-Link
siteListNumL[0][72]=1;	siteListNumL[1][72]=17;		siteListNumL[2][72]=100;	hoverMsgL[1][72]="N-Anchor";		hoverColorL[72]="lightpink";	
siteListNumL[0][73]=1;	siteListNumL[1][73]=102;	siteListNumL[2][73]=103;	hoverMsgL[1][73]="X-Link";			hoverColorL[73]="lightpink";
siteListNumL[0][74]=1;	siteListNumL[1][74]=1039;	siteListNumL[2][74]=1052;	hoverMsgL[1][74]="Col V X-Link";	hoverColorL[74]="lightpink";	

//Polymerization
siteListNumL[0][75]=1;	siteListNumL[1][75]=792;	siteListNumL[2][75]=812;	hoverMsgL[1][75]="Fibril(-)";		hoverColorL[75]="darkred";	
siteListNumL[0][76]=2;	siteListNumL[1][76]=787;	siteListNumL[2][76]=810;	hoverMsgL[1][76]="Fibril(-)50%";	hoverColorL[76]="darkred";	
siteListNumL[0][77]=1;	siteListNumL[1][77]=1031;	siteListNumL[2][77]=1056;	hoverMsgL[1][77]="Fibril(+)";		hoverColorL[77]="darkred";	
siteListNumL[0][78]=2;	siteListNumL[1][78]=1024;	siteListNumL[2][78]=1026;	hoverMsgL[1][78]="Fibril(-)100%";	hoverColorL[78]="darkred";	

//Immunological
siteListNumL[0][79]=1;	siteListNumL[1][79]=1016;	siteListNumL[2][79]=1056;	hoverMsgL[1][79]="ENDO 180";	hoverColorL[79]="darksalmon";	

//Misc: THP
siteListNumL[0][80]=1;	siteListNumL[1][80]=98;		siteListNumL[2][80]=109;	hoverMsgL[1][80]="1. THP/HB, ANG-";		hoverColorL[80]="purple";	
siteListNumL[0][81]=2;	siteListNumL[1][81]=94;		siteListNumL[2][81]=103;	hoverMsgL[1][81]="2. THP/HB, ANG-";		hoverColorL[81]="purple";	
siteListNumL[0][82]=1;	siteListNumL[1][82]=513;	siteListNumL[2][82]=523;	hoverMsgL[1][82]="3. THP, ANG-";		hoverColorL[82]="purple";	
siteListNumL[0][83]=1;	siteListNumL[1][83]=941;	siteListNumL[2][83]=953;	hoverMsgL[1][83]="4. THP/HB, ANG-";		hoverColorL[83]="purple";
siteListNumL[0][84]=1;	siteListNumL[1][84]=513;	siteListNumL[2][84]=523;	hoverMsgL[1][84]="THP/ECA+";			hoverColorL[84]="purple";	
siteListNumL[0][85]=1;	siteListNumL[1][85]=143;	siteListNumL[2][85]=151;	hoverMsgL[1][85]="THP/a1,a2B1";			hoverColorL[85]="purple";	
siteListNumL[0][86]=1;	siteListNumL[1][86]=827;	siteListNumL[2][86]=835;	hoverMsgL[1][86]="THP/a1,a2B1-";		hoverColorL[86]="purple";	
siteListNumL[0][87]=1;	siteListNumL[1][87]=518;	siteListNumL[2][87]=526;	hoverMsgL[1][87]="THP/a1,2,11-B1";		hoverColorL[87]="purple";	
siteListNumL[0][88]=1;	siteListNumL[1][88]=518;	siteListNumL[2][88]=523;	hoverMsgL[1][88]="THP/OBD";				hoverColorL[88]="purple";	
siteListNumL[0][89]=1;	siteListNumL[1][89]=788;	siteListNumL[2][89]=802;	hoverMsgL[1][89]="THP/FA+,MMP1,2,13";	hoverColorL[89]="purple";	

//Misc: HSP47
siteListNumL[0][90]=1;	siteListNumL[1][90]=24;		siteListNumL[2][90]=26;		hoverMsgL[1][90]="1. HSP47";	hoverColorL[90]="cyan";	
siteListNumL[0][91]=1;	siteListNumL[1][91]=57;		siteListNumL[2][91]=59;		hoverMsgL[1][91]="2. HSP47";	hoverColorL[91]="cyan";	
siteListNumL[0][92]=1;	siteListNumL[1][92]=81;		siteListNumL[2][92]=83;		hoverMsgL[1][92]="3. HSP47";	hoverColorL[92]="cyan";	
siteListNumL[0][93]=1;	siteListNumL[1][93]=90;		siteListNumL[2][93]=92;		hoverMsgL[1][93]="4. HSP47";	hoverColorL[93]="cyan";
siteListNumL[0][94]=1;	siteListNumL[1][94]=105;	siteListNumL[2][94]=107;	hoverMsgL[1][94]="5. HSP47";	hoverColorL[94]="cyan";	
siteListNumL[0][95]=1;	siteListNumL[1][95]=141;	siteListNumL[2][95]=143;	hoverMsgL[1][95]="6. HSP47";	hoverColorL[95]="cyan";	
siteListNumL[0][96]=1;	siteListNumL[1][96]=147;	siteListNumL[2][96]=149;	hoverMsgL[1][96]="7. HSP47";	hoverColorL[96]="cyan";	
siteListNumL[0][97]=1;	siteListNumL[1][97]=159;	siteListNumL[2][97]=161;	hoverMsgL[1][97]="8. HSP47";	hoverColorL[97]="cyan";	
siteListNumL[0][98]=1;	siteListNumL[1][98]=198;	siteListNumL[2][98]=200;	hoverMsgL[1][98]="9. HSP47";	hoverColorL[98]="cyan";	
siteListNumL[0][99]=1;	siteListNumL[1][99]=207;	siteListNumL[2][99]=209;	hoverMsgL[1][99]="10. HSP47";	hoverColorL[99]="cyan";	
siteListNumL[0][100]=1;	siteListNumL[1][100]=251;	siteListNumL[2][100]=253;	hoverMsgL[1][100]="11. HSP47";	hoverColorL[100]="cyan";	
siteListNumL[0][101]=2;	siteListNumL[1][101]=260;	siteListNumL[2][101]=262;	hoverMsgL[1][101]="12. HSP47";	hoverColorL[101]="cyan";	
siteListNumL[0][102]=1;	siteListNumL[1][102]=306;	siteListNumL[2][102]=308;	hoverMsgL[1][102]="13. HSP47";	hoverColorL[102]="cyan";	
siteListNumL[0][103]=1;	siteListNumL[1][103]=309;	siteListNumL[2][103]=311;	hoverMsgL[1][103]="14. HSP47";	hoverColorL[103]="cyan";
siteListNumL[0][104]=1;	siteListNumL[1][104]=324;	siteListNumL[2][104]=326;	hoverMsgL[1][104]="15. HSP47";	hoverColorL[104]="cyan";	
siteListNumL[0][105]=1;	siteListNumL[1][105]=330;	siteListNumL[2][105]=332;	hoverMsgL[1][105]="16. HSP47";	hoverColorL[105]="cyan";	
siteListNumL[0][106]=1;	siteListNumL[1][106]=348;	siteListNumL[2][106]=350;	hoverMsgL[1][106]="17. HSP47";	hoverColorL[106]="cyan";	
siteListNumL[0][107]=2;	siteListNumL[1][107]=349;	siteListNumL[2][107]=351;	hoverMsgL[1][107]="18. HSP47";	hoverColorL[107]="cyan";	
siteListNumL[0][108]=2;	siteListNumL[1][108]=368;	siteListNumL[2][108]=370;	hoverMsgL[1][108]="19. HSP47";	hoverColorL[108]="cyan";	
siteListNumL[0][109]=1;	siteListNumL[1][109]=411;	siteListNumL[2][109]=413;	hoverMsgL[1][109]="20. HSP47";	hoverColorL[109]="cyan";	
siteListNumL[0][110]=1;	siteListNumL[1][110]=435;	siteListNumL[2][110]=437;	hoverMsgL[1][110]="21. HSP47";	hoverColorL[110]="cyan";	
siteListNumL[0][111]=2;	siteListNumL[1][111]=437;	siteListNumL[2][111]=439;	hoverMsgL[1][111]="22. HSP47";	hoverColorL[111]="cyan";	
siteListNumL[0][112]=1;	siteListNumL[1][112]=468;	siteListNumL[2][112]=470;	hoverMsgL[1][112]="23. HSP47";	hoverColorL[112]="cyan";	
siteListNumL[0][113]=2;	siteListNumL[1][113]=491;	siteListNumL[2][113]=493;	hoverMsgL[1][113]="24. HSP47";	hoverColorL[113]="cyan";
siteListNumL[0][114]=1;	siteListNumL[1][114]=513;	siteListNumL[2][114]=515;	hoverMsgL[1][114]="25. HSP47";	hoverColorL[114]="cyan";	
siteListNumL[0][115]=1;	siteListNumL[1][115]=516;	siteListNumL[2][115]=518;	hoverMsgL[1][115]="26. HSP47";	hoverColorL[115]="cyan";	
siteListNumL[0][116]=1;	siteListNumL[1][116]=522;	siteListNumL[2][116]=524;	hoverMsgL[1][116]="27. HSP47";	hoverColorL[116]="cyan";	
siteListNumL[0][117]=1;	siteListNumL[1][117]=534;	siteListNumL[2][117]=536;	hoverMsgL[1][117]="28. HSP47";	hoverColorL[117]="cyan";	
siteListNumL[0][118]=1;	siteListNumL[1][118]=570;	siteListNumL[2][118]=572;	hoverMsgL[1][118]="29. HSP47";	hoverColorL[118]="cyan";	
siteListNumL[0][119]=1;	siteListNumL[1][119]=583;	siteListNumL[2][119]=585;	hoverMsgL[1][119]="30. HSP47";	hoverColorL[119]="cyan";	
siteListNumL[0][120]=2;	siteListNumL[1][120]=581;	siteListNumL[2][120]=583;	hoverMsgL[1][120]="31. HSP47";	hoverColorL[120]="cyan";	
siteListNumL[0][121]=1;	siteListNumL[1][121]=600;	siteListNumL[2][121]=602;	hoverMsgL[1][121]="32. HSP47";	hoverColorL[121]="cyan";	
siteListNumL[0][122]=2;	siteListNumL[1][122]=611;	siteListNumL[2][122]=613;	hoverMsgL[1][122]="33. HSP47";	hoverColorL[122]="cyan";	
siteListNumL[0][123]=1;	siteListNumL[1][123]=633;	siteListNumL[2][123]=635;	hoverMsgL[1][123]="34. HSP47";	hoverColorL[123]="cyan";
siteListNumL[0][124]=1;	siteListNumL[1][124]=639;	siteListNumL[2][124]=641;	hoverMsgL[1][124]="35. HSP47";	hoverColorL[124]="cyan";	
siteListNumL[0][125]=2;	siteListNumL[1][125]=659;	siteListNumL[2][125]=661;	hoverMsgL[1][125]="36. HSP47";	hoverColorL[125]="cyan";	
siteListNumL[0][126]=1;	siteListNumL[1][126]=702;	siteListNumL[2][126]=704;	hoverMsgL[1][126]="37. HSP47";	hoverColorL[126]="cyan";	
siteListNumL[0][127]=2;	siteListNumL[1][127]=737;	siteListNumL[2][127]=739;	hoverMsgL[1][127]="38. HSP47";	hoverColorL[127]="cyan";	
siteListNumL[0][128]=1;	siteListNumL[1][128]=747;	siteListNumL[2][128]=749;	hoverMsgL[1][128]="39. HSP47";	hoverColorL[128]="cyan";	
siteListNumL[0][129]=1;	siteListNumL[1][129]=795;	siteListNumL[2][129]=797;	hoverMsgL[1][129]="40. HSP47";	hoverColorL[129]="cyan";	
siteListNumL[0][130]=1;	siteListNumL[1][130]=804;	siteListNumL[2][130]=806;	hoverMsgL[1][130]="41. HSP47";	hoverColorL[130]="cyan";	
siteListNumL[0][131]=1;	siteListNumL[1][131]=807;	siteListNumL[2][131]=809;	hoverMsgL[1][131]="42. HSP47";	hoverColorL[131]="cyan";	
siteListNumL[0][132]=1;	siteListNumL[1][132]=831;	siteListNumL[2][132]=833;	hoverMsgL[1][132]="43. HSP47";	hoverColorL[132]="cyan";	
siteListNumL[0][133]=1;	siteListNumL[1][133]=873;	siteListNumL[2][133]=875;	hoverMsgL[1][133]="44. HSP47";	hoverColorL[133]="cyan";
siteListNumL[0][134]=1;	siteListNumL[1][134]=903;	siteListNumL[2][134]=905;	hoverMsgL[1][134]="45. HSP47";	hoverColorL[134]="cyan";	
siteListNumL[0][135]=1;	siteListNumL[1][135]=921;	siteListNumL[2][135]=923;	hoverMsgL[1][135]="46. HSP47";	hoverColorL[135]="cyan";	
siteListNumL[0][136]=1;	siteListNumL[1][136]=930;	siteListNumL[2][136]=932;	hoverMsgL[1][136]="47. HSP47";	hoverColorL[136]="cyan";	
siteListNumL[0][137]=1;	siteListNumL[1][137]=942;	siteListNumL[2][137]=944;	hoverMsgL[1][137]="48. HSP47";	hoverColorL[137]="cyan";	
siteListNumL[0][138]=1;	siteListNumL[1][138]=948;	siteListNumL[2][138]=950;	hoverMsgL[1][138]="49. HSP47";	hoverColorL[138]="cyan";	
siteListNumL[0][139]=1;	siteListNumL[1][139]=978;	siteListNumL[2][139]=980;	hoverMsgL[1][139]="50. HSP47";	hoverColorL[139]="cyan";	
siteListNumL[0][140]=1;	siteListNumL[1][140]=1005;	siteListNumL[2][140]=1007;	hoverMsgL[1][140]="51. HSP47";	hoverColorL[140]="cyan";	

//Misc
siteListNumL[0][141]=1;	siteListNumL[1][141]=101;	siteListNumL[2][141]=115;	hoverMsgL[1][141]="Micro Unfolding";	hoverColorL[141]="chocolate";	
siteListNumL[0][142]=1;	siteListNumL[1][142]=838;	siteListNumL[2][142]=1056;	hoverMsgL[1][142]="Amyloid Precursor";	hoverColorL[142]="chocolate";
	
	
		numSitesMutation=10;	//TODO: automatic
		sitesPickedLMutation=new Array(numSitesMutation+1);
		sitesPickedLMutation[0]=1; // WHY IS THIS AGAIN? 
		hoverMsgLMutation[1]=new Array(numSitesMutation);
		headersMutation[modelNumberL]=['','Type I (mild)','Type II (lethal)','Type III (severe)'];
		headersNumMutation[modelNumberL]=[0,3,8,10];
//NOTE: indexed as follows: hoverMsgLMutation[modelNumberL][protein}
//TODO: this should be parsed from a text file	
//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
// Type I (mild)
siteListNumLMutation[0][1]=1;	siteListNumLMutation[1][1]=175;		siteListNumLMutation[2][1]=214;		hoverMsgLMutation[1][1]="MMP-1";		hoverColorLMutation[1]="yellow";
siteListNumLMutation[0][2]=1;	siteListNumLMutation[1][2]=363;		siteListNumLMutation[2][2]=402;		hoverMsgLMutation[1][2]="MMP-2";		hoverColorLMutation[2]="yellow";	
siteListNumLMutation[0][3]=1;	siteListNumLMutation[1][3]=103;		siteListNumLMutation[2][3]=106;		hoverMsgLMutation[1][3]="MMP-3";		hoverColorLMutation[3]="yellow";	

// Type II (lethal)
siteListNumLMutation[0][4]=1;	siteListNumLMutation[1][4]=467;		siteListNumLMutation[2][4]=477;		hoverMsgLMutation[1][4]="[PS]KSPG";				hoverColorLMutation[4]="green";	
siteListNumLMutation[0][5]=1;	siteListNumLMutation[1][5]=581;		siteListNumLMutation[2][5]=591;		hoverMsgLMutation[1][5]="[PS]KSPG";				hoverColorLMutation[5]="green";	
siteListNumLMutation[0][6]=1;	siteListNumLMutation[1][6]=617;		siteListNumLMutation[2][6]=627;		hoverMsgLMutation[1][6]="[PS]DSPG";			hoverColorLMutation[6]="green";	
siteListNumLMutation[0][7]=1;	siteListNumLMutation[1][7]=638;		siteListNumLMutation[2][7]=648;		hoverMsgLMutation[1][7]="[PS]DSPG";			hoverColorLMutation[7]="green";	
siteListNumLMutation[0][8]=1;	siteListNumLMutation[1][8]=872;		siteListNumLMutation[2][8]=882;		hoverMsgLMutation[1][8]="[PS]DSPG";			hoverColorLMutation[8]="green";	
	
// 	Type III (severe)
siteListNumLMutation[0][9]=1;	siteListNumLMutation[1][9]=902;		siteListNumLMutation[2][9]=912;		hoverMsgLMutation[1][9]="[PS]DSPG";			hoverColorLMutation[9]="blue";	
siteListNumLMutation[0][10]=1;	siteListNumLMutation[1][10]=869;	siteListNumLMutation[2][10]=877;	hoverMsgLMutation[1][10]="DSPG";				hoverColorLMutation[10]="blue";	
	
	}

	else if(modelID=="Collagen3")
	{	modelNumberL=2;
		headers[modelNumberL]=['','No Sites Available'];
		headersNum[modelNumberL]=[''];
		jmolScript('load models/080906-d-band-wide-decmon-upright-mined-COLLAGEN.pdb;select all;spacefill '+atomSize+'%;wireframe'+ bondSize+';color cpk;',"Left");
	}
	else if(modelID=="Decorin")
	{	

		Jmol.script(myJmol, s0+'load models/080122-new-c-n-dec-mon-minimized.pdb;display backbone;select hidden; delete selected;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;')		
//jmolScript('load models/080122-new-c-n-dec-mon-minimized.pdb;display backbone;select hidden; delete selected;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;', 'Left');
		modelNumberL=3;
		numSites=4;
		sitesPickedL=new Array(numSites+1);
		hoverMsgL[3]=new Array(numSites);
		sitesPickedL[0]=1;
		headers[modelNumberL]=['', 'Common Conformation','Wide Conformation'];
		headersNum[modelNumberL]=[0,2,4];
		
			
		//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
		//Decorin on Type I Collagen - taken from the Plos One Paper
		hoverMsgL[3][1]="d-band Common";	hoverColorL[1]="red";	
		hoverMsgL[3][2]="e-band Common";	hoverColorL[2]="yellow";	
		hoverMsgL[3][3]="d-band Wide";		hoverColorL[3]="green";	
		hoverMsgL[3][4]="e-band Wide";		hoverColorL[4]="cyan";

		//siteListNumL[1][1]=1101;		siteListNumL[2][1]=1104;		hoverMsgL[3][1]="RELK";		hoverColorL[1]="yellow";
		//siteListNumL[1][2]=1243;		siteListNumL[2][2]=1246;		hoverMsgL[3][2]="RELH";		hoverColorL[2]="yellow";		
	}

	else if(modelID=="Biglycan")
	{	modelNumberL=4;
		headers[modelNumberL]=['','No Sites Available'];
		headersNum[modelNumberL]=[''];
		
		
		jmolScript('load models/practice.pdb; select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 100;define site1 atomno<213;define site2 atomno>15000;', 'Left');
	}

	
	
//------------------------------------CHANGING the TABLE-------------------------------------------------	
	// Binding Sites
	var table ="";
	var siteNumber=0;		
	$('#accordion').html("");		
	for (i=1;i<=headers[modelNumberL].length-1;i++){
		var headerTitle="header"+i;
		table += '<li><a href="#'+headerTitle+'" class="heading">'+headers[modelNumberL][i]+'</a><ul id ='+headerTitle+'>';
		
		//add sites within each header 
		var headerLength=headersNum[modelNumberL][i]-headersNum[modelNumberL][i-1];
		for(j=1;j<=headerLength;j++){
			siteNumber=siteNumber+1;
			
			table += '<li id="'+siteNumber+'LeftBind" onClick="siteSelectL('+siteNumber+',\'Left\',\'Bind\')"><a href="javascript:void(0)">'+hoverMsgL[modelNumberL][siteNumber]+'</a></li>';
		}
		table += '</ul></li>';
	}
	$('#accordion').append(table).accordion('destroy');
	$('#accordion').accordion({
			autoHeight: false,
			collapsible: true,
			navigation: true				
	});	
	
	
	// Mutation Sites
	var table ="";
	var siteNumber=0;		
	$('#mutateAccordion').html("");		
	for (i=1;i<=headersMutation[modelNumberL].length-1;i++){
		var headerTitle="header"+i;
		table += '<li><a href="#'+headerTitle+'" class="heading">'+headersMutation[modelNumberL][i]+'</a><ul id ='+headerTitle+'>';
		
		//add sites within each header 
		var headerLength=headersNumMutation[modelNumberL][i]-headersNumMutation[modelNumberL][i-1];
		for(j=1;j<=headerLength;j++){
			siteNumber=siteNumber+1;
			table += '<li id="'+siteNumber+'LeftMutation" onClick="siteSelectL('+siteNumber+',\'Left\',\'Mutation\')"><a href="javascript:void(0)">'+hoverMsgLMutation[modelNumberL][siteNumber]+'</a></li>';
		}
		table += '</ul></li>';
	}
	$('#mutateAccordion').append(table).accordion('destroy');
	$('#mutateAccordion').accordion({
			autoHeight: false,
			collapsible: true,
			navigation: true				
	});
		
}



