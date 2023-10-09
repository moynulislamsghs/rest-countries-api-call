function loadCountryApi(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
}

// call the function to get the output in console
loadCountryApi();

function displayData(data){
    //console.log(data);
    const dataHtml = data.map(element => getCountry(element));
    // displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = dataHtml.join(" ");
}

function getCountry(element){
    console.log(element);
    return `
        <div class="element_div">
            <img src="${element.flags.png}">
            <h2>${element.name.common}</h2>
            <h4>Capital: ${element.capital}</h4>
            <h4>Population: ${element.population}</h4>
            <h4>Region: ${element.region}</h4>
            <h4>Area: ${element.area}</h4>
        </div>
    `
}