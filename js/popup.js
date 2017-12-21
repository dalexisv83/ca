var varMainWindow;

function rover_popLink(url)
{
window.open('/en-us/res/rover_tools/popup_page/popup_page.htm?url='+url);
} 


function rover_pop_at(page,pageWidth,pageHeight,pageName) {
	if(isNaN(pageWidth) == true){
		pageWidth = 800;
	}
	if(isNaN(pageHeight) == true){
		pageHeight = 600;
	}
	if(isNaN(pageName) == true){
		var pageName = '_blank';
	}
	width = pageWidth;
	height = pageHeight;
                page = '/en-us/res/' + page;
	newWin = window.open(page,pageName, ",status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes width="+width+",height="+height+"");
	newWin.focus();
}





function pop_tool(url){
	if (url.match('sell_premium_channel_tool')){
		newGenericWin(url,'newShoppersWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no',648,510,'center'); // sell programming tool
	}else if (url.match('sfss')){
		newGenericWin(url,'newSFSSWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no',800,660,'center'); // SFSS
	}else if (url.match('/game_locator')){
		pop_at(url,845,600);//293,307
	}else if (url.match('/package_tool')){
		pop_at(url,975,700);//293,307
	}else if (url.match('/weather')){
		newGenericWin(url,'newWeatherWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no',293,307,'center'); // sell programming tool
	}else if (url.match('/end_date_calculator/')){
		newGenericWin(url,'newShoppersWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no',285,187,'center'); // 
	}else if (url.match('sfss')){
		newGenericWin(url,'newSFSSWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no',788,645,'center'); // 
	}else if (url.match('abp')){
		newGenericWin(url,'newABPWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no',400,241,'center'); // 
	}else if (url.match('/rcc_tool')){
		var space = parseInt(screen.height);
		space = (space-200)
		newGenericWin(url,'newRCCWin','status=no,toolbar=no,menubar=no,resizable=no,scrollbars=yes',821,space,'center'); // 
	}else if (url.match('navigator')){
		var space = parseInt(screen.height);
		space = (space-140)
		newGenericWin(url,'navigatorWin','status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=yes',815,780,'center'); // 
	}else{
		pop_at(url,823,605);
	}
}

function pop_at(page,pageWidth,pageHeight,pageName) {
	if(isNaN(pageWidth) == true){
		pageWidth = 800;
	}
	if(isNaN(pageHeight) == true){
		pageHeight = 600;
	}
	if(isNaN(pageName) == true){
		var pageName = '_blank';
	}
	width = pageWidth;
	height = pageHeight;
	newWin = window.open(page,pageName, ",status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes width="+width+",height="+height+"");
	newWin.focus();
}

function pop_at_noresize(page,pageWidth,pageHeight,pageName) {
	if(isNaN(pageWidth) == true){
		pageWidth = 800;
	}
	if(isNaN(pageHeight) == true){
		pageHeight = 600;
	}
	if(isNaN(pageName) == true){
		var pageName = '_blank';
	}
	width = pageWidth;
	height = pageHeight;
	newWin = window.open(page,pageName, ",status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no width="+width+",height="+height+"");
	newWin.focus();
}

function pop_at_toolbar(page,pageWidth,pageHeight,pageName) {
	if(isNaN(pageWidth) == true){
		pageWidth = 800;
	}
	if(isNaN(pageHeight) == true){
		pageHeight = 600;
	}
	if(isNaN(pageName) == true){
		var pageName = '_blank';
	}
	width = pageWidth;
	height = pageHeight;
	newWin = window.open(page,pageName, ",status=no,toolbar=yes,menubar=no,location=no,scrollbars=yes,resizable=yes width="+width+",height="+height+"");
	newWin.focus();
}

function pop_menu(parent_category,sub_category, newWin){
	if (newWin){
		revisedNewWin("/tools/menusXML/main_menu.html#parent_category=" + parent_category + "&sub_category=" + sub_category);
	}else{
		if ((typeof(window.parent.treeframe) != 'undefined') && (typeof(window.parent.treeframe.buildMenu) != 'undefined')){
			if ( location.href.match('/telco/') && (parent_category == 'BILLING')){
				window.parent.treeframe.buildMenu(parent_category,0);
			}else{
				window.parent.treeframe.buildMenu(parent_category,sub_category);
			}
		}else{
			location.href = "/tools/menusXML/main_menu.html#parent_category=" + parent_category + "&sub_category=" + sub_category;
			setTimeout('document.location.reload()',200);
		}
	}
}

