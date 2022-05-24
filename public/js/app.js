var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXgfZUHkaqK9CozkO7JE9ekCAoBScQeXZOWC284tduZtZr9EFUzlJns9nd-Bl6A02v15OWbaRXGKXe/pub?output=csv';
var map = L.map('map').setView([51.505, -0.09], 13);

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo
  })
}

window.addEventListener('DOMContentLoaded', init)

function showInfo(results) {
  var data = results.data
  console.log("Successfully processed " + data.length + " rows!");
  console.log(data);
  // data comes through as a simple array since simpleSheet is turned on
  var element = document.getElementById("items");
  element.innerHTML = "<strong>Survey Responses:</strong>";
  for(var i = 0 ; i < data.length ; i++){
    console.log(data[i]);
    element.innerHTML = element.innerHTML + ("<p>"+data[i]["Timestamp"] +" , " + data[i]["What do you prefer?"]+"</p>");
  }
}

// document.write("The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a>");  