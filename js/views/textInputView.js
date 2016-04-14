var app = app || {};

app.textInputView = Backbone.View.extend({
	initialize: function() {
		this.cacheDomElements();
		this.bindEvents();
	},

	cacheDomElements: function() {
		this.dom = {
			$textInput: $('#text-input')
		};
	},

	bindEvents: function() {
		this.dom.$textInput.on('blur', this.onTextInputBlur.bind(this));
	},

	onTextInputBlur: function() {
		this.model.setCanvasText(this.dom.$textInput.val());
	}
});