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