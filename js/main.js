  (function($, window, document) {
      
      $(document).ready(function() {
      	
      	$("#menuIconBtn").click(function(e){
      		e.preventDefault();
      		$(this).toggleClass("shown");
      		$(this).hasClass("shown") ? showSideNav() : hideSideNav();

      	});

      	$("#sideNavBar").click(function(e){
      		
      		hideSideNav();
      	});

      	function showSideNav(){
			$("#sideNavBar").css('width', '250px');
			$("body").css({
				right: '250px',
				overflow: 'hidden'
			});
			$("#menuIconBtn").css({
				position: 'fixed',
				top: '0',
				right: '250px'
			});
      	}

      	function hideSideNav(){
      		$("#sideNavBar").css('width', '0px');
			$("body").css({
				right: '0px',
				overflow: 'scroll'
			});

			$("#menuIconBtn").css({
				position: 'static',
				top: '0',
				right: '0'
			});
      	}
      });

  }(window.jQuery, window, document));