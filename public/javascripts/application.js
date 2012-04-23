// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
jQuery(function() {
	jQuery("#tabs").tabs();
	jQuery("#search").button({icons: { primary: "ui-icon-search"}});
	
	jQuery( "input:submit,button" ).button();
	
	jQuery( "#login" ).dialog({ draggable: false },{ resizable: false },{ dialogClass: 'no-close' },{ closeOnEscape: false });
	jQuery( "#register" ).dialog({ width: 350 },{ draggable: false },{ resizable: false },{ dialogClass: 'no-close' },{ closeOnEscape: false });

	jQuery( "#stop" ).button({
			text: false,
			icons: {
				primary: "ui-icon-circle-close"
			}
		});

	

jQuery("#notaccordion").addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
  .find("h3")
    .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
    .hover(function() { $(this).toggleClass("ui-state-hover"); });
    //.prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>');
    

});
