---
layout: home
title: Hello internet
---

# Hello internet, welcome to my personal blog!

Here are my latest posts:

{% for post in site.posts limit:15 %}
* [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
