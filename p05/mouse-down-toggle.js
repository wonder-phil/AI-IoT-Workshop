/*
UW Reality Lab
https://www.youtube.com/watch?v=HrLsr-nzZGA&t=568s
*/

AFRAME.registerComponent('my-color-toggle', {
	init: function() {
		let el = this.el;
		
		this.toggleColor = function() { // adding a method
			alert("clicked");
		}
		this.el.addEventListener('click', this.toggleColor);
	},
	remove: function() {
		this.el.removeEventListener('click', this.toggleColor);
	}
})