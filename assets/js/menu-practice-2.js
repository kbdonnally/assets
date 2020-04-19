/* Goes with menu-practice-2.html */

const navMenusWrapper = document.querySelector('.nav__list-holder');
const navListOne = navMenusWrapper.children[0];
const navListTwo = navMenusWrapper.children[1];
const morePrompt = document.querySelector('.nav-list__more-prompt');

// widths
let moreWidth = morePrompt.offsetWidth;
let menuWidth = navMenusWrapper.offsetWidth;
let availableWidth = menuWidth - moreWidth;
const menuOneItems = navListOne.children;
const menuTwoItems = navListTwo.children;
const menuOneWidths = Array.from(navListOne.children, item => parseInt(item.offsetWidth));

let i = -1;
let sumWidth = 0;

while (sumWidth < availableWidth) {
	i++;
	sumWidth += menuOneWidths[i];
}

const splitIndex = i;

// menu 1
for (i; i < (menuOneItems.length); i++) {
	menuOneItems[i].classList.add('hidden--js');
}

// menu 2
for (var j=1; j < (splitIndex - 1); j++) {
	if (document.querySelector('.nav-list-2__item')) {
		menuTwoItems[j].classList.add('hidden--js');	
	}
	
}