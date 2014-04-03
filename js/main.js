function DoorsOfBath(header_selector, info_selector, doors_selector) {
	this.title = document.querySelector(header_selector);
	this.info = this.title.querySelector(info_selector);
	this.doors = document.querySelector(doors_selector);

	this.init();

	window.addEventListener('resize', this.init.bind(this), false);
	window.addEventListener('scroll', this.scroll.bind(this), false);
	window.addEventListener('load', this.init.bind(this), false);
};

DoorsOfBath.prototype.init = function() {
	this.title.style.left = window.innerWidth * 1/5  + "px";
	
	var door_width = document.querySelectorAll('.doors img').length * document.querySelector('.doors img').clientWidth;
	if (door_width > 0) {
		this.doors.style.width = door_width + "px";
	}	
};

DoorsOfBath.prototype.scroll = function() {

	if (window.scrollX > window.innerWidth / 3) {
		this.info.classList.add('hide');
	} else {
		this.info.classList.remove('hide');
	}
};

var doorsOfBath = new DoorsOfBath('.title', '.info', '.doors');