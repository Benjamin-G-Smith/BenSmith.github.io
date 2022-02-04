import React, { lazy, Suspense } from 'react';

const LazyAboutComponent = lazy(() => import('./AboutComponent'));

const AboutComponent = props => (
  <Suspense fallback={null}>
    <LazyAboutComponent {...props} />
  </Suspense>
);

export default AboutComponent;
