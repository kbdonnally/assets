/* To go with menu-practice-2 */

/* 1. Variables: */
// elements
const listOne 	    = document.querySelector('.nav__list-1');
const listTwo 	    = document.querySelector('.nav__list-2');
const listOneItems  = listOne.children;
const listTwoItems  = listTwo.children;
const more			= document.querySelector('.nav__more-prompt');

// information
const listOneWidths = [...listOneItems].map(x => parseInt(x.offsetWidth));
let listWidth 		= parseInt(document.querySelector('.nav__list-1').offsetWidth);
let i   			= -1;
let sumWidth 		= 0;

/* 2. Event Listeners: */
// display only # items that fit, hide rest in sub-menu
document.addEventListener('DOMContentLoaded', resizeMenu);
// repeat on resize
window.addEventListener('resize', resizeMenu);
// show sub-menu
more.addEventListener('click', reShowMenu);

more.addEventListener('click', showSubMenu);

while (sumWidth < listWidth) {
	i++;
	sumWidth += listOneWidths[i];
	console.log(sumWidth < listWidth);
	console.log(sumWidth, listWidth);
}

var splitIndex = parseInt(i - 1);


for (i; i < (listOneItems.length); i++) {
	listOneItems[i].classList.add('hidden--js');
} // value of i has changed now, to 11

for (let item of listTwoItems) {
	item.classList.add('hidden--js');
}


function reShowMenu() {
	for (let j=(splitIndex + 1); j < listTwoItems.length; j++) {
		listTwoItems[j].classList.toggle('show-more-menu--js');
	}
}



function resizeMenu() {
	// un-hide all the items
	for (let item of listOneItems) {
		item.classList.remove('hidden--js');
	}
	for (let item of listTwoItems) {
		item.classList.remove('hidden--js');
	}

	const listOneWidths = [...listOneItems].map(x => parseInt(x.offsetWidth));
	let listWidth 		= parseInt(document.querySelector('.nav__list-1').offsetWidth);
	let i   			= -1;
	let sumWidth 		= 0;

	while (sumWidth < listWidth) {
		i++;
		sumWidth += listOneWidths[i];
		console.log(sumWidth < listWidth);
		console.log(sumWidth, listWidth);
	}

	var splitIndex = parseInt(i - 1);

	for (i; i < (listOneItems.length); i++) {
		listOneItems[i].classList.add('hidden--js');
	} // value of i has changed now, to 11

	for (let item of listTwoItems) {
		item.classList.add('hidden--js');
	}
}

function showSubMenu() {
	// toggle if click directly
	listTwo.classList.toggle("show-more-menu--js");

	// if showing and user clicks outside of it, hide again
	if (listTwo.classList.length == 2) {
		window.addEventListener("click", function(e) {
			if (e.target.classList.contains("nav-list__item") == false && 
				e.target.classList.contains("nav__more-prompt") == false) {	
				console.log("this is when it should hide again");
				listTwo.classList.remove("show-more-menu--js");
			}	
		});
	}
}