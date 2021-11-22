/**
 * Converts px to rem
 * @param {number} inPx - measurement in px
 *  @return {string} - in rems
 */
export const rem = (inPx) => {
  return `${inPx / 16}rem`;
};

/**
 *
 * @param {String} name - key
 * @param {*} initialValue - value
 */
export const saveToLS = (name, initialValue) => {
  localStorage.setItem(name, JSON.stringify(initialValue));
};

/**
 *
 * @param {String} name - key
 * @returns {Object} - value for that key
 */
export const fetchFromLS = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

/**
 *
 * @param {String} name - key
 * @returns {Boolean} - whether exist
 */
export const existInLS = (name) => {
  return JSON.parse(localStorage.getItem(name)) !== null;
};
