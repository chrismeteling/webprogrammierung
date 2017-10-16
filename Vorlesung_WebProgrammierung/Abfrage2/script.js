let city_list = [];
let city_id = 0;
let counter=0;
let first_key=true;
window.addEventListener("load", () => {
  // Neue Stadt Button
    let newButton = document.getElementById("button-new");
    let memoList =  document.querySelector("body > main > ul");
	let updateButton = document.getElementById("button-update");
	//insert into Website

    insertCity("Karlsruhe");
    insertCity("Mannheim");
    insertCity("Berlin");
	
    // Button-Event Handler für Anlage einer neuen Stadt
	newButton.addEventListener("click", () => {
  	  	let text = document.getElementById("location").value;
		if (text === null){
		return;
		}
		insertCity(text);
	});

    // Aktualisieren Button
	updateButton.addEventListener("click", () => {
		aktualisiereAlle();
	});


	// Neue Stdt hinzufügen
	function insertCity(name)
	{
	    // Stadt dem Array hinzufügen
        city_id=city_id+1;
        city_list.push({
			city_id ,
          	name
		  });
        // Wetterdaten abrufen
        getWeatherData(name);
        // Neues Element in die HTML-Liste einfügen
	}
});

function aktualisiereAlle() {
	aktualisiereWetter();
    };

function getWeatherData(loc) {
	let html="";
    let xhr = new XMLHttpRequest();
    dateTime = new Date().getTime();
    let appId;

    if(first_key) {
    	appId="eff84532b550c112ce99d57530f7c79d";
		first_key=false;
    }
    else {
        appId="741b47ba785a532d99f4cc0e788e8ff1";
		first_key=true;
    }

    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + ",de&APPID="+appId+"&units=metric";
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) {return;
        }
        else {
            let json = JSON.parse(xhr.responseText);
            console.log(loc);
            html = '<div>' +
                +'<h4 class="bold">' +loc.replace('NaN',' ')+
			'</h4>' + '<table>'
                + '  <tr> <td>Ort:</td>     <td> ' + json.name + '</td> </tr>'
                + '  <tr> <td>Wetterlage:</td>           <td> ' + json.weather[0].description + '</td> </tr>'
                + '  <tr> <td>Temperatur:</td>           <td> ' + json.main.temp + '</td> </tr>'
                + '  <tr> <td>Luftfeuchtigkeit:</td>           <td> ' + json.main.humidity + '</td> </tr>'
                + '  <tr> <td>Wind:</td>           <td> ' + json.wind.speed + '</td> </tr>'
                + '  <tr> <td>Es ist zu ' + json.clouds.all + '%bewölkt</td>  </tr>'
                + '  <tr> <td>Daten von:</td>           <td> ' + JSON.stringify(json.dt)+ '</td> </tr>'
                + '  <tr> <td>Abrufdatum:</td>           <td> ' + JSON.stringify(Date.now()); + '</td> </tr>'
                + '</table></div>';
            console.log("html=" + html);

            let memoList =  document.querySelector("body > main > ul");

            let liElement = document.createElement("li");
            memoList.appendChild(liElement);

            let memoTextElement = document.createElement("p");
            memoTextElement.setAttribute("id",counter);
            memoTextElement.setAttribute("city",loc);
            counter=counter+1;
            memoTextElement.innerHTML = html;
            liElement.appendChild(memoTextElement);

            let deleteElement = document.createElement("a");
            deleteElement.textContent = "Löschen";
            deleteElement.classList.add("delete");
            liElement.appendChild(deleteElement);

            deleteElement.addEventListener("click", () => {
                liElement.parentNode.removeChild(liElement);
        });
        }

    };
    xhr.open("GET", url, true);

    xhr.send();
  }
  function aktualisiereWetter(){
	console.log("is in aktualisieren");
      for (var i = 0; i < counter; ++i) {

          if(document.getElementById(i).type==null){
          	//skip this step
		  }
          let memoTextElement = document.getElementById(i);
          let loc=memoTextElement.getAttribute("city");
          let html = "";
          let xhr = new XMLHttpRequest();
          dateTime = new Date().getTime();
          let appId;

          if (first_key) {
              appId = "eff84532b550c112ce99d57530f7c79d";
              first_key = false;
          }
          else {
              appId = "741b47ba785a532d99f4cc0e788e8ff1";
              first_key = true;
          }

          let url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + ",de&APPID=" + appId + "&units=metric";
          xhr.onreadystatechange = function () {
              if (xhr.readyState !== 4 || xhr.status !== 200) {
                  return;
              }
              else {
                  let json = JSON.parse(xhr.responseText);
                  console.log(loc);
                  html = '<div>' +
                      +'<h4 class="bold">' + loc.replace('NaN', ' ') +
                      '</h4>' + '<table>'
                      + '  <tr> <td>Ort:</td>     <td> ' + json.name + '</td> </tr>'
                      + '  <tr> <td>Wetterlage:</td>           <td> ' + json.weather[0].description + '</td> </tr>'
                      + '  <tr> <td>Temperatur:</td>           <td> ' + json.main.temp + ' Celsius</td> </tr>'
                      + '  <tr> <td>Luftfeuchtigkeit:</td>           <td> ' + json.main.humidity + '</td> </tr>'
                      + '  <tr> <td>Wind:</td>           <td> ' + json.wind.speed + '</td> </tr>'
                      + '  <tr> <td>Es ist zu ' + json.clouds.all + '% bewölkt</td>  </tr>'
                      + '  <tr> <td>Daten von:</td>           <td> ' + JSON.stringify(json.dt)+'</td> </tr>'
                      + '  <tr> <td>Abrufdatum:</td>           <td> ' + JSON.stringify(Date.now()) + '</td> </tr>'
                      + '</table></div>';
                  console.log("html=" + html);

                  memoTextElement.innerHTML = html;
              }

          };
          xhr.open("GET", url, true);

          xhr.send();
      }
  }

