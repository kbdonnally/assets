const windowHalfWidth = window.innerWidth * .75;
const listOne 		  = document.querySelectorAll('.collapse-menu__list-item--1');
const listTwo 		  = document.querySelectorAll('.collapse-menu__list-item--2');
const widthsOne 	  = [...listOne].map(x => x.offsetWidth);

function getIndex(listOne, windowHalfWidth) {
	let counter = 0;
	for (const [index, item] of listOne.entries()) {
		counter += item.offsetWidth;
		if (counter > windowHalfWidth) {
			console.log(`width: ${counter}; index: ${index}`);
			console.log(index);
			return index - 1;
		}
	}
}

const index 		= getIndex(listOne, windowHalfWidth); // index to split the links
const listOneSlice  = [...listOne].slice(index); // slice of array from index to end
console.log(listOneSlice);

// hide from List 1
for (const item of listOneSlice) {
	item.classList.add('collapse-menu--to-hide'); // hide items outside of width range
}

// List 2 activity //

const listTwoHideSlice = [...listTwo].slice(0, index + 1);
const listTwoShowSlice = [...listTwo].slice(index);
console.log('List two hiding slice: ' + listTwoHideSlice);

// hide from List 1
for (const item of listTwoHideSlice) {
	item.classList.add('collapse-menu--to-hide'); // hide items outside of width range
}

// --------- Button -------- //

const moreButton = document.querySelector('.collapse-menu__list-2');

for (const [index, item] of listTwo.entries()) {
	item.classList.add('collapse-menu--to-hide');
}
