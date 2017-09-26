import React from 'react';

import { Heading, S as Span } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

const images = {
  thankYou: 'https://media.giphy.com/media/j5IdWWOAYzcli/giphy.gif'
};

preloader(images);

export const Intro = () =>
  <Heading size={1} caps textFont="Bitter" textColor="white">
    Career &amp; Interview Advice
  </Heading>;

Intro.Props = {
  bgColor: 'secondary',
  notes: `

  `
};

export const Internship = () =>
  <Heading size={2} caps fit>
    Get an internship
  </Heading>;

Internship.Props = {
  notes: `
- If you haven't already had an internship, definitely start that search and soon
- It gives you real world experience, which is incredibly valuable and a great compliment to your course work
  `
};

export const Meetups = () =>
  <Heading size={2} caps fit>
    Go to local Meetups
  </Heading>;

Meetups.Props = {
  notes: `
- Things like OJUG, NebraskaJS, etc.
- Great way to network and possibly open up some doors for yourself
  `
};

export const DoNotLimit = () =>
  <Heading size={2} caps fit>
    Do <Span type="italic">not</Span> limit yourself
  </Heading>;

DoNotLimit.Props = {
  notes: `
- Gives you much more experience with the interview process
- Gives you leverage to negotiate a higher starting salary ($$$)
- Don't even limit yourself to just Omaha
  - Minneapolis, Kansas City, Des Moines are some awesome places and tech spots
  - Obviously West Coast or East Coast if that's more of your scene too
  `
};

export const SignificantProjects = () =>
  <Heading size={2} caps fit>
    Significant Projects
  </Heading>;

SignificantProjects.Props = {
  notes: `
- Be able to talk about some projects you've done that you're proud of
  - If these are only course work, that's fine
  - Be prepared to talk in depth about these projects
- Interviewers really like people who are passionate and get excited about things, so have some projects in mind that you're passionate about
  `
};

export const KnowWhatYouDoNotKnow = () =>
  <Heading size={2} caps fit>
    Know What You do Not Know
  </Heading>;

KnowWhatYouDoNotKnow.Props = {
  notes: `
- UP story
- During the course of the interview, if something was worded incorrectly or could have been worded more correctly, or if you just didn't know, mention this at the end
- Don't BS; if you don't know something, say you don't know but you will look into it after or soon
  `
};

export const BeYourself = () =>
  <Heading size={2} caps fit>
    Be Yourself
  </Heading>;

BeYourself.Props = {
  notes: `
- Easier said than done
- The interviewers want you to succeed
- They brought you in because they like you and your resume, so be you
  `
};

export const ThankYous = () =>
  <Heading size={2} caps fit textColor="white">
    Express Gratitude
  </Heading>;

ThankYous.Props = {
  bgImage: images.thankYou,
  bgDarken: 0.5,
  notes: `
- Thank each interviewer for their time
- Send a thank you letter or e-mail to your main contact(s) who got you the interview or performed the interview
  `
};
