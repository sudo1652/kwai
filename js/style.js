// var vid = document.getElementById("myVideo");

// vid.onplaying = function() {
//     setTimeout(function(){
//         vid.pause();
//     }, 15000); // 5000 milliseconds = 5 seconds
// };

// 모달과 버튼, 닫기 요소를 가져옵니다
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// 버튼을 클릭하면 모달을 엽니다
btn.onclick = function() {
    modal.style.display = "block";
}

// 닫기 요소를 클릭하면 모달을 닫습니다
span.onclick = function() {
    modal.style.display = "none";
}

// 사용자가 모달 외부를 클릭하면 모달을 닫습니다
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
