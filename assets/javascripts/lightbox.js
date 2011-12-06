(function($) {
  
  $(function() {
    var options = {
    		'openEffect'	:	'elastic',
    		'closeEffect'	:	'elastic',
    		'nextEffect'	:	'fade',
    		'prevEffect'	:	'fade',
    		'openSpeed'		:	600, 
    		'closeSpeed'	:	200,
    		'openOpacity'	:	false, 
    		'closeOpacity'	:	false,
    		'loop'			:	false
  		}
    
    $("div.attachments a.lightbox, div.attachments a.swf").fancybox(options);
    $.extend( 
      options, 
      {
        'width': '100%', // or whatever 
        'height': '100%', 
        'autoSize': false,         
        'afterClose': function() { 
          $("#fancybox-inner").empty(); 
        }
      }
    )
    $("div.attachments a.pdf").each(function() {
       options.content = '<embed src="' + this.href + '#nameddest=self&page=1&view=FitH, 0&zoom=80,0,0" type="application/pdf" height="100%" width="100%" />';
       $(this).fancybox(options);
    })
    
    	
  })
  
})(jQuery)
