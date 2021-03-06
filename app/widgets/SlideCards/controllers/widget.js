var args = arguments[0];
var scrollView = $.heroContainer;
var cards = args.cards;
var style = args.style;

(function() {
	/***
	 * @method _style
	 * @desc contains style for each elements
	 */
	var _style = {
		heroContainer : $.createStyle({
			classes : [ 'heroContainer' ]
		})
	};
	
	//Apply Configured Styles
	var _applyConfigStyles = function (options) {
		var style = {
			height: options.height || Ti.UI.SIZE,
			width: options.width || Ti.UI.FILL
		};
		
		scrollView.setHeight(style.height);
		scrollView.setWidth(style.width);
	};
	
	//Create _buildCards
	var _buildCards = function (cards, style) {
		var cardStyle = {
			height: style.child ? style.child.height : undefined,
			width: style.child ? style.child.width : undefined		
		};
		var spacing = style.spacing || ["10dp", "10dp"];
		var offsetHeight = parseInt(spacing[0].replace(/\D/g,''));
		var offsetWidth = parseInt(spacing[1].replace(/\D/g,''));
		var height = cardStyle.height ? cardStyle.height : parseInt(style.height.replace(/\D/g,'')) - (offsetHeight * 2);
		var width = cardStyle.width ? cardStyle.width : parseInt(style.width.replace(/\D/g,'')) - (offsetWidth * 2);
		
		//Iterate and build the card  block
		_.each(cards, function (card, index) {
			var panel = Ti.UI.createView({
				height: height + "dp" || Ti.UI.SIZE,
				width: width + "dp" || Ti.UI.SIZE,
				top: "10dp",
				left: "10dp",
				right: "10dp",
				bottom: "10dp",
				backgroundColor: "blue"
			});
			panel.add(card.parentView);
			panel.add(card.childView);
			scrollView.add(panel);
		});
			

	};
	
	//Initialize Method
	var init = function () {
		_applyConfigStyles(style);
		_buildCards(cards, style);
	};
	
	//initialize the widget
	init();

}());