$(document).ready(function() {
    //Initializations
    var windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
    windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    $('#sky').css({fill:'#99ddff'});
    if(windowWidth>1595){
      $('#intro-svg').attr('height','100%');
    }
    else {
      $('#intro-svg').attr('height','100vh');
    }

    //handling window resizes
    $(window).on('resize',function (){
        windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
        windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        if(windowWidth>1595){
          $('#intro-svg').attr('height','100%');
        }
        else {
          $('#intro-svg').attr('height','100vh');
        }
        console.log("SIZE CHANGED:\n screen-width: " +screen.width + "\n window-width: " + window.innerWidth);

        $('#cloud-one,#cloud-one-shadow').velocity("stop");
        $('#cloud-two,#cloud-two-shadow').velocity("stop");
        cloudAnimations(windowWidth);
    });

    //scroll to top and lock scrolling for intro
    $(this).scrollTop(0);
    $('body').css({'overflow':'hidden'});
    $(document).bind('scroll',function () { window.scrollTo(0,0); });
     setTimeout(function(){ //unlock
         $(document).unbind('scroll');
         $('body').css({'overflow':'visible'});
     },3100);

    //introductory animations
    $('#mountain-two-light,#mountain-three-light,#mountain-four-light').velocity(
      "fadeIn", { duration: 3000 }
    );
    $('#sun').velocity(
      { translateX : -200 },
      { duration: 1, loop: false }
    ).velocity(
      { translateX : 50 },
      { duration: 2500, loop: false }
    );
    $('#title').velocity(
      { translateY : -500 },
      { duration: 1, loop: false }
    ).velocity(
      { translateY : 0 },
      { duration: 1000, loop: false }
    );
    $('#desc').velocity(
      { translateY : 600 },
      { duration: 1, loop: false }
    ).velocity(
      { translateY : 0 },
      { duration: 1000, loop: false }
    );

   cloudAnimations(windowWidth);

  function cloudAnimations(cloudPathSize) {
          //cloud animations
            for(var i = 0;i<20;i++){
                    $('#cloud-one,#cloud-one-shadow').velocity(
                      { translateX : ( cloudPathSize * 2.5 ) },
                      { duration: 33000, loop: false }
                    ).velocity(
                      { translateX : 0 },
                      { duration: 1, loop: false }
                    );
                    $('#cloud-two,#cloud-two-shadow').velocity(
                      { translateX : ( cloudPathSize * 2.75 ) },
                      { duration: 28500, loop: false }
                    ).velocity(
                      { translateX : 0 },
                      { duration: 1, loop: false }
                    );
            }
        }
});
