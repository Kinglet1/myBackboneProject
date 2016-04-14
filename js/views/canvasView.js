var app = app || {};

app.canvasView = Backbone.View.extend({
	tagName: 'canvas',
	id: 'canvas',

	initialize: function() {
		$('.canvas-wrapper').html(this.render().el);

		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},

	render: function() {
		if (!this.el.getAttribute('width') || !this.el.getAttribute('height')) {
			this.el.setAttribute('width', this.model.toJSON().canvasWidth);
			this.el.setAttribute('height', this.model.toJSON().canvasHeight);
		}

		this.drawCanvas(this.el, this.model.toJSON());
		return this;
	},

	drawText: function(context, text, maxWidth, lineHeight, canvasWidth, canvasHeight, fontSize, color) {
		context.font = fontSize + 'px ' + 'Arial';
		context.textAlign = "center";
		context.textBaseline = 'middle';
		context.fillStyle = color;

		var words = text.split(' ');
		var lines = [];
		var line = '';
		var x = canvasWidth/2;

		for (var i = 0; i < words.length; i++) {
			var testLine = line + words[i] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;

			if (testWidth > maxWidth && i > 0) {
				lines.push(line);
				line = words[i] + ' ';
			}
			else {
				line = testLine;
			}
		}

		if(line.length) {
			lines.push(line);
		}

		var linesCount = lines.length;
		var textHeight = linesCount * lineHeight;
		var startY = (canvasHeight - textHeight)/2;

		for (var j = 0; j < linesCount; j++) {
			context.fillText(lines[j], x, startY+j * lineHeight);
		}
	},

	drawCanvas: function(canvasElement, data) {
		var canvas = canvasElement;
		var context = canvas.getContext('2d');

		if (data.canvasBgImage) {
			var background = new Image();
			background.crossOrigin="anonymous";
			background.src = data.canvasBgImage;

			background.onload = this.drawBgImage.bind(this, context, data, background);
		}
		else {
			context.fillStyle = data.canvasBgColor;
			context.fillRect(0, 0, data.canvasWidth, data.canvasHeight);

			if (data.canvasText) {
				this.drawText(context, data.canvasText, data.canvasWidth, data.canvasLineHeight, data.canvasWidth, data.canvasHeight, data.canvasFontSize, data.canvasFontColor);
			}

			$('.result-image').attr('src', canvas.toDataURL('image/png'));
			$('#download-button').attr('href', canvas.toDataURL('image/png')); //TODO: crossbrowser download
		}
	},

	drawBgImage: function(context, data, background) {
		context.drawImage(background, 0, 0);

		if (data.canvasText) {
			this.drawText(context, data.canvasText, data.canvasWidth, data.canvasLineHeight, data.canvasWidth, data.canvasHeight, data.canvasFontSize, data.canvasFontColor);
		}

		$('.result-image').attr('src', canvas.toDataURL('image/png'));
		$('#download-button').attr('href', canvas.toDataURL('image/png')); //TODO: crossbrowser download
	}
});