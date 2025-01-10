document.getElementById('left-button').addEventListener('click', function() {
    document.querySelector('.review').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('right-button').addEventListener('click', function() {
    document.querySelector('.review').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});