var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXgfZUHkaqK9CozkO7JE9ekCAoBScQeXZOWC284tduZtZr9EFUzlJns9nd-Bl6A02v15OWbaRXGKXe/pub?output=csv';

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo
  })
}

window.addEventListener('DOMContentLoaded', init)

function showInfo(results) {
  var map = L.map('map').setView([39.9526, -75.1652], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  var markers = [];

  var data = results.data
  console.log("Successfully processed " + data.length + " rows!");
  // console.log(data);
  for(var i = 0 ; i < data.length ; i++){
    var titleOfPoem = data[i]["Title of Poem"];
    var publicationDate = data[i]["Publication date"];
    var linkToPoem = data[i]["Link to poem if published online"];
    var poetFirstName = data[i]["Poet's first name"];
    var poetLastName = data[i]["Poet's last name"];
    var latitude = data[i]["Latitude"];
    var longitude = data[i]["Longitude"];

    var popUpString = 
      '<p><strong>'+titleOfPoem+'</strong><br />'
      +' by ' +poetFirstName+' '+poetLastName+'<br />'
      +publicationDate+'</p>';

    if(linkToPoem!="") popUpString = popUpString + '<a href='+linkToPoem+' target="_blank">Link to the Poem.</a>';
    
    var marker = L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(popUpString);
    
    markers.push(marker);

  }
}