# next-test

official Next.js tutorial.
## setup
```
npx create-next-app app-name --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
cd app-name
npm run dev
```
https://nextjs.org/learn/basics/create-nextjs-app/setup
## contents
### Image Component and Image Optimization

```:js
import Image from "next/image"
```

This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.  

Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport.  

Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.

### CSS Styling
#### CSS in JS

styled-jsx
```:js
<style jsx>{`
  …
`}</style>
```

It’s a “CSS-in-JS” library — it lets you write CSS within a React component, and the CSS styles will be scoped (other components won’t be affected).
you can also use other popular CSS-in-JS libraries such as [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) or [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

### Sass

```
npm install sass
```

### Typescript

```
touch tsconfig.json
npm install --save-dev @types/react
```

tsconfig.json will be overwritten.
A file name next-env.d.ts will be created. This file ensures Next.js types are picked up by the TypeScript compiler. You cannot remove it, however, you can edit it (but you don't need to).

### Pre-rendering and Data Fetching

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration.**)  

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.

#### Static Generation with data

`getStaticProps` runs at build time in production.
Inside the function, you can fetch external data and send it as props to the page.
Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

```:js
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

> Note: In development mode, getStaticProps runs on each request instead.

#### Server-side Rendering  with data

To use Server-side Rendering, you need to export `getServerSideProps` instead of `getStaticProps` from your page.

```:js
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

#### Client-side Rendering

The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. 
It handles caching, revalidation, focus tracking, refetching on interval, and more. 

```:js
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```