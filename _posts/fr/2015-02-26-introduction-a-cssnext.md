---
title: Introduction à cssnext
name: intro-cssnext
photoCreditName: Matt Clark
photoCreditUrl: https://www.flickr.com/photos/frinky/620935482
---

D'après le [site officiel](https://cssnext.github.io/):
> **cssnext** est un transpiler CSS qui vous permet d'utiliser dès aujourd'hui la syntaxe CSS de demain. Il transforme les spécifications CSS qui ne sont pas encore mises en œuvre sur les navigateurs les plus populaires en CSS compatible.

## Ça veut dire quoi exactement ?

Depuis CSS3, vous avez savez sans doute que CSS est divisé en plusieurs documents indépendants appelés "modules". Ces modules peuvent avoir différents niveaux de stabilité et différents [statuts](http://www.w3.org/Style/CSS/current-work#legend)*[en]*. La mise en œuvre de ces modules par les navigateurs peut prendre un certain temps et encore plus pour que le W3C les approuve comme [Recommandation](http://www.w3.org/2005/10/Process-20051014/tr#RecsW3C)*[en]*.

Avec **cssnext**, vous pouvez utiliser la syntaxe des [CSS Module Level 4](http://www.xanthir.com/b4Ko0) tels que les _propriétés personnalisées (custom properties)_ ou les _media queries personnalisées_. **cssnext** va transformer cette nouvelle et étrange syntaxe en quelque chose que le navigateur peut comprendre.

En clair, il vous donne un **avant-goût du futur**.

Je ne sais pas vous mais étant quelqu'un qui aime expérimenter avec les dernières technologies de pointe, je trouve ça pluôt cool !

Je vous conseille de jeter un oeil à la [liste des fonctionnalités](https://github.com/cssnext/cssnext/blob/master/README.md#features)*[en]*.

### Quid de mon préprocesseur actuel ?

Oubliez les dangers des mixins, @extend et autres nesting infinis ; certes causés par une (sur-|mauvaise) utilisation de ces outils mais quand même.

Devinez quoi, vous n'en avez pas vraiment besoin.

Essayez **cssnext** et retournez à ce bon vieux Vanilla CSS. Et avec un zeste de méthodologie BEM, vous vous sentirez revivre.

## Exemples

Voyons voir quelles sont les fonctionnalités offertes par **cssnext** pour le moment.

Avant toute chose, vous devriez aller faire un tour sur le [playground du site officiel](https://cssnext.github.io/cssnext-playground/).

### Préfixes propriétaires automatiques

```css

.h1 {
  transform: skewX(25deg);
  transition: transform 1s;
}
```

Cela va être transformé par **cssnext** via Autoprefixer en :

```css
.h1 {
  -webkit-transform: skewX(25deg);
      -ms-transform: skewX(25deg);
          transform: skewX(25deg);
  -webkit-transition: -webkit-transform 1s;
          transition: transform 1s;
}
```
### Propriétés personnalisées et var() limité à `:root`

Aussi connues sous le nom des très attendues [variables CSS](http://www.w3.org/TR/css-variables/)*[en]*.

```css
:root {
  --primary-Color:                 #E86100;
  --secondary-Color:               #2c3e50;
  --r-Grid-baseFontSize:           1rem;
  --r-Grid-baseFontSizeFallback:   16px;
}
```
À utiliser de cette façon :

```css
.h1 {
  color: var(--primary-Color);
}
.h1:hover {
  color: var(--secondary-Color);
}
body {
  font-size: var(--r-Grid-baseFontSize, var(--r-Grid-baseFontSizeFallback));
}
```

### Media Queries personnalisées

Pour créer des alias sémantiques, clairs et simples ([lisez la doc'](http://dev.w3.org/csswg/mediaqueries/#custom-mq))*[en]*).

```css
@custom-media --viewport-medium (width <= 40rem);
@custom-media --viewport-large (max-width: 50em);
```

Usage:

```css
@media (--viewport-medium) {
  body { font-size: calc(var(--fontSize) * 1.2); }
}
@media (--viewport-large) {
  body { font-size: calc(var(--fontSize) * 1.4); }
}
```

### Sélecteurs personnalisés

Encore une fois, un petit tour sur les [specs](http://dev.w3.org/csswg/css-extensions/#custom-selectors)*[en]* pour commencer. Disons qu'on veuille appliquer des styles à toutes les balises de titre.

```css
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:--heading {
  margin-top: 0;
}
```
Ce qui va générer le code suivant :

```css
h1,
h2,
h3,
h4,
h5,
h6{ margin-top; 0; }
```

### `color()`

Une simple [fonction color](http://dev.w3.org/csswg/css-color/#modifying-colors) qui sert à appliquer des _réglages couleur_ (teinte, luminosité, entre autres) à une couleur de base.

Exemples :

```css
.class {
  background-color: color(#2B88E6);
  color: color(#2B88E6 red(+30) green(-50) blue(6%) alpha(.65));
  border-top-color: color(#2B88E6 saturation(-8%) whiteness(+50%));
  border-right-color: color(#2B88E6 lightness(5%) blackness(-25%));
  border-bottom-color: color(#2B88E6 tint(80%));
  border-left-color: color(#2B88E6 shade(75%));
}
```
Le code ci-dessus sera transformé en...

```css
.class {
  background-color: rgb(43, 136, 230);
  color: rgba(73, 86, 15, 0.65);
  border-top-color: rgb(181, 201, 222);
  border-right-color: rgb(3, 45, 87);
  border-bottom-color: rgb(213, 231, 250);
  border-left-color: rgb(11, 34, 58);
}
```

**cssnext** propose aussi les fonctionalités suivantes liées à la couleur.

#### hwb()

D'après les [spécifications](http://dev.w3.org/csswg/css-color/#the-hwb-notation), HWB (Hue-Whiteness-Blackness) est similaire à la notation HSL mais plus facile à utiliser pour les humains.

```css
.title {
  color: hwb(125, 32%, 47%);
}
```

Rendu :

```css
.title {
  color: rgb(33, 135, 42);
}
```

#### gray()

Les gris sont [tellement cool](http://dev.w3.org/csswg/css-color/#grays) qu'ils ont une fonction rien que pour eux.

```css
.section {
  background-color: gray(120, 50%);
  border-color: gray(17%, 25%);
}
```

Ce qui donnera :

```css
.section {
  background-color: rgba(120, 120, 120, 0.5);
  border-color: rgba(43, 43, 43, 0.25);
}
```

#### #rrggbbaa

**cssnext** transforme les [notations hexadécimales](http://dev.w3.org/csswg/css-color/#hex-notation) #RRGGBBAA et #RGBA en rgba().

```css
body {
  color: #5c69;
  background-color: #C73D5C59;
}
```

Résultat :

```css
body {
  color: rgba(85, 204, 102, 0.6);
  background-color: rgba(199, 61, 92, 0.34902);
}
```

#### rebeccapurple

Transforme simplement la couleur `rebeccapurple` en `rgb(102, 51, 153)`.


### Propriétés de variation de police (_font-variant_)

Pour ceux qui comme moi ne savaient même pas ce que c'était, voici le [lien](http://dev.w3.org/csswg/css-fonts/#propdef-font-variant) vers la définition accompagné d'autres explications plus détaillées.

```css
h2 {
  font-variant-caps: small-caps;
}

.fractional-Numbers {
  font-variant-numeric: diagonal-fractions;
}
```

Résultat :

```css
h2 {
  -webkit-font-feature-settings: "c2sc";
     -moz-font-feature-settings: "c2sc";
          font-feature-settings: "c2sc";
  font-variant-caps: small-caps;
}

.fractional-Numbers {
  -webkit-font-feature-settings: "frac";
     -moz-font-feature-settings: "frac";
          font-feature-settings: "frac";
  font-variant-numeric: diagonal-fractions;
}
```

### Propriétés de filtres

Un tout _nouveau_ monde de [modifications d'images](http://www.w3.org/TR/filter-effects/) s'offre à vous !

```css
.awesome-Image {
  filter: sepia(.7) hue-rotate(23deg);
}

.awesome-Picture {
  filter: blur(8px);
}
```

Ceci sera transformé en :

```css
.awesome-Image {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.5751000000000001 0.5383 0.1323 0 0 0.24429999999999996 0.7802000000000001 0.11760000000000001 0 0 0.1904 0.3738 0.39170000000000005 0 0 0 0 0 1 0" /><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="23" /></filter></svg>#filter');
  -webkit-filter: sepia(.7) hue-rotate(23deg);
          filter: sepia(.7) hue-rotate(23deg);
}

.awesome-Picture {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="8" /></filter></svg>#filter');
  -webkit-filter: blur(8px);
          filter: blur(8px);
}
```

### rem units

Rien de bien extraordinaire ici, on génère un **_fallback_ en pixels pour les unités en rem**.
Non mais vous n'avez quand même pas besoin d'un exemple pour ça ? Si ? Bon... d'accord. Allons-y !

```css
.section-Highlight {
  font-size: 2.5rem;
}
```
Résultat :

```css
.section-Highlight {
  font-size: 40px;
  font-size: 2.5rem;
}
```

## Fonctionnalités bonus

Les deux fonctionnalités qui vont suivre ne sont pas vraiment en rapport avec les spécifications CSS. Cependant, elles méritent leur place dans cette brève présentation de l'outil.

### `import`

What if you could import inline local files and modules (node_modules or web_modules) to output a bundled CSS file? Yes, [I'm looking at you Sass users](https://github.com/sass/sass/issues/193), ahem. Well, with **cssnext**, you can.

### `compress`

As you may have guessed, this is just an option to compress _or not_ your output file.

### Usage

Below is a basic example of these two features. I used [gulp-cssnext](https://github.com/cssnext/gulp-cssnext), one of the [many plugins](https://github.com/cssnext/cssnext#usage-with-other-tools) to help you start with **cssnext**.

```js
var gulp = require('gulp'),
    cssnext = require("gulp-cssnext");

gulp.task('styles', function() {
  gulp.src("css/index.css")
  .pipe(cssnext({
    compress: true,  // default is false
  }))
  .pipe(gulp.dest("./dist/"))
});

```

Then, in my `index.css` file, I will have:

```css

@import "normalize.css"; /* == @import "./node_modules/normalize.css/index.css"; */
@import "cssrecipes-defaults"; /* == @import "./node_modules/cssrecipes-defaults/index.css"; */
@import "project-modules/partner"; /* relative to css/ */
@import "typo"; /* same level as my main index.css located in css/ */
@import "highlight" (min-width: 25em);

```
_**Note**: CSS files located in `node_modules` are automatically found and imported. Also, you may have noticed that you can omit the .css extension._

Et le rendu final sera :

```css

/* contenu de ./node_modules/normalize.css/index.css */
/* contenu de ./node_modules/cssrecipes-defaults/index.css */
/* contenu de project-modules/partner.css */
/* contenu de typo.css */
@media (min-width: 25em) {
  /* contenu de highlight.css */
}
```

I know the feeling. Now you're in love too. :)

Well, just to wrap it up here, let's say that the main purpose of **cssnext** is to build things according to the W3C specifications keeping in mind that, theoretically, it can be removed later on (when not needed anymore).

Meanwhile, there is still work to do: here you can find a [list of features that are waiting to be implemented](https://github.com/cssnext/cssnext/issues?q=is%3Aopen+is%3Aissue+label%3Afeature+label%3Aready).

Now it's your time to play. Be sure to check the [GitHub repository](https://github.com/cssnext/cssnext), follow [@cssnext](https://twitter.com/cssnext) on Twitter to get the latest news and join [#cssnext on irc.freenode.net](http://webchat.freenode.net/?channels=cssnext) if you have any questions.
