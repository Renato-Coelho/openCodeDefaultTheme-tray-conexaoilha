
var input = document.querySelector(".input");

input.addEventListener("focus", function () {
	var search = this.parentNode.parentNode.parentNode;
	search.classList.add("searchHighlighting");
	console.log('*** searchHighlighting');
});

input.addEventListener("blur", function () {
	var search = this.parentNode.parentNode.parentNode;
	search.classList.remove("searchHighlighting");
	console.log("searchHighlightingOFF");
});


$('.product-item').mouseenter(function() {
	console.log($(this));
	$(this).addClass('wave-effect');
});

// add BUY_BUTTON implementation 
function addCart(dataProductId){
  var dataSession = $("html").attr("data-session");
	$.ajax({
	  method: "POST",
	  url: "/web_api/cart/",
	  contentType: "application/json; charset=utf-8",
	  data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+dataProductId+'","quantity":"1"}}'
	}).done(function( response, textStatus, jqXHR ) {
	  console.log(response);
	  var qtdCart = parseInt($("span[data-cart=amount]").html());
	  $("span[data-cart=amount]").html(qtdCart + 1);
	}).fail(function( jqXHR, status, errorThrown ){
	  var response = $.parseJSON( jqXHR.responseText );
	  console.log(response);
	});
};

$(".footer-link")
	.on("mouseenter", function() {
		$(this).addClass("funcc");
	})
	.on("mouseleave", function() {
		$(this).removeClass("funcc");
	})
;

// ANIMATION ON INCLUDED_ITEMS
$('.board ul li p').mouseenter(function() {
	$(this).animate( {width: '+=20px'} );
});
$('.board ul li p').mouseleave(function() {
	$(this).animate( {width: '-=20px'} );
});


// $('.singleProduct').fadeIn(5000);

var productDescriptionTabsLogic = function () {
   
   $('.productTabLink').each(function() {
      $(this).click(function() {
         $('.wrapper-productTab-content').slideUp();
         $('.productTabLink').css({
                                 'background-color': '#E3E3E3',
                                 'color': '#546E7A'
                                 });
         $(this).css({
                     'background-color': '#546E7A',
                     'color': 'white'
                     });
         var tabText = $(this).text().toLowerCase();
         switch (tabText) {
            case 'descrição geral':
               $('#descricao').slideDown();
               break;
            case 'formas de pagamento':
               $('#formasPagto').slideDown();
               break;
            case 'itens inclusos':
               $('#itensInclusos').slideDown();
               break;
            case 'comentários':
               $('#comments').slideDown();
               break;
            default:
               break;
         }
      });

   });

/**
   var tabs = $('.productTabLink');
   // $(tabs.eq(0)).css('background-color', '#999');
   tabs.eq(0).click(function() {
      $('.productTab-content').slideUp();
      $('.productTabLink').css('background-color', '#ccc'); 
      $(this).css('background-color', '#999' );
      $('#descricao').slideDown();
   });
   tabs.eq(1).click(function() {
      $('.productTab-content').slideUp();
      $('.productTabLink').css('background-color', '#ccc');
      $(this).css('background-color', '#999' );
      $('#itensInclusos').slideDown();
   });
   tabs.eq(2).click(function() {
      $('.productTab-content').slideUp();
      $('.productTabLink').css('background-color', '#ccc');
      $(this).css('background-color', '#999' );
      $('#formasPagto').slideDown();
   });
   tabs.eq(3).click(function() {
      $('.productTab-content').slideUp();
      $('.productTabLink').css('background-color', '#ccc');
      $(this).css('background-color', '#999' );
      $('#comments').slideDown();
   });
**/

};




$(document).ready(function() {
   productDescriptionTabsLogic();
	$('.menu-category').hover(
		function(event) {
			
			var target = $(event.target);
			if (target.is('.menu-category-link')) {
				console.log("aaabbb");
				$('li.menu-category ~ li.menu-category').addClass("removeLeftBorder");
				$('li.menu-category ~ li.menu-category').addClass("hidePseudoElements");
				$('.menu-children').slideDown(150);
				console.log(this);

			}
		},
		function(event) {
			var target = $(event.target);
			$('li.menu-category ~ li.menu-category').removeClass("removeLeftBorder");
			$('li.menu-category ~ li.menu-category').removeClass("hidePseudoElements");
			$('.menu-children').slideUp(150);
		}
	);
});

























