const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(array) {
  let num = 0;
  for (i in array){
    for(k in array[i]){
      num += array[i][k] == '^^' ? 1 : 0;
    }
  }
  return num;
}

module.exports = {
  countCats
};
