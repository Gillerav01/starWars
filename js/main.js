function info(personaje){
    var id = personaje.id;
    if (!document.getElementById("info-container")) {
        var infoContainer = document.createElement("section");
        infoContainer.className = "info-container";
        infoContainer.id = "info-container";
        document.getElementById("main").appendChild(infoContainer);
    } else {
        document.getElementById("info-container").innerHTML = "";
        if (document.getElementById("informacion")) {
            document.getElementById("informacion").remove();
        }
    }
    var h1 = document.createElement("h1");
    var nombre = function(){
        if (id == "chewbaca") {
            return "Chewbacca";
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
    fetch("https://swapi.dev/api/people/?search=" + nombre() + "&format=json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var datos = data.results[0];
        console.log(datos);
        var infoContainer = document.getElementById("info-container");
        var p = document.createElement("p");
        p.innerHTML = "Altura: " + datos.height;
        infoContainer.appendChild(p);
        var p = document.createElement("p");
        p.innerHTML = "Peso: " + datos.mass;
        infoContainer.appendChild(p);
        var p = document.createElement("p");
        p.innerHTML = "Color de pelo: " + datos.hair_color;
        infoContainer.appendChild(p);
        var p = document.createElement("p");
        p.innerHTML = "Color de ojos: " + datos.eye_color;
        infoContainer.appendChild(p);
        var p = document.createElement("p");
        p.innerHTML = "Color de piel: " + datos.skin_color;
        infoContainer.appendChild(p);
        var p = document.createElement("p");
        p.innerHTML = "Genero: " + datos.gender;
        infoContainer.appendChild(p);
        var p = document.createElement("p");
        p.innerHTML = "Cumpleaños: " + datos.birth_year;
        infoContainer.appendChild(p);
        var section = document.createElement("section");
        section.id = "moreInfo";
        section.className = "moreInfo";
        var article = document.createElement("article");
        article.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="masInformacion" class="icon icon-tabler icon-tabler-arrow-down-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="9" /> <line x1="8" y1="12" x2="12" y2="16" /> <line x1="12" y1="8" x2="12" y2="16" /> <line x1="16" y1="12" x2="12" y2="16" /> </svg>';
        infoContainer.appendChild(article);
        document.getElementById("masInformacion").addEventListener("click", function(){
            if (document.getElementById("informacion")) {
                document.getElementById("informacion").remove();
            }
            var informacion = document.createElement("section");
            informacion.className = "informacion";
            informacion.id = "informacion";
            var h1 = document.createElement("h1");
            h1.innerHTML = "información";
            informacion.appendChild(h1);
            document.body.appendChild(informacion);
        })          
    });
}