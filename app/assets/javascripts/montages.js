$(function(){
  $("div.vine").draggable();
  $("div.vine").resizable({
    alsoResize: "video",
    aspectRatio: true,
  });

  $('.o-slider').slider({ 
    min: 0, 
    max: 1, 
    step: 0.01, 
    value: 1,
    orientation: "horizontal",
      slide: function(e,ui){
        $(this).parents("div.vine").css('opacity', ui.value)
      }                
  });

  $('.z-slider').slider({ 
    min: 0, 
    max: 100, 
    step: 1, 
    value: 1,
    orientation: "horizontal",
      slide: function(e,ui){
        $(this).parents("div.vine").css('z-index', ui.value)
      }                
  });
});