var submitbutton = document.getElementById('submit');
var countries;
var tr = document.getElementById('data');
var datatable = document.getElementById('datatable');

submitbutton.addEventListener('click', function() {
  while (datatable.firstChild) {
    datatable.removeChild(datatable.lastChild);
  }
let inputvalue = document.getElementById('search').value;
  fetch("https://restcountries.eu/rest/v2/name/" + inputvalue)
  .then(res => res.json())
  .then(data => intialize(data))
  .catch(err => console.log("Error:", err));
});

function intialize(countriesData) {
    countries = countriesData;
    console.log(countries);
  
    for (let i = 0; i < countries.length; i++) {
      let tr = document.createElement('tr');
      let flag = document.createElement('img');
      let flagcon = document.createElement('td');
      flagcon.className = "tdSearch";
      let country = document.createElement('td');
      country.className = "tdSearch";
      let capital = document.createElement('td');
      capital.className = "tdSearch";
      let currency = document.createElement('td');
      currency.className = "tdSearch";
      let population = document.createElement('td');
      population.className = "tdSearch";
  
      flag.src = countries[i].flag;
      country.innerHTML = countries[i].name;
      capital.innerHTML = countries[i].capital;
      currency.innerHTML = countries[i].currencies.map(c => c.name + " (" + c.code + ")").join(", ");
      population.innerHTML = countries[i].population.toLocaleString("en-US");
  
      datatable.appendChild(tr);
      tr.appendChild(flagcon);
      flagcon.appendChild(flag);
      tr.appendChild(country);
      tr.appendChild(capital);
      tr.appendChild(currency);
      tr.appendChild(population);
  
    }
  }