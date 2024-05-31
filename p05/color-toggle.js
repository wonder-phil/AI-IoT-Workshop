/*
UW Reality Lab
https://www.youtube.com/watch?v=HrLsr-nzZGA&t=568s
*/



AFRAME.registerComponent('my-color-toggle', {
	init: function() {
		console.log("zero");
		let el = this.el;
		let data = this.data;
		console.log("init");
		
		
		this.toggleColor = function(e) { // adding a method
			console.log("1");
			//e.preventDefault();
			el.setAttribute('color','orange');
			console.log("toggleColor event");
			alert("clicked");
			
		}
		if (data.event) {
			//this.el.addEventListener('click', this.toggleColor, { passive: false });
		}
	},
	remove: function() {
		console.log("4");
		//this.el.removeEventListener('click', this.toggleColor);
	}
});