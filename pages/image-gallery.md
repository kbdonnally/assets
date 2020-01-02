---
title: Image Gallery
layout: no-style
permalink: /image-gallery/
---

<main markdown="1">

# Image Gallery

{% assign imgdata = site.data.unsplash-images %}

{% for image in imgdata %}
{% assign path = 'assets/img/unsplash/' | append: image.title %}

### {{ image.title }}
- ![{{ image.title }}]({{ path | relative_url}})
{% endfor %}

</main>