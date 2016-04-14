var app = app || {};

app.bgImageSelectorView = Backbone.View.extend({

	initialize: function() {
		this.cacheDomElements();
		this.bindEvents();
	},

	cacheDomElements: function() {
		this.dom = {
			$randomImageButton: $('#random-image-button'),
			$uploadImageButton: $('#upload-image-button'),
			$uploadImageInput: $('#upload-image-input')
		};
	},

	bindEvents: function() {
		this.dom.$randomImageButton.on('click', this.onRandomImageButtonClick.bind(this));
		this.dom.$uploadImageButton.on('click', this.onUploadImageButtonClick.bind(this));
	},

	onRandomImageButtonClick: function() {
		this.model.setCanvasBgImage('https://unsplash.it/500/?image=' + this.getRandomImageNum());
		//some images can return 404
	},

	onUploadImageButtonClick: function() {
		this.model.setCanvasBgImage(this.dom.$uploadImageInput.val());
	},

	getRandomImageNum: function() {
		var min = 1;
		var max = 1000;
		var rand = min + Math.random() * (max -min);
		rand = Math.round(rand);
		return rand;
	}
});