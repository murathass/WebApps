var button = document.getElementById("demo");
var isRed = false;

button.addEventListener("click",function(){
	// if (!isRed) {

	// 	document.body.style.background = "red";
	// 	isRed = true;
	// }else{

	// 	document.body.style.background = "white";
	// 	isRed = false;
	// }
	document.body.classList.toggle("red");
})

var ilke = document.querySelectorAll("li");

for (var i = ilke.length - 1; i >= 0; i--) {
	ilke[i].addEventListener("mouseover",function(){
		this.style.color = "blue";
	})

	ilke[i].addEventListener("mouseout",function(){
		this.style.color = "black";
	})

	ilke[i].addEventListener("click",function(){
		this.classList.toggle("benimClass");
	})
}
	