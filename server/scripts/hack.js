// String

module.exports.countWords = function (sentence) {
  var index = {},
      words = sentence
              .replace(/[.,?!;()"'-]/g, " ")
              .replace(/\s+/g, " ")
              .toLowerCase()
              .split(" ");

    words.forEach(function (word) {
        if ( word.length > 2 ) {
          if (!(index.hasOwnProperty(word))) {
              index[word] = 0;
          }
          index[word]++;
        }
    });

    return index;
}
