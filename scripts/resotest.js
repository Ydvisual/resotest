window.onload = function() {
  var span = document.getElementById("span_info"); // The canvas
  cv_w = window.innerWidth;
  cv_ow = window.outerWidth
  span.textContent = "Window.innerWidth, outerWidth: " + cv_w + "," + cv_ow;
}
/*
var animate = function() {
	requestAnimationFrame(animate);
	
	update();
	render();
}
animate();	
	*/
