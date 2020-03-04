
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
      let img = document.getElementById("flag5");

      //p.innerText = json.name;
      img.src = json.flag;
  });
  fetch('https://restcountries.eu/rest/v2/alpha/pol')             
  .then(function(vastaus){        
    return vastaus.json();        
  }).then(function(json){         
      console.log(json);
      //let p = document.getElementById("");
      let img = document.getElementById("flag6");
      
     // p.innerText = json.name;
      img.src = json.flag;
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
// Slideri settiä
const flagslide = document.querySelector('.flags');
const slideImgs = document.querySelectorAll('.flags img');


console.log(slideImgs);
// Nappulat
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 0;

prevBtn.style.display ='none';

// Button Listeners
prevBtn.addEventListener('click',()=> {  
flagslide.style.transition = "transform 0.8s ease-in-out";
size = slideImgs[0].clientWidth;
counter+=3;
flagslide.style.transform = 'translateX(' + (size * counter ) + 'px)';
console.log(counter);
countCheck();
});

nextBtn.addEventListener('click',()=> {
flagslide.style.transition = "transform 0.8s ease-in-out";
size = slideImgs[0].clientWidth;
counter-=3;
flagslide.style.transform = 'translateX(' + (size * counter ) + 'px)';
console.log(counter);
countCheck();
});

// Countin tarkastus
function countCheck () {
 if (counter === -3) {
  prevBtn.style.display = 'inline';
  nextBtn.style.display = 'none';
 }
 if (counter === 0) {
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'inline';
}
}

/** haluaisin tehdä tämän näin mutta olen kyvytön
document.getElementById('login').addEventListener('click', loginpop);
document.querySelector('.close').addEventListener('click', closelogin);
*/

