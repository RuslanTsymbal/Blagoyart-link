$(document).ready(function() {

  //slider

	$('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
   });


  //pop-up-menu
   
   $('.btn-menu_js').mouseover(function(){
      $('.pop-up-menu').fadeIn(400);
   });

   $('.pop-up-menu_js').mouseleave(function(){
      $('.pop-up-menu').fadeOut(400);
   });

   $('.nested-list_js').mouseover(function(){
      $('.pop-up-nested').fadeIn(400);
   });

   $('.nested-list_js').mouseleave(function(){
      $('.pop-up-nested').fadeOut(400);
   });

   $('.pop-up-nested_js').mouseover(function(){
      $('.pop-up-menu').css("display","block");
   });


   //burger-menu

  $( ".burger-menu" ).click(function() {
    
    $(".menu" ).toggle();

    var darkBlock = $("div").is("#overlay");

    if (darkBlock) {
      $("#overlay").remove();
    } else {
      $("html,body").css("overflow","hidden");

    var docHeight = $(document).height();

    $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
          'opacity' : 0.4,
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'background-color': 'black',
          'width': '100%',
          'z-index': 1
      });
    }
  });
});


//burger-menu

function myFunction(x) {
  x.classList.toggle("change");
}