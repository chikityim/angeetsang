	
        $(function() {
			
			/* define variables */ 
			//var home_button=document.getElementById('home');
	
			if(window.innerHeight > 400){
				$('.content').css("height",window.innerHeight - 10 - $('.top').height()); 
			}
			$('.menu-level-1').css("top",$('.content').offset().top-10);
			$('.menu-level-2').css("top",$('.content').offset().top-10);
			
			//box around selected menu
			$('.menu-level-2').children($('.menu-item-container')).click(function(){
				$('.menu-item-container').removeClass("menu-item-selected");
				$(this).children($('.menu-item-container')).addClass("menu-item-selected");
			});
			
			//replace nav button and hide/show menu
			$('.menu_button').click(function(){
				if($('.menu_button').attr("src") == "images/back-icon.png"){
					$('.menu_button').attr("src","images/nav-icon.png");
					$('.menu-level-2').slideToggle("fast");
				}
				else{
					$('.menu-level-1').slideToggle("fast");
				}
			});
			
			//home
			$('.menu-level-1-first').click(function(){
				$('.menu-level-1').slideToggle("fast");
				$('.work').hide();
				$('.about').hide();
				$('.contact').hide();
				$('.content').show();
				$('.menu-item-container').removeClass("menu-item-selected");
				$(this).children($('.menu-item-container')).addClass("menu-item-selected");
			});
			
			//work to open level 2 menu
			$('.menu-level-1-second').children($("div")).click(function(){
				$('.menu-level-2').slideToggle("fast");
				$('.menu_button').attr("src","images/back-icon.png");
			});
			
			//about
			$('.menu-level-1-third').click(function(){
				$('.menu-level-1').slideToggle("fast");
				$('.work').hide();
				$('.content').hide();
				$('.contact').hide();
				$('.about').show();
				$('.menu-item-container').removeClass("menu-item-selected");
				$(this).children($('.menu-item-container')).addClass("menu-item-selected");
			});
			
			//contact
			$('.menu-level-1-forth').click(function(){
				$('.menu-level-1').slideToggle("fast");
				$('.work').hide();
				$('.about').hide();
				$('.content').hide();
				$('.contact').show();
				$('.menu-item-container').removeClass("menu-item-selected");
				$(this).children($('.menu-item-container')).addClass("menu-item-selected");
			});
			
			//print
			$('.menu-level-2-first').click(function(){
				$('.menu_button').attr("src","images/nav-icon.png");
				$('.menu-level-2').slideToggle("fast");
				$('.menu-level-1').slideToggle("fast");
				$('.content').hide();
				$('.work').hide();
				$('.about').hide();
				$('.contact').hide();
				$('.print').show();
			});
			
			//logo
			$('.menu-level-2-second').click(function(){
				$('.menu_button').attr("src","images/nav-icon.png");
				$('.menu-level-2').slideToggle("fast");
				$('.menu-level-1').slideToggle("fast");
				$('.content').hide();
				$('.work').hide();
				$('.about').hide();
				$('.contact').hide();
				$('.logo').show();
			});
			
			//digital
			$('.menu-level-2-third').click(function(){
				$('.menu_button').attr("src","images/nav-icon.png");
				$('.menu-level-2').slideToggle("fast");
				$('.menu-level-1').slideToggle("fast");
				$('.content').hide();
				$('.work').hide();
				$('.about').hide();
				$('.contact').hide();
				$('.digital').show();
			});
			
			//others
			$('.menu-level-2-forth').click(function(){
				$('.menu_button').attr("src","images/nav-icon.png");
				$('.menu-level-2').slideToggle("fast");
				$('.menu-level-1').slideToggle("fast");
				$('.content').hide();
				$('.work').hide();
				$('.about').hide();
				$('.contact').hide();
				$('.others').show();
			});
			
			//back button
			$('.work_ontop_div_back').click(function(){
				$('.work_ontop_div').hide();
			});
			
			//burt's bee
			$('.burtsbee').click(function(){
				$('.work_ontop_div').hide();
				$('.burtsbee_logo_div').show();
			});
			
			//bodyark
			$('.bodyark').click(function(){
				$('.work_ontop_div').hide();
				$('.bodyark_logo_div').show();
			});	
			
			//organic
			$('.organic').click(function(){
				$('.work_ontop_div').hide();
				$('.organic_logo_div').show();
			});
			
			//platinum
			$('.platinum').click(function(){
				$('.work_ontop_div').hide();
				$('.platinum_logo_div').show();
			});
			
			//red_tea
			$('.red_tea').click(function(){
				$('.work_ontop_div').hide();
				$('.red_tea_logo_div').show();
			});
			
			//beautezine
			$('.beautezine').click(function(){
				$('.work_ontop_div').hide();
				$('.beautezine_logo_div').show();
			});
			
			//mountain
			$('.mountain').click(function(){
				$('.work_ontop_div').hide();
				$('.mountain_logo_div').show();
			});
			

			
			
			
        });