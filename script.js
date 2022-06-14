$(function(){
	$('.char1').easyPieChart({
		barColor:black,
		trackColor: blue,
		scaleLength: '0',
		lineCap: 'round',
		lineWidth: 3,
		size: 100,
		animate: {
			duration: 10000,
			enabled: true
		},
		onStep: function(from, to, percent){
			var i = percent/10;
			var j = i.toFixed(2);
			$(this.el).find('.percent').text(Math.trunc(i));
			$(this.el).find('.point').text( '.' + j.split('.')[1]);
		}
	})
})