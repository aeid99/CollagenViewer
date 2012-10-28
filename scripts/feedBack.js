function feedBack(){
	feedbackWindow = window.open ("feedBackForm.html","feedbackWindow","status=0,titlebar=0,toolbar=0,scrollbars=0,width=440,height=600,resizable=0,dependent=1,location=0,menubar=0,titlebar=0");
  feedbackWindow.moveTo(500,100);
  
  
}

function feedBackSubmit(){
	self.close();
}
