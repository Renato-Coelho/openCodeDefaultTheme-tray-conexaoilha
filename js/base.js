
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

// $(".footer-link").hover(function() {
// 	$(this).addClass("funcc");
// 	console.log(this);
// 	console.log("oi");
// });


$(".footer-link")
	.on("mouseenter", function() {
		$(this).addClass("funcc");
	})
	.on("mouseleave", function() {
		$(this).removeClass("funcc");
	})
;
	




// MenuCategories // MOBILE

// var menuButton = document.querySelector(".menuButton");
// console.log(menuButton);

// menuButton.onclick = function() {
// 	//document.documentElement.classList.add("menuActive");
// 	document.querySelector(".mbCategoriesContainer").classList.add("menuActive")
// 	console.log(document.documentElement);
// };

