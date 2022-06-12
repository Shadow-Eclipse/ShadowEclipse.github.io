const hamburger = document.querySelector('.hamburger');
if(hamburger){
hamburger.addEventListener("click", myFunction);
}

function myFunction(){
    this.classList.toggle('is-active');
}