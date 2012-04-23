function updateMap() {
    
    var classArray = $("map").classNames().toArray();
            for (var index = 0, len = classArray.size(); index < len; ++index) {
                if(classArray[index] != 'olMap')
                $("map").removeClassName(classArray[index]);
            }
    
   /* classArray = $("footer").classNames().toArray();
            for (var index = 0, len = classArray.size(); index < len; ++index) {
                $("footer").removeClassName(classArray[index]);
            }
    */ //activate the commented parts to toggle footer width too
    
    if ($("toolbox").hasClassName("hidden") && $("nav").hasClassName("hidden")) 
    {
        $("map").toggleClassName("mapFull");
        //$("footer").toggleClassName("footerFull");
    } 
    else if ($("toolbox").hasClassName("hidden")) {
        $("map").toggleClassName("mapwNav");
        //$("footer").toggleClassName("footerwNav");
    } 
    else if ($("nav").hasClassName("hidden")) {
        $("map").toggleClassName("mapwTools");
        //$("footer").toggleClassName("footerwTools");
    } 
    else {
        $("map").toggleClassName("mapwNavTools");
        //$("footer").toggleClassName("footerwNavTools");
    }
}

function toggleTools() {
    $("toolbox").toggleClassName("hidden"); updateMap();
    if ($("toolbox").hasClassName("hidden")) 
    {
        $("showhidetools").update("show legend");
    } 
    else 
    {
        $("showhidetools").update("hide legend");
    }
}

function toggleNav() {
    $("nav").toggleClassName("hidden");
    //jQuery("#nav").toggle( "slide", {}, 1000 );
    updateMap();
    if ($("nav").hasClassName("hidden")) {
        //$("showhidenav").update("show navigation");
        $("slide").innerHTML = '<img src="../images/slide_out.png"/>' 
    } else {
        //$("showhidenav").update("hide navigation");
        $("slide").innerHTML = '<img src="../images/slide_in.png"/>'
    }
}