/*     THIS FILE CONTAINS SCRIPT WHICH SHOULD RUN AS THE DOCUMENT IS LOADED     */

var global_layerTracker;
var global_imgTracker;
var global_layerTracker2; // maintain 2 independent expand layers
var global_imgTracker2; // maintain 2 independent expand layers
var myFlag = false;
var myFlag2 = false;   // maintain 2 independent expand layers
var counter = 0;
var stillCounter = 0;

/*		numOfLayer -- the number of the layer being expanded or collapsed
		willNotClose:
				1 - do not close other layers, that also have the parameter of 1
				2 - 		comment later
				3 - this indicates that this is a language layer
*/

function expandOneLayer(numOfLayer, willNotClose){

	var myLayer = "ChildLyr" + numOfLayer;
	var mySign = "CL" + numOfLayer;
	
	if (willNotClose == 3) {
		expandLanguageLayer(numOfLayer, willNotClose);
		
	}else if(willNotClose == 2){
		expandAnyLayer(numOfLayer, willNotClose)
	
	}else if(willNotClose == 1){
		myFlag = false;
		counter = counter + 1;
		expandLayerz(numOfLayer, willNotClose);
			
	}else{
		expandDefaultOptions(numOfLayer);
	}
}

// handles second independent layer if needed
function expandOneLayer2(numOfLayer){
	
	expandDefaultOptions2(numOfLayer);
	
}

function expandLayer(myLink,layer,sign){
		var myLayer = layer + "";
		var mySign = sign + "";
		if((document.getElementById(myLayer).style.display) == 'none'){
			document.getElementById(myLayer).style.display = 'block';
			myLink.innerHTML='less info';
			document.getElementById(mySign).src="assets/img/minus.gif";
		}else{
			document.getElementById(myLayer).style.display = 'none';
			myLink.innerHTML='more info';
			document.getElementById(mySign).src="assets/img/plus.gif";
			
		}
		
}

function expandLayerz(numOfLayer, willNotClose){
	
	if(myFlag == true){
	
		resetPreviousLyr();
	}
	
	var myLayer = "ChildLyr" + numOfLayer;
	var mySign = "CL" + numOfLayer; 
	
	
	if((document.getElementById(myLayer).style.display) == 'none')
	{
		document.getElementById(myLayer).style.display = 'block';
		document.getElementById(mySign).src="assets/img/minus.gif";
		myFlag = false;
	}
	else
	{
		document.getElementById(myLayer).style.display = 'none';
		document.getElementById(mySign).src="assets/img/plus.gif";
	}
	
}

function expandDefaultOptions(numOfLayer, willNotClose){
		
		var myLayer = "ChildLyr" + numOfLayer;
		var mySign = "CL" + numOfLayer;

		if(myFlag == true && stillCounter == 0){
			resetPreviousLyr();
		}
		
		if(willNotClose == 2 && stillCounter == 1){
			myFlag = false;
		}	
		
		if(counter > 0){
			myFlag = true;
			resetPreviousLyr();
		}
	
		counter = 0;

		if(myLayer==global_layerTracker && myFlag==true){
		
			document.getElementById(global_layerTracker).style.display = 'none';
			document.getElementById(global_imgTracker).src="assets/img/plus.gif";
			myFlag = false; 
		
		}else{                
		
			document.getElementById(myLayer).style.display = 'block';
			document.getElementById(mySign).src="assets/img/minus.gif";
			myFlag = true;		
		
		
		}           
		global_layerTracker = myLayer;
		global_imgTracker = mySign;
	
}

// handles second independent layer if needed
function expandDefaultOptions2(numOfLayer){
		
		var myLayer = "ChildLayr" + numOfLayer;
		var mySign = "CLa" + numOfLayer;
	
		if(myFlag2 == true && stillCounter == 0){
			resetPreviousLyr2();
		}

		if(myLayer==global_layerTracker2 && myFlag2==true){
		
			document.getElementById(global_layerTracker2).style.display = 'none';
			document.getElementById(global_imgTracker2).src="assets/img/plus.gif";
			myFlag2 = false; 
		
		}else{                
		
			document.getElementById(myLayer).style.display = 'block';
			document.getElementById(mySign).src="assets/img/minus.gif";
			myFlag2 = true;			
		}           
		global_layerTracker2 = myLayer;
		global_imgTracker2 = mySign;
}

function resetPreviousLyr(){
	document.getElementById(global_layerTracker).style.display = 'none';
	document.getElementById(global_imgTracker).src="assets/img/plus.gif";
}

//handles second independent layer if needed
function resetPreviousLyr2(){
	document.getElementById(global_layerTracker2).style.display = 'none';
	document.getElementById(global_imgTracker2).src="assets/img/plus.gif";
}

function expandAnyLayer(numOfLayer, willNotClose){
	
var myLayer = "ChildLyr" + numOfLayer;
var mySign = "CL" + numOfLayer;


        if((document.getElementById(myLayer).style.display) == 'none'){
	        document.getElementById(myLayer).style.display = 'block';
            document.getElementById(mySign).src="assets/img/minus.gif";
			stillCounter = 1;
        }else{
          document.getElementById(myLayer).style.display = 'none';
          document.getElementById(mySign).src="assets/img/plus.gif";
		  stillCounter = 0;
        }
		
}

function expandLanguageLayer(numOfLayer, willNotClose){
	/*For language layers, at least one needs to be showing (can't collapse both layers)*/
	/* check to see if the layer clicked is collapsed, if so, ignore command.
	otherwise call expandDefaultOptions(numOfLayer, willNotClose)*/
	myFlag = true;
	var myLayer = "ChildLyr" + numOfLayer;
	if((document.getElementById(myLayer).style.display) == 'none'){
			expandDefaultOptions(numOfLayer, willNotClose);
	}
}

//elements = document.getElementById("CL1");
//if (elements.length>0) {
if (document.getElementById('CL1')){
	if (document.getElementById('CL1').height == "1"){
		document.getElementById('ChildLyr1').style.display = 'block';
		global_layerTracker = 'ChildLyr1';
		global_imgTracker = 'CL1';
		myFlag = true;
	}
}

function forceFalse(){
	myFlag = false;
}