---
layout: post
title: Hello Internet
date: 2025-06-18 13:00:00 +0700
categories: [misc]
tags: [demo, testing]
---

```
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗███╗   ██╗████████╗███████╗██████╗ ███╗   ██╗███████╗████████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗████╗  ██║██╔════╝╚══██╔══╝
███████║█████╗  ██║     ██║     ██║   ██║    ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝██╔██╗ ██║█████╗     ██║   
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗██║╚██╗██║██╔══╝     ██║   
██║  ██║███████╗███████╗███████╗╚██████╔╝    ██║██║ ╚████║   ██║   ███████╗██║  ██║██║ ╚████║███████╗   ██║   
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝     ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   
```

Just testing out Github page and Jekyll

---

# Header Example

## Header 2

### Header 3

#### Header 4

##### Header 5

---

## Text Styling Example

This is a *sample italic*, **sample bold** text, ~~sample strike through~~ text.

> Blockquote example for testing.

- Unordered list item 1
- Unordered list item 2
    - Unordered Sublist item 1
    - Unordered Sublist item 2
    - Unordered Sublist item 3

1. Ordered list item 1
2. Ordered list item 2
    1. Ordered Sublist item 1
    2. Ordered Sublist item 2
    3. Ordered Sublist item 3

---

## Table Example

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
| Row 3    | Data 5   | Data 6   |

---

## Code example

`Inline code` example.

```python
# Python code block sample
from transformers import BertTokenizer, BertModel
import torch

# Load pre-trained model tokenizer (vocabulary)
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Encode text
text = "Hello, Hugging Face and BERT!"
encoded_input = tokenizer(text, return_tensors='pt')

# Load pre-trained model (weights)
model = BertModel.from_pretrained('bert-base-uncased')

# Get BERT embeddings
with torch.no_grad():
    outputs = model(**encoded_input)
    last_hidden_states = outputs.last_hidden_state  # shape: (batch_size, sequence_length, hidden_size)

print(last_hidden_states)
```

---

## Media Example

[Sample link](https://example.com)

![Sample image](https://upload.wikimedia.org/wikipedia/en/f/f7/RickRoll.png)

![Sample gif](https://media1.tenor.com/m/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif)
