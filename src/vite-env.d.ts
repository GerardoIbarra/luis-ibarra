/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

// Global constants defined at build time

declare module 'react/jsx-runtime' {
  export default any;
}

import 'react';

declare global {
  const __ROUTE_MESSAGING_ENABLED__: boolean;
  namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
  }
}
