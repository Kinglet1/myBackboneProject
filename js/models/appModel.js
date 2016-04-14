var app = app || {};

app.appModel = Backbone.Model.extend({

	defaults: {
		canvasText: 'some text',
		canvasFontSize: 30,
		canvasLineHeight: 30,
		canvasFontColor: '#000',
		canvasBgImage: '',
		canvasWidth: 500,
		canvasHeight: 500,
		canvasBgColor: '#fff',
		bgColorsArr: ['#fff', '#000', '#F44336', '#4CAF50', '#448AFF', '#FFEB3B', '#FF9800', '#F8BBD0', '#B3E5FC', '#ffecb3'],
		fontColorsArr: ['#fff', '#000', '#B6B6B6', '#FFECB3', '#D32F2F', '#1976D2'],
		fontSizesArr: [12, 20, 30]
	},

	initialize: function() {
		console.log('appModel instance was created');

		this.on('change', function() {
			console.log('smth was changed in appModel instance');
		});
	},

	setCanvasBgColor: function(color) {
		this.set('canvasBgImage', '');
		this.set('canvasBgColor', color);
	},

	setCanvasFontColor: function(color) {
		this.set('canvasFontColor', color);
	},

	setCanvasFontSize: function(fontSize) {
		this.set('canvasFontSize', fontSize);
	},

	setCanvasLineHeight: function(fontSize) {
		this.set('canvasLineHeight', fontSize);
	},

	setCanvasBgImage: function(image) {
		this.set('canvasBgImage', image);
	},

	setCanvasText: function(text) {
		this.set('canvasText', text);
	}
});