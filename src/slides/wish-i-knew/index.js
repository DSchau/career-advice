import React from 'react';
import { Heading, S as Span } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  matrix: 'https://media.giphy.com/media/quEsMOrr3hmQ8/giphy.gif',
  testing: 'https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif'
};

preloader(images);

export const Intro = () =>
  <Heading size={1} fit caps textFont="Bitter" textColor="white">
    What I Wish I Knew
  </Heading>;

Intro.Props = {
  bgColor: 'secondary'
};

export const LearnInYourSpareTime = () =>
  <Heading size={2} caps fit>
    Learn in your Spare Time
  </Heading>;

LearnInYourSpareTime.Props = {
  notes: `
- I think I took my biggest professional leap when I began programming, reading articles, etc. outside of work and outside of class
- Some of you may already do this, and that's even better!
- Some of you may not, but there's still time to make this change
- reddit, twitter, and hackernews are great sources of information to stay current on tech trends/events
  - I am basically only a consumer/lurker on all of these (i.e. I rarely tweet, rarely post, etc.), but that's OK too!
  `
};

export const JustCode = () =>
  <Heading size={2} caps fit textColor="white">
    <Span type="italic">Just</Span> Code
  </Heading>;

JustCode.Props = {
  bgImage: images.matrix,
  bgDarken: 0.5,
  notes: `
- This is not (necessarily!) building the next Facebook, but rather building something yourself and learning along the way
  - I've built so many dumb utilities and websites, just to learn
  - Have an approach of "Hey I could probably build that thing" and then build it
- Learn new languages
  - If you've only done Java, consider experimenting with Groovy or Kotlin, two languages that both compile to Java byte code
  - If you like JavaScript, check out TypeScript or Flow; both of which add types (like in Java) to JavaScript
- Open source it and put it on GitHub or GitLab
  - GitLab offers unlimited private repos if that's more your jam
  - GitHub is more visible
  `
};

export const VersionControlSystems = () =>
  <Heading size={2} caps fit>
    Version Control Systems
  </Heading>;

VersionControlSystems.Props = {
  notes: `
- We just barely scratched the surface of SVN in my coursework here, but Git is more utilized in my experience (it's also way better)
- Some exposure prior to "on the job" learning just puts you in a better place when you will inevitably have to use these systems
  `
};

export const Testing = () =>
  <Heading size={2} caps fit textColor="white">
    Value of Writing Tests
  </Heading>;

Testing.Props = {
  bgImage: images.testing,
  bgDarken: 0.5,
  notes: `
- We rarely discussed much testing, but writing tests for my code has sharply increased the overall code quality and reduced bugs
- If you're writing Java; Spock or JUnit are great choices
- If you're writing JavaScript; Jest is where it's at
  `
};
