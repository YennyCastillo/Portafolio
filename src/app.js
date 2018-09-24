$(document).ready(function(){
    M.AutoInit();
 });
      ;
   //carousel
  
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems,{
    responsiveThreshold: 0,	
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems,{
    height: 350,
  });
});
