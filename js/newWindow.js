function newWindow(content) {
	//this if...else statement since window.focus() method was not bringing up the window on top
varMainWindow20=false;	
	if (varMainWindow20 == true){
		mainWindow.close();
		mainWindow = window.open(content,'popup','width=800,height=360,status=yes,toolbar=yes,menubar=no,scrollbars=yes,resizable=yes');
		varMainWindow20=true;
		mainWindow.focus();
		mainWindow.focus();		
		mainWindow.focus();				
	}else{
		mainWindow = window.open(content,'popup','width=800,height=360,status=yes,toolbar=yes,menubar=no,scrollbars=yes,resizable=yes');
		varMainWindow20   = true;
		mainWindow.focus();
		mainWindow.focus();		
		mainWindow.focus();						
	}
}