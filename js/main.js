const faedEls = document.querySelectorAll('.visual .fade-in');
const toTopEl = document.querySelector('#to-top');
//_.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //버튼 보이기
    gsap.to(toTopEl, .2, { //gsap에서 제공하는 에니메이션 처리 방법중에 to라는 기능 (요소, 지속시간, 옵션)
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


faedEls.forEach(function (fadeEl, index) { //하나씩 순차적으로 쓸 수 있게 요소, 반복되는 횟수로 index
//gsap 에니메이션을 제공하는 라이브러리에서 to라는 메소드를 실행
  gsap.to(fadeEl, 1, {  
  //delay라는 옵션을 추가(지연시간) fadeEl라는 요소 부분에 에니메이션을 1초동안 실행할껀데 몇초 뒤에 실행될건지
    delay: (index + 1) * .7, // index는 0부터 시작이므로 1을 더해준다 0.7, 1.4, 2.1, 2.7
    opacity: 1  //기본값이 0이었으므로 1로
  });
});
// 범위 랜덤 함수(소수점 2자리까지) 랜덤한 숫자를 뽑아낼 수 있다
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자 
    random(1.5, 2.5),   //애니메이션 동작 시간, 함수가 실행되고 반환된 값이 지속시간으로 쓰여진다
    { //옵션
      y: size,  //얼마만큼 움직이는지
      repeat: -1, //무한반복 : 자바스크립트 라이브러리에서 지원
      yoyo: true, // 한번 재생된 에니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut, // 좀 더 자연스럽게 , easy 함수로 우리가 원하는 형태로 할 수 있다
      delay: random(0, delay) // 몇 초 뒤에 에니메이션을 실행 ,랜덤하게 지연할 수 있도록 설정
  });
};
floatingObject('.floating1', 1, 15); //15size  = 15px
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


new Swiper('.slide .swiper-container', { // new swiper 초기화 (기능을 이 부분에서 시작하겠다)
  slidesPerView: 1, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생 의미
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

