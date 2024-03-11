require('dotenv').config()

async function initMap() {
  var mapOptions = {
      center: new google.maps.LatLng(53.286966, -6.2603), // New York coordinates
      zoom: 15,
      mapId: process.env.MAP_ID,
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}