
const row = document.querySelector('#mainrow')

function restcountries() {
  let countrydetails = fetch("https://restcountries.com/v3.1/all");
  countrydetails.then((res) => res.json())
    .then((data) => {
      showCountry(data);
    });
}
restcountries();


function showCountry(data1) {
  const cardDetails = data1.map((data1,index) => {
    return `
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4" style="width: 18rem;">
    <div class ="card h-100">
    <div class ="card-header">
    <h1 class = "text-center" id ="title">${data1.name.common}</h1>
    </div>
    <img src="${data1.flags.png}" class="img-fluid img card-img-top" alt="${data1.name.common}" >
    <div class="card-body">
    <div class="card-text">
    <p><span class = "card-title">Capital : </span>${data1.capital}</p>
    <p><span class = "card-title">Region : </span>${data1.region}</p>
    <p><span class = "card-title">Latlng : </span>${data1.latlng}</p>
    <p><span class = "card-title">CountryCode : </span>${data1.cca3}</p>
    <button type="button" class="btn btn-primary btn-lg" id "btn" onClick = "(displayWind('${data1.name.common}',${index}))">Click for Weather</button>
    <p class="btn" style="display:none" id=btn${index}></p>
    </div>
    </div>
    </div>
    </div>
    `
  })
  row.innerHTML = cardDetails;
}



function displayWind(name,index) {
  let btn=document.getElementById('btn'+index)
  let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a8fd5c805da21e8885ccf7f7f02f403e`);
  weather.then((res1) => res1.json())
    .then((data1) => {
      btn.style.display="block"
      btn.innerHTML = ` <p><i>'The Weather temp is :</i>${data1.main.temp}' <i>and Wind speed is :</i>${data1.wind.speed}</p>`
    });

}
