const TAB_INDENT_SIZE = 2;
const TAB_INDENT = Array(TAB_INDENT_SIZE).fill(" ").join("");
const LINE_BREAKER = "\n";

/**
 * Generate kebab case string.
 * @param { string } str String value which will be converted to kebab case.
 * @returns string
 */
const camelToKebabCase = (str) =>
  str.replace(/([a-z]+)([A-Z]+)/g, "$1-$2").toLowerCase();

/**
 * Generate a string of style css for a html tag from object.
 * @param { object } style Object which represents styling css of a HTML tag.
 * @returns string
 */
const generateStringForStyle = (style) => {
  return Object.keys(style)
    .map((key) => `${camelToKebabCase(key)}: ${style[key]};`)
    .join(" ")
    .slice(0, -1); // is for remove the last semicolon which is unnecessary
};

/**
 * Generate HTML content from JSON data
 *   JSON data should looks like the below syntax.
 *
 *      {
 *        tag: 'div',
 *        text: 'Hello, friends',
 *        style: {
 *          backgroundColor: 'yellow',
 *          fontSize: '14px'
 *        },
 *        id: 'first-div',
 *        children: [
 *          ...
 *        ],
 *        ...[other attributes]
 *      }
 *
 *
 * @param { JSON } json JSON data to be converted into HTML
 * @returns HTML string
 */
const json2html = (json) => {
  const generator = (element, indent = "") => {
    const { tag, style, text, children, ...rest } = element;
    let html = `${indent}<${tag}`;

    if (style) {
      html += ` style="${generateStringForStyle(style)}"`;
    }

    if (Object.keys(rest).length > 0) {
      for (const attribute in rest) {
        html += ` ${attribute}="${rest[attribute]}"`;
      }
    }

    if (!text && !children) {
      html += ` />${LINE_BREAKER}`;
      return html;
    }

    html += `>${LINE_BREAKER}`;

    if (text) {
      html += `${indent}${TAB_INDENT}${text}${LINE_BREAKER}`;
    }

    if (children) {
      children.forEach((child) => {
        html += generator(child, indent + TAB_INDENT);
      });
    }

    html += `${indent}</${tag}>${LINE_BREAKER}`;

    return html;
  };

  return generator(json).slice(0, -1); // slice(0, -1) is for remove the last LINE_BREAKER which is unnecessary.
};

export default json2html;
