# next-test
# setup

https://nextjs.org/learn/basics/create-nextjs-app/setup

# contents
## Image Component and Image Optimization

```:js
    import Image from "next/image"
```

This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.  

Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport.  

Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.

## CSS Styling

### styled-jsx

```:js
<style jsx>{`
  …
`}</style>
```

It’s a “CSS-in-JS” library — it lets you write CSS within a React component, and the CSS styles will be scoped (other components won’t be affected).
you can also use other popular CSS-in-JS libraries such as [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) or [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

## Sass

```
npm install sass
```

## Typescript

```
touch tsconfig.json
npm install --save-dev @types/react
```

tsconfig.json will be overwritten.
A file name next-env.d.ts will be created. This file ensures Next.js types are picked up by the TypeScript compiler. You cannot remove it, however, you can edit it (but you don't need to).