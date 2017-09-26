import React, { Component } from 'react';
import { Heading, Link, List, ListItem } from 'spectacle';
import GlobeIcon from 'react-icons/lib/fa/globe';

import preloader from 'spectacle/lib/utils/preloader';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import Smiley from 'emojione/assets/svg/1f642.svg';

import { Image } from 'components';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif',
  questions: 'https://media.giphy.com/media/l4FGroaKiE5uuMBiM/giphy.gif'
};

preloader(images);

export const Questions = class extends Component {
  static Props = {
    bgImage: images.questions
  };

  state = {
    current: 0,
    all: [
      'Questions',
      'Preguntas',
      '问题',
      'Fragen',
      '質問',
      'quaestiones',
      'pytania',
      'вопросов',
      'الأسئلة'
    ]
  };

  componentDidMount() {
    setInterval(() => {
      const current = this.state.current;
      const next = this.state.all[current + 1] ? current + 1 : 0;
      this.setState({
        current: next
      });
    }, 5000);
  }

  render() {
    const text = this.state.all[this.state.current];
    return (
      <Heading size={1} caps textColor="black">
        {text}?
      </Heading>
    );
  }
};

export const FinTheEndThatsAllFolks = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    <Link
      href="https://twitter.com/schaudustin"
      textColor="white"
      style={{ display: 'block' }}
    >
      <TwitterIcon color="white" style={{ marginRight: 6 }} />@schaudustin
    </Link>
    <Link
      href="https://github.com/dschau"
      textColor="white"
      style={{ display: 'block' }}
    >
      <GithubIcon color="white" style={{ marginRight: 6 }} />dschau
    </Link>
    <Link
      href="https://dustinschau.com"
      textColor="white"
      style={{ display: 'block' }}
    >
      <WebsiteIcon color="white" style={{ marginRight: 6 }} />website
    </Link>
  </div>;

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou,
  notes: `
  `
};
