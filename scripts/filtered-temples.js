document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// new code
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 26",
        area: 75000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-22546.jpg"
    },
    {
        templeName: "Monterrey Mexico",
        location: "Monterrey, Mexico",
        dedicated: "2002, April, 28",
        area: 16498,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-46835.jpg"
    }
];

createTempleCard(temples);

const allTemples = document.querySelector("#all");
allTemples.addEventListener("click", () => {
    createTempleCard(temples);
    document.querySelector("h1").textContent = "Home";
});

const oldTemples = document.querySelector("#old");
oldTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => Number(temple.dedicated.trim().split(",")[0]) < 1900));
    document.querySelector("h1").textContent = "Temples Built Before 1900";
});

const newTemples = document.querySelector("#new");
newTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => Number(temple.dedicated.trim().split(",")[0]) > 2000));
    document.querySelector("h1").textContent = "Temples Built after 2000";
});

const largeTemples = document.querySelector("#large");
largeTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    document.querySelector("h1").textContent = "Temples Greater then 90,000 sq ft";
});

const smallTemples = document.querySelector("#small");
smallTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    document.querySelector("h1").textContent = "Temples Less then 10,000 sq ft";
});

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}