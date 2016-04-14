var app = app || {};

app.fontColorSelectorView = Backbone.View.extend({
	className: 'font-color-selector',

	initialize: function() {
		$('.font-color-selector-container').append(this.render().el);
	},

	events: {
		'click li': 'onItemFontColorSelectorClick'
	},

	onItemFontColorSelectorClick: function(event) {
		this.model.setCanvasFontColor($(event.target).attr('data-color'));
	},

	template: _.template($('#font-color-selector-template').html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});