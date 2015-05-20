  window.signature = {
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
      console.log(this);
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
  window.signature.initialize()

$('button').on('click', function(){
  window.signature.initialize();
  setTimeout(function(){
    window.signature.animate()
  }, 500);
});

$(window).load = function(){
  window.signature.animate()
}
