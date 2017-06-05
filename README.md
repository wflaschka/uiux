# at-ui-ux

https://picturepan2.github.io/spectre/utilities.html#divider


ArtTap UI/UX patterns for Marketplace project.


SASS/SCSS functions
http://sass-lang.com/documentation/Sass/Script/Functions.html

```sh
sass-convert --from sass --to scss temp.sass temp.scss
```

## Install

Install with git:

```sh
git clone https://github.com/wflaschka/at-ui-ux.git at-ui-ux
```

Update npm:

```sh
npm update
```

After dependencies are downloaded, continue to the next step and compile the site.

## Using this repository

Compile with `gulp`:

```sh
gulp #cleans dist/, builds to /dist, watches /src
gulp clean # cleans dist/
gulp watch # watches /src for changes and builds to /dist
gulp sass # generate CSS, SassDoc, SourceMap for CSS
```


Run browsersync for updates while developing:
```sh
cd dist && ./browsersync.sh
```

After browsersync, you'll have a server running (probably on port `3000`) and you can load:

* Project landing page http://localhost:3000
* SassDocs for the project: http://localhost:3000/assets/styles/sassdoc/

Get browsersync for your computer at [https://browsersync.io/](https://browsersync.io/).


## Overview

* UI/UX design pattern library for comment and review
    * UI interactions
    * Layout
    * Behaviors
    * All of it has responsivity
* Landing page is `index.html`
* Patterns
    * Small elements
        * Buttons
        * Tags
        * Hearts 
            * Liked
            * Animations
        * Colors and Fonts
            * Primary text (black)
            * Retiring text (gray / opacity)
            * Emphasis text
        * Icons
            * Checked icon
            * Highlighted icon
            * Callout icon
            * Small, medium, big, etc.
    * Larger page element patterns
        * Carousels
            * Landing carousels
            * Left-right slider
            * Curated (left card) slider
        * Cards
            * Artist card
            * Artwork card
            * Sizes
                * Primary
                * Secondary
                * Thumbnail
                * Tiny
        * Forms
            * Form card
            * Actual real form
            * Small inline settings form
        * Dismissable messages
            * Flash messages
            * Activity log
            * Modals
                * Popup discussion
                * Popup small form
                * Image zoom functionality
            * Header bar message MoTD
        * Grids
            * Masonry with "view all" at top
            * Squares
        * Navigation
            * Header
                * Not logged in
                * Logged in
                    * As USER
                    * As MERCHANT
                        * As MERCHANT > ARTIST (Brand)
                    * As ADMIN
            * Slide-up icon menu (social shares `Product Details Page – 2.pdf`)
            * Searchbar
            * Footer
        * Pages
            * Product page
            * Artist page
            * Liked page

## Interesting things to look at

* Compass CSS3: http://compass-style.org/reference/compass/css3/
    * Includes <a href="http://compass-style.org/reference/compass/css3/flexbox/">flexbox directives</a>

## NPM setup

These are just notes; it's not necessary to run these because they're in the `package.json` file.

```sh
npm init
npm install bulma --save
npm install gulp --save-dev
npm install path --save-dev
npm install del --save-dev
npm install debug --save-dev
npm install relative --save-dev
npm install gulp-debug --save-dev
npm install run-sequence --save-dev
npm install gulp-concat --save-dev
npm install gulp-sass --save-dev
npm install gulp-sourcemaps --save-dev
npm install gulp-autoprefixer --save-dev
npm install sassdoc --save-dev
npm install gulp-util --save-dev
```



