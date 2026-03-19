document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
// })


// // document.getElementById("temp")
// const temp = Number(document.getElementById("temp").value);
// const wind = Number(document.getElementById("wind").value);

// function windChill(temp, windSpeed) {
//     // If temperature >= 50F or wind < 3mph = no wind chill effect
//     if (temp >= 50 || windSpeed < 3) {
//         return temp;
//     }

//     const windPow = Math.pow(windSpeed, 0.16);

//     const wc = 35.74 + 0.6215 * temp - 35.75 * windPow + 0.4275 + temp * windPow;

//     return Math.round(wc)
// }

// let windChillTemp = windChill(temp, wind)