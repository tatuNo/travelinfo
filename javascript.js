
function popular () {
    fetch('https://restcountries.eu/rest/v2/alpha/col')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("name1");
        let img = document.getElementById("flag1");

        p.innerText = json.name;
        img.src = json.flag;
    });
    fetch('https://restcountries.eu/rest/v2/alpha/usa')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("name2");
        let img = document.getElementById("flag2");

        p.innerText = json.name;
        img.src = json.flag;
    });
    fetch('https://restcountries.eu/rest/v2/alpha/fin')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        let p = document.getElementById("name3");
        let img = document.getElementById("flag3");

        p.innerText = json.name;
        img.src = json.flag;
      });
      fetch('https://restcountries.eu/rest/v2/alpha/swe')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        //let p = document.getElementById("");
        let img = document.getElementById("flag4");

        //p.innerText = json.name;
        img.src = json.flag;
    });
    fetch('https://restcountries.eu/rest/v2/alpha/mex')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        //let p = document.getElementById("");
        let img = document.getElementById("");

        //p.innerText = json.name;
        //img.src = json.flag;
    });
    fetch('https://restcountries.eu/rest/v2/alpha/pol')             
    .then(function(vastaus){        
      return vastaus.json();        
    }).then(function(json){         
        console.log(json);
        //let p = document.getElementById("");
        let img = document.getElementById("");

       // p.innerText = json.name;
        //img.src = json.flag;
    });
    }
    popular();

function loginpop () {
document.getElementById('loginpage').style.display = 'flex';
}
function closelogin () { 
document.getElementById('signuppage').style.display = 'none';
document.getElementById('loginpage').style.display = 'none';
}
function signuppop () {
document.getElementById('loginpage').style.display = 'none';
document.getElementById('signuppage').style.display = 'flex';
}
/** haluaisin tehdä tämän näin mutta olen kyvytön
document.getElementById('login').addEventListener('click', loginpop);
document.querySelector('.close').addEventListener('click', closelogin);
 */

