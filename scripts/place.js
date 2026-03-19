document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
// })


// document.getElementById("temp")
const temperature = Number(document.getElementById("temp").innerText);
const wind = Number(document.getElementById("wind").innerText);
const humidity = Number(document.getElementById("humid").innerText);

if (temperature <= 50 && wind > 3) {
    document.getElementById("windChill").innerHTML = calculateWindChill(temperature, wind)
    // calculateWindChill(temperature, wind)
} else { document.getElementById("windChill").innerHTML = "N/A" }


function calculateWindChill(temp, windSpeed) {
    // If temperature >= 50F or wind < 3mph = no wind chill effect
    if (temp >= 50 || windSpeed < 3) {
        return calculateHeatIndex(temp, humidity);
    }
    const windPow = Math.pow(windSpeed, 0.16);
    const wc = 35.74 + 0.6215 * temp - 35.75 * windPow + 0.4275 * temp * windPow;
    return Math.round(wc)
}



function calculateHeatIndex(temp, rh) {
    let heatIndex = -42.379 + (2.04901523 * temp) + (10.14333127 * rh) - (.22475541 * temp * rh) - (.00683783 * temp * temp) - (.05481717 * rh * rh) + (.00122874 * temp * temp * rh) + (.00085282 * temp * rh * rh) - (.00000199 * temp * temp * rh * rh);
    if (rh < 13 && temp >= 80 && temp <= 112) {
        heatIndex = heatIndex - (((13 - rh) / 4) * Math.sqrt((17 - Math.abs(temp - 95)) / 17));
    } else if (rh > 85 && temp > 80 && temp < 87) {
        heatIndex = heatIndex + (((rh - 85) / 10) * ((87 - temp) / 5));
    }
    if (heatIndex < 80) {
        heatIndex = 0.5 * (temp + 61 + ((temp - 68) * 1.2) + (rh * 0.094));
    }
    document.getElementById("chillHeat").innerHTML = "Heat Index";
    return Math.round(heatIndex)
}


// Code from https://www.wpc.ncep.noaa.gov/html/heatindex.shtml

