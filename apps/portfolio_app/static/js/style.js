$(document).ready(function(){
    $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
    });
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
    $('.parallax').parallax();
    $('ul.tabs').tabs();
    var options = [
      {selector: '#skills', offset: 100, callback: function(el){
        Materialize.showStaggeredList($(el));
      }},
      {selector: '#aboutme', offset: 400, callback: function(el){
        Materialize.showStaggeredList($(el));
      }},
      {selector: '#navbar', offset: 0, callback: function(el){
        Materialize.showStaggeredList($(el));
      }},
      {selector: '#contact', offset: 300, callback: function(el){
        Materialize.showStaggeredList($(el));
      }},
    ];
    Materialize.scrollFire(options);

    $('.jumper[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 850, 'swing', function () {
            window.location.hash = target;
        });
    });
});
    // $(".strength").hover(function(handerIn){
    //   var message;
    //   var secmessage;
    //   $(".strength").addClass("animated shake");
    //   message = $(this).attr('id')
    //   secmessage = $(this).attr('alt')
    //   document.getElementById("strtext").innerHTML = message;
    //   document.getElementById("subtext").innerHTML = secmessage;
    //   $("#strtext").show().fadeIn(1000);
    //   $("#subtext").show().fadeIn(1000);
    // }, function(handlerOut){
    //   $("#strtext").hide().fadeIn(1000);
    //   $("#subtext").hide().fadeIn(1000);
    // });



// document.addEventListener('DOMContentLoaded', function() {
//   var something = new Typed('#topmsg', {
//     strings: ["Hello, there!","I am David Yoon,qwrqwrsdasdsad"],
//     typeSpeed: 70,
//     backSpeed: 70,
//     startDelay: 1000,
//     loop: false,
//     showCursor: false,
//     smartBackspace: true,
//     contentType: 'text'
//   });
//
//   var typed = new Typed('#submsg', {
//     strings: ["am 1 ^1000", "nan 2 ^1000", "am 3 ^1000", "m4a1 ^1000"],
//     typeSpeed: 70,
//     backSpeed: 70,
//     startDelay: 2000,
//     loop: true,
//     loopCount: Infinity,
//     showCursor: false,
//     fadeOut: true,
//     fadeOutDelay: 500,
//   })
// });
