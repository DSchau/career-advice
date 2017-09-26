import React from 'react';
import { Notes, SlideSet, Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import marked from 'marked';

import * as Intro from './intro';
import * as WishIKnew from './wish-i-knew';
import * as Advice from './advice';
import * as Conclusion from './conclusion';

/*
 * This is pretty dirty... but YOLO
 * All slides export a function (or an object)
 * This slide fn/obj can contain a property called Props, that is injected
 * into the base level <Slide> component
 */
export default function makeSlides() {
  return [Intro, WishIKnew, Advice, Conclusion].map((Slides, rootIndex) => {
    return (
      <SlideSet key={rootIndex}>
        {Object.keys(Slides).map((key, index) => {
          const Content = Slides[key];
          const Props = Content && Content.Props ? Content.Props : {};
          const iteratorKey = `${rootIndex}-${index}`;
          if (Props.code) {
            const { ranges = [], ...props } = Content.Props;
            return <CodeSlide key={iteratorKey} ranges={ranges} {...props} />;
          }
          return (
            <Slide key={iteratorKey} {...Content.Props || Content.props}>
              <Notes>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked((Props.notes || '').trim())
                  }}
                />
              </Notes>
              {typeof Content === 'function' && <Content />}
            </Slide>
          );
        })}
      </SlideSet>
    );
  });
}
