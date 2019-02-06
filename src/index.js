export function getTopScrolledElement() { // eslint-disable-line import/prefer-default-export
  const { documentElement: html, body } = document;

  return html.scrollTop ? html : body;
}
