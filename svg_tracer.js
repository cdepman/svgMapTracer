  window.worldMap = {
  initialize: function(){
    $('.world').each(function(){
      console.log(this);
      var delay = 5;
      var length = this.getTotalLength()
      var previousStrokeLength = speed || 0;
      var speed = length < 100 ? 20 : Math.floor(length);
      delay += previousStrokeLength + 100
      $(this).css('transition', 'none')
             .attr('data-length', length)
             .attr('data-speed', speed)
             .attr('data-delay', delay)
             .attr('stroke-dashoffset', length)
             .attr('stroke-dasharray', length + ',' + length);
    });
  },

  animate: function(){
    $('.world').each(function(){
      var delay = 5;
      var length = $(this).attr('data-length')
      var speed = $(this).attr('data-speed')
      var delay = $(this).attr('data-delay')
      $(this).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear')
             .attr('stroke-dashoffset', '0')
    });
     
  }
}
        
$(document).ready =
  window.worldMap.initialize()

$('button').on('click', function(){
  window.worldMap.initialize();
  setTimeout(function(){
    window.worldMap.animate()
  }, 500);
});

$(window).load = function(){
  window.worldMap.animate()
}
