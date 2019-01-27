
// 	// Declare a function called readForm
// 	function readForm(){

// 	var Full name = document.querySelectorAll("input[type=text]")[0].value;
// 	var Email address = document.querySelectorAll("input[type=text]")[1].value;
// 	var Subject = document.querySelectorAll("input[type=text]")[3].value;
// 	var Message = document.querySelectorAll("input[type=text]")[4].value;



// 	// Grab the response area
// 	var responseArea = document.getElementById ("response");

// 	// create new <p> tag for name
// 	var first = document.createElement("p");

// 	// create the text that goes inside p tag (the name that we got from the input before)
// 	var firstContent = document.createTextNode (Full name + Email address + Subject + Message);

// 	// append that text to the <p> tag
// 	first.appendChild(firstContent);

// 	// finally, append the <p> tag to the body
// 	responseArea.appendChild(first);

// }


// 	// call readForm on submission 
// 	document.querySelector("form").addEventListener("submit", function(h){
// 		h.preventDefault();
// 		readForm();

// 	});



	
var megaMenu = document.getElementById("overlay"); //the overlay - creates an array of objects with this class name
var megaNav = document.querySelector("nav");
var ham_layers = document.getElementsByClassName("ham-layer"); //creates an array of objects that have the class name "ham_layer"
var toggle = false; //creates two states to keep track of when the hamburger menu is clicked.

function toggleHamMenu(){
//we have an on-click event listener in the html - default state (if it's false you change it to true)
  if (toggle == false){
    document.getElementById("top_bun").style.top = "4px";
    document.getElementById("top_bun").style.transform = "rotate(45deg)";
    document.getElementById("bottom_bun").style.top = "-4px";
    document.getElementById("bottom_bun").style.transform = "rotate(-45deg)";

    //loops through all element's with the class of "ham-layer" (top bun, meat, bottom bun) and changes their background color to white.
    for (var i = 0; i < ham_layers.length; i++){
      ham_layers[i].style.backgroundColor = "#212b36";
    }

    toggle = true;
    megaMenu.style.height = "400px";
    megaNav.style.marginTop = "150px";

  }else{
    //rotates and positions each layer of the hamburger. The "meat" layer reappears too.
    document.getElementById("top_bun").style.transform = "rotate(0deg)";
    document.getElementById("top_bun").style.top = "-0.05px";
    document.getElementById("bottom_bun").style.transform = "rotate(0deg)";
    document.getElementById("bottom_bun").style.top = "0.05px";

    //loops through all element's with the class of "ham-layer" (top bun, meat, bottom bun) and changes their background color to "grey".
    for (var i = 0; i < ham_layers.length; i++){
      ham_layers[i].style.backgroundColor = "#212b36";
    }

    toggle = false;
    megaMenu.style.height = "0vh";
    megaNav.style.marginTop = "-250px";
    // megaNav.style.marginTop = "-25vh"; //gives a height of 0 view height, so the user can't see it
  }
}





