if(typeof Eva === 'undefined'){
    Eva = {};
}

$(function(){

    var client = 'client01', dashboard = 'dash01';

    function masonize(){
        $(".thumbnails").masonry({
            isAnimated: true,
            animationOptions: {
                duration: 500,
                easing: 'linear'
            },
            containerStyle:{
                position: 'relative'
            },
            columnWidth: function( containerWidth ) {
                return containerWidth / 12;
            }
        });
    }

    $.get(Eva.Dashboard.getDashboardUrl(client, dashboard))
        .success(function(data){
            Eva.Dashboard.renderDashboard(data);
        })
        .error(function(jqXHR, textStatus, errorThrown){
            console.error("Error fetching dashboard for " + clientId + " " + dashId);
        })
        .complete(function(){
            window.setTimeout(masonize, 1000);
        });
});

Eva.Dashboard = {
    renderDashboard : function(dashboard){
        for(var widget in dashboard){
            console.log(dashboard[widget]);
            this.addWidgetToDashboard(dashboard[widget]);
        }
    },
    getDashboardUrl : function(clientId, dashId){
        return "/dashboards/" + clientId + "/" + dashId;
    },
    addWidgetToDashboard:function(widget){
        console.log(widget.span);
        $(".dashboard").append(function(){
           return '<li class="span' + widget.span + '" style="height:'+widget.height+'px"><div>' +
                '<img src="http://placehold.it/' + widget.span * 90 + 'x' + widget.height + '"/>' +
               '</div></li>'
        });

    }
}