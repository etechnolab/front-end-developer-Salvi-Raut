/* Fixed Navigation starts here */
$(window).scroll(function()
{
      if ($(this).scrollTop() > 10) 
	  {
          $('.navbar-default').addClass('fixed');
		  $('.navbar-brand, .navbar-default .navbar-nav li a').addClass('white_color');
		  $('.navbar-toggle').addClass('white_background');
		  $('.navbar-default .navbar-toggle .icon-bar').addClass('black_background');
		  $('.back-to-top').css("display", "block");		   
      } 
	  else 
	  {
          $('.navbar-default').removeClass('fixed');
		  $('.navbar-brand, .navbar-default .navbar-nav li a').removeClass('white_color');
		  $('.navbar-toggle').removeClass('white_background');
		  $('.navbar-default .navbar-toggle .icon-bar').removeClass('black_background');
		  $('.back-to-top').css("display", "none");
      }
});
/* Fixed Navigation ends here */

/* Smooth scrolling starts here */
$(document).on('click', 'a[href^="#"]', function (event) 
{
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 150
    }, 500);
});
/* Smooth scrolling ends here */

/* Backtotop starts here */
$(".back-to-top").click(function() 
{
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
});
/* Backtotop ends here */

/* On scroll active class starts here */
var lastId,
    topMenu = $("#navbar"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
	   
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
/* On scroll active class ends here */

/* Onclick remove in class starts here */
$("#navbar ul li a").click(function()
{
  $("#navbar").removeClass("in");
});
/* Onclick remove in class ends here */

/* Contact Form Validation starts here */
function validateForm() 
{
  var x = document.forms["myForm"]["name"].value;
  if (x == "") 
  {
    alert("Enter your name");
    return false;
  }
  var y = document.forms["myForm"]["email"].value;
  if (y == "") 
  {
    alert("Enter your email");
    return false;
  }
  var z = document.forms["myForm"]["subject"].value;
  if (z == "") 
  {
    alert("Enter your subject");
    return false;
  }
  var m = document.forms["myForm"]["message"].value;
  if (m == "") 
  {
    alert("Enter your message");
    return false;
  }
}

function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }
        return true;

}
/* Contact Form Validation ends here */