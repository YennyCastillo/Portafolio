// $(document).ready(function(){
//   M.AutoInit();
// });


// $(document).ready(function(){
//   $('.slider').slider();
// });
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); 
});
      
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems,{
    indicators: true,
    interval: 2000,
    height: 400,
  });
});