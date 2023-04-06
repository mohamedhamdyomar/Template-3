$(function(){

    $(window).scroll(function(){
      var navbar =$(".navbar"); 
     $(window).scrollTop() >= navbar.height() ? navbar.addClass("scrolled") :navbar.removeClass("scrolled");
    });

    $(".tabs .tabswitcht li").click(function(){
      $(this).addClass("selected").siblings().removeClass("selected");

      $(".tabs .tabcontent > div").hide();
      $($(this).data('class')).show();

    });
});