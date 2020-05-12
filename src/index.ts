const getOpenTag = (outerHtml: string): string => {
  const endIndex = outerHtml.indexOf('>');
  return outerHtml.slice(0, endIndex + 1);
}

const getAdjustedInnerContentLength = (innerHTML: string, innerContentLength: number): number => {
  if (innerHTML.length <= innerContentLength) {
    return innerContentLength;
  }

  return  innerHTML.indexOf(' ', innerContentLength);
}

const getInnerContent = (element: Element, tagName: string, innerContentLength: number): string => {
  if (tagName === 'html' || tagName === 'body') {
    return '...';
  }
  
  const innerHTML = element.innerHTML;
  const adjustedInnerContentLength = getAdjustedInnerContentLength(innerHTML, innerContentLength)
  const truncatedText = innerHTML.length <= adjustedInnerContentLength
    ? innerHTML
    : innerHTML.slice(0, adjustedInnerContentLength).trim() + '...';
  return truncatedText;
}

const  getSnippetFromDomElement = (element: Element, innerContentLength = 30): string => {
  if (!element.tagName || !element.outerHTML) {
    return '';
  }

  const outerHtml = element.outerHTML;
  const tagName = element.tagName.toLowerCase();

  if (!element.innerHTML) {
    return outerHtml;
  }

  const openTag = getOpenTag(outerHtml);
  const text = getInnerContent(element, tagName, innerContentLength);
  const closeTag = `</${tagName}>`;

  return openTag + text + closeTag;
};

export default getSnippetFromDomElement;