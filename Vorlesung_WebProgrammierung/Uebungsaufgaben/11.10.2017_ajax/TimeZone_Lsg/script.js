function getTimeZone() {
    var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
;
    if (lat.length > 0 && lon.length > 0) {
        var xhr = new XMLHttpRequest();        
        dateTime = new Date().getTime();
        timestamp = Math.floor(dateTime / 1000);
  
        var url = "https://maps.googleapis.com/maps/api/timezone/json?location=" + lat + "," + lon + "&timestamp="+timestamp;

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4 || xhr.status !== 200) {
                return;
            }
            var timeZone = JSON.parse(xhr.responseText);
            //var html = '<table>'
              //       + '  <tr> <td>Zeitzone:</td>      <td> ' + timeZone.timeZoneName + '</td> </tr>'
              //       + '  <tr> <td>Ort:</td>           <td> ' + timeZone.timeZoneId + '</td> </tr>'
              //       + '</table>';
            var html= '<div><div>Zeitzone: '+timeZone.timeZoneName+' </div>' +
                '<div>'+'Ort: '+timeZone.timeZoneId+' </div>' +
                '</div>'
            document.getElementById("result").innerHTML = html;
        };

        xhr.open("GET", url, true);
        xhr.send();
    }
}