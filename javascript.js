
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
    }
    popular();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}               