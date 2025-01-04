!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e("#preloader").addClass("loaded");
  }),
    e(".navbar-links a").on("click", function () {
      setTimeout(function () {
        e(".navbar-collapse").removeClass("open"),
          e(".ham").removeClass("active"),
          e(".navbar-toggler").addClass("collapsed"),
          e("body, html").toggleClass("overflow-hidden"),
          e("body").toggleClass("aside-open");
      }, 300);
    }),
    e(".navbar-toggler").on("click", function () {
      e(this).toggleClass("collapsed"),
        e(".navbar-collapse").toggleClass("open"),
        e(".ham").toggleClass("active"),
        e("body, html").toggleClass("overflow-hidden"),
        e("body").toggleClass("aside-open");
    }),
    e("#navbarCollapse").scrollspy({ offset: 20 }),
    e(".simple-ajax-popup").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      mainClass: "mfp-fade",
      gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
      zoom: {
        enabled: !0,
        duration: 300,
        easing: "ease-in-out",
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
    });
  new Swiper(".swiper-portfolio", {
    effect: "coverflow",
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: 3,
    spaceBetween: -30,
    initialSlide: 2,
    coverflowEffect: { rotate: 25, stretch: 0, depth: 150, slideShadows: !1 },
    breakpoints: { 767: { slidesPerView: 2 } },
    pagination: { el: ".portfolio-pagination", dynamicBullets: !0 },
  }),
    new Swiper(".swiper-testimony", {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !0,
    live: !0,
    callback: function (e) {},
    scrollContainer: null,
    resetAnimation: !0,
  }).init();
  var o = e(window).width();
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) && e(".mobileView").hide(),
    o >= 769 &&
      e("#pagepiling").pagepiling({
        menu: null,
        direction: "vertical",
        verticalCentered: !0,
        sectionsColor: [],
        anchors: [
          "HOME",
          "ABOUT",
          "RESUME",
          "SERVICES",
          "PRICE",
          "PORTFOLIO",
          "TESTIMONY",
          "CONTACT",
        ],
        scrollingSpeed: 500,
        easing: "swing",
        loopBottom: !0,
        loopTop: !1,
        css3: !0,
        navigation: {
          textColor: "#000",
          bulletsColor: "#fff",
          position: "right",
          tooltips: [
            "HOME",
            "ABOUT",
            "Resume",
            "SERVICES",
            "PRICE",
            "Portfolio",
            "Testimony",
            "Contact",
          ],
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 1,
        keyboardScrolling: !0,
        sectionSelector: ".section",
        animateAnchor: !1,
        onLeave: function (e, o, i) {},
        afterLoad: function (e, o) {},
        afterRender: function () {},
      }),
    e("#autoplay").textition({
      speed: 1.5,
      animation: "ease-out",
      map: { x: 200, y: 100, z: 0 },
      autoplay: !0,
      interval: 3,
    });
})(window.jQuery);
