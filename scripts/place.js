document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

// document.getElementById("temp")
const temperature = Number(document.getElementById("temp").innerText);
const wind = Number(document.getElementById("wind").innerText);
const humidity = Number(document.getElementById("humid").innerText);
const windPow = Math.pow(wind, 0.16);

if (temperature <= 50 && wind > 3) {
    let windChill = calculateWindChill(temperature, wind);
    windChill = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChill;
    // calculateWindChill(temperature, wind)
} else { document.getElementById("windChill").innerHTML = "N/A" }


function calculateWindChill(temp, windSpeed) {
    // If temperature >= 50F or wind < 3mph = no wind chill effect
    // if (temp >= 50 || windSpeed < 3) {
    //     return calculateHeatIndex(temp, humidity);
    // }
    return 35.74 + 0.6215 * temp - 35.75 * windPow + 0.4275 * temp * windPow;
    // const wc = 35.74 + 0.6215 * temp - 35.75 * windPow + 0.4275 * temp * windPow;
    // return Math.round(wc)
}



// function calculateHeatIndex(temp, rh) {
//     let heatIndex = -42.379 + (2.04901523 * temp) + (10.14333127 * rh) - (.22475541 * temp * rh) - (.00683783 * temp * temp) - (.05481717 * rh * rh) + (.00122874 * temp * temp * rh) + (.00085282 * temp * rh * rh) - (.00000199 * temp * temp * rh * rh);
//     if (rh < 13 && temp >= 80 && temp <= 112) {
//         heatIndex = heatIndex - (((13 - rh) / 4) * Math.sqrt((17 - Math.abs(temp - 95)) / 17));
//     } else if (rh > 85 && temp > 80 && temp < 87) {
//         heatIndex = heatIndex + (((rh - 85) / 10) * ((87 - temp) / 5));
//     }
//     if (heatIndex < 80) {
//         heatIndex = 0.5 * (temp + 61 + ((temp - 68) * 1.2) + (rh * 0.094));
//     }
//     document.getElementById("chillHeat").innerHTML = "Heat Index";
//     return Math.round(heatIndex)
// }


