// // footer content
// document.getElementById("lastModified").innerHTML = document.lastModified;
// document.getElementById('currentYear').textContent = new Date().getFullYear();
// // Menu toggle
// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
// });

// form validation
const products = [
    {
        id: "cc-1888",
        name: "Cream Cheese: plain",
        averagerating: 4.5
    },
    {
        id: "cc-2050",
        name: "Cream Cheese: Jalapeño",
        averagerating: 4.7
    },
    {
        id: "cc-1987",
        name: "Cream Cheese: Strawberry",
        averagerating: 4.5
    },
    {
        id: "cc-2000",
        name: "Cream Cheese: Jalapeño Bacon",
        averagerating: 4.9
    },
    {
        id: "curd-1969",
        name: "Cheese Curds: plain",
        averagerating: 4.8
    },
    {
        id: "curd-1969",
        name: "Cheese Curds: Jalapeño",
        averagerating: 5.0
    }

];

const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
})


