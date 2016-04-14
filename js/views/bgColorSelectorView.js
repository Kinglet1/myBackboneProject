var app = app || {};

app.bgColorSelectorView = Backbone.View.extend({
	className: 'bg-color-selector',

	initialize: function() {
		$('.bg-color-selector-container').append(this.render().el);
	},

	events: {
		'click li': 'onItemBgColorSelectorClick'
	},

	onItemBgColorSelectorClick: function(event) {
		this.model.setCanvasBgColor($(event.target).attr('data-bg-color'));
	},

	template: _.template($('#bg-color-selector-template').html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});