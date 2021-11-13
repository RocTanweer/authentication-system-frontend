/**
 * Converts px to rem
 * @param {number} inPx - measurement in px
 *  @return {string} - in rems
 */
export const rem = (inPx) => {
  return `${inPx / 16}rem`;
};
