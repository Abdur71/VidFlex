const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let currentSlideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, idx) => {
        slide.style.display = (idx === currentSlideIndex) ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlideIndex);
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll(".movie-list-item").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270); // Number of items visible based on window width
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// JavaScript functionality for form submission or validations can be added here
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo purposes

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "" || password === "") {
        alert("Please fill in all fields");
    } else {
        alert("Form Submitted");
    }
});
