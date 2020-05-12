const getOpenTag = (outerHtml: string): string => {
  const endIndex = outerHtml.indexOf('>');
  return outerHtml.slice(0, endIndex + 1);
}

const getInnerText = (element: Element, tagName: string, innerContentLength: number): string => {
  const textContent = element.textContent;

  if (tagName === 'html' || tagName === 'body' || !textContent.length) {
    return '...'
  }

  const innerHTML = element.innerHTML;
  const textPrefix = innerHTML[0] === '<' ? '... ' : '';
  const truncatedText = textContent.length <= innerContentLength
    ? textContent
    : textContent.slice(0, innerContentLength) + '...';
  return textPrefix + truncatedText;
}

const  getSnippetFromDomElement = (element: Element, innerContentLength = 10): string => {
  if (!element.tagName || !element.outerHTML) {
    return '';
  }

  const outerHtml = element.outerHTML;
  const tagName = element.tagName.toLowerCase();

  if (!element.innerHTML) {
    return outerHtml;
  }

  const openTag = getOpenTag(outerHtml);
  const text = getInnerText(element, tagName, innerContentLength);
  const closeTag = `</${tagName}>`;

  return openTag + text + closeTag;
};

export default getSnippetFromDomElement;