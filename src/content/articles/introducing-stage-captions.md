---
title: "Introducing Stage Captions"
description: "Introducing Stage Captions: browser-based live captioning software for real-time captions and translations at in-person events."
publishedDate: 2026-01-05
draft: false
ogImage:
  src: "/images/blog/introducing-stage-captions-1.webp"
  alt: "Stage Captions QR code setup during the first real conference"
  width: 1920
  height: 1080
---

For quite some time, Martin and I have been building something around <span class="highlight">live event accessibility</span>.

We've already <span class="highlight">tested it during a real conference</span> and improved it based on feedback from AV engineers and attendees. Now I'm ready to properly share what it is.

The project is called Stage Captions.

<figure class="wide">
  <img src="/images/blog/introducing-stage-captions-1.webp" alt="Logo with background of conference" width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" />
  <figcaption>Our QR code setup during the first real conference.</figcaption>
</figure>

## Why we built it

Initially, the idea came from a challenge one of the conference organisers shared with me: some attendees at an upcoming medical conference here in Vilnius needed help understanding English-speaking presenters.

After building the first MVP, we realised the same problem exists in many other situations: multilingual audiences, deaf and hard of hearing people or simply noisy venues.

## The problem

Live events are still mostly built around people who can hear clearly and understand the speaker's language. If you don't, the experience gets worse fast.

Our idea is to make live events easier to follow with <span class="highlight">real-time captions and translations</span>.

Think of it as subtitles in movies, but in real life.

<figure>
  <img src="/images/blog/introducing-stage-captions-3.webp" alt="Mockup of live captions displayed as an overlay on a presentation" width="1024" height="768" loading="lazy" decoding="async" />
  <figcaption>A mockup of how it could look as an overlay.</figcaption>
</figure>

## Why now

We also noticed how accessibility expectations are changing. With things like the <span class="highlight">ADA</span> in the US and the <span class="highlight">European Accessibility Act</span> in Europe, organisations are starting to think seriously about making their events more inclusive.

At the same time, speech recognition and translation models have improved a lot, making this kind of solution much more practical and accurate.

So we decided to contribute to that by building a software solution.

After all, we're software engineers.

## What it does

Stage Captions is a <span class="highlight">browser-based live captioning software</span> for in-person events.

The workflow is simple:

- Route audio from venue microphones to a laptop, for example through an audio interface
- Generate captions
- Display them on venue screens, TVs, LED panels, in OBS for broadcasts or on attendees' phones.

<figure class="wide">
  <img src="/images/blog/introducing-stage-captions-2.webp" alt="Stage Captions interface showing live captions and session controls" width="1920" height="1080" loading="lazy" decoding="async" />
  <figcaption>Room UI where audio is processed and captions are streamed.</figcaption>
</figure>

## Who it is for

Mainly, we're targeting events of different sizes and levels of complexity. If you need captions to make your event more accessible, you should be able to set it up fast.

Obviously, time will tell who will end up using our solution the most, but right now we're building for:

- Event organisers
- AV teams/engineers
- Universities
- Conferences/meetups
- Hybrid events

So if someone is speaking on stage, the audience can probably benefit from captions or translations.

## Where we are now

Now we have a working product that has been tested at a real conference. It supports captioning in 50+ languages and we keep improving it based on feedback from AV engineers and attendees.

Translations are still being developed as we want to make them reliable.

Next step: <span class="highlight">Product Hunt</span> to make this launch more public.

## Try it

And if you're organising a conference, meetup, townhall or some other event where you see captioning might be useful - feel free to reach out at: [stagecaptions.io/request-demo](https://stagecaptions.io/request-demo).
