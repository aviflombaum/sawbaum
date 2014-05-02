function activateVine($vine){
  $vine.draggable();
  $vine.resizable({
    resize: function( event, ui ) {
      $(this).find("video").css(ui.size);
      // console.log()
      // console.log()
      // console.log(ui.size)
    },
    aspectRatio: true,
  });

  $vine.find('.o-slider').slider({ 
    min: 0, 
    max: 1, 
    step: 0.01, 
    value: 1,
    orientation: "horizontal",
      slide: function(e,ui){
        $(this).parents("div.vine").find("div.video").css('opacity', ui.value)
      }                
  });

  $vine.find('.z-slider').slider({ 
    min: 0, 
    max: 100, 
    step: 1, 
    value: 1,
    orientation: "horizontal",
      slide: function(e,ui){
        $(this).parents("div.vine").css('z-index', ui.value)
      }                
  });
}

$(function(){
  $("div.vine").each(function(){
    activateVine($(this))
  })
});