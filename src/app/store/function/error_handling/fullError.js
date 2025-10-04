import typeIs from '../../../utils/Tools/typeIs';


/**
 * 
 * @param {Object} tree, the opject or array with any depth that you want to parse to a single depth array
 * @param {Array} leafs, (optional) regulary an empty array that new leafs found on the tree will add on this array
 * @param {Array} stemsArray, (optional) prevoiuse stems that need to add to founded leafs stems
 * 
 * @example 
 *  const tree = {
 *    stem1: {
 *      stem1_1: [
 *        "leaf 1_1_1",
 *        [
 *          "leaf 1_1_1_1",
 *          "leaf 1_1_1_2"
 *          {
 *            stem1_1_1_3: "leaf 1_1_1_1_1",
 *          }
 *        ]
 *      ]
 *    },
 *    stem2: [
 *      {
 *        stem2_1_1:[
 *          "leaf 2_1_1_1"
 *        ]
 *      }
 *    ]
 *  }
 * 
 *  result : [
 *    {
 *      stems: ["stem1_1", "stem1"],
 *      value: "leaf 1_1_1"
 *    },
 *    {
 *      stems: ["stem1_1", "stem1"],
 *      value: "leaf 1_1_1_1"
 *    },
 *    {
 *      stems: ["stem1_1", "stem1"],
 *      value: "leaf 1_1_1_2"
 *    },
 *    {
 *      stems: ["stem1_1_1_3", "stem1_1", "stem1"],
 *      value: "leaf 1_1_1_1_1"
 *    },
 *    {
 *      stems: ["stem2_1_1", "stem2"],
 *      value: "leaf 2_1_1_1"
 *    },
 *  ]
 * 
 */
export const fullError = (tree, leafs = [], stemsArray = []) => {
  if (typeIs(tree, "Object")) {

    let stemName = "";

    for (stemName in tree) {
      fullError(tree[stemName], leafs, [stemName, ...stemsArray]);
    }

  } else if (typeIs(tree, "Array")) {

    let stemIndex = null;

    for (stemIndex in tree) {
      fullError(tree[stemIndex], leafs, stemsArray);
    }

  } else {
    leafs.push({
      stems: stemsArray,
      value: tree
    });
  }


  return leafs;
}
