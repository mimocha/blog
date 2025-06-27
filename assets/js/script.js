function updateWordCountAndReadingTime() {
  const content = document.getElementById('content');
  if (!content) return;

  const text = content.innerText;
  // Count and round up the word count to the nearest 10 words
  const wordCount = Math.ceil(text.trim().split(/\s+/).length / 10) * 10;
  // Assumes 200 WPM reading speed, rounded to the nearest 5 minutes
  const readingTime = Math.ceil(wordCount / 200 / 5) * 5;

  const wordCountEl = document.getElementById('word-count');
  if (wordCountEl) {
    wordCountEl.innerText = wordCount;
  }

  const readingTimeEl = document.getElementById('reading-time');
  if (readingTimeEl) {
    readingTimeEl.innerText = `${readingTime} min`;
  }
};

document.addEventListener('DOMContentLoaded', updateWordCountAndReadingTime);
