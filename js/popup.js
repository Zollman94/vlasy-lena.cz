function showPopup(img) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = img.src;
    popup.classList.add('active');
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}