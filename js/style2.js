var vid = document.getElementById("myVideo1");

vid.onplaying = function() {
    setTimeout(function(){
        vid.pause();
    }, 15000); // 5000 milliseconds = 5 seconds
};

var video = document.getElementById('myVideo');

var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true)
        video.play();
    else
        video.pause();
}, { threshold: [0.5] });

observer.observe(video);

window.addEventListener('resize', setBoxHeight);

function setBoxHeight() {
  var videoHeight = document.getElementById('video1').offsetHeight;
  document.querySelector('.box6').style.height = videoHeight + 'px';
}

setBoxHeight();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // 5초마다 이미지 변경
}
