function popular () {
    fetch('https://restcountries.eu/rest/v2/alpha/col')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("countryName1");
        let img = document.getElementById("flag1");

        p.innerText = json.name;
        img.src = json.flag;
    });
    fetch('https://restcountries.eu/rest/v2/alpha/usa')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("countryName2");
        let img = document.getElementById("flag2");

        p.innerText = json.name;
        img.src = json.flag;
    });
    fetch('https://restcountries.eu/rest/v2/alpha/fin')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("countryName3");
        let img = document.getElementById("flag3");

        p.innerText = json.name;
        img.src = json.flag;
      });
    }
popular();               