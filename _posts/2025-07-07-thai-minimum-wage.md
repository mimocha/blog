---
layout: post
title: Creating the Thailand Minimum Wage Dataset
date: 2025-07-07
categories: [devlog]
tags: [dataset, thailand, minimum wage]
---

I created this dataset for Thailand's historical minimum wage:
[github.com/mimocha/thailand-minimum-wage](https://github.com/mimocha/thailand-minimum-wage)
Spurred on by the recent increase in minimum wage (July 1st, 2025),
I was curious about past minimum wage raises;
I wanted to know how often and how much the minimum wage has changed in the past.

Then my curiosity turned into annoyance, then into sheer determination,
after I repeatedly fail to find any easy to use data format.
All I found were either news report citing a few previous raises,
incomplete / paywalled online sources,
or official government announcements which were in legalese-PDF _(yuck)_.

Luckily, there were only 53 minimum wage change announcements (as far as I can find),
and most of these are already collated into a single Excel file by the
[Ministry of Labor](https://www.mol.go.th/%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B3);
even if it is in Thai legalese report format.

I immediately tried copying the Excel data into raw text, so I can have an LLM parse it out directly.
I tried using various LLMs provided via VSCode / Github Copilot, but I quickly found this approach to be unusable.
The inconsistent format of the original Excel file combined with Thai legalese reporting proved too much for even the latest Sonnet 4 and Gemini 2.5 Pro.
The CSV created by these top models still hallucinated occasionally, _which renders the entire dataset unusable._

<p class="important">
However, the biggest issue isn't the hallucinations in and of itself,
it is that I cannot reliably double check this CSV output manually.
</p>

The CSV file is 77+ columns by 53+ rows of pure number. Even for a dataset this small,
I immediately realize how error prone my double checking attempt will be; and knew I needed another approach.

So I came up with a hybrid approach, where I manually created the CSV template first _(setting up the columns and row indices)_,
created a simple python notebook and custom python functions to fill out the CSV file row-by-row,
**then ask the LLM to correctly call the python functions instead.**

From my experience, Sonnet 3.7 thinking & Sonnet 4 were the best at this task.
After filling out the first few function calls as examples _(both for myself and for the LLM),_
I can provide the copied text from the original Excel file as a comment across multiple notebook cells (1 announcement per notebook cell),
then instruct the LLM to fill complete each cell, converting the comment into function calls.

This approach produced **significantly** more reliable results, and most importantly, was easily verifiable by me.
I only needed to check that the function calls were correct (are the list of input province names and mapping wage value correct?),
and I know the CSV file will also be correct.

All in all, this entire dataset took about 3 days of on and off working to create,
with an additional day to create the [Github repo]((https://github.com/mimocha/thailand-minimum-wage)) and documentation.