// 모달과 버튼, 닫기 요소를 가져옵니다
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// 버튼을 클릭하면 모달을 엽니다
btn.onclick = function () {
    modal.style.display = "block";
}

// 닫기 요소를 클릭하면 모달을 닫습니다
span.onclick = function () {
    modal.style.display = "none";
}

// 사용자가 모달 외부를 클릭하면 모달을 닫습니다
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('#section1 span').click(function () {
    $('html, body').animate({
        scrollTop: $('#section2').offset().top
    }, 1000);
});

// 모든 링크를 선택합니다.
var links = document.querySelectorAll("#navbar a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    });
}

var videos = [
    document.getElementById("video1"),
    document.getElementById("video2"),
    document.getElementById("video3"),
    document.getElementById("video4"),
    document.getElementById("video5")
];

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: [0.5] });

videos.forEach(function (video) {
    observer.observe(video);
});

window.addEventListener('scroll', function () {
    var elements;
    elements = document.querySelectorAll('.box1-1, .box1, .box2, .box3, .box4, .box5');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect();

        // 화면의 중간에 위치할 때 애니메이션을 시작합니다.
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            element.classList.add('show-on-scroll');
        }
    }
});
