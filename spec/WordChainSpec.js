const WordChain = require ('../src/WordChain');
require('jasmine-co').install();
describe('Word Chain class', () => {
    describe('when greeting with Carlos', () => {
    let greeting = null;
    var word1, word2;
    beforeEach(() => {
      greeting = WordChain.search(word1, word2, []);
    });
    it('then the greeting message is correct', () => {
      expect(greeting).toBe(word1 === word2);
    });
  });
});