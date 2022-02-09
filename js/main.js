document.onload = function() {

};

function info(personaje){
    var id = personaje.id;
    if (!document.getElementById("info-container")) {
        var infoContainer = document.createElement("section");
        infoContainer.className = "info-container";
        infoContainer.id = "info-container";
        document.body.appendChild(infoContainer);
    } else {
        document.getElementById("info-container").innerHTML = "";
    }
    var h1 = document.createElement("h1");
    var nombre = function(){
        if (id == "chewbaca") {
            return "Chewbaca";
        } else if (id == "darthvader"){
            return "Darth vader";
        } else if (id == "rd2d"){
            return "R2-D2";
        } else if (id == "c3po") {
            return "C-3Po";
        } else {
            return "yoda";
        }
    }
    h1.innerHTML = "STAR WARS - " + nombre();
    document.getElementById("info-container").appendChild(h1);  
    
}