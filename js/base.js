
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




// MenuCategories // MOBILE

// var menuButton = document.querySelector(".menuButton");
// console.log(menuButton);

// menuButton.onclick = function() {
// 	//document.documentElement.classList.add("menuActive");
// 	document.querySelector(".mbCategoriesContainer").classList.add("menuActive")
// 	console.log(document.documentElement);
// };

