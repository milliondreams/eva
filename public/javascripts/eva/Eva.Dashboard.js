define(['jquery', 'exports', 'jquery.masonry', 'Eva.WidgetManager'], function ($,exports) {
	console.log("I am ready");
	function masonize() {
		$(".thumbnails").masonry({
			isAnimated:true,
			animationOptions:{
				duration:500,
				easing:'linear'
			},
			containerStyle:{
				position:'relative'
			},
			columnWidth:function (containerWidth) {
				return containerWidth / 12;
			}
		});
	};

	exports.render = function(dashboard){
		$(document).ready(
			$.get(getDashboardUrl(Eva.config.client, dashboard))
			.success(function (data) {
				renderDashboard(data);
			})
			.error(function (jqXHR, textStatus, errorThrown) {
				console.error("Error fetching dashboard for " + clientId + " " + dashId);
			})
			.complete(function () {
				window.setTimeout(masonize, 1000);
			}
	))};

	function renderDashboard (dashboard) {
		for (var widget in dashboard) {
			console.log(dashboard[widget]);
			addWidgetToDashboard(dashboard[widget]);
		}
	};


	function getDashboardUrl (clientId, dashId) {
		return "/dashboards/" + clientId + "/" + dashId;
	};

	function addWidgetToDashboard(widget) {
		console.log(widget.span);
		$(".dashboard").append(function () {
			return '<li class="span' + widget.span + '" style="height:' + widget.height + 'px"><div>' +
				'<img src="http://placehold.it/' + widget.span * 90 + 'x' + widget.height + '"/>' +
				'</div></li>'
		});

	};

});
