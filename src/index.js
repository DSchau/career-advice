import React from 'react';
import { render } from 'react-dom';
import 'es6-promise/auto';

import { Deck } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import makeSlideDeck from './slides';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import { PRIMARY, SECONDARY } from 'style';

const theme = createTheme(
  {
    primary: PRIMARY,
    secondary: SECONDARY
  },
  {
    primary: { name: 'Montserrat', googleFont: true, styles: ['400', '700i'] },
    secondary: { name: 'Bitter', googleFont: true, styles: ['400'] }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        theme={theme}
        progress="bar"
        transitionDuration={500}
      >
        {makeSlideDeck()}
      </Deck>
    );
  }
}

render(<Presentation />, document.getElementById('root'));
