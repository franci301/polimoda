const tester = require('./calculateTestResults.js');

describe('calculateTestResults', function() {
    it('input test #1', () => {
        var answers = [
            [0, 4, 1],
            [4, 1, 2],
            [4, 3, 2],
            [4, 6, 6],
            [5, 5, 2],
            [0, 5, 5],
            [0, 2, 5],
            [4, 4, 2],
            [2, 1, 4],
            [6, 1, 2],
            [0, 2, 2],
            [6, 6, 0]
        ]
        const a = tester(answers);
        expect(a).toStrictEqual([0.04, 0.06, 0.08, 0.15, 0.11, 0.1, 0.07, 0.09, 0.06, 0.08, 0.04, 0.12]);
    })
    it('input test #2', () => {
        var answers = [
            [1, 4, 6],
            [1, 1, 6],
            [1, 3, 6],
            [1, 6, 6],
            [1, 5, 6],
            [1, 5, 6],
            [1, 2, 6],
            [1, 4, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 2, 6],
            [1, 6, 6]
        ]
        const a = tester(answers);
        expect(a).toStrictEqual([0.09, 0.06, 0.08, 0.11, 0.1, 0.1, 0.07, 0.09, 0.06, 0.06, 0.07, 0.11]);
    })
    it('input test #3', () => {
        var answers = [
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6],
            [1, 1, 6]
        ]
        const a = tester(answers);
        expect(a).toStrictEqual([0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08]);
    })
})