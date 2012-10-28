//var matchPos3 = string3.search(myRegExp3);

//var matchIndex = withinThisVar.search(string to be serarched);
//Searches the sequence according to molecule displayed.

	function searchSeq(imageSel,action)
	{	var modelNumber;
		if(action!="Clear"){
			//FIRST WE SAVE THE FOUND SITES 
			var initA=0;	//maybe when you click next, you will need this saved as aglobal variable and unchanged
			var fin=0;
			var modelID;
			var searchSequence="";
			if(imageSel=='Left'){
				modelNumber=0;
				stringerL=document.searchL.sequenceL.value.toUpperCase();
				searchSequence=stringerL;
				modelID=modelNumberL;
				//modelID=document.getElementById("mydropdownL").value;
			}
			else{
				modelNumber=1;
				stringerR=document.searchR.sequenceR.value.toUpperCase();
				searchSequence=stringerR;
				modelID=modelNumberR;
				//modelID=document.getElementById("mydropdownR").value;
			}
			var seqLength=searchSequence.length;
			if(seqLength>0){
				if(modelID==0){ }
				else if(modelID==1){
					//alpha 1 = Chains A and C
					var moleculeA="QMSYGYDEKSAGVSVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGGSGPMGPPGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGAKGDTGPAGPKGEPGSPGENGTPGQMGPRGLPGERGRPGPPGTAGARGNDGAVGAAGPPGPTGPTGPPGFPGAAGAKGEAGPQGARGSEGPQGVRGEPGPPGPAGAAGPAGNPGADGQPGAKGANGAPGIAGAPGFPGARGPSGPQGPSGAPGPKGTSGEPGAPGNKGDTGAKGEPGPAGVQGPPGPAGEEGKRGARGEPGPSGLPGPPGERGGPGSRGFPGADGVAGPKGPSGERGSPGPAGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPGPAGPPGARGQAGVMGFPGPKGTAGEPGKAGERGVPGPPGAVGPAGKDGEAGAQGAPGPAGPAGERGEQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFPGERGVQGPPGPAGPRGNNGAPGNDGAKGDTGAPGAPGSQGAPGLQGMPGERGAAGLPGPKGDRGDAGPKGADGSPGKDGVRGLTGPIGPPGPAGAPGDKGEAGPSGPAGPTGARGAPGDRGEAGPPGPAGFAGPPGADGQPGAKGEPGDTGVKGDAGPPGPAGPAGPPGPIGNVGAPGPKGSRGAAGPPGATGFPGAAGRVGPPGPSGNAGPPGPPGPVGKEGGKGPRGETGPAGRPGEVGPPGPPGPAGEKGSPGADGPAGSPGTPGPQGIAGQRGVVGLPGQRGKRGFPGLPGPSGEPGKQGPSGASGERGPPGPMGPPGLAGPPGESGREGSPGAEGSPGRDGAPGAKGDRGETGPAGPPGAPGAPGAPGPVGPAGKNGDRGETGPAGPAGPIGPAGARGPAGPQGPRGDKGETGEQGDRGIKGHRGFSGLQGPPGSPGSPGEQGPSGASGPAGPRGPPGSAGSPGKDGLNGLPGPIGPPGPRGRTGDSGPAGPPGPPGPPGPPGPPSGGYDFSFLPQPPQEKSQDGGRYYRA";	
					
					//alpha 2 = chain B
					var moleculeB="SDKGVSAGPGPMGLMGPRGPPGAVGAPGPQGFQGPAGEPGEPGQTGPAGSRGPAGPPGKAGEDGHPGKPGRPGERGVVGPQGARGFPGTPGLPGFKGIRGHNGLDGLKGQPGAQGVKGEPGAPGENGTPGQAGARGLPGERGRVGAPGPAGARGSDGSVGPVGPAGPIGSAGPPGFPGAPGPKGELGPVGNPGPAGPAGPRGEAGLPGLSGPVGPPGNPGANGLTGAKGATGLPGVAGAPGLPGPRGIPGPVGAAGATGPRGLVGEPGPAGSKGETGNKGEPGSAGAQGPPGPSGEEGKRGSPGEPGSAGPAGPPGLRGSPGSRGLPGADGRAGVMGPPGNRGSTGPAGVRGPNGDAGRPGEPGLMGPRGLPGSPGNVGPAGKEGPVGLPGIDGRPGPIGPAGPRGEAGNIGFPGPKGPSGDPGKPGEKGHPGLAGARGAPGPDGNNGAQGPPGPQGVQGGKGEQGPAGPPGFQGLPGPSGTAGEVGKPGERGLPGEFGLPGPAGPRGERGPPGESGAAGPSGPIGIRGPSGAPGPDGNKGEAGAVGAPGSAGASGPGGLPGERGAAGIPGGKGEKGETGLRGEIGNPGRDGARGAPGAIGAPGPAGASGDRGEAGAAGPSGPAGPRGSPGERGEVGPAGPNGFAGPAGSAGQPGAKGEKGTKGPKGENGIVGPTGPVGAAGPSGPNGPPGPAGSRGDGGPPGMTGFPGAAGRTGPPGPSGITGPPGPPGAAGKEGIRGPRGDQGPVGRTGEIGASGPPGFAGEKGPSGEPGTTGPPGTAGPQGLLGAPGILGLPGSRGERGQPGIAGALGEPGPLGIAGPPGARGPPGAVGSPGVNGAPGEAGRDGNPGSDGPPGRDGQPGHKGERGYPGNIGPTGAAGAPGPHGSVGPAGKHGNRGEPGPAGSVGPVGAVGPRGPSGPQGIRGDKGEPGDKGARGLPGLKGHNGLQGLPGLAGLHGDQGAPGPVGPAGPRGPAGPSGPIGKDGRSGHPGPVGPAGVRGSQGSQGPAGPPGPPGPPGPPGVSGGG";
					
						/*
						Save them all in first
							Then if it’s display all – loop through and display all
							If it’s display next – have a pointer index that goes through each one and displays one at a time
								-	Arrange by residue order – 						
						*/
						
						var sitesFound = new Array(2);  //instantiates the  number of rows
						var Achain=moleculeA;
						var Bchain=moleculeB;
						sitesFound[0]=new Array(200); 	//instantiates the number of columns for row 0
						sitesFound[1]=new Array(200); 	//instantiates the number of columns for row 1
						var replaceString="";
						for (p=1;p<=seqLength;p++){
							replaceString=replaceString+"x";
						}
						
					//GAPGPQGFQ  all three sites can be found at the same place on residue number 31 for alpha 1 and 24 for alpha 2	
					//	sitesFound [0][indexofSite] = //initial value
					//	sitesFound [1][indexofSite] = //Chain (1 is alpha 1=AC, and 2 is alpha2 = B)
						initA=Achain.search(searchSequence)+1;  //String indexes at 0, residues start at 1
						initB=Bchain.search(searchSequence)+1;
						var i=0;
						while(initA>0 || initB>0){
							if(initA>0){
								i=i+1;	
								sitesFound[0][i] = initA;
								sitesFound[1][i] = 1;
								Achain=Achain.replace(searchSequence,replaceString);	
							}
							if(initB>0){
								i=i+1;
								sitesFound[0][i] = initB;
								sitesFound[1][i] = 2;
								Bchain=Bchain.replace(searchSequence,replaceString);
							}
							initA=Achain.search(searchSequence)+1;  //Add 1 -first index of the string is 0, but first residue is 1
							initB=Bchain.search(searchSequence)+1;
						}
					//HERE WE DISPLAY THE SITES
					var selectString="";
					if(action=="Next"){
						alert(modelNumber);
						alert(searchIndex);
						//we need somet global variable to check if the sequence is the same as what it was the last time we clicked next.
						searchIndex[modelNumber]=searchIndex[modelNumber]+1;
						var init=sitesFound[0][searchIndex[modelNumber]];
						if(init>0){
							var fin=init+seqLength;
							if(sitesFound[1][searchIndex[modelNumber]]==1){selectString='(:a and ('+init+'-'+fin+')) or (:c and ('+init+'-'+fin+'))';}
							else if(sitesFound[1][searchIndex[modelNumber]]==2){selectString='(:b and ('+init+'-'+fin+'))';}
							alert(selectString);
							jmolScript('select '+selectString+'; define siteSearch'+imageSel+' selected; isosurface id search'+imageSel+' solvent 0; color isosurface yellow; center selected; select all;',imageSel);				 
						}
					}					
				
					else if(action=="All"){
						for(k=1;k<=i;k++){
							var init=sitesFound[0][k];
							if(init>0){
								var fin=init+seqLength;
								if(sitesFound[1][k]==1){selectString='(:a and ('+init+'-'+fin+')) or (:c and ('+init+'-'+fin+'))';}
								else if(sitesFound[1][k]==2){selectString='(:b and ('+init+'-'+fin+'))';}		 
							}
						}
					jmolScript('select '+selectString+'; define siteSearch'+imageSel+' selected; isosurface id search'+imageSel+' solvent 0; color isosurface yellow; select all;',imageSel);
					
					}
						
					
				}
			}
			
			else if(modelID==2){	
			
			
			}
			else if(modelID==3){
			}
			
			
			
			
			
			
			
			
		}
		else if(action=="Clear"){
			jmolScript('select all; hover off; halos off; isosurface ID search'+imageSel+' delete; select all;',imageSel);
			document.getElementById("search"+imageSel).value="";
			searchIndex[modelNumber]=0;
			//CLEAR SITESFOUND
			
		}
		
	}
	

	//http://www.textfixer.com/tools/remove-line-breaks.php
			
						//init2=moleculeA[2:length(moleculeA)].search(searchSequence)+1;
					/*	if(init>0){
							alert(init);
							fin=init+seqLength
							jmolScript('select '+init+'-'+fin+'; define siteSearch'+imageSel+' selected; isosurface id search'+imageSel+' molecular; color isosurface yellow; halos 55%;color halos yellow;select all;',imageSel)
							
							//jmolScript('select resno>='+init+':a and resno<='+fin+':a; isosurface id search'+imageSel+' molecular; color isosurface yellow; halos 55%;color halos yellow;select all;',imageSel)
							
							//jmolScript('select backbone and '+init+'-'+fin+':a; isosurface id search'+imageSel+' molecular; color isosurface yellow; halos 55%;color halos yellow;select all; define siteSearch'+imageSel+' resno>='+init+' and resno<='+fin+';',imageSel)
							
							//selects the region.  creates ID for surface.  colors surface yellow, includes halos, defines site id.
							//WHICH CHAIN IS SHOWN ABOVE??
							//select resno >=1 and resno <=30
						}
						
						
						
						
						
						
						
						
						
						/*if(init>0){
							alert(init)
							alert(searchString[init])
							fin=init+seqLength
							jmolScript('select (:a and ('+init+'-'+fin+')) or (:c and ('+init+'-'+fin+')); define siteSearch'+imageSel+' selected; isosurface id search'+imageSel+' molecular; color isosurface yellow; halos 55%;color halos yellow;select all;',imageSel);						
						}*/
						
						
						
						
