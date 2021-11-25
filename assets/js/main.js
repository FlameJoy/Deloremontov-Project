"use strict"
// -----------------
// Header autoslider
// -----------------
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

// ----------------
// Scroll down menu
// ----------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("top-nav-scroll-menu").style.top = "0";
  } else {
    document.getElementById("top-nav-scroll-menu").style.top = "-100px";
  }
}

// -----------------------
// Smooth scroll animation
// -----------------------
jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
  return false;
  });
});

// ---------------
// Calculator tabs
// ---------------
function openCalc(evt, objectName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("calc-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("calc-tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(objectName).style.display = "block";
  evt.currentTarget.className += " active";
} 

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

window.addEventListener("DOMContentLoaded", handleWindowLoad);

function handleWindowLoad() {
  let video = document.getElementById("video");
  let btn = document.getElementById("play");
  let poster = document.getElementsByClassName("presentation-wrap");
  let control = document.getElementsByClassName("video-control");

  btn.addEventListener("click", playVideo);
  video.addEventListener("click", pauseVideo);

  function playVideo() {
    video.play();
    poster[0].style.visibility = "hidden";
    control[0].style.transition = "all 0s ease";
  }
    function pauseVideo() {
        video.pause();
        poster[0].style.visibility = "visible";
  }
}

// Get the modal
let recall = document.getElementById('id01'),
    redecorating = document.getElementById('id02'),
    overhaul = document.getElementById('id03'),
    designer = document.getElementById('id04');
    instagram = document.getElementById('instagram-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == recall) {
    recall.style.display = "none";
  } else if (event.target == redecorating) {
    redecorating.style.display = "none";
  } else if (event.target == overhaul) {
    overhaul.style.display = "none";
  } else if (event.target == designer) {
    designer.style.display = "none";
  } else if (event.target == instagram) {
    instagram.style.display = "none";
  }
}

// ------------------
// Promotion function
// ------------------
function promotionImg(num) {
  if(num == 1) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-2.jpg) no-repeat center';
  } if(num == 2) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-3.jpg) no-repeat center';
  } if(num == 3) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-4.jpg) no-repeat center';
  } if(num == 4) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-5.jpeg) no-repeat center';
  } if(num == 5) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-6.jpg) no-repeat center';
  } if(num == 6) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-7.jpg) no-repeat center';
  } if(num == 7) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-8.jpg) no-repeat center';
  } if(num == 8) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-9.jpg) no-repeat center';
  } if(num == 9) {
    document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-10.jpg) no-repeat center';
  }
}

function promotionRechangeImg() {
  document.getElementById('promotions').style.background = 'url(assets/images/dest/portfolio/promotions/promotions-1.jpg) no-repeat center';
}

// ------------------
// Room function
// ------------------
function roomChangeImg(num) {
  if(num == 1) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-2.jpeg) no-repeat center';
  } if(num == 2) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-3.jpeg) no-repeat center';
  } if(num == 3) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-4.jpeg) no-repeat center';
  } if(num == 4) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-5.jpeg) no-repeat center';
  } if(num == 5) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-6.jpeg) no-repeat center';
  } if(num == 6) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-7.jpeg) no-repeat center';
  } if(num == 7) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-8.jpeg) no-repeat center';
  } if(num == 8) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-9.jpeg) no-repeat center';
  } if(num == 9) {
    document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-10.jpeg) no-repeat center';
  }
}

function roomRechangeImg() {
  document.getElementById('room-1').style.background = 'url(assets/images/dest/portfolio/room/room-1.jpeg) no-repeat center';
}

// ----------------------
// Office function
// ----------------------
function officeImg(num) {
  if(num == 1) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-2.jpeg) no-repeat center';
  } if(num == 2) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-3.jpeg) no-repeat center';
  } if(num == 3) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-4.jpeg) no-repeat center';
  } if(num == 4) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-5.jpeg) no-repeat center';
  } if(num == 5) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-6.jpeg) no-repeat center';
  } if(num == 6) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-7.jpeg) no-repeat center';
  } if(num == 7) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-8.jpeg) no-repeat center';
  } if(num == 8) {
    document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-9.jpeg) no-repeat center';
  }
}

