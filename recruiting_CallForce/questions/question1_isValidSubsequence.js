
function isValidSubsequence(array, sequence) {
    // code here
    let arrayIndex = 0;
    let sequenceIndex = 0;
    while (arrayIndex < array.length && sequenceIndex < sequence.length) {
      if (array[arrayIndex] === sequence[sequenceIndex]) {
        sequenceIndex++;
      }
      arrayIndex++;
    }
    return sequenceIndex === sequence.length;
}

module.exports = {
    isValidSubsequence,
};
