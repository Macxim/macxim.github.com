---
title: Two years in review
type: posts
name: two-years
lang: en
layout: default
photoCreditName: bahamamelly
photoCreditUrl: https://www.flickr.com/photos/bahahamelly/14900306241
---

It has been more than two years actually since I've started working at [Spade](http://spade.be) as a Front-End Developer. To be precise, two years and seven months. Time really does flies by.

Over this period of time, I've had the opportunity to work on a variety of websites. This has allowed me to learn **a lot** of things. I thought it would be interesting to do a small professional assessment and review the progress achieved on several levels. Actually, I wanted to do this last year but I ~~was too busy~~ never took the time to do it.

_The following will be a list in chronological order, not necessarily well structured but it's still better than nothing at all._

## First steps

One of the first thing that I learned was how to properly use the [@font-face declaration](https://gist.github.com/Macxim/368fc725cf3d911d7f1e). Then, for my first real project, I dove directly into [Bootstrap](http://getboostrap.com) and [LESS](http://lesscss.org/#getting-started) files, all this being added to a customised WordPress like I had never built before. I had to adapt very quickly and read a lot of documentation. I believe this is one of the most important things I have learned the first weeks: if someone took the time to write some sort of documentation, you _have to_ read it. It may be painful or boring depending on the length or how efficiently things are explained in it but it will definitely be rewarding if you are stuck with something at some point. Anyway, I was able to play with HTML5 and CSS3 and put my knowledge into _real_ practice.

### Frameworks

Thanks to my first experimentations with Bootstrap customisation (v2.0.3), I enhanced my skills about grid systems, fluid layouts, responsive webdesign and reusable components.
At the time we were concerned with Internet Explorer 8 support. I found out about tools such as [Modernizr](http://modernizr.com/) and [Selectivizr](http://selectivizr.com/). That is also when I started to implement [SVG fallbacks](http://css-tricks.com/svg-fallbacks/) in my workflow.

This led me to [HTML5 Boilerplate](http://html5boilerplate.com/) and then [Initializr](http://www.initializr.com/), two web services that help kick-start a project in a very fast and efficient way. I quickly became interested in CSS frameworks and worked with [Foundation](http://foundation.zurb.com/) (v3,v4, v5) and [Inuit.css](http://inuitcss.com/). This motivated me to learn about [SMACSS](http://smacss.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [BEM](http://bem.info/) and [Atomic Design](http://bradfrostweb.com/blog/post/atomic-web-design/). But [what is a CSS framework anyway ?](https://speakerdeck.com/csswizardry/what-is-a-css-framework-anyway) These set of pre-defined CSS, JS files and HTML elements are meant to simplify building websites, saving us a lot of time in the process.

With these frameworks, I entered the world of preprocessors like LESS and [Sass](http://sass-lang.com/) (with [Compass](http://compass-style.org/)). Those are wonderful tools if they are used wisely but can be dangerous in the hands of a novice (code duplication, multiplication of selectors, extreme specificity due to deep nesting). Most of the time, the tools aren't [the ones to be blamed](http://thesassway.com/editorial/sass-doesnt-create-bad-code-bad-coders-do).

## CLI

At first I compiled my .less/.scss files with [Codekit](https://incident57.com/codekit/), but then I started to tinker with the CLI — *command-line interface*. That is when I discovered **[npm](http://www.npmjs.com/)**, the package manager for [Node.js](http://nodejs.org/) and [Bower](http://bower.io/). I also learn about *a lot* of tools like [Homebrew](http://brew.sh/), [MacPorts](http://www.macports.org/), [Yeoman](http://yeoman.io/), [Bundler](http://bundler.io/), [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/). Frankly speaking, even though I'm still a novice I have fun working with the CLI because I find it really powerful.

By acquiring some basic knowledge of CLI, I was able to perform useful tasks such as: connect to a server via SSH, restart Apache or MySQL, create a dump of a database, change the access permissions of files or folders, browse the server, edit files via `vi`, copy them, move them, transfer them from my local machine a distant server via `scp`, generate private keys, create aliases, etc.

## Version control

It seems obvious that I could not forget to speak about the version control system [Git](http://git-scm.com/). I first started to use it via [Tower](http://www.git-tower.com/) but didn't understand much the whole thing. So, once again, I started to read some documentation, follow tutorials, and then I switched to a simpler app [GitHub for Mac](https://mac.github.com/). After some time, I found it quite buggy and abandoned it for the CLI (although the last couple of updates seem to have improved it, so it may be worth checking it again). Now I just alternate between Tower, [SourceTree](http://www.sourcetreeapp.com/) and the CLI. I also have to mention [GitHub](https://github.com/), a fantastic place to share code and build things.

## Web performance optimisation

I have expressed some interest about performance and optimisation as well. This led me to play with .htaccess tweaking, gzipping and minifying files, reducing HTTP requests, image optimisation. These sites can come in handy: [GTmetrix](http://gtmetrix.com/), [PingDom](http://tools.pingdom.com/fpt/), [WebPageTest](http://www.webpagetest.org/), [Google PageSpeed Insights](http://developers.google.com/speed/pagespeed/insights/) and [YSlow](http://yslow.org/).

## CMS

As I mentioned earlier, I have had the opportunity to work with [WordPress](http://wordpress.org/). I also worked with other CMS such as [SPIP](http://www.spip.net/en_rubrique25.html), [ExpressionEngine](http://ellislab.com/expressionengine), and more recently on [Craft](http://buildwithcraft.com/) and an ounce of [Prestashop](http://www.prestashop.com/). Each one has its own specificities and you have to find the one that is the best suited for your website, depending on the needs and resources of the client.

### Multilingualism

As I always have been interested in foreign languages, and due to the fact that I'm currently living in the "*[capital of Europe](http://en.wikipedia.org/wiki/Brussels)*", I have taken part in several multilingual web projects. What I learned is that the translation management is a complicated business, among all kinds of CMS. Multilingual websites are complicated. This component of a project is not to be underestimated and need to be thought up front, very wisely. Clients have the responsibility to evaluate if they have the means to maintain a multilingual website, and not only financially speaking.

Last year I decided to redesign my personal website. To do this I wanted to try my luck with the popular static website generator [Jekyll](http://jekyllrb.com/). Thanks to this, I learned about [Markdown](http://daringfireball.net/projects/markdown/), [Textile](http://txstyle.org/), [Ruby](https://www.ruby-lang.org/en/), [RubyGems](http://rubygems.org/pages/download), Git, and more CLI awesomeness.

## Design tools

I have worked with several designers who use multiple design tools such as Photoshop, Illustrator, Fireworks and Sketch. Even if I am not a designer, I know my way around these tools and I have a pretty good understanding of what I am supposed to do with them.
Regarding information architecture, I have learned that organising and structuring information means dealing with mockups, wireframes, sitemaps and mind maps. That is another thing that was new to me.

## Keepin' it up

In order to keep myself in the loop of front-end latest best practices, I try to learn as much as possible from the people I follow on Twitter. I believe it is also good to attend conferences and participate to workshops. About that, I had the opportunity to go to [Paris Web](http://www.paris-web.fr/), the [KIKK festival](http://www.kikk.be/2013/) and take part to workshops related to [Backbone.js](http://backbonejs.org/) and Web Accessibility by [AnySurfer](http://www.anysurfer.be/en). Oh and I have also enjoyed playing with [Handlebars.js](http://handlebarsjs.com/), which is another popular JavaScript templating library. To say the truth, it was more than just playing, it was a challenging experience of which I am quite proud since we also used my work in production.

I have learned to work with multiple project management tools, I do my best to organise my workflow better and improve tasks prioritisation.

## Final thoughts

In a more general way, what I also noted is that most of the time, what makes a project interesting is not so much about the challenges we will have to overcome to complete it but rather about the people who drive it and the energy, the motivation and passion they communicate to make it happen.

### Now what?

Well, these last two years and more than a half have been a lot of fun and I am definitely looking forward to more.

As of now, I'm still learning and don't plan to stop. Here is a **random** and **non exhaustive** list of the stuff I want to dig into: [Haml](http://haml.info/), [Ruby](https://www.ruby-lang.org/), [MVC](http://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488), [Node.js](http://nodejs.org/), [Underscore](http://underscorejs.org/)/[Lo-Dash](http://lodash.com/), [Angular](https://angularjs.org/), [Ember](http://emberjs.com/), [React](http://facebook.github.io/react/), [Swift](https://developer.apple.com/swift/),
[more](http://straightupcraft.com/) [Craft](http://buildwithcraft.com/) [stuff](http://craftcookbook.net/), [Statamic](http://www.statamic.com/), [Gulp](http://gulpjs.com/) and something tells me the list will keep growing day after day.


This basically sums what I plan to do and keep doing:

> Explore, experiment, fail/succeed, learn. Over and over.


## Friendly reminder

No matter how much you love your work, it can be overwhelming sometimes. It is important to log off completely, to be able to know when it is too much. It is important to take a step back and call it a day. It is crucial to have some other activities not involving a computer screen or any other screen for that matter. It is essential to rest and to get enough sleep.

Of course, as always, it is easier said than done but I try to do my best. And so should we all.