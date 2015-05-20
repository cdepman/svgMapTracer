  window.worldMap = {
  initialize: function(){
    $('.world').each(function(){
      console.log(this);
      var delay = 0;
      var length = this.getTotalLength()
      $(this).css('transition', 'none')
             .attr('data-length', length)
             .attr('data-speed', 4000)
             .attr('data-delay', delay)
             .attr('stroke-dashoffset', length)
             .attr('stroke-dasharray', length + ',' + length);
    });
  },

  animate: function(){
    $('.world').each(function(){
      var length = $(this).attr('data-length')
      var speed = $(this).attr('data-speed')
      var delay = $(this).attr('data-delay')
      $(this).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear')
             .attr('stroke-dashoffset', '0')
    });
     
  }
}
        
$(function(){
  window.worldMap.initialize();
  setTimeout(function(){
    window.worldMap.animate()
  }, 500);

})
