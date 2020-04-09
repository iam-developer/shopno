
$(document).ready(function(){
 $('#about').on("click", function(e){
        e.preventDefault();
            var top = $(".about").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 900);
    });
});

$(document).ready(function(){
    $('#works').on("click", function(e){
           e.preventDefault();
               var top = $(".featured__works").offset().top;
           $('html,body').animate({
               scrollTop: top
           }, 900);
       });
   });

$(document).ready(function(){
    $('#service').on("click", function(e){
           e.preventDefault();
               var top = $(".our__services").offset().top;
           $('html,body').animate({
               scrollTop: top
           }, 900);
       });
   });
   
$(document).ready(function(){
    $('#team').on("click", function(e){
           e.preventDefault();
               var top = $(".small__team").offset().top;
           $('html,body').animate({
               scrollTop: top
           }, 900);
       });
   });
   
$(document).ready(function(){
    $('#contact').on("click", function(e){
           e.preventDefault();
               var top = $(".contact").offset().top;
           $('html,body').animate({
               scrollTop: top
           }, 900);
       });
   });

   $(document).ready(function(){
    $('#button').on("click", function(e){
           e.preventDefault();
               var top = $("#contact__us").offset().top;
           $('html,body').animate({
               scrollTop: top
           }, 900);
       });

//  FUnction for block "OUR SERVICES":

    //    1-content
       //open:
        $("#btn1").click(function() {
            $(this).parent().removeClass("first_class");
            $(this).parent().css("background-color", "green");
            $(this).css("display", "none");
            $(this).next().css("display", "block");           
            $("#title1").css("padding-top", "0");
            $("#text1").text("I wanna to meet you in do you have  boyfriend everywhere I know how to use the id to get, but that's not an option for me. I would like to use the $(this) keyword instead of the id, but I'm not sure how to do that.");
            });

        //close:
        $(".close__btn1").click(function(){
            $(this).parent().addClass("first_class");
            $(this).parent().css("background-color", "#000");
            $(this).css("display", "none");
            $(this).prev().css("display", "block");
            $("#text1").text("Our most popular service is our we know that sometimes it’s something and you middle most..")
            $("#title1").css("padding-top", "90px");
        });
           
    //    2-content
                //open:
            $("#btn2").click(function(){
                $(this).parent().removeClass("second_class");
                $(this).parent().css("background-color", "green");
                $(this).css("display", "none");
                $(this).next().css("display", "block");
                $("#title2").css("padding-top", "0");
                $("#text2").text("I wanna to meet you in do you have  boyfriend everywhere I know how to use the id to get, but that's not an option for me. I would like to use the $(this) keyword instead of the id, but I'm not sure how to do that.");
                });

                //close:
            $(".close__btn2").click(function(){
                $(this).parent().addClass("second_class");
                $(this).parent().css("background-color", "#000");
                $(this).css("display", "none");
                $(this).prev().css("display", "block");
                $("#text2").text("Our most popular service is our we know that sometimes it’s something and you middle most...");
                $("#title2").css("padding-top", "90px");    
            });
    
    //    3-content

                //open:
            $(".btn3").click(function(){
                $(this).parent().removeClass("third_class");
                $(this).parent().css("background-color", "green");
                $(this).css("display", "none");
                $(this).next().css("display", "block");
                $("#title3").css("padding-top", "0");
                $("#text3").text("I wanna to meet you in do you have  boyfriend everywhere I know how to use the id to get, but that's not an option for me. I would like to use the $(this) keyword instead of the id, but I'm not sure how to do that.");
            });

                //close:
            $(".close__btn3").click(function(){
                $(this).parent().addClass("third_class");
                $(this).parent().css("background-color", "#000");
                $(this).css("display", "none");
                $(this).prev().css("display", "block");
                $("#text3").text("Our most popular service is our we know that sometimes it’s something and you middle most..")
                $("#title3").css("padding-top", "90px");
            });

    //    4-content

                // open:
            $(".btn4").click(function(){
                $(this).parent().removeClass("fourth_class");
                $(this).parent().css("background-color", "green");
                $(this).css("display", "none");
                $(this).next().css("display", "block");
                $("#title4").css("padding-top", "0");
                $("#text4").text("I wanna to meet you in do you have  boyfriend everywhere I know how to use the id to get, but that's not an option for me. I would like to use the $(this) keyword instead of the id, but I'm not sure how to do that.");
                });

                //close:
            $(".close__btn4").click(function(){
                $(this).parent().addClass("fourth_class");
                $(this).parent().css("background-color", "#000");
                $(this).css("display", "none");
                $(this).prev().css("display", "block");
                $("#text4").text("Our most popular service is our we know that sometimes it’s something and you middle most...");
                $("#title4").css("padding-top", "90px");    
            });

    //    5-content

                // open:
            $(".btn5").click(function(){
                $(this).parent().removeClass("fifth_class");
                $(this).parent().css("background-color", "green");
                $(this).css("display", "none");
                $(this).next().css("display", "block");
                $("#title5").css("padding-top", "0");
                $("#text5").text("I wanna to meet you in do you have  boyfriend everywhere I know how to use the id to get, but that's not an option for me. I would like to use the $(this) keyword instead of the id, but I'm not sure how to do that.");
                });

                // close"
            $(".close__btn5").click(function(){
                $(this).parent().addClass("fifth_class");
                $(this).parent().css("background-color", "#000");
                $(this).css("display", "none");
                $(this).prev().css("display", "block");
                $("#text5").text("Our most popular service is our we know that sometimes it’s something and you middle most...");
                $("#title5").css("padding-top", "90px");    
            });

    //    6-content

                // open:
            $(".btn6").click(function(){
                $(this).parent().removeClass("sixth_class");
                $(this).parent().css("background-color", "green");
                $(this).css("display", "none");
                $(this).next().css("display", "block");
                $("#title6").css("padding-top", "0");
                $("#text6").text("I wanna to meet you in do you have  boyfriend everywhere I know how to use the id to get, but that's not an option for me. I would like to use the $(this) keyword instead of the id, but I'm not sure how to do that.");
                });

                // close:
            $(".close__btn6").click(function(){
                $(this).parent().addClass("sixth_class");
                $(this).parent().css("background-color", "#000");
                $(this).css("display", "none");
                $(this).prev().css("display", "block");
                $("#text6").text("Our most popular service is our we know that sometimes it’s something and you middle most...");
                $("#title6").css("padding-top", "90px");    
            });
            
    // Scrolling to top:

$(window).scroll(function() {
    if($(this).scrollTop() != 0)
        $("#toTop").fadeIn();
    else
        $("#toTop").fadeOut();
});

    $("#toTop").click(function() {
        $('body, html').animate({
            scrollTop:0
        }, 800);
    });

// Function for Burger menu:

$(".burger_menu").click(function() {
    $(".menu").slideToggle(500);
        if($(".burger_menu").html() == '<i class="fas fa-bars"></i>') {
           $(this).html('<i class="fas fa-times"></i>');
        }
        else {
            $(this).html('<i class="fas fa-bars"></i>');
         }
});

    });


    

