var input = document.querySelector(".input");

input.addEventListener("focus", function () {
	var search = this.parentNode.parentNode.parentNode;
	search.classList.add("searchHighlighting");
});

input.addEventListener("blur", function () {
	var search = this.parentNode.parentNode.parentNode;
	search.classList.remove("searchHighlighting");
})

