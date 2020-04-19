/* To go with nav-menu--collapse.html */

let windowWidth = window.innerWidth;
let partialWidth = .75 * window.innerWidth;
const childrenOne = document.querySelector('.collapse-menu__list-1').children;
const widthsOne = [...childrenOne].map(x => x.offsetWidth);


console.log(widthsOne);
console.log('Partial width: ' + partialWidth);

let totalWidth = 0;

const itemsWidth = () => {
	for (let [i, width] of widthsOne.entries()) {
		if (totalWidth >= partialWidth ) {
			var itemNum = i - 1;
			console.log(totalWidth, width, itemNum);
			const myWidth = totalWidth - width;
			return [itemNum, myWidth, width];
		}
		totalWidth += width;
	}
};

const itemNum = itemsWidth()[0] - 1;
const myWidth = itemsWidth()[1];
const itemWidth = itemsWidth()[2];

console.log('Number item: ' + itemNum);
console.log('Total width: ' + myWidth);
// console.log('Last item width: + ' itemWidth);

// Okay, so items 5 to x need to be hidden

const childrenToHide = [...childrenOne];
console.log(childrenToHide[2, 5]);

for (let [i, item] of childrenToHide.entries()) {
	if (i >= itemNum) {
		item.classList.add('test');
		item.classList.add('collapse-menu--to-hide');
	}
	if (i < itemNum) {
		item.classList.add('test-2');
	}
}

// ------ List 2 ---------- //