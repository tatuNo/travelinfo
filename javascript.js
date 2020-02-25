function popular () {
    fetch('https://restcountries.eu/rest/v2/alpha/col')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("countryName");
        let img = document.getElementById("flag1");

        p.innerText = json.name;
        img.src = json.flag;
    });
}
popular();               