/*

GAP -
inita = 32,239,245,263,275,458,506,884,887,890
initB = 25,121,145,961

File used with Sites - "CollagenSitesALL"
Chain A and C - alpha 1
QMSYGYDEKSAGVSVPGPMGPSGPRGLPGPPGAPGPQGFQGPPGEPGEPGGSGPMGPPGPPGPPGKNGDDGEAGKPGRPGERGPPGPQGARGLPGTAGLPGMKGHRGFSGLDGAKGDTGPAGPKGEPGSPGENGTPGQMGPRGLPGERGRPGPPGTAGARGNDGAVGAAGPPGPTGPTGPPGFPGAAGAKGEAGPQGARGSEGPQGVRGEPGPPGPAGAAGPAGNPGADGQPGAKGANGAPGIAGAPGFPGARGPSGPQGPSGAPGPKGTSGEPGAPGNKGDTGAKGEPGPAGVQGPPGPAGEEGKRGARGEPGPSGLPGPPGERGGPGSRGFPGADGVAGPKGPSGERGSPGPAGPKGSPGEAGRPGEAGLPGAKGLTGSPGSPGPDGKTGPPGPAGQDGRPGPAGPPGARGQAGVMGFPGPKGTAGEPGKAGERGVPGPPGAVGPAGKDGEAGAQGAPGPAGPAGERGEQGPAGSPGFQGLPGPAGPPGEAGKPGEQGVPGDLGAPGPSGARGERGFPGERGVQGPPGPAGPRGNNGAPGNDGAKGDTGAPGAPGSQGAPGLQGMPGERGAAGLPGPKGDRGDAGPKGADGSPGKDGVRGLTGPIGPPGPAGAPGDKGEAGPSGPAGPTGARGAPGDRGEAGPPGPAGFAGPPGADGQPGAKGEPGDTGVKGDAGPPGPAGPAGPPGPIGNVGAPGPKGSRGAAGPPGATGFPGAAGRVGPPGPSGNAGPPGPPGPVGKEGGKGPRGETGPAGRPGEVGPPGPPGPAGEKGSPGADGPAGSPGTPGPQGIAGQRGVVGLPGQRGKRGFPGLPGPSGEPGKQGPSGASGERGPPGPMGPPGLAGPPGESGREGSPGAEGSPGRDGAPGAKGDRGETGPAGPPGAPGAPGAPGPVGPAGKNGDRGETGPAGPAGPIGPAGARGPAGPQGPRGDKGETGEQGDRGIKGHRGFSGLQGPPGSPGSPGEQGPSGASGPAGPRGPPGSAGSPGKDGLNGLPGPIGPPGPRGRTGDSGPAGPPGPPGPPGPPGPPSGGYDFSFLPQPPQEKSQDGGRYYRA

Chain B - alpha 2
SDKGVSAGPGPMGLMGPRGPPGAVGAPGPQGFQGPAGEPGEPGQTGPAGSRGPAGPPGKAGEDGHPGKPGRPGERGVVGPQGARGFPGTPGLPGFKGIRGHNGLDGLKGQPGAQGVKGEPGAPGENGTPGQAGARGLPGERGRVGAPGPAGARGSDGSVGPVGPAGPIGSAGPPGFPGAPGPKGELGPVGNPGPAGPAGPRGEAGLPGLSGPVGPPGNPGANGLTGAKGATGLPGVAGAPGLPGPRGIPGPVGAAGATGPRGLVGEPGPAGSKGETGNKGEPGSAGAQGPPGPSGEEGKRGSPGEPGSAGPAGPPGLRGSPGSRGLPGADGRAGVMGPPGNRGSTGPAGVRGPNGDAGRPGEPGLMGPRGLPGSPGNVGPAGKEGPVGLPGIDGRPGPIGPAGPRGEAGNIGFPGPKGPSGDPGKPGEKGHPGLAGARGAPGPDGNNGAQGPPGPQGVQGGKGEQGPAGPPGFQGLPGPSGTAGEVGKPGERGLPGEFGLPGPAGPRGERGPPGESGAAGPSGPIGIRGPSGAPGPDGNKGEAGAVGAPGSAGASGPGGLPGERGAAGIPGGKGEKGETGLRGEIGNPGRDGARGAPGAIGAPGPAGASGDRGEAGAAGPSGPAGPRGSPGERGEVGPAGPNGFAGPAGSAGQPGAKGEKGTKGPKGENGIVGPTGPVGAAGPSGPNGPPGPAGSRGDGGPPGMTGFPGAAGRTGPPGPSGITGPPGPPGAAGKEGIRGPRGDQGPVGRTGEIGASGPPGFAGEKGPSGEPGTTGPPGTAGPQGLLGAPGILGLPGSRGERGQPGIAGALGEPGPLGIAGPPGARGPPGAVGSPGVNGAPGEAGRDGNPGSDGPPGRDGQPGHKGERGYPGNIGPTGAAGAPGPHGSVGPAGKHGNRGEPGPAGSVGPVGAVGPRGPSGPQGIRGDKGEPGDKGARGLPGLKGHNGLQGLPGLAGLHGDQGAPGPVGPAGPRGPAGPSGPIGKDGRSGHPGPVGPAGVRGSQGSQGPAGPPGPPGPPGPPGVSGGG








//alert(Achain.charAt(initA-1)+Achain.charAt(initA)+Achain.charAt(initA+1));
								//Achain.charAt(initA-1)="X"//STILL CANNOT REPLACE THIS ONE VALUE
								//Achain[initA-1]="X";
								//Achain.replaceAt(indexA-1,"x")
								
								//alert(Achain.charAt(initA-1)+Achain.charAt(initA)+Achain.charAt(initA+1));
								
								




*/