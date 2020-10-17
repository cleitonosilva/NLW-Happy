// criando mapa
const map = L.map("mapid").setView([-22.802805,-43.3705181], 13);

// criando titulo do mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// // criando icone
const icon = L.icon({
    iconUrl:"../public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// criando o popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240,    
}).setContent('Associação Evangélica Projeto Criança Feliz <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')


// criando uma marca de localização no mapa
L.marker([-22.7784391,-43.3806136], {icon})
  .addTo(map)
  .bindPopup(popup)
