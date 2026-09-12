---
title: "Co-founding Stage Captions"
description: "How a Saturday coding session in Vilnius turned into the start of a real-time captioning product for live events."
publishedDate: 2025-09-07
draft: false
---

During one of our regular Saturday coding sessions at our small office in Vilnius, I had a chat with my friend Ernest. He mentioned an interesting problem he was trying to solve.

## The problem

In November, there will be a bilingual medical conference that he is helping organize from the technical side. The agenda includes sessions from both Polish and English speakers.

The problem is that some people in the Polish audience might not understand English, so we needed to think of a solution for them not to feel excluded.

<figure class="wide">
  <img src="/images/blog/co-founding-stage-captions-1.png" alt="Forum of Young Polish Medical Professionals conference screen in Vilnius" width="2560" height="1707" loading="lazy" />
  <figcaption>The conference where this idea needs to work in a real setting.</figcaption>
</figure>

## The F1 moment

As a Formula 1 fan, I remembered that during live broadcasts you can choose between different subtitle tracks in your preferred language. Those captions and translations are generated in real time, which means this kind of experience is possible.

Imagine sitting in the audience, selecting your language and being able to understand the speaker on stage without knowing their language.

<figure class="wide">
  <img src="/images/blog/co-founding-stage-captions-2.png" alt="Formula 1 TV broadcast with live subtitles enabled" width="3024" height="1708" loading="lazy" />
  <figcaption>The Formula 1 broadcast that made the idea feel technically possible.</figcaption>
</figure>

## Why it felt worth trying

That idea sounded really intriguing to me. Not only from the technical side, but also because the goal is to make in-person sessions like conferences and events more accessible and inclusive.

If done properly, it could:

1. Be a helpful resource for deaf or hard of hearing people.
2. Help audience members who are not native speakers, making talks feel more like watching a movie with subtitles.

## Two questions

At that point, I had two questions in my mind:

1. Can we build something good enough for the November conference?
2. Can this eventually become a real product?

Later that day I called my friend Martin (rockstar frontend engineer) to see if he would be up for co-founding this type of project.

After a short conversation, he was like: hell yeah, let's do it.

That was enough to start.

Later, we decided to call the project [Stage Captions](https://stagecaptions.io).

## The first MVP

The next week, we met at the office again to see if we could produce an MVP fast. We discussed a rough approach for how it could work and then the work began.

At around 6 PM, I posted a video in the chat showing how it could potentially work from the backend side. This was my first time working with WebSockets and real-time communication.

You can tell I am not a frontend engineer from the following screenshot lol.

<figure class="wide">
  <img src="/images/blog/co-founding-stage-captions-3.png" alt="Early real-time transcription MVP with backend logs visible" width="2552" height="1438" loading="lazy" />
  <figcaption>Rough MVP showing real-time transcription and translation from the backend side.</figcaption>
</figure>

After getting this working, I was curious how it would look during an actual presentation.

We discussed that one way to solve the language comprehension problem would be to display both the original language and the translated language on the slides. So I simply mixed two sources in OBS: the slides and the captions.

The result looked like this:

<figure class="wide">
  <img src="/images/blog/co-founding-stage-captions-4.png" alt="Presentation slide with live original and translated captions displayed at the bottom" width="1694" height="928" loading="lazy" />
  <figcaption>Mixing the slides and captions together in OBS.</figcaption>
</figure>

## The deadline

At that point, I knew it was definitely achievable. The "only" question left was how to move beyond this ugly-looking MVP and eventually turn it into a product with a clean UI, intuitive UX and a stable backend.

Let's see where this gets us.

The deadline is November 6. That is the day of the conference and by then this needs to be ready.
