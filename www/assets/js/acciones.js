var map, lat, lng;
var rutas;
var rutaX;

var imagePM = 'http://chocope.com/beachflag.jpg';

$(document).ready(function() {  

    function oseahello() {
        console.log('hi')
        rutas = new Array();
        localStorage.rutas = JSON.stringify(rutas);
    };

    
    /* LA BURGER */
    var bittee = 1;
        $( ".btn_mordida" ).click(function() {
        console.log('bite bite')
        if (bittee == 1) { 
            $(".burger").addClass("bite");
            bittee = 2;
            /*$(".nav_items").slideToggle('slow');*/
            //$('.nav_items').css('display','inline-block');
            $('.nav_items').css('right','0');
                
        }
        else {
            $(".burger").removeClass("bite");
            bittee = 1;
            //$(".nav_items").slideToggle('slow');
            //$('.nav_items').css('display','none');
            $('.nav_items').css('right','100%');
        };
    });



});

$(function() {
    function guardaRutas() {
        console.log(rutas);
        localStorage.rutas = JSON.stringify(rutas);
    }

    function cargaRutas() {
        // carga las rutas, despues de revisar si hay o no hay
        if (localStorage.rutas) {
            rutas = JSON.parse(localStorage.rutas);
        } else {
            rutas = new Array();
        }
    }

    function muestraRutas() {
        // muestra las rutas, despues de revisar si hay guardadas
        var inicio, inicio_reiniciar;
        for (var i = 0; i < rutas.length; i++) {
            if (rutas[i]) {
                inicio = rutas[i];
                map.addMarker({

                    lat: inicio[0],
                    lng: inicio[1],
                });
                if (inicio_reiniciar) {
                    map.drawRoute({
                        origin: [inicio_reiniciar[0], inicio_reiniciar[1]],
                        destination: [inicio[0], inicio[1]],
                        travelMode: 'driving',
                        strokeColor: 'blue',
                        strokeOpacity: 0.42,
                        strokeWeight: 4,
                        
                    });
                }

                inicio_reiniciar = inicio;
            }
        }
        if (inicio) {
            lat = inicio[0];
            lng = inicio[1];

        }
    }
    function enlazarMarcador(e) {
        // muestra ruta entre marcas anteriores y actuales


        map.drawRoute({
            origin: [lat, lng], // origen en coordenadas anteriores
            // destino en coordenadas del click o toque actual

            destination: [e.latLng.lat(), e.latLng.lng()],
            travelMode: 'driving',
            strokeColor: 'red',
            strokeOpacity: 0.42,
            strokeWeight: 7,
            

        });

        lat = e.latLng.lat(); // guarda las coordenadass para marcar la siguiente
        lng = e.latLng.lng();


        map.addMarker({
            lat: lat,
            lng: lng,
                    suppressMarkers: true,
                    icon: imagePM,
            
        }); // pone marcador en el mapa

        rutas.push([lat, lng]);
        // guarda las coordenadass en el array rutas
        
        //localStorage.rutas = JSON.stringify(rutas);
        guardaRutas();
    };
   


    $("#reniniciar").on('click', function() { 
        if (rutas.length <= 1) {
            alert("Solo tienes un punto en el Mapa :)  Intenta agregando más");
        }
        else {
          var r = confirm("¿Deseas borrar todas las rutas?");
          if (r == true) {
            console.log("borradas");
              rutas = new Array();
              localStorage.rutas = JSON.stringify(rutas);
              geolocalizar();
          } else {
            console.log("no borradas");
          }
        };

    });
    $("#compactar").on('click', function() {          
        if (rutas.length <= 2) return;
        //rutas = new Array();
        var compp = [rutaX,rutas[rutas.length-1]];
        localStorage.rutas = JSON.stringify(compp);
        geolocalizar();
        console.log("compactada");
    });

$("#ptm").on('click', function() {          
        rutas.push([-12.0791321, -77.0628842]);
        localStorage.rutas = JSON.stringify(rutas); 
        geolocalizar();
        console.log("compactada");
    });

    function geolocalizar() {

        GMaps.geolocate({
            success: function(position) {
                // carga el mapa y las rutas, despues de revisar si hay alguna guardada
                cargaRutas();
                if (rutas.length > 0) {
                    lat = rutas[0][0];
                    lng = rutas[0][1];
                } else {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    rutas.push([lat, lng]);
                }
                rutaX = rutas[0];
                map = new GMaps({ // muestra mapa centrado en coords
                    el: '#map',
                    lat: lat,
                    lng: lng,
                    click: enlazarMarcador,

                    tap: enlazarMarcador
                });

                map.addMarker({
                    lat: lat,
                    lng: lng,

                }); // marcador en [lat, lng]

                muestraRutas();

            },
            error: function(error) {
                alert('Geolocalización falla: ' + error.message);
            },
            not_supported: function() {
                alert("Su navegador no soporta geolocalización");
            },
        });
    };
    geolocalizar();


});
