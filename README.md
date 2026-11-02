# Translator

I started this project in 2022 and initially used Flask, Python, HTML, and IBM's Watson for language translation. Watson has since then been deprecated and I needed a alternative way to revive this project. I redid the project in html and Javascript, added the swap and sound buttons, and made it mobile friendly. On desktop I have a keyboard layout that highlights when the text area is selected and the user is typing as an experiment with Javascript.

A browser-based translator. Type text, pick the source and target languages,
and translate — with a swap button and spoken playback built in.

https://mattmichalski.github.io/translator/translator/index.html

## Features

- Translate text between languages
- ⇄ Swap source and target languages with one tap
- Speak the translation using the browser's built-in voices (speech rate 0.4
  for clearer pronunciation)
- Translation-only output — what you hear matches the single translated line
- On-screen keyboard on desktop (hidden on phones, where the native keyboard
  takes over)
- Mobile-friendly layout with From/To labels on both control rows
- Background: smooth blue fade, deepSkyBlue into steelblue (#4682b4)

## How to run it

No build step — just open `https://mattmichalski.github.io/translator/translator/index.html` in a browser.

Translation needs internet: it calls the Pollinations text endpoint
(`text.pollinations.ai`, model `"openai"`, no API key needed). Speech runs
on-device through the browser and needs no key.

## How it works

- Translation: the app sends your text and the selected languages to
  Pollinations and displays the returned translation.
- Speech: the browser's SpeechSynthesis voices read the translation aloud,
  using the target language's BCP 47 tag.
- Swap: exchanges both the selected languages and the text in the two boxes.
