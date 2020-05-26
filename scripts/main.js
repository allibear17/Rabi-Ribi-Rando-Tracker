var sectionShown = [];
var markers = [];
var openMarkers = [];
var markerTypes = [
	"images/marker0.png", 
	"images/marker1.png", 
	"images/marker2.png",
	"images/marker3.png",
	"images/marker4.png",
];

var lastClick;

function justLoaded(){
	hideAll();
	drawMarkers();
	showSection(5);
}

function hideAll(){
	for (i = 0; i < 6; i++){
		sectionShown[i] = false;		
	}
	swood.style.display = "none";
	wcoast.style.display = "none";
	core.style.display = "none";
	ntun.style.display = "none";
	ehigh.style.display = "none";
	other.style.display = "none";
}

function showSection(m) {
	if (!sectionShown[m]){
		hideAll();
		sectionShown[m] = true;
		switch(m){
			case 0: 
				swood.style.display = "block";
				break;
			case 1:
				wcoast.style.display = "block";
				break;
			case 2:
				core.style.display = "block";
				break;
			case 3:
				ntun.style.display = "block";
				break;
			case 4:
				ehigh.style.display = "block";
				break;
			case 5:
				other.style.display = "block";
				break;
		}
	}
}

function toggleMarker(event) {
    var clicked = document.getElementById(this.id);
	var clickedSrc = clicked.getAttribute("src");
	var type = 0;
	
	for ( i = 0; i < markerTypes.length; i++){
		if ( clickedSrc == markerTypes[i] ){
			type = i+1;
		}
	}
	if ( markerTypes[type] ){
		clicked.setAttribute("src", markerTypes[type]);
	}
	else {
		clicked.setAttribute("src", markerTypes[0]);
	}
}

function showTooltip(event){
	var id = document.getElementById("tt");
	var clicked = document.getElementById(this.id);
	id.style.display = "block";
	id.innerHTML = clicked.id;
	id.style.top = "20px";
	id.style.left = "20px";
}

function hideTooltip(){
	document.getElementById("tt").style.display = "none";
}
function changeBG(){
	document.body.style.backgroundColor = document.getElementById("bgcolor").value;
	document.getElementById("shopDropdown").style.backgroundColor = document.getElementById("bgcolor").value;
}

function info(){
	var id = document.getElementById("info")
	if (id.style.display == "block"){
		id.style.display = "none";
	}
	else {
		id.style.display = "block";
	}
}

function Location(x, y){
	this.x = x;
	this.y = y;
	this.canReach = false;
	this.elem = "";
}

function toggleItem(e){
	id = e.target;
	if ( id.style.opacity == 1.0 ){
		id.style.opacity = 0.5;
		id.style.filter = "grayscale(100%)";
	} else {
		id.style.opacity = 1.0;
		id.style.filter = "none";
	}
}

addEventListener('contextmenu', function(e) {
	e.preventDefault();
	if (( e.target.className == "markera" ) || ( e.target.className == "markerb" )){
		var clicked = document.getElementById(e.target.id);
		var clickedSrc = clicked.getAttribute("src");
		var type = 0;
	
		for ( i = 0; i < markerTypes.length; i++){
			if ( clickedSrc == markerTypes[i] ){
				type = i-1;
			}
		}
		if ( type >= 0 ){
			clicked.setAttribute("src", markerTypes[type]);
		}
		else {
			clicked.setAttribute("src", markerTypes[4]);
		}
	}
});