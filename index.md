---
title: Home
layout: no-style
---

<main class="home" markdown="1">

# Assets

*For useful HTML, JS, CSS, and image contents.*

## Pages in the site:

<ol class="dummy-menu">
	{% for page in site.pages %}
	{% if page.title %}
	<li><a href="{{ page.url | relative_url}}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
</ol>

</main>
