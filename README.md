# Website Time Tracker

A lightweight Chrome extension that tracks how much time you spend on each website, displayed in minutes and seconds.

---

## Versions

**v1.0**

---

## Features (v1)

* Tracks time spent per website (domain-wise)
* Displays usage in minutes and seconds
* Updates automatically on tab switch & URL change
* Simple and clean popup UI
* Uses Chrome Storage API (no external backend)
* Fully offline & privacy-safe

---

## Tech Stack

* JavaScript
* Chrome Extension APIs
* HTML + CSS
* `chrome.tabs`, `chrome.storage`

---

## Project Structure

```
website-time-tracker/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── popup.css
└── README.md
```

---

## How It Works

1. Detects the active browser tab
2. Extracts the website domain
3. Measures time spent using timestamps
4. Stores time (in milliseconds) using `chrome.storage.local`
5. Formats time into minutes and seconds in the popup

---

## Installation (Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to:

   ```
   chrome://extensions
   ```
3. Enable Developer Mode
4. Click Load unpacked
5. Select the project folder

The extension is now active
---

## Author

**Mritunjay Kumar**
B.Tech (CSB) – IIIT Delhi

---
