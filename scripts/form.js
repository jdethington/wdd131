document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
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

// ------ review.html -----
function updateReviewCounter() {
    let count = localStorage.getItem('totalReviews');
    if (count === null) {
        count = 0;
    } else {
        count = parseInt((count));
    }
    count++;
    localStorage.setItem('totalReviews', count);
    document.getElementById('reviewCount').textContent = count;
}
updateReviewCounter();