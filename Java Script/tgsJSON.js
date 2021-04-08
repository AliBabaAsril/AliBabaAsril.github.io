$.getJSON('https://covid19.mathdro.id/api', function (data) {
    let confirm = data.confirmed.value;
    let death = data.deaths.value;
    let recov = data.recovered.value;
    let last = data.lastUpdate;
    document.getElementById('globalConfirmed').innerHTML = confirm;
    document.getElementById('globalRecovered').innerHTML = recov;
    document.getElementById('globalDeaths').innerHTML = death;
    document.getElementById('globalLast').innerHTML = last; 
});$.getJSON('https://covid19.mathdro.id/api/countries/Indonesia', function (data) {
    let confirm = data.confirmed.value;
    let death = data.deaths.value;
    let recov = data.recovered.value;
    let last = data.lastUpdate;
    document.getElementById('indoConfirmed').innerHTML = confirm;
    document.getElementById('indoRecovered').innerHTML = recov;
    document.getElementById('indoDeaths').innerHTML = death; 
    document.getElementById('indolLast').innerHTML = last;
});$.getJSON('https://covid19.mathdro.id/api/countries/malaysia/', function (data) {
    let confirm = data.confirmed.value;
    let death = data.deaths.value;
    let recov = data.recovered.value;
    let last = data.lastUpdate;
    document.getElementById('malayConfirmed').innerHTML = confirm;
    document.getElementById('malayRecovered').innerHTML = recov;
    document.getElementById('malayDeaths').innerHTML = death; 
    document.getElementById('malayLast').innerHTML = last;
});$.getJSON('https://covid19.mathdro.id/api/countries/singapore', function (data) {
    let confirm = data.confirmed.value;
    let death = data.deaths.value;
    let recov = data.recovered.value;
    let last = data.lastUpdate;
    document.getElementById('singaConfirmed').innerHTML = confirm;
    document.getElementById('singaRecovered').innerHTML = recov;
    document.getElementById('singaDeaths').innerHTML = death; 
    document.getElementById('singaLast').innerHTML = last;
});$.getJSON('https://covid19.mathdro.id/api/countries/vietnam', function (data) {
    let confirm = data.confirmed.value;
    let death = data.deaths.value;
    let recov = data.recovered.value;
    let last = data.lastUpdate;
    document.getElementById('vitConfirmed').innerHTML = confirm;
    document.getElementById('vitRecovered').innerHTML = recov;
    document.getElementById('vitDeaths').innerHTML = death; 
    document.getElementById('vitLast').innerHTML = last;
});$.getJSON('https://covid19.mathdro.id/api/countries/cambodia', function (data) {
    let confirm = data.confirmed.value;
    let death = data.deaths.value;
    let recov = data.recovered.value;
    let last = data.lastUpdate;
    document.getElementById('camConfirmed').innerHTML = confirm;
    document.getElementById('camRecovered').innerHTML = recov;
    document.getElementById('camDeaths').innerHTML = death; 
    document.getElementById('camLast').innerHTML = last;
});