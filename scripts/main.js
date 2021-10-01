		var images = {};
		function loadImages(sources, callback) {
			var loadedImages = 0;
			var numImages = 0;
			// get num of sources
			for(var src in sources) {
			  numImages++;
			}
			for(var src in sources) {
			  images[src] = new Image();
			  images[src].onload = function() {
				if(++loadedImages >= numImages) {
				  callback(images);
				}
			  };
			  images[src].src = sources[src];
			}
		}
		
		function home_link_button_scroll(){
			$('html, body').animate({ scrollLeft: $('#content_home').offset().left }, 2000);
		}
		function work_link_button_scroll(){
			$('html, body').animate({ scrollLeft: $('#content_work').offset().left }, 2000);
		}
		function about_link_button_scroll(){
			$('html, body').animate({ scrollLeft: $('#content_about').offset().left }, 2000);
		}
		function contact_link_button_scroll(){
			$('html, body').animate({ scrollLeft: $('#content_contact').offset().left }, 2000);
		}
		  
		
        $(function() {
			
			if (screen.width <= 1024) {
				window.location = "http://m.angeetsang.com";
			}; 
			
			/* Always start on the homepage */
			$('#home').addClass("button_active");
			$('#work').removeClass("button_active");
			$('#about').removeClass("button_active");
			$('#contact').removeClass("button_active");
			$('html, body').animate({ scrollLeft: $('#content_home').offset().left }, 2000);
			  
			/* define variables */ 
			var home_button=document.getElementById('home');
			var work_button=document.getElementById('work');
			var about_button=document.getElementById('about');
			var contact_button=document.getElementById('contact');
			var print_button=document.getElementById('print_box');
			var digital_button=document.getElementById('digital_box');
			var logo_button=document.getElementById('logo_box');
			var others_button=document.getElementById('others_box');
			var arrow_button=document.getElementById('content_home_right');
			
			/* indicate that we're on the home div */
			$('#home').addClass("button_active");
			$('#content_home').css("width",window.screen.width);
			$('#content_work').css("width",window.screen.width);
			$('#content_about').css("width",window.screen.width);
			$('#content_contact').css("width",window.screen.width);
			$('#content_work_right').css("width",window.screen.width-650);
			$('#content_home').css("height",window.screen.height-150);
			$('#content_about').css("height",window.screen.height-150);
			
			
			/* make cursor a hand so it looks like a link */
			home_button.style.cursor = 'pointer';
			work_button.style.cursor = 'pointer';
			about_button.style.cursor = 'pointer';
			contact_button.style.cursor = 'pointer';
			arrow_button.style.cursor = 'pointer';
			$('.work_ontop_div_back').css("cursor","pointer");
			
			/*scroll to the appropriate divs when nav buttons are clicked and indicate using an underline */
			home_button.addEventListener("click", function onMouseClick(e){
				home_link_button_scroll();
				$('#home').addClass("button_active");
				$('#work').removeClass("button_active");
				$('#about').removeClass("button_active");
				$('#contact').removeClass("button_active");
			});
			
			arrow_button.addEventListener("click", function onMouseClick(e){
				work_link_button_scroll();
				$('#home').removeClass("button_active");
				$('#work').addClass("button_active");
				$('#about').removeClass("button_active");
				$('#contact').removeClass("button_active");
			});
			
			work_button.addEventListener("click", function onMouseClick(e){
				work_link_button_scroll();
				$('#home').removeClass("button_active");
				$('#work').addClass("button_active");
				$('#about').removeClass("button_active");
				$('#contact').removeClass("button_active");
			});
			
			about_button.addEventListener("click", function onMouseClick(e){
				about_link_button_scroll();
				$('#home').removeClass("button_active");
				$('#work').removeClass("button_active");
				$('#about').addClass("button_active");
				$('#contact').removeClass("button_active");
			});
			
			contact_button.addEventListener("click", function onMouseClick(e){
				contact_link_button_scroll();
				$('#home').removeClass("button_active");
				$('#work').removeClass("button_active");
				$('#about').removeClass("button_active");
				$('#contact').addClass("button_active");
			});
			
			/*animate to display the appropriate div and keep the underline */
			print_button.addEventListener("click", function onMouseClick(e){
				$('#print_content').delay(300).fadeIn(300);
				$('#digital_content').fadeOut(300);
				$('#logo_content').fadeOut(300);
				$('#others_content').fadeOut(300);
			});
			
			digital_button.addEventListener("click", function onMouseClick(e){
				$('#print_content').fadeOut(300);
				$('#digital_content').delay(300).fadeIn(300);
				$('#logo_content').fadeOut(300);
				$('#others_content').fadeOut(300);
			});
			
			logo_button.addEventListener("click", function onMouseClick(e){
				$('#print_content').fadeOut(300);
				$('#digital_content').fadeOut(300);
				$('#logo_content').delay(300).fadeIn(300);
				$('#others_content').fadeOut(300);
			});
			
			others_button.addEventListener("click", function onMouseClick(e){
				$('#print_content').fadeOut(300);
				$('#digital_content').fadeOut(300);
				$('#logo_content').fadeOut(300);
				$('#others_content').delay(300).fadeIn(300);
			});
			
			$(".content_work_images").click(function (){
				$('#' + $(this).attr("id") + '_div').css("left",$('#content_work').offset().left);
				$('#' + $(this).attr("id") + '_div').css("min-height",window.screen.height);
				$('#' + $(this).attr("id") + '_div').css("display","block");
			});
			
			$(".work_ontop_div_back").click(function (){
				$('.work_ontop_div').css("display","none");
			});
			
        });