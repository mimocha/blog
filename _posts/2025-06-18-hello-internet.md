---
layout: default
title: "Hello Internet"
date: 2025-06-18 13:00:00 +0700
categories: [random]
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

## Placeholder Texts

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

[Sample link](https://example.com)

![Sample image](https://upload.wikimedia.org/wikipedia/en/f/f7/RickRoll.png)

![Sample gif](https://media1.tenor.com/m/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif)
