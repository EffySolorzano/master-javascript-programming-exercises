// Write your function here
function computeAverageLengthOfWords(word1, word2){
    let length1 = word1.length
    let length2 = word2.length
    let averageLength = ( length1 + length2 ) / 2
    return averageLength
}
let output = computeAverageLengthOfWords('perrito', 'gordo')
console.log(output);