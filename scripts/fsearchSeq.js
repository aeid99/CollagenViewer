//var matchPos3 = string3.search(myRegExp3);

//var matchIndex = withinThisVar.search(string to be serarched);
//Searches the sequence according to molecule displayed.

	function searchSeq(imageSel,action)
	{	var modelNumber=0;
		if(imageSel=='Right'){modelNumber=1;}
		jmolScript('select all; halos off;',imageSel);
		if(action!="Clear"){
			//FIRST WE SAVE THE FOUND SITES 
			var initA=0;	//maybe when you click next, you will need this saved as aglobal variable and unchanged
			var fin=0;
			var modelID;
			var searchSequence="";
			if(imageSel=='Left'){
				stringerL=document.searchL.sequenceL.value.toUpperCase();
				searchSequence=stringerL;
				modelID=modelNumberL;
				//modelID=document.getElementById("mydropdownL").value;
			}
			else{
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
						sitesTotal[modelNumber]=i;
						
					//HERE WE DISPLAY THE SITES
					var selectString="";
					if(action=="Next"){
						sitesShown[modelNumber]=1;
						for(k=1;k<=sitesTotal[modelNumber];k++){
							jmolScript('select all; hover off; halos off; isosurface ID search'+imageSel+k+' delete;',imageSel);
						}
						
						if(searchIndex[modelNumber]<=sitesTotal[modelNumber]){
							searchIndex[modelNumber]=searchIndex[modelNumber]+1;
							var init=sitesFound[0][searchIndex[modelNumber]];
							if(init>0){
								var fin=init+seqLength;
								if(sitesFound[1][searchIndex[modelNumber]]==1){selectString='(:a and ('+init+'-'+fin+')) or (:c and ('+init+'-'+fin+'))';}
								else if(sitesFound[1][searchIndex[modelNumber]]==2){selectString='(:b and ('+init+'-'+fin+'))';}
								jmolScript('select '+selectString+'; define siteSearch'+imageSel+'1 selected; isosurface ID search'+imageSel+'1 solvent 0; color isosurface lime; center selected; select all;',imageSel);				 
							}
						}
						else{
							searchIndex[modelNumber]=0;
						}
					}					
				
					else if(action=="All"){
						sitesShown[modelNumber]=sitesTotal[modelNumber];
						selectString="";
						for(k=1;k<=sitesTotal[modelNumber];k++){
							var init=sitesFound[0][k];
							if(init>0){
								var fin=init+seqLength;
								if(sitesFound[1][k]==1){selectString=selectString+'select (:a and ('+init+'-'+fin+')) or (:c and ('+init+'-'+fin+')); define siteSearch'+imageSel+k+' selected; isosurface id search'+imageSel+k+' solvent 0; color isosurface lime;';}
								else if(sitesFound[1][k]==2){selectString=selectString+'select (:b and ('+init+'-'+fin+')); define siteSearch'+imageSel+k+' selected; isosurface id search'+imageSel+k+' solvent 0; color isosurface lime;';}		 
							}
						}
						jmolScript(selectString+'select all;',imageSel);
					
					
					
					}
						
					
				}
			}
			
			else if(modelID==2){	
			
			
			}
			else if(modelID==3){
			}
			
			
			
			
			
			
			
			
		}
		

		else if(action=="Clear"){
			for(k=1;k<=sitesShown[modelNumber];k++){
				jmolScript('select all; hover off; halos off; isosurface ID search'+imageSel+k+' delete;',imageSel);
			}
			document.getElementById("search"+imageSel).value="";
			sitesShown[modelNumber]=0;
			searchIndex[modelNumber]=0;
			sitesTotal[modelNumber]=0;
			sitesFound=[0,0]
		}
		
	}
