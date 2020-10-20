var currentIndex = 0, tOut = null;
var wrapVar = document.getElementById("wrap");
var heroImage = document.getElementById("Picture");
var targetObj = document.getElementById("firstImg");
targetObj.onmouseover = slideStart;
targetObj.onmouseout = slideStop;
var boxChange = document.getElementById("listitem1")
boxChange.onmouseover = slideStart;
boxChange.onmouseout = slideStop;
//var msgObj=document.getElementById("msg");
var initialSrc = targetObj.src;
var allImages = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"];
//
function slideStart() {
	var nextIndex = (currentIndex + 1 >= allImages.length) ? 0 : currentIndex + 1;
	var newSrc = targetObj.src.replace(allImages[currentIndex], allImages[nextIndex]);
	targetObj.src = newSrc;
	currentIndex = nextIndex;
	tOut = setTimeout(slideStart, 200);
	//    msgObj.innerHTML="Mouseout to stop cycle";
	//    msgObj.style.color="red";
	wrapVar.style.opacity = "0.9";
	heroImage.style.opacity = "0";
	firstImg.style.display = "inline";
}
// ----  
function slideStop() {
	clearTimeout(tOut);
	targetObj.src = initialSrc;
	//    msgObj.innerHTML="Mouse into image to cycle";
	//    msgObj.style.color="blue"; 
	wrapVar.style.opacity = "0";
	heroImage.style.opacity = "1";
	firstImg.style.display = "none";
}


//secondset
var currentIndex2 = 0,tOut2 = null;
var wrapVar2 = document.getElementById("wrap");
var heroImagez = document.getElementById("Picture");
var target = document.getElementById("secondImg");
target.onmouseover = slideStart2;
target.onmouseout = slideStop2;
var boxChange2 = document.getElementById("listitem2")
boxChange2.onmouseover = slideStart2;
boxChange2.onmouseout = slideStop2;
//var msgObj=document.getElementById("msg");
var initialSrc2 = target.src;
var allImages2 = ["imagesmeats/1.jpg", "imagesmeats/2.jpg", "imagesmeats/3.jpg", "imagesmeats/4.jpg", "imagesmeats/5.jpg"];
//
function slideStart2() {
	var nextIndex = (currentIndex2 + 1 >= allImages2.length) ? 0 : currentIndex2 + 1;
	var newSrc = target.src.replace(allImages2[currentIndex2], allImages2[nextIndex]);
	target.src = newSrc;
	currentIndex2 = nextIndex;
	tOut2 = setTimeout(slideStart2,200);
	//    msgObj.innerHTML="Mouseout to stop cycle";
	//    msgObj.style.color="red";
	wrapVar2.style.opacity = "0.9";
	heroImagez.style.opacity = "0";
	secondImg.style.display = "inline";
}
// ----  
function slideStop2() {
	clearTimeout(tOut2);
	target.src = initialSrc2;
	//    msgObj.innerHTML="Mouse into image to cycle";
	//    msgObj.style.color="blue"; 
	wrapVar2.style.opacity = "0";
	heroImagez.style.opacity = "1";
	secondImg.style.display = "none";
}

//thirdset
var currentIndex3 = 0,tOut3 = null;
var wrapVar3 = document.getElementById("wrap");
var heroImagez2 = document.getElementById("Picture");
var target2 = document.getElementById("thirdImg");
target2.onmouseover = slideStart3;
target2.onmouseout = slideStop3;
var boxChange3 = document.getElementById("listitem3")
boxChange3.onmouseover = slideStart3;
boxChange3.onmouseout = slideStop3;
//var msgObj=document.getElementById("msg");
var initialSrc3 = target2.src;
var allImages3 = ["Brew/1.jpg", "Brew/2.jpg"];
//
function slideStart3() {
	var nextIndex = (currentIndex3 + 1 >= allImages3.length) ? 0 : currentIndex3 + 1;
	var newSrc = target2.src.replace(allImages3[currentIndex3], allImages3[nextIndex]);
	target2.src = newSrc;
	currentIndex3 = nextIndex;
	tOut3 = setTimeout(slideStart3,400);
	//    msgObj.innerHTML="Mouseout to stop cycle";
	//    msgObj.style.color="red";
	wrapVar3.style.opacity = "0.9";
	heroImagez2.style.opacity = "0";
	thirdImg.style.display = "inline";
}
// ----  
function slideStop3() {
	clearTimeout(tOut3);
	target2.src = initialSrc3;
	//    msgObj.innerHTML="Mouse into image to cycle";
	//    msgObj.style.color="blue"; 
	wrapVar3.style.opacity = "0";
	heroImagez2.style.opacity = "1";
	thirdImg.style.display = "none";

}
