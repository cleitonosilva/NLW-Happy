const options = {
    dragging: false,
    touch: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

// criando mapa
const map = L.map("mapid", options).setView([-22.7781015,-43.3810486], 13);

// criando titulo do mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// // criando icone
const icon = L.icon({
    iconUrl:"../public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})




// criando uma marca de localização no mapa
L.marker([-22.7784391,-43.3806136], {icon})
  .addTo(map)
  .bindPopup(popup)
