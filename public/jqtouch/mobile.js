var jQT = new $.jQTouch({
  icon:'apple-touch-icon.png',
  //addGlossToIcon: false,
  startupScreen:"apple-touch-startup.png",
  statusBar:'black-translucent',
  preloadImages:[
    '/jqtouch/themes/jqt/img/back_button.png',
    '/jqtouch/themes/jqt/img/back_button_clicked.png',
    '/jqtouch/themes/jqt/img/button_clicked.png',
    '/jqtouch/themes/jqt/img/grayButton.png',
    '/jqtouch/themes/jqt/img/whiteButton.png',
    '/jqtouch/themes/jqt/img/loading.gif'
  ]
});

jQuery(function() {
  // Add custom handler code here.
	$("#month").bind("pageAnimationEnd" ,function(e,info){
		if(info.direction == "out")return;
		var $page = $(this);
		if($page.data("loaded"))return;
		$.getJSON("/month.json",function(){
			var $li = $("month ul:first li:first");
			JQuery.each(data,function(){
				var $clone = $li.clone();
				$clone.html(this.title + "<small>" + this.quantity + "</small>");
				$li.parent().append($clone);
			});
			$page.data("loaded", true);
		});
		alert("Animating #month " + info.direction);
	});
	//$("#home").bind("pageAnimationEnd" ,function(e,info){
	//	alert("Animating #home " + info.direction);
	//});
});
