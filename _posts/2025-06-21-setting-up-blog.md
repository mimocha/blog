---
layout: post
title: How to Setup a Github Pages Blogsite
date: 2025-06-22 
categories: [tutorial, devlog]
---

This is a step-by-step guide for setting up a simple personal blogsite like this one.

The website will be hosted freely by Github,
so it is a great option if you just want to have something simple and free on the internet.

# Getting Started

First, you should follow [this quick start guide by Github](https://docs.github.com/en/pages/quickstart).
Specifically, the guide will show you how to setup your own `username.github.io` website.

Here is essentially what's in the guide:

**Creating your repository & website**

1. Create a new repository
2. Name the repository `username.github.io` where `username` is your github username  
(e.g. `mimocha.github.io` where my username is `mimocha`)
3. Select "initialize with a README file"
4. In your newly created repository, navigate to "Settings" then "Pages", then look under "Build and deployment"  
(you can also go to this url after replacing `username` with your own: `https://github.com/username/username.github.io/settings/pages`)
    1. Set "Source" to "Deploy from branch"
    2. Set "Branch" to `main` (or other branches if you want)

**Changing the title and description of your website**

1. 



You can 

Once you are done, your repo should contain these files:

```
your-repository-root
├── _config.yml
├── index.md
├── _posts
│   └── 2025-01-31-your-post-file.md
└── README.md
```

## Customizing Looks

### Changing Themes

### Adding Favicon