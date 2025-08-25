// Minimal shims so static analysis here doesn't require installed Next.js types.
declare module 'next/head' {
  const Head: any;
  export default Head;
}
declare module 'next/app' {
  export type AppProps = any;
}

// Very loose shim for React to satisfy editor/linter in environments
// where node_modules types are not installed.
declare module 'react' {
  const React: any;
  export default React;
  export const useEffect: any;
  export const useState: any;
  export type PropsWithChildren<T = any> = T & { children?: any };
}

// Shim for Next.js Image component
declare module 'next/image' {
  const Image: any;
  export default Image;
}

// Allow importing image assets
declare module '*.jpg' {
  const src: any;
  export default src;
}
declare module '*.jpeg' {
  const src: any;
  export default src;
}
declare module '*.png' {
  const src: any;
  export default src;
}
// Specific to a double extension used in this repo
declare module '*.jpg.jpg' {
  const src: any;
  export default src;
}

// Provide very loose JSX types for lint environment
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


