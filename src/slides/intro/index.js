import React from 'react';
import { Appear, Heading, Fill, Layout, Link } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import WtfFace from 'emojione/assets/svg/1f616.svg';
import Ambivalence from 'emojione/assets/svg/1f612.svg';
import HeartEyes from 'emojione/assets/svg/1f60d.svg';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import { Image } from 'components';

const images = {
  titleSlide: require('./assets/images/title-slide-optimized.jpeg'),
  opiLogo: require('./assets/images/object-partners.svg'),
  opiMn: require('./assets/images/opi-mn-optimized.jpeg'),
  me: require('./assets/images/me-optimized.jpeg')
};

preloader(images);

export const Intro = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '85vh'
    }}
  >
    <Layout>
      <Fill
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 20
        }}
      >
        <Heading size={1} caps textFont="Bitter">
          Career Advice
        </Heading>
      </Fill>
      <Fill
        margin={10}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Heading size={5} textColor="primary" textAlign="left">
          &hellip; and some other things too
        </Heading>
      </Fill>
    </Layout>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <Link
        href="https://dschau.github.io/css-in-js-presentation/"
        textColor="rgba(255, 255, 255, 0.7)"
      >
        https://dschau.github.io/career-advice
      </Link>
    </div>
  </div>;

Intro.Props = {
  bgImage: images.titleSlide,
  bgDarken: 0.5,
  notes: `
My name is Dustin Schau, and I'm going to hopefully teach you all about CSS in JS today. We'll start with some drawbacks of CSS that led to the creation of these libraries, then discuss advantages of CSS in JS over CSS, shift to discussion of some common patterns, utilities, and libraries to instrument CSS in JS, and then finally end with a (hopefully fair!) illustration of the drawbacks of CSS in JS. Let's get started!
  `
};

export const AboutMe = () =>
  <Layout>
    <Fill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingRight: 20
      }}
    >
      <Heading size={2} caps fit>
        Who's this guy?
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <TwitterIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://twitter.com/schaudustin" textColor="white">
          schaudustin
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <GithubIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://github.com/dschau" textColor="white">
          dschau
        </Link>
      </Heading>
      <Heading size={6} style={{ display: 'flex' }}>
        <WebsiteIcon
          color="white"
          style={{ display: 'inline-block', marginRight: 8 }}
        />
        <Link href="https://dustinschau.com" textColor="white">
          website
        </Link>
      </Heading>
    </Fill>
    <Fill
      style={{
        maxWidth: '40%'
      }}
    >
      <Image src={images.me} style={{ borderRadius: 400 }} />
    </Fill>
  </Layout>;

AboutMe.Props = {
  notes: `
- Frontend developer specializing in all things JavaScript
- Done a bit of everything, whether that's jQuery, Angular, React, you name it
- I've also done a fair bit of everything in CSS land, whether it's vanilla CSS, LESS, SASS, CSS Modules, and (of course) CSS in JS
  `
};

export const UnionPacific = () =>
  <Heading size={2} fit caps>
    Union Pacific
  </Heading>;

UnionPacific.Props = {
  bgColor: 'secondary'
};

export const ObjectPartners = () =>
  <Image src={images.opiLogo} style={{ width: '100%' }} />;

ObjectPartners.Props = {
  bgImage: images.opiMn,
  bgDarken: 0.8,
  notes: `
- I work at a great company called Object Partners
- Specialize in JVM and frontend development of all sorts
- About 100 consultants between here, MN, and Chicago
- Come talk to me after if you'd like to learn more!  
  `
};
