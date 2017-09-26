import React from 'react';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  youCanDoIt: 'https://media.giphy.com/media/yoJC2K6rCzwNY2EngA/giphy.gif'
};

preloader(images);

export const WrapUp = () => null;

WrapUp.Props = {
  bgImage: images.youCanDoIt,
  notes: `
- I remember being incredibly nervous; college/class work was what I knew for the past 4 years
  - The transition to "real world" was daunting
- These nerves are normal
- Put yourself out there. interview at a bunch of places. be yourself. and it'll go great and you'll succeed beyond your wildest dreams
  `
};
