document.addEventListener( 'DOMContentLoaded', function() {
const emoji=
document.querySelector(".emoji");
emojis.forEach(emoji => {
    button.addEventListener('click', function() {
     const color= this.getAttribute('data-color');
    document.body.style.backgroundColor = newColor;   
    });
});
});
