console.log('working?')

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0ZXJjcm9zdGEiLCJhIjoiY2szNG53bW82MHpzMjNubm84cjY2dnl5byJ9.x8k3s9FRtcji8907pDjdaA';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

buildMarker("Activity", [-74.009151, 40.705086], map);







// const iconURLs = {
//     Activity: 'http://i.imgur.com/WbMOfMl.png',
//     Hotel: 'http://i.imgur.com/D9574Cu.png',
//     Restaurant: 'http://i.imgur.com/cqR6pUI.png'
// }

// function buildMarker (types, coords) {
//     if (types === 'Activity') {
//         const markerDomEl = document.createElement('div');
//         markerDomEl.style.width = '32px';
//         markerDomEl.style.height = '39px';
//         markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        
//         new mapboxgl.Marker(markerDomEl).setLngLat([coords]).addTo(map); 
//     };
//     if (types === 'Hotel') {
//         const hotel = document.createElement('div');
//         hotel.style.width = '32px';
//         hotel.style.height = '39px';
//         hotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

//         new mapboxgl.Marker(hotel).setLngLat([coords]).addTo(map);
//     };
//     if (types === 'Restaurant') {
//         const restaurant = document.createElement('div');
//         restaurant.style.width = '32px';
//         restaurant.style.height = '39px';
//         restaurant.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

//         new mapboxgl.Marker(restaurant).setLngLat([coords]).addTo(map);
//     }

// }
// buildMarker(Restaurant, [-74.009, 40.705])
module.exports = buildMarker

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

// const hotel = document.createElement('div');
// hotel.style.width = '32px';
// hotel.style.height = '39px';
// hotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

// new mapboxgl.Marker(hotel).setLngLat([-87.6354, 41.8885]).addTo(map);

// const restaurant = document.createElement('div');
// restaurant.style.width = '32px';
// restaurant.style.height = '39px';
// restaurant.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(restaurant).setLngLat([-75.009, 41.705]).addTo(map);


