// Start --- Loading Screen
$(document).ready(function(){
    $(".Loading-Screen").fadeOut(1000,function(){
        $("body").css("overflow","visible")
    });
})
// End --- Loading Screen
// Start --- Open & Close the Menu
$(".BurgerIcons").mousemove(function(){
    $(".Links ul").css("display","block");
})
$(".BurgerIcons").mouseleave(function(){
    $(".Links ul").css("display","none");
})
$(".Links ul").mousemove(function(){
    $(".Links ul").css("display","block");
})
$(".Links ul").mouseleave(function(){
    $(".Links ul").css("display","none");
})
// End --- Open & Close the Menu
// Start --- Links Scrolling
// --- change color for navbar
let changeScroll = $("#Services").offset().top;
$(window).scroll(function(){
    let topOffset = $(window).scrollTop()
    if(topOffset>changeScroll){
        $("header").css({"background-color":"#f6f6f6","transition":"background-color 500ms"})
    }else{
        $("header").css("background-color","transparent")
    }
})
// -- click on links & smothing in scroll
$(".Links ul li a").click(function(){
    
    let theSection = $(this).attr("href");
    let currentOffset = $(theSection).offset().top;
    $("body,html").animate({scrollTop:currentOffset},2000);
})
// End --- Links Scrolling
