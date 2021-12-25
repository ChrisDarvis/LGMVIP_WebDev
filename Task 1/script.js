// swipper js scripts
var swiper = new Swiper(".slider", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  

//  Animation on scroll function 

AOS.init({
  duration:1000,

});
