
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


    

  	// contain images in an array
    var image = ['','https://picsum.photos/1920/1080', 'https://picsum.photos/1920/1080', 'https://picsum.photos/1920/1080','https://picsum.photos/1920/1080'];

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

function loginpop () {
document.querySelector('.bg-modal').style.display = 'flex';
}
function closelogin () { 
document.querySelector('.bg-modal').style.display = 'none';
}
/** haluaisin tehdä tämän näin mutta olen kyvytön
document.getElementById('login').addEventListener('click', loginpop);
document.querySelector('.close').addEventListener('click', closelogin);
 */
    var i = image.length;

    // function for next slide 

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	var slider = document.getElementById('slider-image').innerHTML = "<img src=" + image[i-1] + ">";
    }


    // function for prew slide

    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
      var slider = document.getElementById('slider-image').innerHTML = "<img src=" + image[i-1] + ">";

    }