function officeRechangeImg() {
  document.getElementById('office-1').style.background = 'url(assets/images/dest/portfolio/office/office-1.jpeg) no-repeat center';
}

// ---------------
// Bathroom function
// ---------------
function bathroomImg(num) {
  if(num == 1) {
    document.getElementById('bathroom-1').style.background = 'url(assets/images/dest/portfolio/bathroom/bathroom-2.jpeg) no-repeat center';
  } if(num == 2) {
    document.getElementById('bathroom-1').style.background = 'url(assets/images/dest/portfolio/bathroom/bathroom-3.jpeg) no-repeat center';
  } if(num == 4) {
    document.getElementById('bathroom-1').style.background = 'url(assets/images/dest/portfolio/bathroom/bathroom-5.jpeg) no-repeat center';
  } if(num == 5) {
    document.getElementById('bathroom-1').style.background = 'url(assets/images/dest/portfolio/bathroom/bathroom-6.jpeg) no-repeat center';
  } if(num == 6) {
    document.getElementById('bathroom-1').style.background = 'url(assets/images/dest/portfolio/bathroom/bathroom-7.jpeg) no-repeat center';
  }
}

function bathroomRechangeImg() {
  document.getElementById('bathroom-1').style.background = 'url(assets/images/dest/portfolio/bathroom/bathroom-1.jpeg) no-repeat center';
}

// ---------------
// Сeiling function
// ---------------
function ceilingImg(num) {
  if(num == 1) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-2.jpeg) no-repeat center';
  } if(num == 2) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-3.jpeg) no-repeat center';
  } if(num == 3) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-4.jpeg) no-repeat center';
  } if(num == 4) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-5.jpeg) no-repeat center';
  } if(num == 5) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-6.jpeg) no-repeat center';
  } if(num == 6) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-7.jpeg) no-repeat center';
  } if(num == 7) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-8.jpeg) no-repeat center';
  } if(num == 8) {
    document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-9.jpeg) no-repeat center';
  }
}

function ceilingRechangeImg() {
  document.getElementById('ceiling-1').style.background = 'url(assets/images/dest/portfolio/ceiling/ceiling-1.jpeg) no-repeat center';
}

// ------------
// Modal slider
// ------------
function openModalSlider(n) {
  if(n == 1) {
    document.getElementById('promotions-modal-slider').style.display = "block";
  } else if(n == 2) {
    document.getElementById('room-modal-slider').style.display = "block";
  } else if(n == 3) {
    document.getElementById('office-modal-slider').style.display = "block";
  }  else if(n == 4) {
    document.getElementById('bathroom-modal-slider').style.display = "block";
  } else if(n == 5) {
    document.getElementById('ceiling-modal-slider').style.display = "block";
  }  else if(n == 6) {
    document.getElementById('kitchen-modal-slider').style.display = "block";
  }
}

let slideIndex = [1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
portfolioShowSlides(1, 0);
portfolioShowSlides(1, 1);
portfolioShowSlides(1, 2);
portfolioShowSlides(1, 3);
portfolioShowSlides(1, 4);
portfolioShowSlides(1, 5);

function plusSlides(n, no) {
  portfolioShowSlides(slideIndex[no] += n, no);
}

function portfolioShowSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "flex";  
}

// ------------------
// Validation scripts
// ------------------

// ----------------------
// Client name validation
// ----------------------

// No digits script
function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}

// -----------------------
// Client phone validation
// -----------------------

// No letters script
let name = document.querySelector('#phone'); // Получаем input
let regex = /^[а-яa-z]+$/i; // регулярка только цифры
 
name.oninput = function() {
  this.value = this.value.replace(regex, '');
}

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+7 (999) 999-99-99");
});