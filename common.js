$(function () {
  var swiper1 = new Swiper(".review", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

const $hamOpen = document.querySelector(".ham_open"),
  $hamClose = document.querySelector(".ham_close");

$hamOpen.addEventListener("click", function () {
  document.body.classList.add("scrollLock");
});
$hamClose.addEventListener("click", function () {
  document.body.classList.remove("scrollLock");
});
