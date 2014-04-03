function DoorsOfBath(header_selector, info_selector) {
	this.title = document.querySelector(header_selector);
	this.info = this.title.querySelector(info_selector);

	this.init();

	window.addEventListener('resize', this.init.bind(this), false);
	window.addEventListener('scroll', this.scroll.bind(this), false);

}

DoorsOfBath.prototype.init = function() {
	this.title.style.left = window.innerWidth * 1/5  + "px";
};

DoorsOfBath.prototype.scroll = function() {

	if (window.scrollX > window.innerWidth / 3) {
		this.info.classList.add('hide');
	} else {
		this.info.classList.remove('hide');
	}
};

var doorsOfBath = new DoorsOfBath('.title', '.info');