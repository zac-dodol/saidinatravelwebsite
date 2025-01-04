 
 var pageConstant = 300;
 var baseCost = 400;
 
 var responsivePrice = 1000;
 
 var designPrices= new Array();
 designPrices["design1"]= 1500;
 designPrices["design2"]=200;

 
 var ecPrices = new Array();
 ecPrices["ec1"]=0;
 ecPrices["ec2"]=1500;
 ecPrices["ec3"]=2500;
 
 var seoPrices = new Array();
 seoPrices["seo1"]=400;
 seoPrices["seo2"]=400;
 seoPrices["seo3"]=300;
 
 var extraPrices = new Array();
 extraPrices["extra1"]=100;
 extraPrices["extra2"]=700;
 extraPrices["extra3"]=1000;
 extraPrices["extra4"]=50;
 extraPrices["extra5"]=200;
 
 var responsiveClicked = false;
 
 
 var durationConstant = 3000;
 var trainerConstant = 500;
 
 var durationPrices = new Array();
 durationPrices["1 day"] =  1;
 durationPrices["2 days"] =  2;
 durationPrices["3 days"] =  3; 
 durationPrices["4 days"] =  4;
 durationPrices["5 days"] =  5;
 durationPrices["6 days"] =  6;
 durationPrices["7 days"] =  7;
 
 var modulesPrices = new Array();
 modulesPrices["Basic"]=2000;
 modulesPrices["Intermediate"]=3500;
 modulesPrices["Advanced"]=5000;
 modulesPrices["Custom"]=7000;
 
 
 function IsNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}
 
function getWebsitePagePrices()
{
    var websitePageTotalPrice=0;
    var f = document.forms["calForm"];
    var selectedPages = f.elements["websitePage"];
    var numpages = document.getElementById("websitePage").value;
	
	
	if(IsNumeric(numpages) && numpages > 0)
	{
	websitePageTotalPrice =  numpages * pageConstant;
	}
	
	else {
	document.getElementById("websitePage").value = "1";	
	websitePageTotalPrice = pageConstant;
	}

    return websitePageTotalPrice;
}


 function getDesignPrices()
{
    var designTotalPrice=0;
    var f = document.forms["calForm"];
    var selectedDesign = f.elements["design"];
    designTotalPrice = designPrices[selectedDesign.value];

    return designTotalPrice;
}

function getECPrices()
{  
    var ecTotalPrice=0;
    var f = document.forms["calForm"];
    var selectedEC = f.elements["ec"];
    for(var i = 0; i < selectedEC.length; i++)
    {
        if(selectedEC[i].checked)
        {
            ecTotalPrice = ecPrices[selectedEC[i].value];
            break;
        }
    }
    return ecTotalPrice;
}

function getSEOPrices()
{  
    var seoTotalPrice=0;
    var f = document.forms["calForm"];
    var selectedSEO = f.elements["seo"];
    for(var i = 0; i < selectedSEO.length; i++)
    {
        if(selectedSEO[i].checked)
        {
            seoTotalPrice += seoPrices[selectedSEO[i].value];
        }
    }
    return seoTotalPrice;
}

function getExtraPrices()
{  
    var extraTotalPrice=0;
    var f = document.forms["calForm"];
    var selectedExtra = f.elements["extra"];
    for(var i = 0; i < selectedExtra.length; i++)
    {
        if(selectedExtra[i].checked)
        {
            extraTotalPrice += extraPrices[selectedExtra[i].value];
        }
    }
    return extraTotalPrice;
}

function getResponsivePrice() {
	
   var el = document.getElementById("addResponsive");
   if (el.firstChild.data == "+ Add") 
   {
       el.firstChild.data = "Remove";
	   responsiveClicked = true;
	   calculateTotalWeb();
   }
   else 
   {
     el.firstChild.data = "+ Add";
	 responsiveClicked = false;
	 calculateTotalWeb();
   }
}

function checkNoParticipant()
{
    var participant = document.getElementById("participant").value;	
	
	if(!(IsNumeric(participant) && participant > 50))
		document.getElementById("participant").value = "50";	
}

function checkLocation() {
	if( document.getElementById("location").value == "")
		document.getElementById("location").value = "HQ";
}

function getDurationPrices()
{
    var durationTotalPrice=0;
    var f = document.forms["calForm2"];
    var selectedDuration = f.elements["duration"];
    durationTotalPrice = durationPrices[selectedDuration.value]*durationConstant;

    return durationTotalPrice;
}

function getModulesPrices()
{
    var modulesTotalPrice=0;
    var f = document.forms["calForm2"];
    var selectedModules = f.elements["modules"];
    modulesTotalPrice = modulesPrices[selectedModules.value];

    return modulesTotalPrice;
}