// Heat index computed using air temperature F and RH%
function heat1(HeatIndex) {
    if (HeatIndex.RHumidity.value > 100) {
        alert("Relative humidity cannot exceed 100%.");
    }
    else if (HeatIndex.RHumidity.value < 0) {
        alert("Relative humidity cannot be less than 0%.");
    }
    else if (HeatIndex.tempair.value <= 40.0) {
        var hi = HeatIndex.tempair.value;
    }
    else {
        var hitemp = 61.0 + ((HeatIndex.tempair.value - 68.0) * 1.2) + (HeatIndex.RHumidity.value * 0.094);
        var fptemp = parseFloat(HeatIndex.tempair.value);
        var hifinal = 0.5 * (fptemp + hitemp);

        if (hifinal > 79.0) {
            var hi = -42.379 + 2.04901523 * HeatIndex.tempair.value + 10.14333127 * HeatIndex.RHumidity.value - 0.22475541 * HeatIndex.tempair.value * HeatIndex.RHumidity.value - 6.83783 * (Math.pow(10, -3)) * (Math.pow(HeatIndex.tempair.value, 2)) - 5.481717 * (Math.pow(10, -2)) * (Math.pow(HeatIndex.RHumidity.value, 2)) + 1.22874 * (Math.pow(10, -3)) * (Math.pow(HeatIndex.tempair.value, 2)) * HeatIndex.RHumidity.value + 8.5282 * (Math.pow(10, -4)) * HeatIndex.tempair.value * (Math.pow(HeatIndex.RHumidity.value, 2)) - 1.99 * (Math.pow(10, -6)) * (Math.pow(HeatIndex.tempair.value, 2)) * (Math.pow(HeatIndex.RHumidity.value, 2));
            if ((HeatIndex.RHumidity.value <= 13) && (HeatIndex.tempair.value >= 80.0) && (HeatIndex.tempair.value <= 112.0)) {
                var adj1 = (13.0 - HeatIndex.RHumidity.value) / 4.0;
                var adj2 = Math.sqrt((17.0 - Math.abs(HeatIndex.tempair.value - 95.0)) / 17.0);
                var adj = adj1 * adj2;
                var hi = hi - adj;
            }
            else if ((HeatIndex.RHumidity.value > 85.0) && (HeatIndex.tempair.value >= 80.0) && (HeatIndex.tempair.value <= 87.0)) {
                var adj1 = (HeatIndex.RHumidity.value - 85.0) / 10.0;
                var adj2 = (87.0 - HeatIndex.tempair.value) / 5.0;
                var adj = adj1 * adj2;
                var hi = hi + adj;
            }
        }
        else {
            var hi = hifinal;
        }
    }
    twoplaces_rh = hi.toFixed(1);
    celsius_temp_rh = (hi - 32) * .556;
    twoplaces_c_rh = celsius_temp_rh.toFixed(1);
    HeatIndex.heatindex.value = twoplaces_rh + " F" + " / " + twoplaces_c_rh + " C";
    //HeatIndex.heatindex.value = Math.round(hi) + " F" +  " / " + Math.round((hi - 32) * .556) + " C";
    var tempc2 = (HeatIndex.tempair.value - 32) * .556;
    var rh2 = 1 - HeatIndex.RHumidity.value / 100;
    var tdpc2 = tempc2 - (((14.55 + .114 * tempc2) * rh2) + (Math.pow(((2.5 + .007 * tempc2) * rh2), 3)) + ((15.9 + .117 * tempc2)) * (Math.pow(rh2, 14)));

}
/* Heat index computed using air temperature and dew point temperature. Degrees F
   Steps to calculate:
     1.  Convert T and Td to degrees C
     2.  Using T and Td, calculate the vapor pressure and saturation vapor pressure.
     3.  Calculate RH = (E/Es)*100
*/
function HIDEW(heatdew) {
    var tc2 = (parseFloat(heatdew.tempair2.value) - 32) * .556;
    var tdc2 = (parseFloat(heatdew.dewpoint.value) - 32) * .556;
    if (tc2 < tdc2) {
        alert("Dew Point temperature cannot be greater than the air temperature.");
    }
    else if (heatdew.tempair2.value <= 40.0) {
        var hi = heatdew.tempair2.value;
    }
    else {
        var vaporpressure = 6.11 * (Math.pow(10, 7.5 * (tdc2 / (237.7 + tdc2))));
        var satvaporpressure = 6.11 * (Math.pow(10, 7.5 * (tc2 / (237.7 + tc2))));
        var RHumidity2 = Math.round(100.0 * (vaporpressure / satvaporpressure));


        var hitemp = 61.0 + ((heatdew.tempair2.value - 68.0) * 1.2) + (RHumidity2 * 0.094);
        var fptemp = parseFloat(heatdew.tempair2.value);
        var hifinal = 0.5 * (fptemp + hitemp);

        if (hifinal > 79.0) {
            var hi = -42.379 + 2.04901523 * heatdew.tempair2.value + 10.14333127 * RHumidity2 - 0.22475541 * heatdew.tempair2.value * RHumidity2 - 6.83783 * (Math.pow(10, -3)) * (Math.pow(heatdew.tempair2.value, 2)) - 5.481717 * (Math.pow(10, -2)) * (Math.pow(RHumidity2, 2)) + 1.22874 * (Math.pow(10, -3)) * (Math.pow(heatdew.tempair2.value, 2)) * RHumidity2 + 8.5282 * (Math.pow(10, -4)) * heatdew.tempair2.value * (Math.pow(RHumidity2, 2)) - 1.99 * (Math.pow(10, -6)) * (Math.pow(heatdew.tempair2.value, 2)) * (Math.pow(RHumidity2, 2));

            if ((RHumidity2 <= 13.0) && (heatdew.tempair2.value >= 80.0) && (heatdew.tempair2.value <= 112.0)) {
                var adj1 = (13.0 - RHumidity2) / 4.0;
                var adj2 = Math.sqrt((17.0 - Math.abs(heatdew.tempair2.value - 95.0)) / 17.0);
                var adj = adj1 * adj2;
                var hi = hi - adj;
            }
            else if ((RHumidity2 > 85.0) && (heatdew.tempair2.value >= 80.0) && (heatdew.tempair2.value <= 87.0)) {
                var adj1 = (RHumidity2 - 85.0) / 10.0;
                var adj2 = (87.0 - heatdew.tempair2.value) / 5.0;
                var adj = adj1 * adj2;
                var hi = hi + adj;
            }
        }

        else {
            var hi = hifinal;
        }
    }
    //heatdew.answer.value = Math.round(hi) + " F" +  " / " + Math.round((hi - 32) * .556) + " C";
    twoplaces = hi.toFixed(1);
    celsius_temp = (hi - 32) * .556;
    twoplaces_c = celsius_temp.toFixed(1);
    heatdew.answer.value = twoplaces + " F" + " / " + twoplaces_c + " C";
    heatdew.RHumidity2.value = RHumidity2 + "%";
}