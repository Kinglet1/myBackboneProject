var app = app || {};

app.fontSizeSelectorView = Backbone.View.extend({
	className: 'font-size-selector',

	initialize: function() {
		$('.font-size-selector-container').append(this.render().el);
	},

	events: {
		'change': 'onFontSizeSelectorChange'
	},

	onFontSizeSelectorChange: function(event) {
		this.model.setCanvasFontSize($(event.target).val());
		this.model.setCanvasLineHeight($(event.target).val());
	},

	template: _.template($('#font-size-selector-template').html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});