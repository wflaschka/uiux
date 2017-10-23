Be sure to put new groups of styles into their own files, because this will make the framework easier to maintain in the future. Filenames like "custom-classes.scss" and "custom-pages.scss" will not be useful for the next people who might work on the framework. See my flashflex/page-checkout.scss which puts the styles for that page into an easy-to-find file. 

For special styles, try to them into the appropriate files. 

For example '.col-flex' which is in 'custom-classes.scss' seems to be about columns. It should go into 'columns.scss' which is the first place people will look for column definitions.

One more example: '.link-primary' could go into 'typography.scss' or maybe a new file that you name 'link.scss'.

In 'custom-pages.scss' there is `.product-detail { font-size: 0.9375rem; ... }`. Font sizes should only be defined once for the whole site, rather than different for each page. _Sometimes_ the prototype will have slightly different sizes for items like basic text on different screens -- it's up to us to make everything as sensible and regular as possible. Get the CSS as close as possible to the prototype, but it is more important that we have the same sizes and proportions from page to page.




