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


morePrompt.addEventListener('click', toggleVisibility);

// Issue: when clicking for a third time, the 'hide' class is added without the 'show' class ever being taken away
// Both classes are present and that's what we need to prevent
// Where can the 'show' class be targeted and deleted?