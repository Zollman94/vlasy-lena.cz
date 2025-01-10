document.getElementById('ham').addEventListener('click', function() {
    const menu = document.querySelector('.right-side ul');
        menu.style.display = 'flex';
    const ham = document.querySelector('.ham');
        ham.style.display = 'none';
    const header = document.querySelector('.main-header');
    header.style.flexDirection = 'column';
    const cross = document.querySelector('.cross');
    cross.style.display = 'block';
});
document.getElementById('cross').addEventListener('click', function() {
    const menu = document.querySelector('.right-side ul');
        menu.style.display = 'none';
    const ham = document.querySelector('.ham');
        ham.style.display = 'block';
    const header = document.querySelector('.main-header');
    header.style.flexDirection = 'row';
    const cross = document.querySelector('.cross');
    cross.style.display = 'none';
});