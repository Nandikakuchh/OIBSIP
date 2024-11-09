let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

// Celsius to Fahrenheit and Kelvin
celsius.oninput = function() {
    let c = parseFloat(celsius.value);
    if (!isNaN(c)) {
        fahrenheit.value = ((c * 9) / 5 + 32).toFixed(2);
        kelvin.value = (c + 273.15).toFixed(2);
    } else {
        fahrenheit.value = "";
        kelvin.value = "";
    }
}

// Fahrenheit to Celsius and Kelvin
fahrenheit.oninput = function() {
    let f = parseFloat(fahrenheit.value);
    if (!isNaN(f)) {
        celsius.value = ((f - 32) * 5 / 9).toFixed(2);
        kelvin.value = (((f - 32) * 5 / 9) + 273.15).toFixed(2);
    } else {
        celsius.value = "";
        kelvin.value = "";
    }
}

// Kelvin to Celsius and Fahrenheit
kelvin.oninput = function() {
    let k = parseFloat(kelvin.value);
    if (!isNaN(k)) {
        celsius.value = (k - 273.15).toFixed(2);
        fahrenheit.value = (((k - 273.15) * 9 / 5) + 32).toFixed(2);
    } else {
        celsius.value = "";
        fahrenheit.value = "";
    }
}
