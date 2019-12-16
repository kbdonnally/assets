---
layout: no-style
---

# Welcome to the homepage of Assets

## Pages in the site:

{% for page in site.pages %}
{% if page.title %}
- [{{ page.title }}]({{ page.url | relative_url }})
{% endif %}
{% endfor %}