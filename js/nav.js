//Add an event listner to the window for the scroll event
window.addEventListener('scroll', function() {
    //set a refrence using the navbar id
    var navbar = document.getElementById('navbar');
    //check if the vertical scroll position on the window is greater than 0
    if (window.scrollY > 0) {
        // change the color to white if scroll down
        navbar.style.backgroundColor = 'white';
        // if it at the top change it back to pink
    } else {
        navbar.style.backgroundColor = '#DBB7AB';
    }
});
