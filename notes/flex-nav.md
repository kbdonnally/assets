# Flexible Navigation

*Charting the waters to success.*

**Outer wrapper of entire contents:**

```css
.flex-menu-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	padding: 0 4.167%;
	background-color: lavender;
	z-index: 5;
}
```

**Inner wrapper of entire contents:**

```css
.flex-menu {
	position: relative;
	display: flex;
	justify-content: space-between;
	height: 60px;
}
```

On `justify-content`, `space-between` = 1) section with 'Home' link & 2) section with rest of links

**Home link:**

```scss
// a containing svg
.flex-menu__home-link {
	display: flex;
	align-items: center;
	min-height: 40px;
	padding: 2px;
	border-bottom-width: 0;
	transition: border .2s padding .2s;
	&:hover {
		border: 1px solid white;
		
		svg path {
			padding: 1px;
			fill: white;
		}
	}
	svg {
		height: 40px;
		transition: fill .2s;
		path {
			fill: black;
		}
	}
}
```

**Menu items:**

`.flex-menu__list-1` and `.flex-menu__list-2`: remove padding

```css
.flex-menu__list-1 {
	padding-left: 0;
}
```

These are the menu item links. We don't want the padding on the `<ul>`s there taking up meaningless space.

`flex-menu__list-item--1` and `flex-menu__list-item--1`: remove the 'before' markers (discs)

```scss
.flex-menu__list-item--2 {
	&::before {
		display: none;
	}
}
```

This note is pretty self-explanatory. No discs allowed; we want just the link text itself, which should link to a page in the website. The discs have to be removed like this (vs. `list-style-type: none`) because they were made to imitate defaults with more control over them.

***

*Date: 12/29/19.*

## Flexnav Progress

Need to...

1. Close the list when someone clicks on "Not List"
2. Close the list when someone clicks "More"
	- Already have that one down but I'm worried the toggle functionality isn't necessarily here to stay
3. More accurately align the showing links, both horizontal and vertical
4. Resize more accurately (perform calculations on resize, which is probably why I used to have one for `DOMContentLoaded` as well as `resize` and `click`. See below:

```scss
// display only # items that fit, hide rest in sub-menu	
document.addEventListener('DOMContentLoaded', resizeMenu);

// repeat on resize
window.addEventListener('resize', resizeMenu);

// show/hide sub-menu
prompt.addEventListener('click', showSubMenu)
```

Then, that's pretty much it!

***

## Updates

It's technically working now! Still want to:

1. Apply it on an aesthetically pleasing website as the example.
2. Find where the skipped number is coming from and shift indices accordingly.
3. On resize, change the number of #2's items showing *as well as* #1 (which is already being handled. Find how!).