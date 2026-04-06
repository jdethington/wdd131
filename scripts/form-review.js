document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ------ review.html -----
function updateReviewCounter() {
    let count = localStorage.getItem('totalReviews');
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    count++;
    localStorage.setItem('totalReviews', count);
    document.getElementById('reviewCount').textContent = count;
}
updateReviewCounter();