/* To go with menu-practice-2 */

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

while (sumWidth < listWidth) {
	i++;
	sumWidth += listOneWidths[i];
	console.log(sumWidth < listWidth);
	console.log(sumWidth, listWidth);
}

var splitIndex = parseInt(i - 1);

console.log(splitIndex);
console.log(i);
console.log(listWidth)
console.log(sumWidth);

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

more.addEventListener('click', reShowMenu);