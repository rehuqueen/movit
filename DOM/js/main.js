//grab the mobile nav element
let mobileNavElem = document.getElementById("mobile-nav");


// hamburger display function

function displayMobileNav() {
    // console.log("PROF!!!!!");
    mobileNavElem.classList.toggle("show");
}
// Grab form elements
const formElem = document.getElementById("location-form");
const inputElem = document.getElementById("location-input");
const weatherInfoElem = document.getElementById("weather-info");

formElemElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const APIKey = 'YOUR-API Key';
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        console.log (data);
        // renderweatherdata(data);
    })
    .catch(error => {
        console.log(error);
        weatherInfoElem.innerHTML = '<p class="text-danger">please try against
    })

})