import '../filters';

describe('Filter: Capitalize', () => {
  var text;

  beforeEach(() => {
    angular.mock.module('app.filters');

    inject($filter => {
      text = $filter('capitalize');
    });
  });

  var textMatrix = [];

  textMatrix.push(createExpectation('word', 'Word'));
  textMatrix.push(createExpectation('wHAt fUn Capitals tHis haS b, right?!', 'What Fun Capitals This Has B, Right?!'));
  textMatrix.push(createExpectation('i love lower case', 'I Love Lower Case'));
  textMatrix.push(createExpectation('I LOVE UPPERCASE', 'I Love Uppercase'));
  textMatrix.push(createExpectation('12345', '12345'));
  textMatrix.push(createExpectation(' ', ' '));

  describeEach(' will update ', textMatrix, expectObj => {
    it('the text "' + expectObj.given + '" so that the first letter of each word is capitalized', () => {
      expect(text(expectObj.given)).toBe(expectObj.expected);
    });
  });
});

function createExpectation(given, expected) {
  return {
    given: given,
    expected: expected
  };
}
