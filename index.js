
const sum = function(fromN, toN) {
  return fromN === toN ? toN : fromN + sum(fromN + 1, toN);
};
// Poor Socrates :D
module.exports = sum;
