---
title: Introduction to cssnext
name: intro-cssnext
photoCreditName: Matt Clark
photoCreditUrl: https://www.flickr.com/photos/frinky/620935482
---

From [the official website](https://cssnext.github.io/):
> **cssnext** is a CSS transpiler that allows you to use tomorrow's CSS syntax today. It transforms CSS specs that are not yet implemented in popular browsers into more compatible CSS.

## What does it mean?

Since CSS3, you may have heard that CSS is divided into several independent documents called "modules". Those modules can have different stability and [statuses](http://www.w3.org/Style/CSS/current-work#legend). It can take quite some time for the browsers to implement those modules and even more for the W3C to give them the ultimate status of [Recommandation](http://www.w3.org/2005/10/Process-20051014/tr#RecsW3C).

With **cssnext**, you can use the syntax of [CSS Module Level 4](http://www.xanthir.com/b4Ko0) such as _custom properties_ or _custom media queries_. **cssnext** will transform this new strange syntax into something that the browser can actually understand.

In short, it makes you **taste the future**.

I don't know about you but speaking as someone who loves to experiment with cutting-edge technologies, I think this is pretty cool!

You should take a look at the [feature list](https://github.com/cssnext/cssnext/blob/master/README.md#features).

### What about my current CSS preprocessor?

Forget about the dangers of mixins, @extend and infinite nesting; mostly caused by overzealous use and/or misuse of such tools, but still.

Guess what, you don't really need this.

You should give **cssnext** a shot and go back to Vanilla CSS. And with a nice and clean touch of BEM syntax, you will feel alive again.

## Examples

Let's take a look at the features that **cssnext** offers at the moment.

First of all, be sure to check out the [playground on the official website](https://cssnext.github.io/cssnext-playground/).

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

### color()

A simple [color function](http://dev.w3.org/csswg/css-color/#modifying-colors) to apply _color adjusters_ (hue, lightness, tint, and so on) to a base color.

Examples:

```css
.class{
  background-color: color(#2B88E6);
  color: color(#2B88E6 red(+30) green(-50) blue(6%) alpha(.65));
  border-top-color: color(#2B88E6 saturation(-8%) whiteness(+50%));
  border-right-color: color(#2B88E6 lightness(5%) blackness(-25%));
  border-bottom-color: color(#2B88E6 tint(80%));
  border-left-color: color(#2B88E6 shade(75%));
}
```
The code above will be transformed into...

```css
.class{
  background-color: rgb(43, 136, 230);
  color: rgba(73, 86, 15, 0.65);
  border-top-color: rgb(181, 201, 222);
  border-right-color: rgb(3, 45, 87);
  border-bottom-color: rgb(213, 231, 250);
  border-left-color: rgb(11, 34, 58);
}
```

**cssnext** also offers the following color-related features.

#### hwb()

From the [specifications](http://dev.w3.org/csswg/css-color/#the-hwb-notation), HWB (Hue-Whiteness-Blackness) is similar to HSL but easier for humans to work with.

```css
.title{
  color: hwb(125, 32%, 47%);  /* output: rgb(33, 135, 42); */
}
```

Output:

```css
.title{
  color: rgb(33, 135, 42);
}
```

#### gray()

Grays are a [so cool](http://dev.w3.org/csswg/css-color/#grays) they have a function of their own.

```css
.section{
  background-color: gray(120, 50%);
  border-color: gray(17%, 25%);
}
```

This will output:

```css
.section{
  background-color: rgba(120, 120, 120, 0.5);
  border-color: rgba(43, 43, 43, 0.25);
}
```


#### #rrggbbaa

**cssnext** transforms the [hexadecimal notations](http://dev.w3.org/csswg/css-color/#hex-notation) #RRGGBBAA and #RGBA into rgba().

```css
body{
  color: #5c69;
  background-color: #C73D5C59;
}
```

Output

```css
body{
  color: rgba(85, 204, 102, 0.6);
  background-color: rgba(199, 61, 92, 0.34902);
}
```

#### rebeccapurple

Simply transforms `rebeccapurple` into `rgb(102, 51, 153)`.


------

### font-variant properties

### filter properties

### rem units

## Bonus features

### import
### Minification
