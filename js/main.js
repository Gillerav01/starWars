async function info(personaje) {
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
    var nombre = function () {
        if (id == "chewbaca") {
            return "Chewbacca";
        } else if (id == "darthvader") {
            return "Darth vader";
        } else if (id == "rd2d") {
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
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var datos = data.results[0];
            var naves = datos.starships || [];
            var peliculas = datos.films || [];
            var especies = datos.species || [];
            var vehiculos = datos.vehicles || [];
            var origen = datos.homeworld || [];
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
            document.getElementById("masInformacion").addEventListener("click", function () {
                if (document.getElementById("informacion")) {
                    document.getElementById("informacion").remove();
                }
                var informacion = document.createElement("section");
                informacion.className = "informacion";
                informacion.id = "informacion";
                var h1 = document.createElement("h1");
                h1.innerHTML = "información";
                informacion.appendChild(h1);
                document.getElementById("main").appendChild(informacion);
                // document.body.appendChild(informacion);
                if (naves.length > 0) {
                    var seccionNaves = document.createElement("section");
                    seccionNaves.className = "seccionNaves";
                    seccionNaves.id = "seccionNaves";
                    var h1 = document.createElement("h1");
                    h1.innerHTML = "Naves";
                    seccionNaves.appendChild(h1);
                    for (var i = 0; i < naves.length; i++) {
                        fetch(naves[i])
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                var nave = data;
                                var articleNave = document.createElement("article");
                                var p = document.createElement("p");
                                p.innerHTML = "Nombre de la nave: " + nave.name;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Modelo de la nave: " + nave.model;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Fabricante de la nave: " + nave.manufacturer;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Precio: " + nave.cost_in_credits;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Cantidad de pasajeros: " + nave.passengers;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Cantidad de tripulantes: " + nave.crew;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Cantidad de carga: " + nave.cargo_capacity;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Velocidad maxima de la nave en la atmosfera: " + nave.max_atmosphering_speed;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Clase de la nave: " + nave.starship_class;
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                if (nave.hyperdrive_rating) {
                                    p.innerHTML = "Rating de la hipervelocidad: " + nave.hyperdrive_rating;
                                }
                                articleNave.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Megaligth por hora: " + nave.MGLT;
                                articleNave.appendChild(p);

                                seccionNaves.appendChild(articleNave);
                            });
                    }
                    informacion.appendChild(seccionNaves);
                }
                if (peliculas.length > 0) {
                    for (var i = 0; i < peliculas.length; i++) {
                        var seccionPeliculas = document.createElement("section");
                        seccionPeliculas.className = "seccionPeliculas";
                        seccionPeliculas.id = "seccionPeliculas";
                        var h1 = document.createElement("h1");
                        h1.innerHTML = "Peliculas";
                        seccionPeliculas.appendChild(h1);
                        fetch(peliculas[i])
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                var pelicula = data;
                                var articlePelicula = document.createElement("article");
                                var h3 = document.createElement("h3");
                                h3.innerHTML = "Titulo de la pelicula: " + pelicula.title;
                                articlePelicula.appendChild(h3);
                                var p = document.createElement("p");
                                p.innerHTML = "Introduccion: " + pelicula.opening_crawl;
                                articlePelicula.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Director de la pelicula: " + pelicula.director;
                                articlePelicula.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Productor de la pelicula: " + pelicula.producer;
                                articlePelicula.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Fecha de estreno: " + pelicula.release_date;
                                articlePelicula.appendChild(p);
                                seccionPeliculas.appendChild(articlePelicula);
                            });
                    }
                    informacion.appendChild(seccionPeliculas);
                }
                if (especies.length > 0) {
                    for (var i = 0; i < peliculas.length; i++) {
                        var seccionEspecies = document.createElement("section");
                        seccionEspecies.className = "seccionEspecies";
                        seccionEspecies.id = "seccionEspecies";
                        var h1 = document.createElement("h1");
                        h1.innerHTML = "Especies";
                        seccionEspecies.appendChild(h1);
                        fetch(especies[i])
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                var especie = data;
                                var articleEspecie = document.createElement("article");
                                var p = document.createElement("p");
                                p.innerHTML = "Nombre de la especie: " + especie.name;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Clase de la especie: " + especie.classification;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Designacion: " + especie.designation;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Altura media de la especie: " + especie.average_height;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Colores de piel: " + especie.skin_colors;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Colroes de pelo: " + especie.hair_colors;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Color de ojos: " + especie.eye_colors;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Esperanza de vida: " + especie.average_lifespan;
                                articleEspecie.appendChild(p);
                                var p = document.createElement("p");
                                p.innerHTML = "Lenguaje: " + especie.language;
                                articleEspecie.appendChild(p);

                                seccionEspecies.appendChild(articleEspecie);
                            });
                    }
                    informacion.appendChild(seccionEspecies);
                    if (vehiculos.length > 0) {
                        for (var i = 0; i < vehiculos.length; i++) {
                            var seccionVehiculos = document.createElement("section");
                            seccionVehiculos.className = "seccionVehiculos";
                            seccionVehiculos.id = "seccionVehiculos";
                            var h1 = document.createElement("h1");
                            h1.innerHTML = "vehiculos";
                            seccionVehiculos.appendChild(h1);
                            fetch(vehiculos[i])
                                .then(function (response) {
                                    return response.json();
                                })
                                .then(function (data) {
                                    var vehiculo = data;
                                    var articleVehiculo = document.createElement("article");
                                    var p = document.createElement("p");
                                    p.innerHTML = "Nombre del vehiculo: " + vehiculo.name;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Modelo del vehiculo: " + vehiculo.model;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Fabricante del vehiculo: " + vehiculo.manufacturer;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Precio: " + vehiculo.cost_in_credits;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Largo: " + vehiculo.length;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Velocidad maxima en atmosfera: " + vehiculo.max_atmosphering_speed;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Tripulantes: " + vehiculo.crew;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Pasajeros: " + vehiculo.passengers;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Carga maxima: " + vehiculo.cargo_capacity;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Consumibles: " + vehiculo.consumables;
                                    articleVehiculo.appendChild(p);
                                    var p = document.createElement("p");
                                    p.innerHTML = "Clase de vehiculo: " + vehiculo.vehicle_class;
                                    articleVehiculo.appendChild(p);
                                    seccionVehiculos.appendChild(articleVehiculo);
                                });
                        }
                        informacion.appendChild(seccionVehiculos);
                    }
                }
            })
        });
}