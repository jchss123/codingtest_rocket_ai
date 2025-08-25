// Minimal shims so static analysis here doesn't require installed Next.js types.
declare module 'next/head' {
  const Head: any;
  export default Head;
}
declare module 'next/app' {
  export type AppProps = any;
}

// Provide very loose JSX types for lint environment
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


