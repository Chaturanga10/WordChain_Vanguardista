var word1 = 'taza';
var word2 = 'caza';
const wordchain = new WordChain(word1, word2, []);
console.log(wordchain.search(word1, word2, []));