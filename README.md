# Snippet from dom element

[![GitHub license](https://img.shields.io/github/license/RomanDashevsky/snippet-from-dom-element.svg)](https://github.com/RomanDashevsky/snippet-from-dom-element/)
[![GitHub release](https://img.shields.io/github/release/RomanDashevsky/snippet-from-dom-element.svg)](https://github.com/RomanDashevsky/snippet-from-dom-element/releases/)
[![GitHub contributors](https://img.shields.io/github/contributors/RomanDashevsky/snippet-from-dom-element.svg)](https://github.com/RomanDashevsky/snippet-from-dom-element/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/RomanDashevsky/snippet-from-dom-element.svg)](https://github.com/RomanDashevsky/snippet-from-dom-element/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/RomanDashevsky/snippet-from-dom-element.svg)](https://github.com/RomanDashevsky/snippet-from-dom-element/pull/)
[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/dashevsky.roman%40gmail.com)

## Description

This tool to get a snippet from the dom element. The snippet has original open-close HTML tag with attributes
and truncated inner text.

## Install 

For npm:
```bash
npm install --save snippet-from-dom-element
```

For yarn:
```bash
yarn add snippet-from-dom-element
```

## Example

```js
import getSnippetFromDomElement from 'snippet-from-dom-element'

const element = document.querySelector('#main-news-title');
const innerContentLength = 10;
const snippet = getSnippetFromDomElement(element, innerContentLength);
console.log(snippet);
// <h2 id="main-news-title">Breaking n...</h2>
```

## License

[MIT licensed](LICENSE).