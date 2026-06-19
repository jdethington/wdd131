const radiusOutput = document.getElementById("radius");
const areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;


const section = document.createElement('section');
const h3 = document.createElement('h3');
h3.textContent = 'Relief Society';
section.appendChild(h3);

// Example code for debugging practice. This code contains several errors that need to be fixed in order for it to work correctly.
// const radiusOutput = document.getElementById('radius');
// const areaOutput = document.querySelector('area');

// let area = 0;
// const PI == 3.14159;

// const radius = 10;
// area = PI * radius * radius;
// radiusOutput = radius;
// areaOutput = area;

// radius = 20;
// area = PI * radius * radius;
// radiusOutput = radius;
// areaOutput = area;