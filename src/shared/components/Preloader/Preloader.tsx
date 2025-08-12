import { memo } from 'react';

import { Spinner } from '@/shared/ui/spinner';
import { FadeIn } from '@/shared/animations';
import useApplicationStore from '@/shared/stores/application'
import { theme } from '@/styles/theme'

const Preloader = memo(() => {
  const { preloaders } = useApplicationStore();

  return (
    <FadeIn
      isVisible={preloaders.length > 0}
      skipAnimation={true}
      duration={300}
      className="preloader"
    >
      <Spinner size={40} thickness={4} color={theme.colors.textPrimary} />
    </FadeIn>
  );
});

export default Preloader;