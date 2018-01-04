var imgs = document.querySelectorAll("img");
var buyut = document.getElementById("buyut");
var kucult = document.getElementById("kucult");
var sil = document.getElementById("sil");
var parent= document.querySelector("div");

buyut.addEventListener("click",function() {
	for (var i = imgs.length - 1; i >= 0; i--) {
		imgs[i].classList.add("buyut");
	}
});


kucult.addEventListener("click",function() {
	for (var i = imgs.length - 1; i >= 0; i--) {
		imgs[i].classList.remove("buyut");
	}
});


sil.addEventListener("click",function(){
	for (var i = imgs.length - 1; i >= 0; i--) {
		parent.removeChild(imgs[i]);
	}
});