/* Goes with collapsing-menu-practice.html */

const morePrompt = document.querySelector('.flex-menu__more-prompt');
const moreList = document.querySelector('.flex-menu__more-list');
const moreItems = moreList.children;

function toggleVisibility() {
	if (moreItems[0].classList.contains('hidden--js')) {
		for (let m of moreItems) {
			m.classList.remove('hidden--js');
			m.classList.add('show-more-menu--js');
		}
	} else {
		for (let m of moreItems) {
			m.classList.remove('show-more-menu--js')
			m.classList.add('hidden--js');
		}
	}
}

//morePrompt.addEventListener('click', toggleVisibility);
morePrompt.addEventListener('click', resizeMenu);

const moreWidth = morePrompt.offsetWidth;
const menuWidth = window.innerHeight / 3; 
const openSpace = menuWidth - moreWidth;
const listOne = document.querySelector('.flex-menu__list-1');
const listTwo = document.querySelector('.flex-menu__more-list');
console.log(listTwo);
const listOneItems = [...listOne.children];
const listTwoItems = [...listTwo.children];
console.log(listOneItems);
console.log(listTwoItems);


function resizeMenu() {
	for (let item of listOneItems) {
		item.classList.remove("hidden--js");
	}
	for (let item of listTwoItems) {
		item.classList.remove("hidden--js");
	}

	const listOneWidths =  Array.from(listOne.children, item => parseInt(item.offsetWidth));
	let sumWidth 	   = 0;
	let i 			   = -1;

	// add more items to menu until run out of room
	while (sumWidth < openSpace) {
		i++;
		sumWidth += listOneWidths[i];
		console.log('Entry: ' + listOneWidths[i], i);
		console.log('Sum: ' + sumWidth);
	}

	// mark where that happens
	var splitIndex 	  = i;

	// hide post-split on main menu
	for (i; i < (listOneItems.length - 1); i++) {
		listOneItems[i].classList.add("hidden--js");
	}

	// hide pre-split on sub-menu
	for (var j=0; j < splitIndex; j++) {
		moreItems[j].classList.add("hidden--js");
	}
}