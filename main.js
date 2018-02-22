 function initMap() {

     //Map options
     var options = {
         zoom: 8,
         center: {
             lat: 55.873543,
             lng: -4.289058
         }
     }

     // New Map
     var map = new
     google.maps.Map(document.getElementById('map'), options);


     // Add marker
     var marker = new google.maps.Marker({
         position: {
             lat: 55.8651,
             lng: -4.258
         },
         map: map
     });

     var infoWindow = new google.maps.InfoWindow({
         content: '<h1> City Centre </h1>'

     });

     marker.addListener('click', function() {
         infoWindow.open(map, marker);
     });
 }