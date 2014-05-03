function activateVine($vine){
  $vine.draggable({
    stop: function(event, ui){
      var clip_id = $(this).data("id");
      $.ajax('/clips/' + clip_id, {
        method: 'PATCH',
        data: ui.position
      });
    }
  });

  $vine.resizable({
    resize: function( event, ui ) {
      $(this).find("video").css(ui.size);
      // console.log()
      // console.log()
      // console.log(ui.size)
    },
    aspectRatio: true,
    stop: function(event, ui){
      var clip_id = $(this).data("id");
      $.ajax('/clips/' + clip_id, {
        method: 'PATCH',
        data: ui.size
      });
    }

  });

  $vine.find('.o-slider').slider({ 
    min: 0, 
    max: 1, 
    step: 0.01, 
    value: 1,
    orientation: "horizontal",
    slide: function(e,ui){
      $(this).parents("div.vine").find("div.video").css('opacity', ui.value)
    },
    stop: function(e,ui){
      var clip_id = $(this).parents("div.vine").data("id");
      $.ajax('/clips/' + clip_id, {
        method: 'PATCH',
        data: {opacity: ui.value}
      });
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
    },
    stop: function(e,ui){
      var clip_id = $(this).parents("div.vine").data("id");
      $.ajax('/clips/' + clip_id, {
        method: 'PATCH',
        data: {'z_index': ui.value}
      });
    }
  });
}

$(function(){
  $("div.vine").each(function(){
    activateVine($(this))
  })
});