function getTrainerPrices()
{
    var trainerTotalPrice=0;
    var f = document.forms["calForm2"];
    var selectedTrainer = f.elements["trainer"];
    var trainer = document.getElementById("trainer").value;
	
	
	if(IsNumeric(trainer) && trainer > 0)
	{
	trainerTotalPrice =  (trainer-1) * trainerConstant ;
	}
	
	else {
	document.getElementById("trainer").value = "1";	
	trainerTotalPrice = 0;
	}

    return trainerTotalPrice;
}

function calculateTotalWeb() {
	var grandTotal = baseCost + getWebsitePagePrices() + getDesignPrices() + getECPrices() + getSEOPrices() + getExtraPrices();
	if (responsiveClicked) {
		grandTotal += responsivePrice;
	}
    var divobj = document.getElementById('total');
    
    divobj.innerHTML = "RM"+grandTotal*.5 + " to " + "RM"+grandTotal;

}

function calculateTotalTraining() {
	var grandTotal = getDurationPrices() + getModulesPrices() + getTrainerPrices();
    var divobj = document.getElementById('total2');
    
    divobj.innerHTML = "RM"+grandTotal*0.8 + " to " + "RM"+grandTotal*1.2;

}

function getQuotation(p) {
	var name = prompt("Enter your full name");
	if(name) {
		var email = prompt("Enter your email");
		if(email){
			var phone = prompt("Enter your phone number");
			if(phone){
				if(confirm("Your Name is " + name + "\nYour E-mail is " + email + "\nYour Phone Number is " + phone + "\n\nDo you want to proceed?")){
					swap("webForm", "quotation")
					var temp = "Quotation <br><br> Name: " + name + "<br>" + "Email: " + email + "<br>" + "Phone Number: " + phone + "<br>" + "<br>";
					
					if( p == "web")
						showQuotation(temp);
					else if (p == "training")
						showQuotation2(temp);
				}
			}
		}
	}	
	
}

function swap(a,b) {
	document.getElementById(a).style.display = 'none';
    document.getElementById(b).style.display = 'block';
    
}

function showQuotation(temp) {
	temp += "Website Details <br> No. of Page(s): " + document.getElementById("websitePage").value + "<br>";

	if( document.getElementById("design").value == "design1" )
		temp += "Design Type: Custom Design <br>";
	else
		temp += "Design Type: Template <br>";
		
	if(responsiveClicked)
		temp += "Responsive Design: Yes <br>";
	else
		temp += "Responsive Design: No <br>";
		
	var list = document.getElementsByName("ec");	
	var ecArray = ["No", "Yes", "Customizable"]
	for(var i=0; i<list.length; i++) {
		if(list[i].checked) {
			temp += "E-Commerce: " + ecArray[i] + "<br>";
		}
	}
	
	var list = document.getElementsByName("seo");
	var count = 0;
	temp += "Search Engine Optimization: <br>" ;
	var seoArray = ["On-Page SEO", "Backlink Building", "Article Writing"]
	for(var i=0; i<list.length; i++) { 
		if(list[i].checked) {
			temp += ">>> " + seoArray[i] + "<br>";
			count++;
		}
	}
	if( count == 0)
		temp += ">>> None <br>"
		
	var list = document.getElementsByName("extra");
	var count = 0;	
	temp += "Extra Features: <br>" ;
	var extraArray = ["Social Media Integration", "Forums", "Live Chat", "Google Analytics", "Banner Slideshow"]
	for(var i=0; i<list.length; i++) { 
		if(list[i].checked) {
			temp += ">>> " + extraArray[i] + "<br>";
			count++;
		}
	}
	if( count == 0)
		temp += ">>> None <br>"

	temp += "Estimate Price: " + document.getElementById("total").innerHTML + "<br><br><"
	temp += "input type='button' onclick='location.reload()'value='Return' /><input type='button' onclick='cont()' value='Continue' />"
    document.getElementById("quotation").innerHTML = temp;
	
}

function load() {
location.reload();
}
function showQuotation2(temp) {
	temp += "Training Details <br> No. of Participants: " + document.getElementById("participant").value + "<br>";
	temp += "Location of Training: " + document.getElementById("location").value + "<br>";
	temp += "Duration: " + document.getElementById("duration").value  + "<br>";
	temp += "Modules: " + document.getElementById("modules").value  + "<br>";
	temp += "Number of Trainer(s): " + document.getElementById("trainer").value + "<br>";
	temp += "Estimate Price: " + document.getElementById("total2").innerHTML + "<br><br><"
	temp += "input type='button' onclick='load()'value='Return' /><input type='button' onclick='cont()' value='Continue' />"
    document.getElementById("quotation").innerHTML = temp;
}

function cont() {
	alert("Thank you for placing your order with us! The quotation will be emailed to you shortly. Please ensure that all the information is correct and up to date. Thank you.")
	location.reload();
}



