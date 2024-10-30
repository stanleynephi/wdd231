let slideIndex = 1;
showSlides(slideIndex);

// Function to move slides forward or backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    
    // Loop back to the first slide if the index is greater than the number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Loop back to the last slide if the index is less than 1
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}



//lastmodified
const option2 = {
    day: "numeric",
    month: "short",
    year: "numeric"
}


const $lastModified = document.querySelector("#lastmodified")
$lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US",option2)}`


//copyright
const $copyright = document.querySelector(".copyright")
const currentYear = new Date().getFullYear()

$copyright.innerHTML  = `&copy; ${currentYear} <b>${document.title}  All Rights Reserved`






//navigation
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
})

function toggleOff() {
    navigation.classList.remove("open");
    document.querySelector("input").checked = false;
}

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", toggleOff);
});