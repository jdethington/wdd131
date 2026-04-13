// footer content
document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();
// Menu toggle
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
