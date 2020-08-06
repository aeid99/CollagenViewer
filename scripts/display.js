//Can also color things translucent n color
//where n goes from 0-1, and 1 is completely transparent
function boundBox(letter,imageSel){

	if(imageSel=='Left'){modelNo=modelNumberL;}
	else{modelNo=modelNumberR;}
	if(modelNo==1){//if collagen
		if(letter=='a'){
			var a=document.getElementById('a'+imageSel);
			if(a.checked){				
				Jmol.script(myJmol,'boundbox  ((:a and 91-133) or (:a and 324-366) or (:a and 557-599) or (:a and 793-835) or (:a and 1027-1054)) 2; draw a'+imageSel+' boundbox mesh nofill;boundbox off; color $a'+imageSel+' yellow;',imageSel);}
			else if(a.checked==false){
				Jmol.script(myJmol,'delete $a'+imageSel+'',imageSel);}
		}
		else if(letter=='b'){
			var b=document.getElementById('b'+imageSel);
			if(b.checked){
				Jmol.script(myJmol,'boundbox  ((:a and 147-174) or (:a and 380-407) or (:a and 613-640) or (:a and 849-876)) 2; draw e'+imageSel+' boundbox mesh nofill;boundbox off; color $e'+imageSel+' blue;',imageSel);}
			else if(e.checked==false){
				Jmol.script(myJmol,'delete $e'+imageSel+'',imageSel);}		
		}
		else if(letter=='c'){
		}
		else if(letter=='d'){
		}
		else if(letter=='e'){
		//	var e=document.getElementById('e'+imageSel);
		//	if(e.checked){Jmol.script(myJmol,'boundbox  ((:a and 147-174) or (:a and 380-407) or (:a and 613-640) or (:a and 849-876)) 2; draw e'+imageSel+' boundbox mesh nofill;boundbox off; color $e'+imageSel+' blue;',imageSel);}
		//	else if(e.checked==false){Jmol.script(myJmol,'delete $e'+imageSel+'',imageSel);}		
		}
	}

}




function imageStyle(imageSel){	
	var imageNo=0;
	if(imageSel=='Right'){imageNo=1;}
	
	var BallnStick = document.getElementById("BnS"+imageSel);
	var Trace = document.getElementById("Trace"+imageSel);	
	var Rib = document.getElementById("Rib"+imageSel);	

	if(BallnStick.checked){Jmol.script(myJmol,'select all;spacefill '+aSize[imageNo]+'%; wireframe '+bSize[imageNo]+'',imageSel)}
	else if(BallnStick.checked==false){Jmol.script(myJmol,"select all;spacefill off;wireframe off",imageSel)}
	
	if(Trace.checked){Jmol.script(myJmol,'select *.ca;trace;color trace orange',imageSel)}
	else if(Trace.checked==false){Jmol.script(myJmol,"select all;trace off",imageSel)}

	if(Rib.checked){Jmol.script(myJmol,'select all;ribbon;color ribbon "#FFFF66"',imageSel)}
	else if(Rib.checked==false){Jmol.script(myJmol,"select all;ribbon off",imageSel)}
}

//This function changes the atom size and returns the value
function Atoms(imageSel)
{	var imageNo=0;
	if(imageSel=='Right'){imageNo=1;}
	
	var atomOff = document.getElementById('Aoff'+imageSel);
	var atom35 = document.getElementById('A35'+imageSel);	
	var atom100 = document.getElementById('A100'+imageSel);
	var BallnStick = document.getElementById("BnS"+imageSel);
	
	if(atomOff.checked){aSize[imageNo]=0;}
	else if(atom35.checked){aSize[imageNo]=35;}
	else if(atom100.checked){aSize[imageNo]=100;}
	
	if(BallnStick.checked){Jmol.script(myJmol,'select all;spacefill '+aSize[imageNo]+'%',imageSel)}
	else if(BallnStick.checked==false){Jmol.script(myJmol,"select all;spacefill off",imageSel)}
	return aSize;
}

//This function only changes the bond size according to chosen group
function Bonds(imageSel)
{	var imageNo=0;
	if(imageSel=='Right'){imageNo=1;}
	var Boff = document.getElementById('Boff'+imageSel);	
	var B25 = document.getElementById('B25'+imageSel);	
	var B50 = document.getElementById('B50'+imageSel);	
	var BallnStick = document.getElementById("BnS"+imageSel);
	
	if(Boff.checked){bSize[imageNo]=0;}
	else if(B25.checked){bSize[imageNo]=.25;}
	else if(B50.checked){bSize[imageNo]=.50;}
				
	if(BallnStick.checked){Jmol.script(myJmol,'select all;wireframe '+bSize[imageNo]+'%',imageSel)}
	else if(BallnStick.checked==false){Jmol.script(myJmol,"select all;wireframe off",imageSel)}
	return bSize;
}

function Spin(imageSel)
{	Jmol.script(myJmol,"if(_spinning);spin off;spinflag = false;else;spin on;spinflag = true;endif",imageSel);
}

function TranslateDisplay(imageSel,direction)
{	if(direction=='L'){Jmol.script(myJmol,"move 0 0 0 0 -20 0 0 0 .3;",imageSel)}
	else if(direction=='R'){Jmol.script(myJmol,"move 0 0 0 0 20 0 0 0 .3;",imageSel)}
	else if(direction=='U'){Jmol.script(myJmol,"move 0 0 0 0 0 -20 0 0 .3;",imageSel)}
	else if(direction=='D'){Jmol.script(myJmol,"move 0 0 0 0 0 20 0 0 .3;",imageSel)}
	else {return}
}

function ZoomDisplay(imageSel,direction)
{	if(direction=='in'){Jmol.script(myJmol,"move 0 0 0 70 0 0 0 0 .2;",imageSel);}
	else if(direction=='out'){Jmol.script(myJmol,"move 0 0 0 -70 0 0 0 0 .2;",imageSel);}
	else {return}
}