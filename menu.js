"use strict";
$(document).ready(function(){ 
	console.log("starting script")
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
     $("nav a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          {
          	$(this).addClass("selected");
          }
          console.log("url: " + pgurl);        
     })
});