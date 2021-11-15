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
