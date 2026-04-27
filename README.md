# firefox-homepage

Local Catppuccin-themed homepage for Firefox.

This project is licensed under [The Unlicense](https://unlicense.org).

**Before you proceed:** I was making this project for personal use, so I didn't think much about other resolutions (my laptop is 1366x768px), therefore there might be unexpected behaviour, so I **don't recommend** this project. If you really like it (thanks!), you should either fork it or find a fork of it (doubtful???).

## Installation

1. Run `git clone https://github.com/bxrtsy/firefox-homepage.git`.
2. Open Firefox and go to `about:preferences#home`.
3. In **Homepage and new windows**, select **Custom URLs...**.
4. Set URL to `file:///path/to/firefox-homepage/index.html`.
5. Done!

## New shortcuts

1. In `main.js`, add your link to `shortcuts` array, e.g. `'www.spotify.com'`.
2. In `shortcuts/`, add SVG icon, e.g. `www.spotify.com.svg`.
3. Done!

## Search engine

To change the search engine, as the default is DuckDuckGo, you simply find this line in `index.html`: `<form action="https://duckduckgo.com/" method=GET>`, and edit the URL, e.g. `https://www.google.com/`.
