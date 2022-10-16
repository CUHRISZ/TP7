
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



window.onload = function() {
    
  document.querySelector("body").innerHTML += "<h4>Terrific red velvet cupcakes in 40 minutes!</h4>";
  
  document.querySelector("#heading").classList.add("tp");
  // java uses css queryselector to find thing, and find classes attached, and add tp
  
  document.querySelector("#heading").onclick = function() {
    this .classList.toggle("red");
  }
  // java uses css queryselector to find thing and adds an onclick event which toggles the .red class
  
  
  // had to format like this due to HTML
  document.querySelector("#cakeingredients").onclick = function() {
    this .classList.toggle("show");
  }
  document.querySelector("#frostingingredients").onclick = function() {
    this .classList.toggle("show");
  }
  document.querySelector("#directions").onclick = function() {
    this .classList.toggle("show");
  }  

  loadFileInto("cakeingredients.html", "#cakeingredients ul");
  loadFileInto("frostingingredients.html", "#frostingingredients ul");
  loadFileInto("directions.html", "#directions ol");
}

// classlist.toggle -> toggles class