let images = document.querySelectorAll('.card-img-top');

images.forEach(function(image) {
    image.style.transition = 'transform 0.3s'; 
    image.addEventListener('click', function() {
        image.style.transform = 'rotate(0deg)';  
        image.offsetHeight; 
        image.style.transform = 'rotate(360deg)'; 
    });
});
