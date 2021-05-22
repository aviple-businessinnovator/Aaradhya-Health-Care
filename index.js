// function myfunc()
//     {
//        var x=document.getElementById("menu");
//        if(x.style.display == "block")
//        {
//          x.style.display="none";
//        }
//        else
//        {
//         x.style.display="block";
//        }
//     }
setInterval(function(){ 
  if ( $('html').hasClass('translated-ltr')) {
    $('.navbar').css('margin-top','38px');
  }else{
    $('.navbar').css('margin-top','0px');
  }
  }, 3000);