
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className.indexOf(" responsive") !== -1) {
    	x.className = "";
    } else {
    	x.className += " responsive";
    }  
}
