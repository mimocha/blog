---
layout: home
title: Home
---

## Welcome to my blog

I plan to write my personal research and interesting devlogs here on an infrequent basis.

-----

## Latest Posts:

{% for post in site.posts limit:10 %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

-----

## More Posts:

{% assign current_year = nil %}
{% assign current_month = nil %}
{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% for post in sorted_posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% assign post_month = post.date | date: "%B" %}
    {% if post_year != current_year %}
### {{ post_year }}
        {% assign current_year = post_year %}
        {% assign current_month = nil %}
    {% endif %}
    {% if post_month != current_month %}
#### {{ post_month }}
        {% assign current_month = post_month %}
    {% endif %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}