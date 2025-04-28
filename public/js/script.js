// File: public/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button
    const button = document.querySelector('.hero button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Thanks for your interest! Learn more about our website in the features section.');
        });
    }

    // Simple animation for features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    console.log('Website loaded successfully!');
});