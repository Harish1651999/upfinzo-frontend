$(document).ready(function () {
  $(".testimonials__cards").slick({
    centerMode: true, // Enables center mode
    centerPadding: "50px", // Adjust the padding around centered slide
    slidesToShow: 3, // Number of slides to show
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide change speed (in milliseconds)
    pauseOnHover: true, // Pauses autoplay on hover
    arrows: false, // Display next/prev arrows
    dots: false, // Show dots for navigation (optional)
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
