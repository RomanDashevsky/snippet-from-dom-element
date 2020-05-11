# Snippet from dom element

## Description

This tool to get a snippet from the dom element. The snippet has original open-close HTML tag with attributes
and truncated inner text.

## Install 

```bash
npm install --save snippet-from-dom-element
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