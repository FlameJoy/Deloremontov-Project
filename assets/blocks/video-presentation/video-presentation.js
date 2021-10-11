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