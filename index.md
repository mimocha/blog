---
layout: home
title: mimo.blog
---

Welcome to my personal blog.

I plan to write my personal research and interesting devlogs here on an infrequent basis.

---

## Latest Posts:

{% for post in site.posts limit:15 %}
* [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