//  Slider for ABOUT US images:
let index = 1;

function slides() {
    let about_img = document.getElementsByClassName('item_img');

    if(index < 1){index = about_img.length}
    if(index > about_img.length){index = 1}
    
     for(let i = 0; i < about_img.length; i ++) {
        about_img[i].style.display = "none";
     }
     about_img[index-1].style.display = "block";
     about_img[index-1].classList.add('wow', 'fadeIn');
     new WOW().init();
     about_bots(index);
}

slides(index);

// about us buttons
function btn_left() {
    slides(index -= 1);
}

function btn_right() {
    slides(index += 1);
}

//Function for block "BOTS":
function about_bots() {
    let bot = document.getElementsByClassName('bots__item');

    for(let x = 0; x < bot.length; x++) {
        bot[x].style.backgroundColor = "#d0d0d0";
    }
    bot[index-1].style.backgroundColor = "#888889";
}



// Function for block WHAT THEY SAY:

function what_they_say() {
    let say_img = document.getElementsByClassName('hhh');

    if(index < 1){index = say_img.length}
    if(index > say_img.length){index = 1}
    
     for(let t = 0; t < say_img.length; t++) {
        say_img[t].style.display = "none";
     }
     say_img[index-1].style.display = "block";
     say_img[index-1].classList.add('wow', 'slideInLeft');
     new WOW().init();
     about_bots2(index);
     what_they_say_text(index);
}
what_they_say(index);

function about_bots2() {
    let bot2 = document.getElementsByClassName('gg');

    for(let x = 0; x < bot2.length; x++) {
        bot2[x].style.backgroundColor = "#d0d0d0";
    }
    bot2[index-1].style.backgroundColor = "#888889";
}


// what they say buttons
function btn_right2() {
    what_they_say(index += 1);
}

function btn_left2() {
    what_they_say(index -= 1);
}

function what_they_say_text() {
    let what_text = document.getElementsByClassName('oo');

    for(let x = 0; x < what_text.length; x++) {
        what_text[x].style.display = "none";
    }
    what_text[index-1].style.display = "block";
    what_text[index-1].classList.add('wow', 'slideInRight');
    new WOW().init();
}


// ПРОВЕРКА НА ПУСТОТУ: 

let check_btn = document.querySelector('#send');

check_btn.onclick = function (e) {
    e.preventDefault();
    let form = document.querySelector('.form');
    let inputs = document.querySelectorAll(".input");
    let error = document.querySelector('.error');
    let success = document.querySelector('.success');

    for(let f = 0; f < inputs.length; f ++) {
        if(inputs[f].value == '') {
            console.log('Пусто!');
            inputs[f].style.borderBottom = "1px solid red";
            form.style.border = "2px solid red";
            error.innerText = "Error! Fill all necessary fields!";
            form.classList.add("wow","bounce");
            new WOW().init();
            error.style.opacity = "1";
            success.classList.remove("wow","bounceIn");
            success.style.opacity = "0";
            return 0;
        }
        else {
            console.log('Success!')
            inputs[f].style.borderBottom = "1px solid #88898c";
            form.style.border = "none";
            form.classList.remove("wow","bounce");
            success.style.backgroundColor = "green";
            success.classList.add('wow', 'bounceIn');
            new WOW().init();
            success.style.border = "1px solid #fff";
            success.innerText = "Your message has been sent successfully!";
            error.style.opacity = "0";
            success.style.opacity = "1";
            
        }
    }
}


