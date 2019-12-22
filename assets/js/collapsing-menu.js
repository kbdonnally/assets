/* To go with nav-menu--collapse.html */

let windowWidth = window.innerWidth;
let listWidth = .75 * window.innerWidth;
const childrenOne = document.querySelector('.collapse-menu__list-1').children;
const widthsOne = [...childrenOne].map(x => x.offsetWidth);

let totalWidth = 0;
console.log(widthsOne);

for (let [i, width] of widthsOne.entries()) {
	if (totalWidth < listWidth) {
		console.log(i, width);
	}
	if (totalWidth >= listWidth) {
	//	return width.index;
		console.log(width, totalWidth);
	}
	totalWidth += width;
}

console.log(totalWidth);