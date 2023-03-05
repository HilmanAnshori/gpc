let map;

function initMap(kota) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(kota.lat, kota.lng),
    zoom: kota.zoom,
  });

  const image = "https://raw.githubusercontent.com/HilmanAnshori/gpc/main/img/pin.png";
  
  // Create markers.
  for (let i = 0; i < kota.location.length; i++) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(kota.location[i].lat, kota.location[i].lng),
      map: map,
      icon: image,
    });
    console.log(kota.location[i].lat);
  }
}

$.getJSON('data/cities.json', function(data) {
    //console.log(data);

    var text = "";
    for (let i = 0; i < data.cities.length; i++) {
        text = text +
                '<option value="' + i + '">' + data.cities[i] + '</option>';
    }

    //console.log(text);
    $("#cities").html(text);
    
    var kota = $("#cities option:selected").text()
    //console.log(kota);
    getCity(kota);
});



//window.initMap = initMap;

function getCity(kota){
    $.getJSON('data/' + kota + '.json', function(data) {
        console.log(data);
    
        window.initMap = initMap(data);
        
    });
}


