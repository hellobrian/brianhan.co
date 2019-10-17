---
title: Parcel for your Sass
description: If you're not tied to using Webpack, Gulp or Grunt, then using Parcel is one of the best ways to quickly set up a new SCSS project.
date: 2018-12-18
---

![Photo by Leone Venter on Unsplash](./parcel.jpg)

<small style="font-family: Karla, sans-serif;">Photo by Leone Venter on [Unsplash](https://unsplash.com/photos/mTkXSSScrzw)</small>

Parcel is a really great alternative to Webpack. If I decide I want to use SCSS in my project, I usually reach for Parcel as my preferred way of compiling SCSS to CSS.

## Install

Create a new project, initialize a new package.json file and install parcel-bundler.

```bash
npm init -y
npm i parcel-bundler -D
# yarn add parcel-bundler -D
```

## Scripts

You only need two scripts:

**package.json**

```json
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}
```

## Creating your project files

Make a src directory with an index.html and index.scss.

**src/index.scss**

```scss
$red: #e74c3c;

h1 {
  color: $red;
}
```

**src/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>SCSS with Parcel</title>
    <link rel="stylesheet" href="./index.scss" />
  </head>
  <body>
    <h1>hello</h1>
  </body>
</html>
```

Note that in our src/index.html file, we tell it to use our scss file as the linked stylesheet:

**src/index.html**

```html
<link rel="stylesheet" href="./index.scss" />
```

## Parcel installs Sass for us

Spoiler alert! Parcel uses index.html as the entry point to all of our external files (scss, js, etc.). When we declare as scss file in our html file, Parcel is smart enough to know that it should install `sass` for us if it's missing from our package.json.

Try running the dev script:

```bash
npm run dev
```

Now your package.json dependencies should look like this:

**package.json**

```json
{
  "devDependencies": {
    "parcel-bundler": "^1.11.0",
    "sass": "^1.15.2"
  }
}
```

Magic!

## Autoprefixer, Watcher, CSS injection

Parcel is already configured to do all of this stuff right out of the box.
So, basically, you're done! Feel free to start adding JavaScript, React, or whatever else you may need. Parcel should be able to handle it.

For more details on Parcel, check them out at: https://parceljs.org/

## Conclusion

You can find an example repo on my [GitHub](https://github.com/hellobrian/sass-recipes/tree/master/parcel).

Parcel has been one of my favorite tools to use in 2018.

Thanks so much for reading!
