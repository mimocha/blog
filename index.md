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
    {% if post.excerpt %}
        <br>
        <small>{{ post.excerpt | strip_html | truncate: 120 }}</small>
    {% endif %}
    {% if post.tags %}
        <br>
        <small>Tags: 
            {% for tag in post.tags %}
                <code>{{ tag }}</code>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
        </small>
    {% endif %}
{% endfor %}
