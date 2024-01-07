// JavaScript function for a subtle mouseover effect on the header
document.querySelector('header').addEventListener('mouseover', function() {
    this.style.transition = 'background-color 0.3s ease';
    this.style.backgroundColor = '#00695c';
});

document.querySelector('header').addEventListener('mouseout', function() {
    this.style.transition = 'background-color 0.3s ease';
    this.style.backgroundColor = '#004d40';
});
