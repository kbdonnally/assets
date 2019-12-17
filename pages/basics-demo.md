---
title: Basics Demo
layout: no-style
permalink: /basics-demo/
---

<main class="basics-demo-wrapper" markdown="1">

# Basics Demo

**Document essentials:**

```
* {
	box-sizing: border-box;
}

body {
	font-family: $futura;
}

main {
	position: relative;
	padding: 3rem 4.167%;
	max-width: 1000px;
	margin: 0 auto;
	@media screen and (min-width: 450px) {
		padding: 3rem 8.33%;
	}	
}
```

***

**Headers demo:**

# <h1> Hello, world. 4rem
## <h2> Hello, world. 2.5rem
### <h3> Hello, world. 1.625rem
#### <h4> Hello, world. 1.25rem

**Header CSS:**

```
h1, h2, h3, h4, h5, h6 {
	margin: 0;
	line-height: 1
}

h1 {
	font-size: 4rem;
	padding: .25em 0;
}

h2 {
	font-size: 2.5rem;
	padding: .25em 0;
}

h3 {
	font-size: 1.625rem;
	padding: calc(.875rem / 2) 0;
}

h4 {
	font-size: 1.25rem;
	padding: calc(.75rem / 2) 0;
}
```

***

**Block quote demo:**

> Annihilate? No. No violence. I won’t stand for it. Not now, not ever, do you understand me?! I’m the Doctor, the Oncoming Storm - and you basically meant beat them in a football match, didn’t you? I’m nobody’s taxi service; I’m not gonna be there to catch you every time you feel like jumping out of a spaceship.

**Blockquote CSS:**

```
blockquote {
	color: $halfgray;
	margin: 1em 2em;
}
```

***

**Image demo:**

![Stripes]({{ 'assets/img/unsplash/mitchell-luo_stripes.jpg' | relative_url }})

**Image CSS:**

*With parent's position set to `relative`.*

```
img {
	max-width: 100%;
}
```

***

**Lists demo:**

- Shut up and get to the point!
- I'm Santa Claus!
- Bite my shiny metal ass.

1. And until then, I can never die?
2. But I've never been to the moon!
3. Large bet on myself in round one.

**List CSS:**

```
ol {
	list-style: none;
	counter-reset: my-counter;
	padding-left: 2rem;
	li {
		counter-increment: my-counter;
		&::before {
			content: counter(my-counter) '. ';
			font-weight: 700;
			color: $halfgray;
		}
	}
}

ul {
	list-style: none;
	padding-left: calc(2rem + 19px);
	li {
		position: relative;
		&::before {
			content: '';
			display: inline-block;
			position: absolute;
			left: -16px;
			top: 50%;
			transform: translate(0,-50%);
			height: 7px;
			width: 7px;
			border-radius: 50%;
			background-color: $halfgray;
		}
	}

}
```

</main>