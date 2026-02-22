/**
 * Prepares article content for display by converting newlines to <br>.
 * HTML collapses newlines by default, so this preserves line breaks when
 * users type plain text with Enter.
 */
export function formatArticleContent(html: string): string {
  return html
    .trim()
    .split("\n")
    .join("<br>\n");
}
