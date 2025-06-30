---
layout: post
title: List of Jekyll Layouts for Common Github Pages Themes
date: 2025-07-01 00:00:00 +0700
categories: [reference]
tags: [github pages, blogsite, jekyll]
---

I personally had issues when trying to customize this Jekyll blogsite for the first time
because [Github's own guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
didn't mention you should also change front matter "layout" variable for each page in your site
to match what is included by the theme.

> 5) Add a new line to the file for the theme name.

> To use a supported theme, type `theme: THEME-NAME`, replacing THEME-NAME with the name of the theme as shown in the `_config.yml` of the theme's repository (most themes follow a `jekyll-theme-NAME` naming convention). For a list of supported themes, see [Supported themes](https://pages.github.com/themes/) on the GitHub Pages site. For example, to select the Minimal theme, type `theme: jekyll-theme-minimal`.

> To use any other Jekyll theme hosted on GitHub, type remote_theme: THEME-NAME, replacing THEME-NAME with the name of the theme as shown in the README of the theme's repository.

Simply following the above step can break the styling of your page if your new theme doesn't have the same set of layouts.

For example, if you start by using the `minima` theme which includes the layouts `base, home, page, post`,
then change to the theme `midnight` which only has the layout `default` -
all your pages will be displayed as an unstyled white-page.
Instead, you must also change your page front matter to include `layout: default` like so:

```yml
---
layout: default # Assuming new theme is midnight
title: Your post title
date: 2000-01-01
# Any other variables
---
```

The following list includes the layouts included in the 13 Jekyll themes provided at [github/pages-themes](https://github.com/pages-themes),
as well as Jekyll's own `minima` theme for reference.

Theme | Included Layouts | Github Repo
------|---------|-------
minima <br>_(The default theme for many users)_ | `base, home, page, post` | [github.com/jekyll/minima](https://github.com/jekyll/minima)
architect | `default` | [github.com/pages-themes/architect](https://github.com/pages-themes/architect)
cayman | `default` | [github.com/pages-themes/cayman](https://github.com/pages-themes/cayman)
dinky | `default` | [github.com/pages-themes/dinky](https://github.com/pages-themes/dinky)
hacker | `default, post` | [github.com/pages-themes/hacker](https://github.com/pages-themes/hacker)
leap-day | `default` | [github.com/pages-themes/leap-day](https://github.com/pages-themes/leap-day)
midnight | `default` | [github.com/pages-themes/midnight](https://github.com/pages-themes/midnight)
modernist | `default` | [github.com/pages-themes/modernist](https://github.com/pages-themes/modernist)
merlot | `default` | [github.com/pages-themes/merlot](https://github.com/pages-themes/merlot)
minimal | `default, post` | [github.com/pages-themes/minimal](https://github.com/pages-themes/minimal)
primer | `default, home, page, post` | [github.com/pages-themes/primer](https://github.com/pages-themes/primer)
slate | `default` | [github.com/pages-themes/slate](https://github.com/pages-themes/slate)
tactile | `default` | [github.com/pages-themes/tactile](https://github.com/pages-themes/tactile)
time-machine | `default` | [github.com/pages-themes/time-machine](https://github.com/pages-themes/time-machine)