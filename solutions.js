/**
 * This file uses ES6 Module export syntax
 * Please note, to use it with nodejs you need to transpile it to commonjs using babel
 */

// const sleep = require("sleep");

/**
 * Test 1
 */
export const f1 = (a, b) => {
  // count occurrences in string a
  const charsA = a
    .split("")
    .reduce((chars, char) => (chars[char] = ++chars[char] || 1) && chars, {});

  // count occurrences in string b
  const charsB = b
    .split("")
    .reduce((chars, char) => (chars[char] = ++chars[char] || 1) && chars, {});

  // concat list of chars from string "a" and string "b"
  // and make the list distinct
  const distinctList = Object.keys(charsA)
    .concat(Object.keys(charsB))
    .reduce((distinct, elm, index, source) => {
      if (distinct.indexOf(elm) === -1) {
        distinct.push(elm);
      }
      return distinct;
    }, []);

  // figure out how many chars needs to be deleted
  const numCharsToDelete = distinctList.reduce((result, elm) => {
    if (elm in charsA && elm in charsB) {
      result = result + Math.abs(charsA[elm] - charsB[elm]);
      return result;
    }
    if (!(elm in charsA)) {
      result = result + charsB[elm];
      return result;
    }
    if (!(elm in charsB)) {
      result = result + charsA[elm];
      return result;
    }
  }, 0);

  return numCharsToDelete;
};

/**
 *
 * Test 2
 */
export const f2 = (a, b) => {
  return b.map(item => {
    const testCount = (total, currentValue) => {
      return currentValue === item ? total + 1 : total;
    };
    return a.reduce(testCount, 0);
  });
};

/**
 * Test 3
 * assuming a string with a trailing dot sparator is a valid hostname
 */
export const f3 = hostname => {
  //   return 0 if the string does not match our hostname format
  if (!/^([a-z0-9_-]+\.?)*$/i.test(hostname)) {
    return 0;
  }
  // get number of matches
  const regex = /([a-z0-9_-]+)\.?/gi;
  return hostname.match(regex).length;
};

/**
 * Test 4
 */
let f4_timeout = null;
export const f4 = cb => {
  clearTimeout(f4_timeout);
  f4_timeout = setTimeout(cb, 300);
};
