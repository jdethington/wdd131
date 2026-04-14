
// Cheese and cow data
const cheeses = [
    {
        name: "Cheese Curds",
        description: "Cheese curds are small, moist pieces of curdled milk. They are often used in dishes like poutine and are known for their squeaky texture when fresh.",
        image: "images/cheese-curds-bags.webp"
    },
    {
        name: "Cream Cheese",
        description: "Cream cheese is a soft, mild-tasting cheese made from milk and cream. It is commonly used as a spread on bagels and as an ingredient in cheesecakes.",
        image: "images/cream-cheese-4-flavors.webp"
    },
    {
        name: "",
        description: "Charcuterie Board",
        image: "images/charcuterie-board.webp"
    }
]
const cows = [
    {
        name: "Calves",
        description: "Calves are young cows that are typically less than a year old. They are often raised for meat, dairy production, or as breeding stock.",
        image: "images/calf-looking.webp"
    },
    {
        name: "Cows",
        description: "Dairy cows are bred and raised primarily for milk production. They are typically larger than beef cows and have a high milk yield.",
        image: "images/cow-standing-blurred-background.webp"
    },
    {
        name: "",
        description: "",
        image: "images/cows-square-small.webp"
    }
]
// Cheese card display on load
createCheeseCard(cheeses.filter(cheese => cheese.name === ""));// fix JS error on load by adding empty string filter to cheeses array
// Cheese card 
const cheeseBoard = document.querySelector('#cheese');
cheeseBoard.addEventListener('click', () => {
    createCheeseCard(cheeses.filter(cheese => cheese.name === ""));
    document.querySelector("section div h2").textContent = "Cheeses";
});
const cheeseCurds = document.querySelector('#curds');
cheeseCurds.addEventListener('click', () => {
    createCheeseCard(cheeses.filter(cheese => cheese.name === "Cheese Curds"));
    document.querySelector("section div h2").textContent = "Cheese Curds";
});
const cheeseCream = document.querySelector('#cream');
cheeseCream.addEventListener('click', () => {
    createCheeseCard(cheeses.filter(cheese => cheese.name === "Cream Cheese"));
    document.querySelector("section div h2").textContent = "Cream Cheese";
});

function createCheeseCard(cheeses) {
    document.querySelector('.cheese').innerHTML = " ";
    cheeses.forEach(cheese => {
        const card = document.createElement('div');

        card.classList.add('card');
        card.innerHTML = `
        <h3>${cheese.name}</h3>
        <p>${cheese.description}</p>
        <img src="${cheese.image}" loading="lazy" alt="${cheese.name}">
        `;
        document.querySelector('.cheese').appendChild(card);
    });
}
// Cow card display on load
createCowCard(cows.filter(cow => cow.name === ""));// fix JS error on load by adding empty string filter to cows array
// Cow card
const cow = document.querySelector('#cows');
cow.addEventListener('click', () => {
    createCowCard(cows.filter(cow => cow.name === ""));
    // document.querySelector("section div h2").textContent = "Cows";
});
const cowCalf = document.querySelector('#calf');
cowCalf.addEventListener('click', () => {
    createCowCard(cows.filter(cow => cow.name === "Calves"));
    // document.querySelector("section div h2").textContent = "Calves";
});
const cowAdult = document.querySelector('#cow');
cowAdult.addEventListener('click', () => {
    createCowCard(cows.filter(cow => cow.name === "Cows"));
    // document.querySelector("section div h2").textContent = "Cows";
});

function createCowCard(cows) {
    document.querySelector('.cow').innerHTML = '';
    cows.forEach(cow => {
        const card = document.createElement('div');

        card.classList.add('card');
        card.innerHTML = `
        <h3>${cow.name}</h3>
        <p>${cow.description}</p>
        <img src="${cow.image}" loading="lazy" alt="${cow.name}">
        `;
        document.querySelector('.cow').appendChild(card);
    });
}

