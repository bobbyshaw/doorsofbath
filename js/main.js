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
	// Fix height of page to height of the window
	document.getElementsByTagName('body')[0].style.height = window.innerHeight + "px";
	
	// Set width of doors UL to account for the number of images.  This gives us the scrolling.
	var door_width = document.querySelectorAll('.doors img').length * document.querySelector('.doors img').clientWidth;
	if (door_width > 0) {
		this.doors.style.width = door_width + "px";
	}

	// Set image height to fill screen
	var door_imgs = this.doors.querySelectorAll('img');
	for (var i = 0; i < door_imgs.length; ++i) {
    	img = door_imgs[i]
    	img.style.height = window.innerHeight + "px";
    }
};

DoorsOfBath.prototype.scroll = function() {

	// Hide the info text once you start scrolling
	if (window.scrollX > window.innerWidth / 3) {
		this.info.classList.add('hide');
	} else {
		this.info.classList.remove('hide');
	}
};

var doorsOfBath = new DoorsOfBath('.title', '.info', '.doors');