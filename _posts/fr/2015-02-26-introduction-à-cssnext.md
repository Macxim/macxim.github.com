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

With **cssnext**, you can use the syntax of [CSS Module Level 4](http://www.xanthir.com/b4Ko0) such as _custom properties_ or _custom media queries_. **cssnext** will transform this new strange syntax into something that the browser can actually understand.

In short, it makes you **taste the future**.

I don't know about you but speaking as someone who loves to experiment with cutting-edge technologies, I think this is pretty cool!

You should take a look at the [feature list](https://github.com/cssnext/cssnext/blob/master/README.md#features).

### What about my current CSS preprocessor?

Forget about the dangers of mixins, @extend and infinite nesting; mostly caused by overzealous use and/or misuse of such tools, but still. You don't really need this.

You should give **cssnext** a shot and go back to Vanilla CSS. And with a nice and clean touch of BEM syntax, you will feel alive again.

## Examples

Let's take a look at the features that **cssnext** offers at the moment.

First of all, be sure to check the [playground on the official website](https://cssnext.github.io/cssnext-playground/).

### Automatic vendor prefixes

```css

.h1{
  transform: skewX(25deg);
  transition: transform 1s;
}
```

This will be transformed by **cssnext** via Autoprefixer in:

```css
.h1{
  -webkit-transform: skewX(25deg);
      -ms-transform: skewX(25deg);
          transform: skewX(25deg);
  -webkit-transition: -webkit-transform 1s;
          transition: transform 1s;
}
```
### Custom properties & var() limited to `:root`

Also known as the much awaited [CSS variables](http://www.w3.org/TR/css-variables/).

```css
:root {
  --primary-Color:                 #E86100;
  --secondary-Color:               #2c3e50;
  --r-Grid-baseFontSize:           1rem;
  --r-Grid-baseFontSizeFallback:   16px;
}
```
You can use them this way:

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

### Custom Media Queries

Simply-named and semantic aliases ([check the specs](http://dev.w3.org/csswg/mediaqueries/#custom-mq)).

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

### Custom selectors

Take a look at the [specs](http://dev.w3.org/csswg/css-extensions/#custom-selectors) first .
Let's say we want to apply some styles to all headings.

```css
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:--heading {
  margin-top: 0;
}
```
This will output the following:

```css
h1,
h2,
h3,
h4,
h5,
h6{ margin-top; 0; }
```
