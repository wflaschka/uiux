# Marketplace UI/UX Patterns

In this project we are building the HTML, Javascript, and CSS for marketplace web pages. This repository has workflow automation so we can build each *component* individually, and then combine those components into full prototype *pages*. 

These are prototypes of layout elements, widgets, and pages for a marketplace website with highly customized CSS styles. Using <em>Gulp.js</em> and <em>Handlebars.js</em>, static html pages are built with fake data records. When an element is changed (a header, or a like button), all the pages where that element is used also update. Some elements using javascript may be broken and in need of updates.

Invoke

```bash
gulp watch
```

For live-update browser

```bash 
./browsersync.sh
```


## Note

Right now JS ui/ux is broken. We're missing a `defer()` function that was simplifying loading sequences.