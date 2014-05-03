function activateVine($vine, opacity_start, z_index_start){
  if (z_index_start == 'auto'){
    z_index_start = 50;
  };

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
    value: opacity_start,
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
    value: z_index_start,
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

  $vine.find("span.play").on("click", function(){
    if ($(this).is(".glyphicon-play")){
      $vine.find("video")[0].play();  
      $(this).removeClass("glyphicon-play").addClass("glyphicon-pause")
    } else if ($(this).is(".glyphicon-pause")) {
      $vine.find("video")[0].pause();  
      $(this).addClass("glyphicon-play").removeClass("glyphicon-pause")
    }    
  });

  $vine.hover(function(){
    $(this).find("span.play").show();
    $(this).find("div.controls").show();
  }, function(){
    $(this).find("span.play").hide();
    $(this).find("div.controls").hide();    
  })

}

$(function(){
  $("div.vine").each(function(){
    activateVine($(this), $(this).find("div.video").css("opacity"), $(this).css("z-index"))
  })
});