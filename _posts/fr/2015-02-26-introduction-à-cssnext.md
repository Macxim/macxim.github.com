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

.h1{
  transform: skewX(25deg);
  transition: transform 1s;
}
```

Cela va être transformé par **cssnext** via Autoprefixer en :

```css
.h1{
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
.h1:hover{
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

Encore une fois, un petit tour sur les [specs](http://dev.w3.org/csswg/css-extensions/#custom-selectors))*[en]* pour commencer.
Let's say we want to apply some styles to all headings.

```css
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:--heading {
  margin-top: 0;
}
```
Ce qui va générer la chose suivante :

```css
h1,
h2,
h3,
h4,
h5,
h6{ margin-top; 0; }
```
