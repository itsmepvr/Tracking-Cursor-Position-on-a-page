

//Calling the function
trackCursorPosition();

function trackCursorPosition(){
    $("body").append("<span id = 'tooltip_x_y'></span>");
    $("body").css("position","absolute").css("width","100%").css("height","100%");
    $(".tooltip_x_y").css("display","none");
        
    tooltipSpan = document.getElementById('tooltip_x_y');

    $('body').mousemove(function(e) {
    $("#tooltip_x_y").css("display","block").css("position","fixed").css("overflow","hidden");
    $("#tooltip_x_y").html("<span style='background:#F0E68C;padding:5px;'>X : <span style='color:red;font-weight:bold'>"+e.pageX +"</span>  Y : <span style='color:red;font-weight:bold'>"+e.pageY+"</span></span>");
    
    //positioning tooltip with cursor
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x + 20) + 'px';
    })
}