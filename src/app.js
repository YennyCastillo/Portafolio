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
