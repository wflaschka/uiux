# at-ui-ux2

ArtTap UI/UX patterns for Marketplace project.

* **Update:** `20170722 123106` This version of the AT-UI-UX repo (v2) uses [MaterializeCSS](http://materializecss.com/) instead of [Semantic UI](http://www.semantic-ui.com).
* ~~This version of the AT-UI-UX repo (v2) uses [Semantic UI](http://www.semantic-ui.com) instead of [Bulma](http://bulma.io) because it has a wider range of components and pre-built interactions. The overhead for Bulma (e.g. getting dropdown menus to work, borrowing from Spectre.css, etc.) started to outweigh the benefits of having the lean framework. Bulma version is moved to `src-bulma/` but the gulpfile doesn't look at it ATM (20170719 110322).~~

## Install

Install with git:

```sh
git clone https://github.com/wflaschka/at-ui-ux2.git at-ui-ux
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

***

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
