# ArtTap UI/UX Patterns

*Point of contact:* Walter Flaschka wflaschka@gmail.com. Best methods for contact are the `#arttap` [Slack](https://slack.com/), [email](wflaschka@gmail.com), or texting the Google+ account for wflaschka@gmail.com.

## Overview

In this project we are building the HTML, Javascript, and CSS for the ArtTap web pages. This repository has workflow automation so we can build each *component* individually, and then combine those components into full *pages*. 

*We are using the prototypes available at [this InVisionApp project](https://projects.invisionapp.com/d/main#/projects) to design the UI/UX.* If you do not have access to the InVisionApp project it may need to be shared with you. Contact wflaschka@gmail.com for assistance.

This project uses npm, [Gulp.js](https://gulpjs.com/), and [Browsersync](https://www.browsersync.io/) to automate the development workflow. The idea of the workflow: 

> We edit a piece of HTML or tweak a line of SCSS, hit *save*, and the browser window refreshes itself to show the changes.

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

***

#  <span style="color: green;">Everything after this is 95% deprecated</span>


## CSS Framework Adjustments

### Images

Have special extra classes with `.sized.image`.

    <img class="sized image tightly fitted" src="logo.svg">
    <img class="middle aligned fitted sized image" src="logo.svg">

*All Semantic-UI classes are available!*

Also available is a new `fitted` class:

* `fitted` = image sized to 90% of container
* `tightly fitted` = image sized to 100% of container
* TODO: Does this *really* work??

Test:

```html
<ul>
    <li>sized image rounded small: <img class="sized image rounded small" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image circular small: <img class="sized image circular small" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image rounded large: <img class="sized image rounded large" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image circular large: <img class="sized image circular large" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image mini: <img class="sized image mini" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image small: <img class="sized image small" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image medium: <img class="sized image medium" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image large: <img class="sized image large" src="assets/images/artwork/art-1.jpg"></li>
    <li>sized image bordered large: <img class="sized image bordered large" src="assets/images/bulma-logo.png"></li>
    <li>sized image huge: <img class="sized image huge" src="assets/images/artwork/art-1.jpg"></li>
</ul>
```



## Target UI/UX patterns

Built off 20170718 snapshot of invision project, exported file `arttapx-invision-10278582.pdf`. The `md` file was named `__Design-elements-20170718--at-ui-ux.md` if you need to find it later.

### Elements

* Icon check with green text under

### Typography

1. Headers
    * Primary header h1..hn (has that special font)
    * Secondary header h1..hn (san serif)
    * Header setting
        * Subheader spacing (less space below big header)
        * Top-subheader spacing (less space atop big header)
    * Header *segment* -- all over the place
        * Header on left side
        * Button / link on right side
        * Optional line along bottom
3. Badge
4. Inches and fractions of inch

### Cards

1. Artwork card: Flexible-width card, row, uniform height
2. Artist card: static width and height
3. Artwork card no text
4. Dashboard card (see artist profile dashboard page)
5. Variations
    * "Not visible" on card
    * Circle on card
    * "See stats" on card


### Items / boxes

* Social feed item
* Order item item
* Styles for boxes
    * Inverted red (see canceled order)
    * `thick orange top border` etc. (Order of arguments.)

### Interactions 

* Pop-up modals
* Right push-in cart

### Menus

* Public header menu
* Profile
    * Header
    * Vertical menu / slide-out


### Forms

* Labels that shrink and move
* Rich text input
    * minimal formatting
    * maximal formatting
    * Maximize box
* Dropdown with progressive update
* Date dropdown pattern
* Square checkboxes
* Round radios
* Tag input box
* Larger search input box (Help section), right-aligned magnifying glass icon

#### Tiny blocks

* Artist chip
    * Small avatar
    * Name
    * Followers
* Number of hearts in collection: "60 H in Collection"
* Statistics (dashboard, user profile page)
* Avatars
    * Styles: round, bordered
    * Superimposed badges 
        * With icons: check, plus, empty (see followers list page)
        * Aligned bottom right
        * Aligned top right
        * Sizes
    * Sizes
* Small circles (followers list page) 
* Pop-overs
    * Help icon = pop-over (see page 89 of 114)
* Segment with orange header (see dashboard page)

### Matching quiz

* Progress bar for wizard completion

### Larger pieces

1. Masonry grid, artwork cards, fixed width and dynamic height
1. Bulma's "Level" into Semantic-UI
1. Left push-in hamburger menu
1. Progressive search dropdown in header menu
1. Upload image drag-and-drop


### Single pieces

* Search bar UI
* Google map for checkout page

### Sliders

1. Collection slider: left-static box, right-scroll box artist cards
2. Newest slider: like collection slider but no left box
3. Artist slider: like above but with artist cards
4. Product page (popup) slider
5. Artwork slider: no meta data or text, just image, fixed height (Artist profile page)
6. Testimonial slider


## Leftover notes 

* Compass CSS3: http://compass-style.org/reference/compass/css3/
    * Includes <a href="http://compass-style.org/reference/compass/css3/flexbox/">flexbox directives</a>
* https://picturepan2.github.io/spectre/utilities.html#divider
* Cool [SASS/SCSS functions](http://sass-lang.com/documentation/Sass/Script/Functions.html), e.g.:

```sh
sass-convert --from sass --to scss temp.sass temp.scss
```


---

## <span style="color: green;">Gulp Build</span> Updates DEPRECATED 20170722

**20170719 103839**: Updated `./gulpfile.js` and get clean build for Semantic UI with: 

```sh
# Only build semantic ui:
gulp "build ui"

# Standard simple gulp (builds and then watches). Generalized build works fine:
gulp build

## Gulp watch works too! It's just slow because of the Semantic-UI components:
gulp

## or:
gulp watch
```



***

## Semantic-UI Information DEPRECATED 20170722

* [Semantic UI website](http://www.semantic-ui.com)
* [Semantic-UI Github](https://github.com/Semantic-Org/Semantic-UI)
* Googlesearch on `semantic ui`, `semantic-ui`, `semanticui`, `sui`
* Import gulp tasks -- [howto documentation](https://semantic-ui.com/introduction/advanced-usage.html), and an [example project](https://github.com/Semantic-Org/Example-External-Gulpfile)
* Gulp build/watch instructions [are on this page](https://semantic-ui.com/introduction/build-tools.html): 
* Auto-install and continuous integration are at the [bottom of the page here](https://semantic-ui.com/introduction/build-tools.html)

### Information for this project

Your site's theme:

```
./semantic/src/site
```

Update semantic-ui to latest via `npm` to get framework changes: 

```shell
npm update
```

**Configuration files.** Build tool settings are stored in a special file called `semantic.json`. Make changes here to change paths (e.g. to `dist/` etc.).

We skip using Semantic-UI's gulpfile because we want to integrate with our own gulp pipeline. Using [instructions here](https://semantic-ui.com/introduction/advanced-usage.html). See first section of this document.
