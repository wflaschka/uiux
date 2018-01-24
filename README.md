# ArtTap UI/UX Patterns

*Point of contact:* Walter Flaschka wflaschka@gmail.com. Best methods for contact are the `#arttap` [Slack](https://slack.com/), [email](wflaschka@gmail.com), or texting the Google+ account for wflaschka@gmail.com.

## Merging master into branch

```sh
git checkout master
git pull
git checkout walter
git merge master
```

## Overview

In this project we are building the HTML, Javascript, and CSS for the ArtTap web pages. This repository has workflow automation so we can build each *component* individually, and then combine those components into full prototype *pages*. 

*We are using the prototypes available at [this InVisionApp project](https://projects.invisionapp.com/d/main#/projects) to design the UI/UX.* If you do not have access to the InVisionApp project it may need to be shared with you. Contact wflaschka@gmail.com for assistance.

This project uses npm, [Gulp.js](https://gulpjs.com/), and [Browsersync](https://www.browsersync.io/) to automate the development workflow. The idea of the workflow: 

> We edit a piece of HTML or tweak a line of SCSS, hit *save*, and the browser window refreshes itself to show the changes.

<font color="red">On Github, work with branches and issue **pull requests** to integrate with the master branch.</font>

## Which framework?

**Custom framework.** We are saving work doing it this way.

During design iterations, several CSS frameworks were implemented (Semantic UI, Bulma, Spectre CSS, MaterializeCSS). All of them have a few pieces we need, but no single framework has every piece. Some of the frameworks were very complicated, with many interdependencies to learn; some of the frameworks were difficult to extend or customize. Most of the work turned into *undoing* or *debugging* these complicated frameworks so our own UI/UX could work properly.

Since the ArtTap design is highly structured with few variations, we are using a custom CSS framework called **flashflex** that leverages third-party CSS libraries and borrows elements from the other frameworks. This has resulted in faster progress since it eliminates (mostly) the "fix broken or overly complicated code" step from the workflow and lets us concentrate on adding new things.

## Install

Instructions work on MacOS and probably Linux. Follow the same general steps for Windows. Please contact Walter with any problems you may experience.

Install this repo with git:

```sh
git clone https://github.com/wflaschka/at-ui-ux2.git at-ui-ux
cd at-ui-ux
```

If you don't have access, the repo may need to be shared with you.

Install npm dependencies:

```sh
npm update
```

Compile with `gulp`:

```sh
gulp 
```

Run browsersync for updates while developing:
```sh
cd dist && ./browsersync.sh
```

After browsersync, you'll have a server running (probably on port `3000`) and you can load:

* Project landing page http://localhost:3000

Browsersync is not included in this repository. It can be installed from [https://browsersync.io/](https://browsersync.io/).

## HTML templates

The `gulpfile.js` uses [Handlebars.js](http://handlebarsjs.com/) to build the HTML templates.

* https://www.npmjs.com/package/gulp-handlebars-master
    * Which depends on: https://www.npmjs.com/package/gulp-compile-handlebars

==NOTE:== Partials in directories nested under `src/templates/components/` will not show up when included in templates unless the `gulpfile.js` task `build-html-pages` is updated. Any new component directories should be added to the `options` var under `batch`.

Refer to partials and components in external files by their filename (without path):

```html
<p>Some partial / component to include:</p>
{{> component-filename-without-extension }}
```

Templates, partials, and components are stored in project as:

* `src/`
    * `templates/` -- holds all the HTML that generates the `dist/*.html`
        * `layouts/` -- master page template(s)
            - `component-only.html` -- this is what shows individual components
            - `project-index.html` -- only used by the landing page
            - `page.html` -- any multi-component and multi-partial pages
        * **`components/`** -- all the individual website components, for example the HTML code for a user avatar is in `components/details/avatar.html`
        * `partials/` -- repeating pieces for layouts like JS / CSS includes, footer, etc.
        * `pages/` -- full pages that have multiple components together

## Library dependencies

It's not required to use `npm` to pull in external CSS or javascript libraries. Once we have the UI/UX settled with this project, the asset 
compilation step will be moved to Laravel's webmix. 

When we need to include an external library, these are the general rules:

1. Place the SCSS version of CSS into `src/assets/styles/flashflex/` and `@import` it in the `_base.scss` file. Gulp compiles this to `site.css` which is included on all template pages.
2. Place javascript into `src/assets/scripts/` and simply link them in `/templates/layouts/*.html` with `<script type="text/javascript" src="/assets/scripts/*.js"></script>`.
3. Add the links to the external library to the list below (website and/or github)

### Current dependencies

* Masonry grid
    * https://github.com/desandro/masonry
    * Docs https://masonry.desandro.com/
    * Subdependency https://github.com/desandro/imagesloaded
* Fontawesome
    * For some icons
    * http://fontawesome.io/
* CSS Frameworks
    * Flexboxgrid-sass
        * A very basic flexbox grid system which we can extend as needed
        * http://hugeinc.github.io/flexboxgrid-sass/
        * https://github.com/hugeinc/flexboxgrid-sass
    * Spectre CSS framework
        * For some components like Avatar
        * Other components may be pulled in during development
        * https://picturepan2.github.io/spectre/
        * https://github.com/picturepan2/spectre
    * Bulma CSS framework
        * For some components like forms
        * Other components may be pulled in during development
        * http://bulma.io/
* Select2
    * Select form element replacement and tag editor
    * https://select2.org/
    * https://github.com/select2/select2
* Modals
    * http://jquerymodal.com/
    * https://github.com/kylefox/jquery-modal
* Things we need
    * Image cropping, maybe: https://github.com/fengyuanchen/cropper
    * Very simple text formatter for `textarea` form elements that we can limit to bold and italic