function roverNewWin(content) {
	if(varMainWindow == null || varMainWindow.closed) {
		varMainWindow = window.open(content,'popup','width=800,height=300,status=no,toolbar=yes,menubar=no,scrollbars=yes,resizable=yes');
	}else{
		varMainWindow.location.href = content;
		varMainWindow.focus();
	}
}	

function revisedNewWin(content) {
	if(varMainWindow == null || varMainWindow.closed) {
		varMainWindow = window.open(content,'popup','width=800,height=300,status=no,toolbar=yes,menubar=no,scrollbars=yes,resizable=yes');
	}else{
		varMainWindow.location.href = content;
		varMainWindow.focus();
	}
}	

function revisedNewWin_1(content) {
	if(varMainWindow == null || varMainWindow.closed) {
		varMainWindow = window.open(content,'popup_1','width=780,height=575,status=no,toolbar=yes,menubar=no,scrollbars=yes,resizable=yes');
	}else{
		varMainWindow.location.href = content;
		varMainWindow.focus();
	}
}	

function newWinTechnical(content, parOpenNewWindow) {
	if (parOpenNewWindow==null){
		if(varMainWindow == null || varMainWindow.closed) {
			varMainWindow = window.open(content,'popup_1','width=800,height=300,status=no,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes');
		}else{
			varMainWindow.location.href = content;
			varMainWindow.focus();
		}
	}else{
		if(varMainWindow == null || varMainWindow.closed) {
			varMainWindow = window.open(content,'popup_2','width=800,height=300,status=no,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes');
		}else{
			varMainWindow.location.href = content;
			varMainWindow.focus();
		}
	}
}


function newGenericWin(theURL,winName,features, myWidth, myHeight, myPosition) { 
	if(window.screen){
		if(myPosition=="center"){ 
			var myLeft = (screen.width-myWidth)/2; 
			var myTop = (screen.height-myHeight)/2; 
			features+=(features!='')?',':''; 
			features+=',left='+myLeft+',top='+myTop; 
		}else if(myPosition=="topright"){ 
			var myLeft = (screen.width-myWidth-10); 
			var myTop = (0); 
			features+=(features!='')?',':''; 
			features+=',left='+myLeft+',top='+myTop; 
		}
	}
	varMainWindow=window.open(theURL,winName,features+',width='+myWidth+',height='+myHeight); 
	varMainWindow.focus();
	varMainWindow.focus();
	varMainWindow.focus();
} 

//function for opening the directv.com
var winDotCom;
function openDotCom(url){
	if (winDotCom==null || winDotCom.closed){
		winDotCom=window.open(url,"","top=60,left=80,width=800,height=600,status=no,toolbar=yes,menubar=no,resizable=yes,scrollbars=yes,");
		winDotCom.focus();
		winDotCom.focus();
		winDotCom.focus();
	}
	else{
		winDotCom.location.href=url
		winDotCom.focus();
		winDotCom.focus();
		winDotCom.focus();
	}
}

//function for resizing a popup to fit an image's size

   function PopupPic(sPicURL) { 
     window.open( "/en-us/res/rover_tools/popup_page/imagefit.htm?"+sPicURL, "",  
     "resizable=1,scrollbars=yes,HEIGHT=200,WIDTH=200"); 
   }

     function FitPic() { 
       iWidth = (NS)?window.innerWidth:document.body.clientWidth; 
       iHeight = (NS)?window.innerHeight:document.body.clientHeight; 
       iWidth = document.images[0].width - iWidth; 
       iHeight = document.images[0].height - iHeight; 
       window.resizeBy(iWidth, iHeight); 
       self.focus(); 
     }

function roverPopupPic(sPicURL) { 
     window.open( "/en-us/res/rover_tools/popup_page/imagefit.htm?"+sPicURL, "",  
     "resizable=1,scrollbars=yes,HEIGHT=200,WIDTH=200"); 
   }

     function FitPic() { 
       iWidth = (NS)?window.innerWidth:document.body.clientWidth; 
       iHeight = (NS)?window.innerHeight:document.body.clientHeight; 
       iWidth = document.images[0].width - iWidth; 
       iHeight = document.images[0].height - iHeight; 
       window.resizeBy(iWidth, iHeight); 
       self.focus(); 
     }

	 
	 
	 function Start(page) {
OpenWin = this.open(page, "_blank", "toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=823,height=605");
}

//example of newGenericWin(): 
//<a href="javascript:newGenericWin('/business/business-communication-291.html','newGenericWin','menubar=yes,toolbar=yes,location=yes,status=yes,scrollbars=yes,resizable=yes',300,500,'center');">your link</a>
