// ====== Script For Gallery Slider - Start
$('.gallery_main_slider_for_dis').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.gallery_slider_for_tabs_main',
    prevArrow: $('.gallery_slider_left_arrow'),
    nextArrow: $('.gallery_slider_right_arrow')
  });
  $('.gallery_slider_for_tabs_main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.gallery_main_slider_for_dis',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });
// ====== Script For Gallery Slider - End 

// ====== Script For About Page Slider - Start 
$('.about_p_o_s_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: $('.about_slider_left_arrow'),
    nextArrow: $('.about_slider_right_arrow')
  });
$('.about_part_two_slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: $('.about_slider_left_arrow_two'),
    nextArrow: $('.about_slider_right_arrow_two')
  });
// ====== Script For About Page Slider - End 