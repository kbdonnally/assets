(function () {
	var menu 	  = document.querySelector(".flexnav-main-grid"),
		menuItems = menu.children,
		prompt 	  = document.querySelector('.flexnav-more__prompt'),
		moreList  = document.querySelector('.flexnav-more__wrapper'),
		moreItems = moreList.children;

		// display only # items that fit, hide rest in sub-menu
		document.addEventListener('DOMContentLoaded', resizeMenu);

		// repeat on resize
		window.addEventListener('resize', resizeMenu);

		// show/hide sub-menu
		prompt.addEventListener('click', showSubMenu)

		// ----- Function Definitions: --------- //

		console.log(menuItems);
		function resizeMenu() {
			// un-hide all the items
			for (let item of menuItems) {
				item.classList.remove('hidden--js');
			}
			for (let item of moreItems) {
				item.classList.remove('hidden--js');
			}

			var menuItemWidths = Array.from(menuItems, item => parseInt(item.offsetWidth));
			var sumWidth = 0;
			var i = -1;

			// add more items to menu until run out of room
			while (sumWidth < (menu.offsetWidth - prompt.offsetWidth)) {
				i++;
				sumWidth += menuItemWidths[i];
			}

			// mark where that happens
			var splitIndex = i;

			// hide post-split on main menu
			for (i; i < (menuItems.length - 1); i++) {
				menuItems[i].classList.add('hidden--js');
			}

			// hide pre-split on sub-menu
			for (var j=0; j < splitIndex; j++) {
				moreItems[j].classList.add('hidden--js');
			}

		}

		function showSubMenu() {
			// toggle if click directly
			moreList.classList.toggle('show-more-menu--js');

			// if showing and user clicks outside of it, hide again
			if (moreList.classList.length == 2) {
				window.addEventListener('click', function(e) {
					if (e.target.classList.contains('flexnav-more__item') == false && e.target.classList.contains('flexnav-more__prompt') == false) {
						moreList.classList.remove('show-more-menu--js');
					}
				});
			}
		}
});