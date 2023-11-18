window.addEventListener('scroll', function() {
  var element = document.querySelector('.bounce');
  var section = document.querySelector('#section4');
  var position = section.getBoundingClientRect();

  // 섹션4가 화면에 위치할 때 애니메이션을 시작합니다.
  if(position.top <= window.innerHeight && position.bottom >= 0) {
    element.classList.add('show');
  }
});