/*This function will load in the model chosen from the drop down menu, and change "hoverOptL" according to the model chosen.  
//It also defines the sites shown in the menu, currently with arbitrarily chosen atoms
siteListL = FORM name//
selSiteL = SELECT name

//modelID=getElementById("mydropdownL").value;
document.formname.selectname.options
id? = selMultiL*/

//must make headers a global variable
function bindingSelectR(modelID)
{	document.getElementById("searchRight").value="";  //Clears the search
	sitesPickedR[0]=1;
	var atomSize=aSize[1];
	var bondSize=bSize[1];
	var siteListName=new Array(200);
	var siteString='';
	var numSites=0;
	var headersNum=new Array(5)
	//	siteListNumRR[0][indexofSite] = //Chain (1 is alpha 1=AC, and 2 is alpha2 = B and 3 = both!)
		//	siteListNumRR[1][indexofSite] = //initial value - for first chain
		//	siteListNumRR[2][indexofSite] = //final value	
	if(modelID=="practiceRight")
	{	modelNumberR=0;
		headers[modelNumberR]=['','Model 1','Model 2']
		headersNum[modelNumberR]=[0,1,3]
		numSites=3;
		hoverColorR=["","red","orange","yellow"];
		siteListName=["","Site 1", "Site 2", "Site 3"];
		hoverMsgR[modelNumberR]=siteListName;
		siteString='define site1 atomno=1; define site2 atomno=2,atomno=3;define site3 atomno=1,atomno=3;';
		jmolScript('load jmol/models/practice.pdb;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 100;'+siteString,'Right');		
	}
	
	else if(modelID=="Collagen1")
	{	jmolScript('load jmol/models/collagen-Access.pdb;display backbone;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 200;',"Right");			
		modelNumberR=1;
		numSites=140;
		sitesPickedR=new Array(numSites+1);
		sitesPickedR[0]=1;
		hoverMsgR[modelNumberR]=new Array(numSites);
		headers[modelNumberR]=['','Proteoglycan','Cell Attachment','Cell Interaction','Signaling','Mineralization','Post Trans Modify','Collagenolysis','X-Link','Polymerizatin','Immunological','Misc:THP', 'Misc:HSP47','Misc'];
		headersNum[modelNumberR]=[0,24,42,46,51,58,67,69,72,76,77,87,138,140];
		
//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
//PG
siteListNumR[0][1]=1;	siteListNumR[1][1]=175;		siteListNumR[2][1]=214;		hoverMsgR[1][1]="1. GE-Decorin";			hoverColorR[1]="red";
siteListNumR[0][2]=1;	siteListNumR[1][2]=363;		siteListNumR[2][2]=402;		hoverMsgR[1][2]="2. GE-Decorin";			hoverColorR[2]="red";	
siteListNumR[0][3]=1;	siteListNumR[1][3]=103;		siteListNumR[2][3]=106;		hoverMsgR[1][3]="HEP";					hoverColorR[3]="red";	
siteListNumR[0][4]=1;	siteListNumR[1][4]=467;		siteListNumR[2][4]=477;		hoverMsgR[1][4]="[PS]KSPG";				hoverColorR[4]="red";	
siteListNumR[0][5]=1;	siteListNumR[1][5]=581;		siteListNumR[2][5]=591;		hoverMsgR[1][5]="[PS]KSPG";				hoverColorR[5]="red";	
siteListNumR[0][6]=1;	siteListNumR[1][6]=617;		siteListNumR[2][6]=627;		hoverMsgR[1][6]="1. [PS]DSPG";			hoverColorR[6]="red";	
siteListNumR[0][7]=1;	siteListNumR[1][7]=638;		siteListNumR[2][7]=648;		hoverMsgR[1][7]="2. [PS]DSPG";			hoverColorR[7]="red";	
siteListNumR[0][8]=1;	siteListNumR[1][8]=872;		siteListNumR[2][8]=882;		hoverMsgR[1][8]="3. [PS]DSPG";			hoverColorR[8]="red";	
siteListNumR[0][9]=1;	siteListNumR[1][9]=902;		siteListNumR[2][9]=912;		hoverMsgR[1][9]="4. [PS]DSPG";			hoverColorR[9]="red";	
siteListNumR[0][10]=1;	siteListNumR[1][10]=869;	siteListNumR[2][10]=877;	hoverMsgR[1][10]="DSPG";				hoverColorR[10]="red";	
siteListNumR[0][11]=1;	siteListNumR[1][11]=950;	siteListNumR[2][11]=980;	hoverMsgR[1][11]="Decorin Core";		hoverColorR[11]="red";
siteListNumR[0][12]=3;	siteListNumR[1][12]=1;		siteListNumR[2][12]=33;		hoverMsgR[1][12]="1. Keratan Sulfate";	hoverColorR[12]="red";	
siteListNumR[0][13]=3;	siteListNumR[1][13]=91;		siteListNumR[2][13]=133;	hoverMsgR[1][13]="2. Keratan Sulfate";	hoverColorR[13]="red";	
siteListNumR[0][14]=3;	siteListNumR[1][14]=216;	siteListNumR[2][14]=266;	hoverMsgR[1][14]="3. Keratan Sulfate";	hoverColorR[14]="red";	
siteListNumR[0][15]=3;	siteListNumR[1][15]=324;	siteListNumR[2][15]=366;	hoverMsgR[1][15]="4. Keratan Sulfate";	hoverColorR[15]="red";	
siteListNumR[0][16]=3;	siteListNumR[1][16]=449;	siteListNumR[2][16]=499;	hoverMsgR[1][16]="5. Keratan Sulfate";	hoverColorR[16]="red";	
siteListNumR[0][17]=3;	siteListNumR[1][17]=557;	siteListNumR[2][17]=599;	hoverMsgR[1][17]="6. Keratan Sulfate";	hoverColorR[17]="red";	
siteListNumR[0][18]=3;	siteListNumR[1][18]=682;	siteListNumR[2][18]=735;	hoverMsgR[1][18]="7. Keratan Sulfate";	hoverColorR[18]="red";	
siteListNumR[0][19]=3;	siteListNumR[1][19]=793;	siteListNumR[2][19]=835;	hoverMsgR[1][19]="8. Keratan Sulfate";	hoverColorR[19]="red";	
siteListNumR[0][20]=3;	siteListNumR[1][20]=918;	siteListNumR[2][20]=968;	hoverMsgR[1][20]="9. Keratan Sulfate";	hoverColorR[20]="red";	
siteListNumR[0][21]=3;	siteListNumR[1][21]=147;	siteListNumR[2][21]=209;	hoverMsgR[1][21]="Dermatan Sulfate";	hoverColorR[21]="red";
siteListNumR[0][22]=3;	siteListNumR[1][22]=380;	siteListNumR[2][22]=442;	hoverMsgR[1][22]="Dermatan Sulfate";	hoverColorR[22]="red";	
siteListNumR[0][23]=3;	siteListNumR[1][23]=613;	siteListNumR[2][23]=675;	hoverMsgR[1][23]="Dermatan Sulfate";	hoverColorR[23]="red";	
siteListNumR[0][24]=3;	siteListNumR[1][24]=849;	siteListNumR[2][24]=911;	hoverMsgR[1][24]="Dermatan Sulfate";	hoverColorR[24]="red";	

//Cell Attachment
siteListNumR[0][25]=1;	siteListNumR[1][25]=100;	siteListNumR[2][25]=185;	hoverMsgR[1][25]="1. a1B1 Integrin";		hoverColorR[25]="orange";	
siteListNumR[0][26]=2;	siteListNumR[1][26]=93;		siteListNumR[2][26]=174;	hoverMsgR[1][26]="2. a1B1 Integrin";		hoverColorR[26]="orange";	
siteListNumR[0][27]=2;	siteListNumR[1][27]=497;	siteListNumR[2][27]=548;	hoverMsgR[1][27]="3. a1B1 Integrin";		hoverColorR[27]="orange";	
siteListNumR[0][28]=1;	siteListNumR[1][28]=506;	siteListNumR[2][28]=557;	hoverMsgR[1][28]="4. a1B1 Integrin";		hoverColorR[28]="orange";	
siteListNumR[0][29]=2;	siteListNumR[1][29]=733;	siteListNumR[2][29]=768;	hoverMsgR[1][29]="5. a1B1 Integrin";		hoverColorR[29]="orange";	
siteListNumR[0][30]=1;	siteListNumR[1][30]=742;	siteListNumR[2][30]=777;	hoverMsgR[1][30]="6. a1B1 Integrin";		hoverColorR[30]="orange";	
siteListNumR[0][31]=1;	siteListNumR[1][31]=518;	siteListNumR[2][31]=523;	hoverMsgR[1][31]="a1,2,11-B1 Integrin";		hoverColorR[31]="orange";
siteListNumR[0][32]=2;	siteListNumR[1][32]=16;		siteListNumR[2][32]=335;	hoverMsgR[1][32]="1. a2B1 Integrin";		hoverColorR[32]="orange";	
siteListNumR[0][33]=1;	siteListNumR[1][33]=132;	siteListNumR[2][33]=202;	hoverMsgR[1][33]="2. a2B1 Integrin";		hoverColorR[33]="orange";	
siteListNumR[0][34]=2;	siteListNumR[1][34]=127;	siteListNumR[2][34]=195;	hoverMsgR[1][34]="3. a2B1 Integrin";		hoverColorR[34]="orange";	
siteListNumR[0][35]=1;	siteListNumR[1][35]=451;	siteListNumR[2][35]=454;	hoverMsgR[1][35]="4. a2B1 Integrin";		hoverColorR[35]="orange";	
siteListNumR[0][36]=1;	siteListNumR[1][36]=506;	siteListNumR[2][36]=557;	hoverMsgR[1][36]="5. a2B1 Integrin";		hoverColorR[36]="orange";	
siteListNumR[0][37]=2;	siteListNumR[1][37]=497;	siteListNumR[2][37]=548;	hoverMsgR[1][37]="6. a2B1 Integrin";		hoverColorR[37]="orange";	
siteListNumR[0][38]=1;	siteListNumR[1][38]=791;	siteListNumR[2][38]=845;	hoverMsgR[1][38]="7. a2B1 Integrin";		hoverColorR[38]="orange";	
siteListNumR[0][39]=2;	siteListNumR[1][39]=784;	siteListNumR[2][39]=835;	hoverMsgR[1][39]="8. a2B1 Integrin";		hoverColorR[39]="orange";	
siteListNumR[0][40]=1;	siteListNumR[1][40]=583;	siteListNumR[2][40]=585;	hoverMsgR[1][40]="DC Integrin";			hoverColorR[40]="orange";	
siteListNumR[0][41]=1;	siteListNumR[1][41]=773;	siteListNumR[2][41]=807;	hoverMsgR[1][41]="Fibronectin";			hoverColorR[41]="orange";
siteListNumR[0][42]=1;	siteListNumR[1][42]=412;	siteListNumR[2][42]=420;	hoverMsgR[1][42]="VWF";					hoverColorR[42]="orange";	

//Cell Interaction
siteListNumR[0][43]=1;	siteListNumR[1][43]=598;	siteListNumR[2][43]=645;		hoverMsgR[1][43]="1. COMP";		hoverColorR[43]="blue";	
siteListNumR[0][44]=1;	siteListNumR[1][44]=697;	siteListNumR[2][44]=761;		hoverMsgR[1][44]="2. COMP";		hoverColorR[44]="blue";	
siteListNumR[0][45]=1;	siteListNumR[1][45]=1052;	siteListNumR[2][45]=1056;		hoverMsgR[1][45]="3. COMP";		hoverColorR[45]="blue";	
siteListNumR[0][46]=1;	siteListNumR[1][46]=667;	siteListNumR[2][46]=816;		hoverMsgR[1][46]="SPARC";		hoverColorR[46]="blue";	

//Signaling
siteListNumR[0][47]=1;	siteListNumR[1][47]=139;	siteListNumR[2][47]=418;		hoverMsgR[1][47]="1. Interleukin 2";	hoverColorR[47]="teal";	
siteListNumR[0][48]=1;	siteListNumR[1][48]=839;	siteListNumR[2][48]=1030;		hoverMsgR[1][48]="2. Interleukin 2";	hoverColorR[48]="teal";	
siteListNumR[0][49]=1;	siteListNumR[1][49]=233;	siteListNumR[2][49]=259;		hoverMsgR[1][49]="1. DDR2";			hoverColorR[49]="teal";	
siteListNumR[0][50]=1;	siteListNumR[1][50]=410;	siteListNumR[2][50]=421;		hoverMsgR[1][50]="2. DDR2";			hoverColorR[50]="teal";	
siteListNumR[0][51]=1;	siteListNumR[1][51]=791;	siteListNumR[2][51]=817;		hoverMsgR[1][51]="3. DDR2";			hoverColorR[51]="teal";

//Mineralization
siteListNumR[0][52]=3;	siteListNumR[1][52]=147;	siteListNumR[2][52]=174;	hoverMsgR[1][52]="1. Phosphoryn";	hoverColorR[52]="green";	
siteListNumR[0][53]=3;	siteListNumR[1][53]=380;	siteListNumR[2][53]=407;	hoverMsgR[1][53]="2. Phosphoryn";	hoverColorR[53]="green";	
siteListNumR[0][54]=2;	siteListNumR[1][54]=511;	siteListNumR[2][54]=628;	hoverMsgR[1][54]="3. Phosphoryn";	hoverColorR[54]="green";	
siteListNumR[0][55]=3;	siteListNumR[1][55]=613;	siteListNumR[2][55]=640;	hoverMsgR[1][55]="4. Phosphoryn";	hoverColorR[55]="green";	
siteListNumR[0][56]=1;	siteListNumR[1][56]=696;	siteListNumR[2][56]=766;	hoverMsgR[1][56]="5. Phosphoryn";	hoverColorR[56]="green";	
siteListNumR[0][57]=3;	siteListNumR[1][57]=849;	siteListNumR[2][57]=876;	hoverMsgR[1][57]="6. Phosphoryn";	hoverColorR[57]="green";	
siteListNumR[0][58]=1;	siteListNumR[1][58]=991;	siteListNumR[2][58]=996;	hoverMsgR[1][58]="7. Phosphoryn";	hoverColorR[58]="green";	

//Post-Trans Modify
siteListNumR[0][59]=3;	siteListNumR[1][59]=28;		siteListNumR[2][59]=33;		hoverMsgR[1][59]="1. Glycation";		hoverColorR[59]="lime";	
siteListNumR[0][60]=3;	siteListNumR[1][60]=261;	siteListNumR[2][60]=266;	hoverMsgR[1][60]="2. Glycation";		hoverColorR[60]="lime";	
siteListNumR[0][61]=1;	siteListNumR[1][61]=449;	siteListNumR[2][61]=450;	hoverMsgR[1][61]="3. Glycation";		hoverColorR[61]="lime";
siteListNumR[0][62]=2;	siteListNumR[1][62]=461;	siteListNumR[2][62]=462;	hoverMsgR[1][62]="4. Glycation";		hoverColorR[62]="lime";	
siteListNumR[0][63]=2;	siteListNumR[1][63]=488;	siteListNumR[2][63]=489;	hoverMsgR[1][63]="5. Glycation";		hoverColorR[63]="lime";	
siteListNumR[0][64]=3;	siteListNumR[1][64]=494;	siteListNumR[2][64]=499;	hoverMsgR[1][64]="6. Glycation";		hoverColorR[64]="lime";	
siteListNumR[0][65]=3;	siteListNumR[1][65]=730;	siteListNumR[2][65]=735;	hoverMsgR[1][65]="7. Glycation";		hoverColorR[65]="lime";	
siteListNumR[0][66]=2;	siteListNumR[1][66]=932;	siteListNumR[2][66]=933;	hoverMsgR[1][66]="8. Glycation";		hoverColorR[66]="lime";	
siteListNumR[0][67]=3;	siteListNumR[1][67]=963;	siteListNumR[2][67]=968;	hoverMsgR[1][67]="9. Glycation";		hoverColorR[67]="lime";	

//Collagenolysis
siteListNumR[0][68]=1;	siteListNumR[1][68]=783;	siteListNumR[2][68]=802;	hoverMsgR[1][68]="MMP Domain";		hoverColorR[68]="fuchsia";	
siteListNumR[0][69]=1;	siteListNumR[1][69]=791;	siteListNumR[2][69]=792;	hoverMsgR[1][69]="MMP-1";			hoverColorR[69]="fuchsia";	

//X-Link
siteListNumR[0][70]=1;	siteListNumR[1][70]=17;		siteListNumR[2][70]=100;	hoverMsgR[1][70]="N-Anchor";		hoverColorR[70]="lightpink";	
siteListNumR[0][71]=1;	siteListNumR[1][71]=102;	siteListNumR[2][71]=103;	hoverMsgR[1][71]="X-Link";			hoverColorR[71]="lightpink";
siteListNumR[0][72]=1;	siteListNumR[1][72]=1039;	siteListNumR[2][72]=1052;	hoverMsgR[1][72]="Col V X-Link";	hoverColorR[72]="lightpink";	

//Polymerization
siteListNumR[0][73]=1;	siteListNumR[1][73]=792;	siteListNumR[2][73]=812;	hoverMsgR[1][73]="Fibril(-)";		hoverColorR[73]="darkred";	
siteListNumR[0][74]=2;	siteListNumR[1][74]=787;	siteListNumR[2][74]=810;	hoverMsgR[1][74]="Fibril(-)50%";	hoverColorR[74]="darkred";	
siteListNumR[0][75]=1;	siteListNumR[1][75]=1031;	siteListNumR[2][75]=1056;	hoverMsgR[1][75]="Fibril(+)";		hoverColorR[75]="darkred";	
siteListNumR[0][76]=2;	siteListNumR[1][76]=1024;	siteListNumR[2][76]=1026;	hoverMsgR[1][76]="Fibril(-)100%";	hoverColorR[76]="darkred";	

//Immunological
siteListNumR[0][77]=1;	siteListNumR[1][77]=1016;	siteListNumR[2][77]=1056;	hoverMsgR[1][77]="ENDO 180";	hoverColorR[77]="darksalmon";	

//Misc: THP
siteListNumR[0][78]=1;	siteListNumR[1][78]=98;		siteListNumR[2][78]=109;	hoverMsgR[1][78]="1. THP/HB,ANG-";		hoverColorR[78]="purple";	
siteListNumR[0][79]=2;	siteListNumR[1][79]=94;		siteListNumR[2][79]=103;	hoverMsgR[1][79]="2. THP/HB,ANG-";		hoverColorR[79]="purple";	
siteListNumR[0][80]=1;	siteListNumR[1][80]=513;	siteListNumR[2][80]=523;	hoverMsgR[1][80]="3. THP,ANG-";			hoverColorR[80]="purple";	
siteListNumR[0][81]=1;	siteListNumR[1][81]=941;	siteListNumR[2][81]=953;	hoverMsgR[1][81]="4. THP/HB,ANG-";		hoverColorR[81]="purple";
siteListNumR[0][82]=1;	siteListNumR[1][82]=513;	siteListNumR[2][82]=523;	hoverMsgR[1][82]="THP/ECA+";			hoverColorR[82]="purple";	
siteListNumR[0][83]=1;	siteListNumR[1][83]=143;	siteListNumR[2][83]=151;	hoverMsgR[1][83]="THP/a1,a2B1";			hoverColorR[83]="purple";	
siteListNumR[0][84]=1;	siteListNumR[1][84]=827;	siteListNumR[2][84]=835;	hoverMsgR[1][84]="THP/a1,a2B1-";		hoverColorR[84]="purple";	
siteListNumR[0][85]=1;	siteListNumR[1][85]=518;	siteListNumR[2][85]=526;	hoverMsgR[1][85]="THP/a1,2,11-B1";		hoverColorR[85]="purple";	
siteListNumR[0][86]=1;	siteListNumR[1][86]=518;	siteListNumR[2][86]=523;	hoverMsgR[1][86]="THP/OBD";				hoverColorR[86]="purple";	
siteListNumR[0][87]=1;	siteListNumR[1][87]=788;	siteListNumR[2][87]=802;	hoverMsgR[1][87]="THP/FA+,MMP1,2,13";	hoverColorR[87]="purple";	

//Misc: HSP47
siteListNumR[0][88]=1;	siteListNumR[1][88]=24;		siteListNumR[2][88]=26;		hoverMsgR[1][88]="1. HSP47";		hoverColorR[88]="cyan";	
siteListNumR[0][89]=1;	siteListNumR[1][89]=57;		siteListNumR[2][89]=59;		hoverMsgR[1][89]="2. HSP47";		hoverColorR[89]="cyan";	
siteListNumR[0][90]=1;	siteListNumR[1][90]=81;		siteListNumR[2][90]=83;		hoverMsgR[1][90]="3. HSP47";		hoverColorR[90]="cyan";	
siteListNumR[0][91]=1;	siteListNumR[1][91]=90;		siteListNumR[2][91]=92;		hoverMsgR[1][91]="4. HSP47";		hoverColorR[91]="cyan";
siteListNumR[0][92]=1;	siteListNumR[1][92]=105;	siteListNumR[2][92]=107;	hoverMsgR[1][92]="5. HSP47";		hoverColorR[92]="cyan";	
siteListNumR[0][93]=1;	siteListNumR[1][93]=141;	siteListNumR[2][93]=143;	hoverMsgR[1][93]="6. HSP47";		hoverColorR[93]="cyan";	
siteListNumR[0][94]=1;	siteListNumR[1][94]=147;	siteListNumR[2][94]=149;	hoverMsgR[1][94]="7. HSP47";		hoverColorR[94]="cyan";	
siteListNumR[0][95]=1;	siteListNumR[1][95]=159;	siteListNumR[2][95]=161;	hoverMsgR[1][95]="8. HSP47";		hoverColorR[95]="cyan";	
siteListNumR[0][96]=1;	siteListNumR[1][96]=198;	siteListNumR[2][96]=200;	hoverMsgR[1][96]="9. HSP47";		hoverColorR[96]="cyan";	
siteListNumR[0][97]=1;	siteListNumR[1][97]=207;	siteListNumR[2][97]=209;	hoverMsgR[1][97]="10. HSP47";	hoverColorR[97]="cyan";	
siteListNumR[0][98]=1;	siteListNumR[1][98]=251;	siteListNumR[2][98]=253;	hoverMsgR[1][98]="11. HSP47";	hoverColorR[98]="cyan";	
siteListNumR[0][99]=2;	siteListNumR[1][99]=260;	siteListNumR[2][99]=262;	hoverMsgR[1][99]="12. HSP47";	hoverColorR[99]="cyan";	
siteListNumR[0][100]=1;	siteListNumR[1][100]=306;	siteListNumR[2][100]=308;	hoverMsgR[1][100]="13. HSP47";	hoverColorR[100]="cyan";	
siteListNumR[0][101]=1;	siteListNumR[1][101]=309;	siteListNumR[2][101]=311;	hoverMsgR[1][101]="14. HSP47";	hoverColorR[101]="cyan";
siteListNumR[0][102]=1;	siteListNumR[1][102]=324;	siteListNumR[2][102]=326;	hoverMsgR[1][102]="15. HSP47";	hoverColorR[102]="cyan";	
siteListNumR[0][103]=1;	siteListNumR[1][103]=330;	siteListNumR[2][103]=332;	hoverMsgR[1][103]="16. HSP47";	hoverColorR[103]="cyan";	
siteListNumR[0][104]=1;	siteListNumR[1][104]=348;	siteListNumR[2][104]=350;	hoverMsgR[1][104]="17. HSP47";	hoverColorR[104]="cyan";	
siteListNumR[0][105]=2;	siteListNumR[1][105]=349;	siteListNumR[2][105]=351;	hoverMsgR[1][105]="18. HSP47";	hoverColorR[105]="cyan";	
siteListNumR[0][106]=2;	siteListNumR[1][106]=368;	siteListNumR[2][106]=370;	hoverMsgR[1][106]="19. HSP47";	hoverColorR[106]="cyan";	
siteListNumR[0][107]=1;	siteListNumR[1][107]=411;	siteListNumR[2][107]=413;	hoverMsgR[1][107]="20. HSP47";	hoverColorR[107]="cyan";	
siteListNumR[0][108]=1;	siteListNumR[1][108]=435;	siteListNumR[2][108]=437;	hoverMsgR[1][108]="21. HSP47";	hoverColorR[108]="cyan";	
siteListNumR[0][109]=2;	siteListNumR[1][109]=437;	siteListNumR[2][109]=439;	hoverMsgR[1][109]="22. HSP47";	hoverColorR[109]="cyan";	
siteListNumR[0][110]=1;	siteListNumR[1][110]=468;	siteListNumR[2][110]=470;	hoverMsgR[1][110]="23. HSP47";	hoverColorR[110]="cyan";	
siteListNumR[0][111]=2;	siteListNumR[1][111]=491;	siteListNumR[2][111]=493;	hoverMsgR[1][111]="24. HSP47";	hoverColorR[111]="cyan";
siteListNumR[0][112]=1;	siteListNumR[1][112]=513;	siteListNumR[2][112]=515;	hoverMsgR[1][112]="25. HSP47";	hoverColorR[112]="cyan";	
siteListNumR[0][113]=1;	siteListNumR[1][113]=516;	siteListNumR[2][113]=518;	hoverMsgR[1][113]="26. HSP47";	hoverColorR[113]="cyan";	
siteListNumR[0][114]=1;	siteListNumR[1][114]=522;	siteListNumR[2][114]=524;	hoverMsgR[1][114]="27. HSP47";	hoverColorR[114]="cyan";	
siteListNumR[0][115]=1;	siteListNumR[1][115]=534;	siteListNumR[2][115]=536;	hoverMsgR[1][115]="28. HSP47";	hoverColorR[115]="cyan";	
siteListNumR[0][116]=1;	siteListNumR[1][116]=570;	siteListNumR[2][116]=572;	hoverMsgR[1][116]="29. HSP47";	hoverColorR[116]="cyan";	
siteListNumR[0][117]=1;	siteListNumR[1][117]=583;	siteListNumR[2][117]=585;	hoverMsgR[1][117]="30. HSP47";	hoverColorR[117]="cyan";	
siteListNumR[0][118]=2;	siteListNumR[1][118]=581;	siteListNumR[2][118]=583;	hoverMsgR[1][118]="31. HSP47";	hoverColorR[118]="cyan";	
siteListNumR[0][119]=1;	siteListNumR[1][119]=600;	siteListNumR[2][119]=602;	hoverMsgR[1][119]="32. HSP47";	hoverColorR[119]="cyan";	
siteListNumR[0][120]=2;	siteListNumR[1][120]=611;	siteListNumR[2][120]=613;	hoverMsgR[1][120]="33. HSP47";	hoverColorR[120]="cyan";	
siteListNumR[0][121]=1;	siteListNumR[1][121]=633;	siteListNumR[2][121]=635;	hoverMsgR[1][121]="34. HSP47";	hoverColorR[121]="cyan";
siteListNumR[0][122]=1;	siteListNumR[1][122]=639;	siteListNumR[2][122]=641;	hoverMsgR[1][122]="35. HSP47";	hoverColorR[122]="cyan";	
siteListNumR[0][123]=2;	siteListNumR[1][123]=659;	siteListNumR[2][123]=661;	hoverMsgR[1][123]="36. HSP47";	hoverColorR[123]="cyan";	
siteListNumR[0][124]=1;	siteListNumR[1][124]=702;	siteListNumR[2][124]=704;	hoverMsgR[1][124]="37. HSP47";	hoverColorR[124]="cyan";	
siteListNumR[0][125]=2;	siteListNumR[1][125]=737;	siteListNumR[2][125]=739;	hoverMsgR[1][125]="38. HSP47";	hoverColorR[125]="cyan";	
siteListNumR[0][126]=1;	siteListNumR[1][126]=747;	siteListNumR[2][126]=749;	hoverMsgR[1][126]="39. HSP47";	hoverColorR[126]="cyan";	
siteListNumR[0][127]=1;	siteListNumR[1][127]=795;	siteListNumR[2][127]=797;	hoverMsgR[1][127]="40. HSP47";	hoverColorR[127]="cyan";	
siteListNumR[0][128]=1;	siteListNumR[1][128]=804;	siteListNumR[2][128]=806;	hoverMsgR[1][128]="41. HSP47";	hoverColorR[128]="cyan";	
siteListNumR[0][129]=1;	siteListNumR[1][129]=807;	siteListNumR[2][129]=809;	hoverMsgR[1][129]="42. HSP47";	hoverColorR[129]="cyan";	
siteListNumR[0][130]=1;	siteListNumR[1][130]=831;	siteListNumR[2][130]=833;	hoverMsgR[1][130]="43. HSP47";	hoverColorR[130]="cyan";	
siteListNumR[0][131]=1;	siteListNumR[1][131]=873;	siteListNumR[2][131]=875;	hoverMsgR[1][131]="44. HSP47";	hoverColorR[131]="cyan";
siteListNumR[0][132]=1;	siteListNumR[1][132]=903;	siteListNumR[2][132]=905;	hoverMsgR[1][132]="45. HSP47";	hoverColorR[132]="cyan";	
siteListNumR[0][133]=1;	siteListNumR[1][133]=921;	siteListNumR[2][133]=923;	hoverMsgR[1][133]="46. HSP47";	hoverColorR[133]="cyan";	
siteListNumR[0][134]=1;	siteListNumR[1][134]=930;	siteListNumR[2][134]=932;	hoverMsgR[1][134]="47. HSP47";	hoverColorR[134]="cyan";	
siteListNumR[0][135]=1;	siteListNumR[1][135]=942;	siteListNumR[2][135]=944;	hoverMsgR[1][135]="48. HSP47";	hoverColorR[135]="cyan";	
siteListNumR[0][136]=1;	siteListNumR[1][136]=948;	siteListNumR[2][136]=950;	hoverMsgR[1][136]="49. HSP47";	hoverColorR[136]="cyan";	
siteListNumR[0][137]=1;	siteListNumR[1][137]=978;	siteListNumR[2][137]=980;	hoverMsgR[1][137]="50. HSP47";	hoverColorR[137]="cyan";	
siteListNumR[0][138]=1;	siteListNumR[1][138]=1005;	siteListNumR[2][138]=1007;	hoverMsgR[1][138]="51. HSP47";	hoverColorR[138]="cyan";	

//Misc
siteListNumR[0][139]=1;	siteListNumR[1][139]=101;	siteListNumR[2][139]=115;	hoverMsgR[1][139]="Micro Unfolding";	hoverColorR[139]="chocolate";	
siteListNumR[0][140]=1;	siteListNumR[1][140]=838;	siteListNumR[2][140]=1056;	hoverMsgR[1][140]="Amyloid Precursor";	hoverColorR[140]="chocolate";
	
	}

	else if(modelID=="Collagen3")
	{	modelNumberR=2;
		headers[modelNumberR]=['','No Sites Available'];
		headersNum[modelNumberR]=[''];
		jmolScript('load jmol/models/080906-d-band-wide-decmon-upright-mined-COLLAGEN.pdb;select all;spacefill '+atomSize+'%;wireframe'+ bondSize+';color cpk;zoom 120;',"Right");
	}
	else if(modelID=="Decorin")
	{	jmolScript('load jmol/models/080122-new-c-n-dec-mon-minimized.pdb;display backbone;select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;',"Right");
		modelNumberR=3;
		numSites=2;
		sitesPickedR=new Array(numSites+1);
		hoverMsgR[3]=new Array(numSites);
		sitesPickedR[0]=1;
		headers[modelNumberR]=['', 'Type I Collagen'];
		headersNum[modelNumberR]=[0,2];
		
			
		//CHAIN NUMBER			INITIAL RESIDUE NUMBER	FINAL RESIDUE NUMBER	NAME
		//Type I Collagen
		siteListNumR[1][1]=1101;		siteListNumR[2][1]=1104;		hoverMsgR[3][1]="RELK";		hoverColorR[1]="yellow";
		siteListNumR[1][2]=1243;		siteListNumR[2][2]=1246;		hoverMsgR[3][2]="RELH";		hoverColorR[2]="yellow";		
	}
	else if(modelID=="Biglycan")
	{	modelNumberR=4;
		headers[modelNumberR]=['','No Sites Available'];
		headersNum[modelNumberR]=[''];
		jmolScript('load jmol/models/practice.pdb; select all;spacefill '+atomSize+'%;wireframe '+bondSize+';color cpk;zoom 120;define site1 atomno<213;define site2 atomno>15000;',"Right");
	}

	
	
//------------------------------------CHANGING the TABLE-------------------------------------------------	
		//add headers
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
				table += '<li id="'+siteNumber+'Right" onClick="siteSelectR('+siteNumber+',\'Right\')"><a href="javascript:void(0)">'+hoverMsgR[modelNumberR][siteNumber]+'</a></li>';
			}
			table += '</ul></li>';
		}
		$('#accordionR').append(table).accordion('destroy');
		$('#accordionR').accordion({
				autoHeight: false,
				collapsible: true,
				navigation: true				
		});	
	
}

