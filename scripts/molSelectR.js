/*This function will load in the model chosen from the drop down menu, and change "hoverOptL" according to the model chosen.  
//It also defines the sites shown in the menu, currently with arbitrarily chosen atoms
siteListL = FORM name//
selSiteL = SELECT name

//modelID=getElementById("mydropdownL").value;
document.formname.selectname.options
id? = selMultiL*/

//must make headers a global variable
function molSelectR(modelID)
{
	document.getElementById("searchRight").value="";  //Clears the search
	sitesPickedR[0]=1;
	var atomSize=aSize[0];	// where is this coming from?!
	var bondSize=bSize[0];
	var siteListName=new Array(200);
	var siteString='';
	var numSites=0;
	var headersNum=new Array(5)
	var headersNumMutation=new Array(5)
	//	siteListNumR[0][indexofSite] = //Chain (1 is alpha 1=AC, and 2 is alpha2 = B and 3 = both!)
		//	siteListNumR[1][indexofSite] = //initial value - for first chain
		//	siteListNumR[2][indexofSite] = //final value	
	if(modelID=="practiceRight")
	{	modelNumberR=0;
		headers[modelNumberR]=['','Model 1','Model 2']
		headersNum[modelNumberR]=[0,1,3]
		numSites=3;
		hoverColorR=["","red","orange","yellow"];
		hoverColorRMutation=["","red","orange","yellow"];
		hoverMsgR[0][1]="Site 1";
		hoverMsgR[0][2]="Site 2";
		hoverMsgR[0][3]="Site 3";
		siteString='define site1 atomno=1; define site2 atomno=2,atomno=3;define site3 atomno=1,atomno=3;';
		Jmol.script(myJmolR,'load jmol/models/practice.pdb;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 100;'+siteString, 'Right');		
	}
	
	else if(modelID=="Collagen1")
	{	Jmol.script(myJmolR,'load jmol/models/collagen-Access.pdb;display backbone;select hidden; delete selected;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 200;', 'Right');	
		modelNumberR=1;
		numSites=142;	//TODO: automatic
		sitesPickedR=new Array(numSites+1);
		sitesPickedR[0]=1; // WHY IS THIS AGAIN? 
		hoverMsgR[1]=new Array(numSites);
		headers[modelNumberR]=['','Proteoglycan','Cell Attachment','Cell Interaction','Signaling','Mineralization','Post Trans Modify','Collagenolysis','X-Link','Polymerizatin','Immunological','Misc:THP', 'Misc:HSP47','Misc'];
		headersNum[modelNumberR]=[0,26,44,48,53,60,69,71,74,78,79,89,140,142];
		
		//NOTE: indexed as follows: hoverMsgR[modelNumberR][protein}
//TODO: this should be parsed from a text file	
//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
//PG
siteListNumR[0][1]=1;	siteListNumR[1][1]=175;		siteListNumR[2][1]=214;		hoverMsgR[1][1]="1. GE-Decorin";		hoverColorR[1]="red";
siteListNumR[0][2]=1;	siteListNumR[1][2]=363;		siteListNumR[2][2]=402;		hoverMsgR[1][2]="2. GE-Decorin";		hoverColorR[2]="red";	
siteListNumR[0][3]=1;	siteListNumR[1][3]=103;		siteListNumR[2][3]=106;		hoverMsgR[1][3]="HEP";					hoverColorR[3]="red";	
siteListNumR[0][4]=1;	siteListNumR[1][4]=467;		siteListNumR[2][4]=477;		hoverMsgR[1][4]="[PS]KSPG";				hoverColorR[4]="red";	
siteListNumR[0][5]=1;	siteListNumR[1][5]=581;		siteListNumR[2][5]=591;		hoverMsgR[1][5]="[PS]KSPG";				hoverColorR[5]="red";	
siteListNumR[0][6]=1;	siteListNumR[1][6]=617;		siteListNumR[2][6]=627;		hoverMsgR[1][6]="1. [PS]DSPG";			hoverColorR[6]="red";	
siteListNumR[0][7]=1;	siteListNumR[1][7]=638;		siteListNumR[2][7]=648;		hoverMsgR[1][7]="2. [PS]DSPG";			hoverColorR[7]="red";	
siteListNumR[0][8]=1;	siteListNumR[1][8]=872;		siteListNumR[2][8]=882;		hoverMsgR[1][8]="3. [PS]DSPG";			hoverColorR[8]="red";	
siteListNumR[0][9]=1;	siteListNumR[1][9]=902;		siteListNumR[2][9]=912;		hoverMsgR[1][9]="4. [PS]DSPG";			hoverColorR[9]="red";	
siteListNumR[0][10]=1;	siteListNumR[1][10]=869;	siteListNumR[2][10]=877;	hoverMsgR[1][10]="DSPG";				hoverColorR[10]="red";	
siteListNumR[0][11]=1;	siteListNumR[1][11]=869;	siteListNumR[2][11]=879;	hoverMsgR[1][11]="1. Decoron";			hoverColorR[11]="red";
siteListNumR[0][12]=1;	siteListNumR[1][12]=899;	siteListNumR[2][12]=909;	hoverMsgR[1][12]="2. Decoron";			hoverColorR[12]="red";
siteListNumR[0][13]=1;	siteListNumR[1][13]=950;	siteListNumR[2][13]=980;	hoverMsgR[1][13]="3. Decoron";			hoverColorR[13]="red";
siteListNumR[0][14]=3;	siteListNumR[1][14]=1;		siteListNumR[2][14]=33;		hoverMsgR[1][14]="1. Keratan Sulfate";	hoverColorR[14]="red";	
siteListNumR[0][15]=3;	siteListNumR[1][15]=91;		siteListNumR[2][15]=133;	hoverMsgR[1][15]="2. Keratan Sulfate";	hoverColorR[15]="red";	
siteListNumR[0][16]=3;	siteListNumR[1][16]=216;	siteListNumR[2][16]=266;	hoverMsgR[1][16]="3. Keratan Sulfate";	hoverColorR[16]="red";	
siteListNumR[0][17]=3;	siteListNumR[1][17]=324;	siteListNumR[2][17]=366;	hoverMsgR[1][17]="4. Keratan Sulfate";	hoverColorR[17]="red";	
siteListNumR[0][18]=3;	siteListNumR[1][18]=449;	siteListNumR[2][18]=499;	hoverMsgR[1][18]="5. Keratan Sulfate";	hoverColorR[18]="red";	
siteListNumR[0][19]=3;	siteListNumR[1][19]=557;	siteListNumR[2][19]=599;	hoverMsgR[1][19]="6. Keratan Sulfate";	hoverColorR[19]="red";	
siteListNumR[0][20]=3;	siteListNumR[1][20]=682;	siteListNumR[2][20]=735;	hoverMsgR[1][20]="7. Keratan Sulfate";	hoverColorR[20]="red";	
siteListNumR[0][21]=3;	siteListNumR[1][21]=793;	siteListNumR[2][21]=835;	hoverMsgR[1][21]="8. Keratan Sulfate";	hoverColorR[21]="red";	
siteListNumR[0][22]=3;	siteListNumR[1][22]=918;	siteListNumR[2][22]=968;	hoverMsgR[1][22]="9. Keratan Sulfate";	hoverColorR[22]="red";	
siteListNumR[0][23]=3;	siteListNumR[1][23]=147;	siteListNumR[2][23]=209;	hoverMsgR[1][23]="1.  Dermatan Sulfate";	hoverColorR[23]="red";
siteListNumR[0][24]=3;	siteListNumR[1][24]=380;	siteListNumR[2][24]=442;	hoverMsgR[1][24]="2.  Dermatan Sulfate";	hoverColorR[24]="red";	
siteListNumR[0][25]=3;	siteListNumR[1][25]=613;	siteListNumR[2][25]=675;	hoverMsgR[1][25]="3.  Dermatan Sulfate";	hoverColorR[25]="red";	
siteListNumR[0][26]=3;	siteListNumR[1][26]=849;	siteListNumR[2][26]=911;	hoverMsgR[1][26]="4.  Dermatan Sulfate";	hoverColorR[26]="red";	

//Cell Attachment
siteListNumR[0][27]=1;	siteListNumR[1][27]=100;	siteListNumR[2][27]=185;	hoverMsgR[1][27]="1. a1B1 Integrin";		hoverColorR[27]="orange";	
siteListNumR[0][28]=2;	siteListNumR[1][28]=93;		siteListNumR[2][28]=174;	hoverMsgR[1][28]="2. a1B1 Integrin";		hoverColorR[28]="orange";	
siteListNumR[0][29]=2;	siteListNumR[1][29]=497;	siteListNumR[2][29]=548;	hoverMsgR[1][29]="3. a1B1 Integrin";		hoverColorR[29]="orange";	
siteListNumR[0][30]=1;	siteListNumR[1][30]=506;	siteListNumR[2][30]=557;	hoverMsgR[1][30]="4. a1B1 Integrin";		hoverColorR[30]="orange";	
siteListNumR[0][31]=2;	siteListNumR[1][31]=733;	siteListNumR[2][31]=768;	hoverMsgR[1][31]="5. a1B1 Integrin";		hoverColorR[31]="orange";	
siteListNumR[0][32]=1;	siteListNumR[1][32]=742;	siteListNumR[2][32]=777;	hoverMsgR[1][32]="6. a1B1 Integrin";		hoverColorR[32]="orange";	
siteListNumR[0][33]=1;	siteListNumR[1][33]=518;	siteListNumR[2][33]=523;	hoverMsgR[1][33]="a1,2,11-B1 Integrin";		hoverColorR[33]="orange";
siteListNumR[0][34]=2;	siteListNumR[1][34]=16;		siteListNumR[2][34]=335;	hoverMsgR[1][34]="1. a2B1 Integrin";		hoverColorR[34]="orange";	
siteListNumR[0][35]=1;	siteListNumR[1][35]=132;	siteListNumR[2][35]=202;	hoverMsgR[1][35]="2. a2B1 Integrin";		hoverColorR[35]="orange";	
siteListNumR[0][36]=2;	siteListNumR[1][36]=127;	siteListNumR[2][36]=195;	hoverMsgR[1][36]="3. a2B1 Integrin";		hoverColorR[36]="orange";	
siteListNumR[0][37]=1;	siteListNumR[1][37]=451;	siteListNumR[2][37]=454;	hoverMsgR[1][37]="4. a2B1 Integrin";		hoverColorR[37]="orange";	
siteListNumR[0][38]=1;	siteListNumR[1][38]=506;	siteListNumR[2][38]=557;	hoverMsgR[1][38]="5. a2B1 Integrin";		hoverColorR[38]="orange";	
siteListNumR[0][39]=2;	siteListNumR[1][39]=497;	siteListNumR[2][39]=548;	hoverMsgR[1][39]="6. a2B1 Integrin";		hoverColorR[39]="orange";	
siteListNumR[0][40]=1;	siteListNumR[1][40]=791;	siteListNumR[2][40]=845;	hoverMsgR[1][40]="7. a2B1 Integrin";		hoverColorR[40]="orange";	
siteListNumR[0][41]=2;	siteListNumR[1][41]=784;	siteListNumR[2][41]=835;	hoverMsgR[1][41]="8. a2B1 Integrin";		hoverColorR[41]="orange";	
siteListNumR[0][42]=1;	siteListNumR[1][42]=583;	siteListNumR[2][42]=585;	hoverMsgR[1][42]="DC Integrin";				hoverColorR[42]="orange";	
siteListNumR[0][43]=1;	siteListNumR[1][43]=773;	siteListNumR[2][43]=807;	hoverMsgR[1][43]="Fibronectin";				hoverColorR[43]="orange";
siteListNumR[0][44]=1;	siteListNumR[1][44]=412;	siteListNumR[2][44]=420;	hoverMsgR[1][44]="VWF";						hoverColorR[44]="orange";	

//Cell Interaction
siteListNumR[0][45]=1;	siteListNumR[1][45]=598;	siteListNumR[2][45]=645;		hoverMsgR[1][45]="1. COMP";		hoverColorR[45]="blue";	
siteListNumR[0][46]=1;	siteListNumR[1][46]=697;	siteListNumR[2][46]=761;		hoverMsgR[1][46]="2. COMP";		hoverColorR[46]="blue";	
siteListNumR[0][47]=1;	siteListNumR[1][47]=1052;	siteListNumR[2][47]=1056;		hoverMsgR[1][47]="3. COMP";		hoverColorR[47]="blue";	
siteListNumR[0][48]=1;	siteListNumR[1][48]=667;	siteListNumR[2][48]=816;		hoverMsgR[1][48]="SPARC";		hoverColorR[48]="blue";	

//Signaling
siteListNumR[0][49]=1;	siteListNumR[1][49]=139;	siteListNumR[2][49]=418;		hoverMsgR[1][49]="1. Interleukin 2";	hoverColorR[49]="teal";	
siteListNumR[0][50]=1;	siteListNumR[1][50]=839;	siteListNumR[2][50]=1030;		hoverMsgR[1][50]="2. Interleukin 2";	hoverColorR[50]="teal";	
siteListNumR[0][51]=1;	siteListNumR[1][51]=233;	siteListNumR[2][51]=259;		hoverMsgR[1][51]="1. DDR2";				hoverColorR[51]="teal";	
siteListNumR[0][52]=1;	siteListNumR[1][52]=410;	siteListNumR[2][52]=421;		hoverMsgR[1][52]="2. DDR2";				hoverColorR[52]="teal";	
siteListNumR[0][53]=1;	siteListNumR[1][53]=791;	siteListNumR[2][53]=817;		hoverMsgR[1][53]="3. DDR2";				hoverColorR[53]="teal";

//Mineralization
siteListNumR[0][54]=3;	siteListNumR[1][54]=147;	siteListNumR[2][54]=174;	hoverMsgR[1][54]="1. Phosphoryn";	hoverColorR[54]="green";	
siteListNumR[0][55]=3;	siteListNumR[1][55]=380;	siteListNumR[2][55]=407;	hoverMsgR[1][55]="2. Phosphoryn";	hoverColorR[55]="green";	
siteListNumR[0][56]=2;	siteListNumR[1][56]=511;	siteListNumR[2][56]=628;	hoverMsgR[1][56]="3. Phosphoryn";	hoverColorR[56]="green";	
siteListNumR[0][57]=3;	siteListNumR[1][57]=613;	siteListNumR[2][57]=640;	hoverMsgR[1][57]="4. Phosphoryn";	hoverColorR[57]="green";	
siteListNumR[0][58]=1;	siteListNumR[1][58]=696;	siteListNumR[2][58]=766;	hoverMsgR[1][58]="5. Phosphoryn";	hoverColorR[58]="green";	
siteListNumR[0][59]=3;	siteListNumR[1][59]=849;	siteListNumR[2][59]=876;	hoverMsgR[1][59]="6. Phosphoryn";	hoverColorR[59]="green";	
siteListNumR[0][60]=1;	siteListNumR[1][60]=991;	siteListNumR[2][60]=996;	hoverMsgR[1][60]="7. Phosphoryn";	hoverColorR[60]="green";	

//Post-Trans Modify
siteListNumR[0][61]=3;	siteListNumR[1][61]=28;		siteListNumR[2][61]=33;		hoverMsgR[1][61]="1. Glycation";		hoverColorR[61]="lime";	
siteListNumR[0][62]=3;	siteListNumR[1][62]=261;	siteListNumR[2][62]=266;	hoverMsgR[1][62]="2. Glycation";		hoverColorR[62]="lime";	
siteListNumR[0][63]=1;	siteListNumR[1][63]=449;	siteListNumR[2][63]=450;	hoverMsgR[1][63]="3. Glycation";		hoverColorR[63]="lime";
siteListNumR[0][64]=2;	siteListNumR[1][64]=461;	siteListNumR[2][64]=462;	hoverMsgR[1][64]="4. Glycation";		hoverColorR[64]="lime";	
siteListNumR[0][65]=2;	siteListNumR[1][65]=488;	siteListNumR[2][65]=489;	hoverMsgR[1][65]="5. Glycation";		hoverColorR[65]="lime";	
siteListNumR[0][66]=3;	siteListNumR[1][66]=494;	siteListNumR[2][66]=499;	hoverMsgR[1][66]="6. Glycation";		hoverColorR[66]="lime";	
siteListNumR[0][67]=3;	siteListNumR[1][67]=730;	siteListNumR[2][67]=735;	hoverMsgR[1][67]="7. Glycation";		hoverColorR[67]="lime";	
siteListNumR[0][68]=2;	siteListNumR[1][68]=932;	siteListNumR[2][68]=933;	hoverMsgR[1][68]="8. Glycation";		hoverColorR[68]="lime";	
siteListNumR[0][69]=3;	siteListNumR[1][69]=963;	siteListNumR[2][69]=968;	hoverMsgR[1][69]="9. Glycation";		hoverColorR[69]="lime";	

//Collagenolysis
siteListNumR[0][70]=1;	siteListNumR[1][70]=783;	siteListNumR[2][70]=802;	hoverMsgR[1][70]="MMP Domain";		hoverColorR[70]="fuchsia";	
siteListNumR[0][71]=1;	siteListNumR[1][71]=791;	siteListNumR[2][71]=792;	hoverMsgR[1][71]="MMP-1";			hoverColorR[71]="fuchsia";	

//X-Link
siteListNumR[0][72]=1;	siteListNumR[1][72]=17;		siteListNumR[2][72]=100;	hoverMsgR[1][72]="N-Anchor";		hoverColorR[72]="lightpink";	
siteListNumR[0][73]=1;	siteListNumR[1][73]=102;	siteListNumR[2][73]=103;	hoverMsgR[1][73]="X-Link";			hoverColorR[73]="lightpink";
siteListNumR[0][74]=1;	siteListNumR[1][74]=1039;	siteListNumR[2][74]=1052;	hoverMsgR[1][74]="Col V X-Link";	hoverColorR[74]="lightpink";	

//Polymerization
siteListNumR[0][75]=1;	siteListNumR[1][75]=792;	siteListNumR[2][75]=812;	hoverMsgR[1][75]="Fibril(-)";		hoverColorR[75]="darkred";	
siteListNumR[0][76]=2;	siteListNumR[1][76]=787;	siteListNumR[2][76]=810;	hoverMsgR[1][76]="Fibril(-)50%";	hoverColorR[76]="darkred";	
siteListNumR[0][77]=1;	siteListNumR[1][77]=1031;	siteListNumR[2][77]=1056;	hoverMsgR[1][77]="Fibril(+)";		hoverColorR[77]="darkred";	
siteListNumR[0][78]=2;	siteListNumR[1][78]=1024;	siteListNumR[2][78]=1026;	hoverMsgR[1][78]="Fibril(-)100%";	hoverColorR[78]="darkred";	

//Immunological
siteListNumR[0][79]=1;	siteListNumR[1][79]=1016;	siteListNumR[2][79]=1056;	hoverMsgR[1][79]="ENDO 180";	hoverColorR[79]="darksalmon";	

//Misc: THP
siteListNumR[0][80]=1;	siteListNumR[1][80]=98;		siteListNumR[2][80]=109;	hoverMsgR[1][80]="1. THP/HB, ANG-";		hoverColorR[80]="purple";	
siteListNumR[0][81]=2;	siteListNumR[1][81]=94;		siteListNumR[2][81]=103;	hoverMsgR[1][81]="2. THP/HB, ANG-";		hoverColorR[81]="purple";	
siteListNumR[0][82]=1;	siteListNumR[1][82]=513;	siteListNumR[2][82]=523;	hoverMsgR[1][82]="3. THP, ANG-";		hoverColorR[82]="purple";	
siteListNumR[0][83]=1;	siteListNumR[1][83]=941;	siteListNumR[2][83]=953;	hoverMsgR[1][83]="4. THP/HB, ANG-";		hoverColorR[83]="purple";
siteListNumR[0][84]=1;	siteListNumR[1][84]=513;	siteListNumR[2][84]=523;	hoverMsgR[1][84]="THP/ECA+";			hoverColorR[84]="purple";	
siteListNumR[0][85]=1;	siteListNumR[1][85]=143;	siteListNumR[2][85]=151;	hoverMsgR[1][85]="THP/a1,a2B1";			hoverColorR[85]="purple";	
siteListNumR[0][86]=1;	siteListNumR[1][86]=827;	siteListNumR[2][86]=835;	hoverMsgR[1][86]="THP/a1,a2B1-";		hoverColorR[86]="purple";	
siteListNumR[0][87]=1;	siteListNumR[1][87]=518;	siteListNumR[2][87]=526;	hoverMsgR[1][87]="THP/a1,2,11-B1";		hoverColorR[87]="purple";	
siteListNumR[0][88]=1;	siteListNumR[1][88]=518;	siteListNumR[2][88]=523;	hoverMsgR[1][88]="THP/OBD";				hoverColorR[88]="purple";	
siteListNumR[0][89]=1;	siteListNumR[1][89]=788;	siteListNumR[2][89]=802;	hoverMsgR[1][89]="THP/FA+,MMP1,2,13";	hoverColorR[89]="purple";	

//Misc: HSP47
siteListNumR[0][90]=1;	siteListNumR[1][90]=24;		siteListNumR[2][90]=26;		hoverMsgR[1][90]="1. HSP47";	hoverColorR[90]="cyan";	
siteListNumR[0][91]=1;	siteListNumR[1][91]=57;		siteListNumR[2][91]=59;		hoverMsgR[1][91]="2. HSP47";	hoverColorR[91]="cyan";	
siteListNumR[0][92]=1;	siteListNumR[1][92]=81;		siteListNumR[2][92]=83;		hoverMsgR[1][92]="3. HSP47";	hoverColorR[92]="cyan";	
siteListNumR[0][93]=1;	siteListNumR[1][93]=90;		siteListNumR[2][93]=92;		hoverMsgR[1][93]="4. HSP47";	hoverColorR[93]="cyan";
siteListNumR[0][94]=1;	siteListNumR[1][94]=105;	siteListNumR[2][94]=107;	hoverMsgR[1][94]="5. HSP47";	hoverColorR[94]="cyan";	
siteListNumR[0][95]=1;	siteListNumR[1][95]=141;	siteListNumR[2][95]=143;	hoverMsgR[1][95]="6. HSP47";	hoverColorR[95]="cyan";	
siteListNumR[0][96]=1;	siteListNumR[1][96]=147;	siteListNumR[2][96]=149;	hoverMsgR[1][96]="7. HSP47";	hoverColorR[96]="cyan";	
siteListNumR[0][97]=1;	siteListNumR[1][97]=159;	siteListNumR[2][97]=161;	hoverMsgR[1][97]="8. HSP47";	hoverColorR[97]="cyan";	
siteListNumR[0][98]=1;	siteListNumR[1][98]=198;	siteListNumR[2][98]=200;	hoverMsgR[1][98]="9. HSP47";	hoverColorR[98]="cyan";	
siteListNumR[0][99]=1;	siteListNumR[1][99]=207;	siteListNumR[2][99]=209;	hoverMsgR[1][99]="10. HSP47";	hoverColorR[99]="cyan";	
siteListNumR[0][100]=1;	siteListNumR[1][100]=251;	siteListNumR[2][100]=253;	hoverMsgR[1][100]="11. HSP47";	hoverColorR[100]="cyan";	
siteListNumR[0][101]=2;	siteListNumR[1][101]=260;	siteListNumR[2][101]=262;	hoverMsgR[1][101]="12. HSP47";	hoverColorR[101]="cyan";	
siteListNumR[0][102]=1;	siteListNumR[1][102]=306;	siteListNumR[2][102]=308;	hoverMsgR[1][102]="13. HSP47";	hoverColorR[102]="cyan";	
siteListNumR[0][103]=1;	siteListNumR[1][103]=309;	siteListNumR[2][103]=311;	hoverMsgR[1][103]="14. HSP47";	hoverColorR[103]="cyan";
siteListNumR[0][104]=1;	siteListNumR[1][104]=324;	siteListNumR[2][104]=326;	hoverMsgR[1][104]="15. HSP47";	hoverColorR[104]="cyan";	
siteListNumR[0][105]=1;	siteListNumR[1][105]=330;	siteListNumR[2][105]=332;	hoverMsgR[1][105]="16. HSP47";	hoverColorR[105]="cyan";	
siteListNumR[0][106]=1;	siteListNumR[1][106]=348;	siteListNumR[2][106]=350;	hoverMsgR[1][106]="17. HSP47";	hoverColorR[106]="cyan";	
siteListNumR[0][107]=2;	siteListNumR[1][107]=349;	siteListNumR[2][107]=351;	hoverMsgR[1][107]="18. HSP47";	hoverColorR[107]="cyan";	
siteListNumR[0][108]=2;	siteListNumR[1][108]=368;	siteListNumR[2][108]=370;	hoverMsgR[1][108]="19. HSP47";	hoverColorR[108]="cyan";	
siteListNumR[0][109]=1;	siteListNumR[1][109]=411;	siteListNumR[2][109]=413;	hoverMsgR[1][109]="20. HSP47";	hoverColorR[109]="cyan";	
siteListNumR[0][110]=1;	siteListNumR[1][110]=435;	siteListNumR[2][110]=437;	hoverMsgR[1][110]="21. HSP47";	hoverColorR[110]="cyan";	
siteListNumR[0][111]=2;	siteListNumR[1][111]=437;	siteListNumR[2][111]=439;	hoverMsgR[1][111]="22. HSP47";	hoverColorR[111]="cyan";	
siteListNumR[0][112]=1;	siteListNumR[1][112]=468;	siteListNumR[2][112]=470;	hoverMsgR[1][112]="23. HSP47";	hoverColorR[112]="cyan";	
siteListNumR[0][113]=2;	siteListNumR[1][113]=491;	siteListNumR[2][113]=493;	hoverMsgR[1][113]="24. HSP47";	hoverColorR[113]="cyan";
siteListNumR[0][114]=1;	siteListNumR[1][114]=513;	siteListNumR[2][114]=515;	hoverMsgR[1][114]="25. HSP47";	hoverColorR[114]="cyan";	
siteListNumR[0][115]=1;	siteListNumR[1][115]=516;	siteListNumR[2][115]=518;	hoverMsgR[1][115]="26. HSP47";	hoverColorR[115]="cyan";	
siteListNumR[0][116]=1;	siteListNumR[1][116]=522;	siteListNumR[2][116]=524;	hoverMsgR[1][116]="27. HSP47";	hoverColorR[116]="cyan";	
siteListNumR[0][117]=1;	siteListNumR[1][117]=534;	siteListNumR[2][117]=536;	hoverMsgR[1][117]="28. HSP47";	hoverColorR[117]="cyan";	
siteListNumR[0][118]=1;	siteListNumR[1][118]=570;	siteListNumR[2][118]=572;	hoverMsgR[1][118]="29. HSP47";	hoverColorR[118]="cyan";	
siteListNumR[0][119]=1;	siteListNumR[1][119]=583;	siteListNumR[2][119]=585;	hoverMsgR[1][119]="30. HSP47";	hoverColorR[119]="cyan";	
siteListNumR[0][120]=2;	siteListNumR[1][120]=581;	siteListNumR[2][120]=583;	hoverMsgR[1][120]="31. HSP47";	hoverColorR[120]="cyan";	
siteListNumR[0][121]=1;	siteListNumR[1][121]=600;	siteListNumR[2][121]=602;	hoverMsgR[1][121]="32. HSP47";	hoverColorR[121]="cyan";	
siteListNumR[0][122]=2;	siteListNumR[1][122]=611;	siteListNumR[2][122]=613;	hoverMsgR[1][122]="33. HSP47";	hoverColorR[122]="cyan";	
siteListNumR[0][123]=1;	siteListNumR[1][123]=633;	siteListNumR[2][123]=635;	hoverMsgR[1][123]="34. HSP47";	hoverColorR[123]="cyan";
siteListNumR[0][124]=1;	siteListNumR[1][124]=639;	siteListNumR[2][124]=641;	hoverMsgR[1][124]="35. HSP47";	hoverColorR[124]="cyan";	
siteListNumR[0][125]=2;	siteListNumR[1][125]=659;	siteListNumR[2][125]=661;	hoverMsgR[1][125]="36. HSP47";	hoverColorR[125]="cyan";	
siteListNumR[0][126]=1;	siteListNumR[1][126]=702;	siteListNumR[2][126]=704;	hoverMsgR[1][126]="37. HSP47";	hoverColorR[126]="cyan";	
siteListNumR[0][127]=2;	siteListNumR[1][127]=737;	siteListNumR[2][127]=739;	hoverMsgR[1][127]="38. HSP47";	hoverColorR[127]="cyan";	
siteListNumR[0][128]=1;	siteListNumR[1][128]=747;	siteListNumR[2][128]=749;	hoverMsgR[1][128]="39. HSP47";	hoverColorR[128]="cyan";	
siteListNumR[0][129]=1;	siteListNumR[1][129]=795;	siteListNumR[2][129]=797;	hoverMsgR[1][129]="40. HSP47";	hoverColorR[129]="cyan";	
siteListNumR[0][130]=1;	siteListNumR[1][130]=804;	siteListNumR[2][130]=806;	hoverMsgR[1][130]="41. HSP47";	hoverColorR[130]="cyan";	
siteListNumR[0][131]=1;	siteListNumR[1][131]=807;	siteListNumR[2][131]=809;	hoverMsgR[1][131]="42. HSP47";	hoverColorR[131]="cyan";	
siteListNumR[0][132]=1;	siteListNumR[1][132]=831;	siteListNumR[2][132]=833;	hoverMsgR[1][132]="43. HSP47";	hoverColorR[132]="cyan";	
siteListNumR[0][133]=1;	siteListNumR[1][133]=873;	siteListNumR[2][133]=875;	hoverMsgR[1][133]="44. HSP47";	hoverColorR[133]="cyan";
siteListNumR[0][134]=1;	siteListNumR[1][134]=903;	siteListNumR[2][134]=905;	hoverMsgR[1][134]="45. HSP47";	hoverColorR[134]="cyan";	
siteListNumR[0][135]=1;	siteListNumR[1][135]=921;	siteListNumR[2][135]=923;	hoverMsgR[1][135]="46. HSP47";	hoverColorR[135]="cyan";	
siteListNumR[0][136]=1;	siteListNumR[1][136]=930;	siteListNumR[2][136]=932;	hoverMsgR[1][136]="47. HSP47";	hoverColorR[136]="cyan";	
siteListNumR[0][137]=1;	siteListNumR[1][137]=942;	siteListNumR[2][137]=944;	hoverMsgR[1][137]="48. HSP47";	hoverColorR[137]="cyan";	
siteListNumR[0][138]=1;	siteListNumR[1][138]=948;	siteListNumR[2][138]=950;	hoverMsgR[1][138]="49. HSP47";	hoverColorR[138]="cyan";	
siteListNumR[0][139]=1;	siteListNumR[1][139]=978;	siteListNumR[2][139]=980;	hoverMsgR[1][139]="50. HSP47";	hoverColorR[139]="cyan";	
siteListNumR[0][140]=1;	siteListNumR[1][140]=1005;	siteListNumR[2][140]=1007;	hoverMsgR[1][140]="51. HSP47";	hoverColorR[140]="cyan";	

//Misc
siteListNumR[0][141]=1;	siteListNumR[1][141]=101;	siteListNumR[2][141]=115;	hoverMsgR[1][141]="Micro Unfolding";	hoverColorR[141]="chocolate";	
siteListNumR[0][142]=1;	siteListNumR[1][142]=838;	siteListNumR[2][142]=1056;	hoverMsgR[1][142]="Amyloid Precursor";	hoverColorR[142]="chocolate";
	
	
		numSitesMutation=10;	//TODO: automatic
		sitesPickedRMutation=new Array(numSitesMutation+1);
		sitesPickedRMutation[0]=1; // WHY IS THIS AGAIN? 
		hoverMsgRMutation[1]=new Array(numSitesMutation);
		headersMutation[modelNumberR]=['','Type I (mild)','Type II (lethal)','Type III (severe)'];
		headersNumMutation[modelNumberR]=[0,3,8,10];
//NOTE: indexed as follows: hoverMsgRMutation[modelNumberR][protein}
//TODO: this should be parsed from a text file	
//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
// Type I (mild)
siteListNumRMutation[0][1]=1;	siteListNumRMutation[1][1]=175;		siteListNumRMutation[2][1]=214;		hoverMsgRMutation[1][1]="MMP-1";		hoverColorRMutation[1]="yellow";
siteListNumRMutation[0][2]=1;	siteListNumRMutation[1][2]=363;		siteListNumRMutation[2][2]=402;		hoverMsgRMutation[1][2]="MMP-2";		hoverColorRMutation[2]="yellow";	
siteListNumRMutation[0][3]=1;	siteListNumRMutation[1][3]=103;		siteListNumRMutation[2][3]=106;		hoverMsgRMutation[1][3]="MMP-3";		hoverColorRMutation[3]="yellow";	

// Type II (lethal)
siteListNumRMutation[0][4]=1;	siteListNumRMutation[1][4]=467;		siteListNumRMutation[2][4]=477;		hoverMsgRMutation[1][4]="[PS]KSPG";				hoverColorRMutation[4]="green";	
siteListNumRMutation[0][5]=1;	siteListNumRMutation[1][5]=581;		siteListNumRMutation[2][5]=591;		hoverMsgRMutation[1][5]="[PS]KSPG";				hoverColorRMutation[5]="green";	
siteListNumRMutation[0][6]=1;	siteListNumRMutation[1][6]=617;		siteListNumRMutation[2][6]=627;		hoverMsgRMutation[1][6]="[PS]DSPG";			hoverColorRMutation[6]="green";	
siteListNumRMutation[0][7]=1;	siteListNumRMutation[1][7]=638;		siteListNumRMutation[2][7]=648;		hoverMsgRMutation[1][7]="[PS]DSPG";			hoverColorRMutation[7]="green";	
siteListNumRMutation[0][8]=1;	siteListNumRMutation[1][8]=872;		siteListNumRMutation[2][8]=882;		hoverMsgRMutation[1][8]="[PS]DSPG";			hoverColorRMutation[8]="green";	
	
// 	Type III (severe)
siteListNumRMutation[0][9]=1;	siteListNumRMutation[1][9]=902;		siteListNumRMutation[2][9]=912;		hoverMsgRMutation[1][9]="[PS]DSPG";			hoverColorRMutation[9]="blue";	
siteListNumRMutation[0][10]=1;	siteListNumRMutation[1][10]=869;	siteListNumRMutation[2][10]=877;	hoverMsgRMutation[1][10]="DSPG";				hoverColorRMutation[10]="blue";	
	
	}

	else if(modelID=="Collagen3")
	{	modelNumberR=2;
		headers[modelNumberR]=['','No Sites Available'];
		headersNum[modelNumberR]=[''];
		Jmol.script(myJmolR,'load jmol/models/080906-d-band-wide-decmon-upright-mined-COLLAGEN.pdb;select all;spacefill '+atomSize+'%;wireframe'+ bondSize+';color cpk;','Right');
	}
	else if(modelID=="Decorin")
	{	Jmol.script(myJmolR,'load jmol/models/080122-new-c-n-dec-mon-minimized.pdb;display backbone;select hidden; delete selected;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;', 'Right');
		modelNumberR=3;
		numSites=4;
		sitesPickedR=new Array(numSites+1);
		hoverMsgR[3]=new Array(numSites);
		sitesPickedR[0]=1;
		headers[modelNumberR]=['', 'Common Conformation','Wide Conformation'];
		headersNum[modelNumberR]=[0,2,4];
		
			
		//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
		//Decorin on Type I Collagen - taken from the Plos One Paper
		hoverMsgR[3][1]="d-band Common";	hoverColorR[1]="red";	
		hoverMsgR[3][2]="e-band Common";	hoverColorR[2]="yellow";	
		hoverMsgR[3][3]="d-band Wide";		hoverColorR[3]="green";	
		hoverMsgR[3][4]="e-band Wide";		hoverColorR[4]="cyan";

		//siteListNumR[1][1]=1101;		siteListNumR[2][1]=1104;		hoverMsgR[3][1]="RELK";		hoverColorR[1]="yellow";
		//siteListNumR[1][2]=1243;		siteListNumR[2][2]=1246;		hoverMsgR[3][2]="RELH";		hoverColorR[2]="yellow";		
	}

	else if(modelID=="Biglycan")
	{	modelNumberR=4;
		headers[modelNumberR]=['','No Sites Available'];
		headersNum[modelNumberR]=[''];
		Jmol.script(myJmolR,'load jmol/models/practice.pdb; select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 100;define site1 atomno<213;define site2 atomno>15000;', 'Right');
	}

	
	
//------------------------------------CHANGING the TABLE-------------------------------------------------	
	// Binding Sites
	var table ="";
	var siteNumber=0;		
	$('#accordionR').html("");		
	for (i=1;i<=headers[modelNumberR].length-1;i++){
		var headerTitle="header"+i;
		table += '<li><a href="#'+headerTitle+'" class="heading">'+headers[modelNumberR][i]+'</a><ul id ='+headerTitle+'>';
		
		//add sites within each header 
		var headerLength=headersNum[modelNumberR][i]-headersNum[modelNumberR][i-1];
		for(j=1;j<=headerLength;j++){
			siteNumber=siteNumber+1;				
			table += '<li id="'+siteNumber+'RightBind" onClick="siteSelectR('+siteNumber+',\'Right\',\'Bind\')"><a href="javascript:void(0)">'+hoverMsgR[modelNumberR][siteNumber]+'</a></li>';
		}
		table += '</ul></li>';
	}
	$('#accordionR').append(table).accordion('destroy');
	$('#accordionR').accordion({
			autoHeight: false,
			collapsible: true,
			navigation: true				
	});	
	
	
	// Mutation Sites
	var table ="";
	var siteNumber=0;		
	$('#mutateAccordionR').html("");		
	for (i=1;i<=headersMutation[modelNumberR].length-1;i++){
		var headerTitle="header"+i;
		table += '<li><a href="#'+headerTitle+'" class="heading">'+headersMutation[modelNumberR][i]+'</a><ul id ='+headerTitle+'>';
		
		//add sites within each header 
		var headerLength=headersNumMutation[modelNumberR][i]-headersNumMutation[modelNumberR][i-1];
		for(j=1;j<=headerLength;j++){
			siteNumber=siteNumber+1;
			table += '<li id="'+siteNumber+'RightMutation" onClick="siteSelectR('+siteNumber+',\'Right\',\'Mutation\')"><a href="javascript:void(0)">'+hoverMsgRMutation[modelNumberR][siteNumber]+'</a></li>';
		}
		table += '</ul></li>';
	}
	$('#mutateAccordionR').append(table).accordion('destroy');
	$('#mutateAccordionR').accordion({
			autoHeight: false,
			collapsible: true,
			navigation: true				
	});




	
		
}



