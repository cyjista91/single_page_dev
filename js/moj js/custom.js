var czas_opoznienia;
function delay() {
	if ( $(document).ready() ) {
	czas_opoznienia = setTimeout(showPage, 2000);
	}
}

function showPage(){
	document.getElementById('preloader').style.display = "none";
	document.getElementById('body').style.display = "block";
}

var header = document.getElementById('header');
var position_header_before = 30;

//przylepiony header
window.onscroll = function(){
	sticky_head();
}

function sticky_head(){
	if (window.pageYOffset >= position_header_before) {
		header.classList.add('sticky-top');
	}else{
		header.classList.remove('sticky-top');
	}

}





