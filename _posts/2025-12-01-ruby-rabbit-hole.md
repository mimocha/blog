---
layout: post
title: Falling Down the Ruby Rabbit Hole
date: 2025-12-01 
categories: [devlog]
tags: [jekyll, ruby]
---

When trying to figure out how to configure this blogsite, I've stumbled across so many different issues,
due to my lack of experience working with Ruby, Jekyll and its related stack.

This entire wreck of a rabbit hole is the reason I restarted the `mimocha.github.io` site with pure HTML/CSS/JS.

Deciding to create this blog with Ruby/Jekyll was only ever considered because it seemed simpler
to get my blog posts to be presentable enough, and not have to focus too much on how to build it.

Boy was I wrong.

## The Rabbit Hole:

Here is my journey of falling ever deeper into the rabbit hole

- How do I change the theme from default to something else?
    - [`pages-theme`](https://github.com/orgs/pages-themes/repositories)
    - [`midnight`](https://github.com/pages-themes/midnight) seems nice

- Added these lines to `_config.yml`

```yml
remote_theme: pages-themes/midnight@v0.2.0
plugins:
- jekyll-remote-theme # add this line to the plugins list if you already have one
```

- Resulting blog page is completely unstyled, and I don't understand why
    - `_config.yml` and Github repo must be configured correctly, since previously I was able to get a `minima` theme blog up

- Turns out I simply needed to set Front Matter for `index.md` and my posts to `layout: default`

- How do I install a build environment locally so that I can test out changes?
    - What is Ruby / Gem / Bundle / Jekyll?
    - How do I install Ruby / Gem / Bundle / Jekyll?
        - sudo apt install ruby

- Project doesn't have Gemfile or .Gemlock associated
    - Create dummy repo with bundle, then copy file over

- Bundle install permission error
    - Bundle is trying to install to system path instead of local path
    - Need to set the right local path with .bashrc
        - Edited bashrc

- bashrc path set incorrectly, now all commands show error like

```bash
Command 'lesspipe' is available in the following places
 * /bin/lesspipe
 * /usr/bin/lesspipe
The command could not be located because '/usr/bin:/bin' is not included in the PATH environment variable. 
```

- how to fix this issue
    - set temporary path fix with `export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"`
    - revert previous changes made to `.bashrc`
    - run `source ~/.bashrc`
- bash issue resolved

- Back to Bundle issue
- Should use rbenv to manage ruby environments
    - `sudo apt install rbenv`
- rbenv for some reason doesn't show latest stable version for install
- apt installed rbenv is outdated, need to install another way
    - following `rbenv` repo
    - can use [`rbenv-installer`](https://github.com/rbenv/rbenv-installer#rbenv-installer)
    - `~/.rbenv` already exists from previous install
    - deleted `~/.rbenv`

- rbenv install 3.4.4 failed

```bash
*** Following extensions are not compiled:
fiddle:
        Could not be configured. It will not be installed.
        /tmp/ruby-build.20250624133008.14254.Kpr9Wp/ruby-3.4.4/ext/fiddle/extconf.rb:86: missing libffi. Please install libffi or use --with-libffi-source-dir with libffi source location.
        Check /tmp/ruby-build.20250624133008.14254.Kpr9Wp/ruby-3.4.4/ext/fiddle/mkmf.log for more details.
psych:
        Could not be configured. It will not be installed.
        Check /tmp/ruby-build.20250624133008.14254.Kpr9Wp/ruby-3.4.4/ext/psych/mkmf.log for more details.

BUILD FAILED (Ubuntu 24.04 on x86_64 using ruby-build 20250610)

You can inspect the build directory at /tmp/ruby-build.20250624133008.14254.Kpr9Wp
See the full build log at /tmp/ruby-build.20250624133008.14254.log
```

- Need to install `sudo apt install libffi-dev libyaml-dev`
- rbenv install 3.4.4 succeeds

- Ruby Sass has reached end-of-life