const boxes1 = document.querySelectorAll('.font1, .font7, .fontani');
window.addEventListener('scroll', checkBoxes1);
checkBoxes1();

function checkBoxes1() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes1.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

const boxes2 = document.querySelectorAll('.boxani, .boxani1, .boxani2');
window.addEventListener('scroll', checkBoxes2);
checkBoxes2();

function checkBoxes2() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes2.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// const boxes3 = document.querySelectorAll('#section7');
// window.addEventListener('scroll', function() {
//     document.getElementById('section7').classList.add('zoomin');
//   });
  
//   window.addEventListener('scroll', function() {
//     if(window.scrollY === 0) {
//       document.getElementById('section7').classList.remove('zoomin');
//     }
//   });
  