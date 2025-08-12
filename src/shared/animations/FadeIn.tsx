import { animated, easings, useTransition } from '@react-spring/web';

import type IAnimation from './animations.interface';

const FadeIn = ({
                  isVisible,
                  children,
                  className,
                  duration = 100,
                  skipAnimation = false,
                }: IAnimation) => {
  const transitions = useTransition(isVisible, {
    from: { opacity: Number(skipAnimation) },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration,
      easing: easings.easeInOutSine,
    },
    immediate: false,
    trail: 0,
    reset: false,
  });

  return transitions(
    (styles, item) => item && (
      <animated.div
        style={{
          ...styles,
          pointerEvents: 'auto',
          willChange: 'opacity',
        }}
        className={(className || '').trim()}
      >
        {children}
      </animated.div>
    )
  );
};

export default FadeIn;