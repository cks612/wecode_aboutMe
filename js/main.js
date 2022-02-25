const faedEls = document.querySelectorAll('.visual .fade-in');
const toTopEl = document.querySelector('#to-top');
//_.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else 
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }, 300));
  toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
      scrollTo: 0
    })
  });


faedEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자 
    random(1.5, 2.5),   //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// a 태그에서는 value라는 속성이 없으니 값을 받아오지 못한다
// 다음엔 button이나 input으로 받아서 해 보자
// function MoveToIntroduce (el){
//   console.log(el)
//   document.getElementById(el).scrollIntoView({
//     behavior : 'smooth'
//   });
// }


new Swiper('.slide .swiper-container', {
  slidesPerView: 1, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 2000
  },
  // pagination: {
  //   el: '.slide .swiper-pagination', // 페이지 번호 요소 선택자
  //   clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  // },
  navigation: {
    prevEl: '.slide .swiper-prev',
    nextEl: '.slide .swiper-next'
  }
});

