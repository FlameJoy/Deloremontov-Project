"use strict"

let headerSliderIndex = 0;
showSlides();

function showSlides(n) {
  let i,
  slides = document.getElementsByClassName("header-slide-container"),
  lines = document.getElementsByClassName("header-slide__line");

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i = 0; i < lines.length; i++) {
    lines[i].className = lines[i].className.replace(" header-slide__line_active", "");
  }

  headerSliderIndex++;

  if(headerSliderIndex > slides.length) {
    headerSliderIndex = 1;
  }

  slides[headerSliderIndex - 1].style.display = "block";
  lines[headerSliderIndex - 1].className += " header-slide__line_active"
  setTimeout(showSlides, 4000);
}