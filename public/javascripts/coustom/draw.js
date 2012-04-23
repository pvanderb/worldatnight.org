//max function
function getMaxOfArray(arr){
    return Math.max.apply(null, arr)
};

function draw_gauge(boc,tob,road_level,current_level,divName,divHeight, divWidth, history_event)
{
    divWidth = 165;;
   
    //build tmp array
    var info_arr = new Array();
    info_arr[0] = boc;
    info_arr[1] = tob;
    info_arr[2] = road_level;
    info_arr[3] = current_level;



    //define max value
    var max_val;
    max_val = getMaxOfArray(info_arr);

    //define scalar (inch to pixel)
    //this is build on assumption that boc is always the lowest level to show on the graph.
    var scalar = divHeight/(max_val-boc);

    //Draw container 
    var paper = Raphael(divName,divWidth, 1.1*divHeight);

    //Draw Basic information
    // if boc and top information available
    var leftPadding = 0.3*divWidth;
    var topPadding = 0;
    if (boc + tob > 0)
    {
        var base_line = paper.rect(leftPadding, topPadding, 0.3*divWidth, divHeight-topPadding);
        var base_t = paper.text(0.15*divWidth,divHeight+5,"BOC");
        base_line.attr({fill: "gray",opacity: 0.3});

        var tob_line = paper.rect(leftPadding, divHeight-scalar*(tob-boc), 0.3*divWidth,scalar*(tob-boc));
        var tob_t = paper.text(0.15*divWidth, divHeight-scalar*(tob-boc)+5,"TOB");
    }
         
    //Draw Road Level
    var road_line = paper.rect(leftPadding, divHeight-scalar*(road_level-boc),0.3*divWidth,scalar*(road_level-boc));
    //road_line.attr({fill: "gray",opacity: 0.3});
    var road_t = paper.text(0.77*divWidth, divHeight-scalar*(road_level-boc)+5,"ROAD");

    //Draw Current Water Level
    var current_line = paper.rect(leftPadding, divHeight-scalar*(current_level-boc),0.3*divWidth,scalar*(current_level-boc));
    //var current_t = paper.text(leftPadding, divHeight-scalar*(current_level-boc)+5,"CURRENT: "+ current_level + " ft");
    //Mark different color based water level
    current_line.attr({fill: "#488FC8",opacity: 0.5});

    if (current_level >= tob && tob > 0.0)
    {
        current_line.attr({fill: "yellow",opacity: 0.5});
    }
        
    if (current_level >= road_level)
    {
        current_line.attr({fill: "red",opacity: 0.5});

    }

    //draw a simple triagnlar
    //
    
    //var history_event = {h1: 4, h2: 5};
    for ( key in history_event)
    {
        var key =  paper.path(getTrianglar(leftPadding,divHeight-scalar*(history_event[key]-boc)));
        key.attr({fill:"red"});

    }

    for (key in history_event)
    {
        var key = paper.text(leftPadding*2.2+8, divHeight-scalar*(history_event[key]-boc),key + " "+history_event[key] + " ft");
    }
    //var h = paper.path("M 200 100 L 210 110 L 210 90 z");
    //h

    

}


function getTrianglar(x,y)
{
    var d = "M "+ x + " " + y + " L " + (x+8) + " " + (y+8) + " L " + (x+8) + " " + (y-8) + " z";
    return d
}

// ADD div id, size,
