
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

//TP7 NEW REIPE OBJECT: when making recipe -> function = recipe -> pass information in order -> store them as variables within recipe
//my website is a bit different in format         document.querySelector("#cupcake").innerHTML = this.image;
function Recipe(recipeName, contributorName, imageURL, cakeURL, frostingURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.image = imageURL;
  this.cake = cakeURL;
  this.frosting = frostingURL;
  this.directions = directionsURL;
   
  this.displayRecipe = function() {
    
    document.querySelector("h1").innerHTML = this.recipeName; 
    document.querySelector("#name").innerHTML = this.contributor; 
    loadFileInto(this.cake, "#cakeingredients ul");
    loadFileInto(this.frosting, "#frostingingredients ul");    
    loadFileInto(this.directions, "#directions ol");    
    
    
  }
  
}

RedVelvet = new Recipe("Red Velvet Cupcakes","Chris", " ", "cakeingredients.html","frostingingredients.html","directions.html");
Tacodip = new Recipe("Taco dip","Camryn", " ", "tacoingredients.html","tacoequip.html","tacodir.html");
Caramel = new Recipe("Caramel Flan","Bert", " ", "carmameling.html","caramelequip.html","carameldir.html");

window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    RedVelvet.displayRecipe();
  }
  document.querySelector("#secondRecipe").onclick = function() {
    Tacodip.displayRecipe();
  }
  document.querySelector("#thirdRecipe").onclick = function() {
    Caramel.displayRecipe();
  }
  
}
