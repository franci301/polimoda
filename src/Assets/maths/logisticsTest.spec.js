const tester = require('./logistics.js');

describe('logistics test', function() {
    it('input test #1', () => {
        const a = tester([
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
        ])
        expect(a).toStrictEqual([1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 21]);
    })
    it('input test #2', () => {
        const a = tester([
            [5, 4, 1],
            [2, 1, 2],
            [2, 3, 2],
            [3, 6, 6],
            [4, 5, 2],
            [6, 5, 5],
            [1, 2, 5],
            [0, 4, 2],
            [3, 1, 4],
            [4, 1, 2],
            [5, 2, 2],
            [6, 6, 0]
        ])
        expect(a).toStrictEqual([1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 20, 21]);
    })
    it('input test #3', () => {
        const a = tester([
            [5, 4, 5],
            [2, 1, 4],
            [2, 3, 4],
            [3, 6, 2],
            [4, 5, 1],
            [6, 5, 0],
            [1, 2, 6],
            [0, 4, 3],
            [3, 1, 5],
            [4, 1, 2],
            [5, 2, 2],
            [6, 6, 1]
        ])
        expect(a).toStrictEqual([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20])
    })
    it('input test #4', () => {
        const a = tester([
            [5, 0, 5],
            [2, 0, 4],
            [2, 5, 4],
            [3, 1, 2],
            [4, 2, 1],
            [6, 2, 0],
            [1, 4, 6],
            [0, 3, 3],
            [3, 5, 5],
            [4, 5, 2],
            [5, 4, 2],
            [6, 0, 1]
        ])
        expect(a).toStrictEqual([0, 1, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 18, 19])
    })
    it('input test #5', () => {
        const a = tester([
            6, 6, 3,
            5, 4, 2,
            1, 1, 4,
            6, 5, 5,
            3, 5, 1,
            1, 4, 1,
            0, 3, 0,
            1, 1, 2,
            4, 1, 0,
            6, 6, 5,
            4, 1, 1,
            5, 4, 1
        ])
        expect(a).toStrictEqual([0.599890155,
            0.627163489,
            0.519526035,
            0.511807703,
            0.343326471,
            0.17589876,
            0.287117986,
            0.26308021,
            0.385108607,
            0.432619559,
            0.593048683,
            0.707234202,
            0.713201216,
            0.502276293,
            0.516584651,
            0.417975262,
            0.116848392,
            0.135000008,
            0.535918319,
            0.575825315,
            0.381458204,
            0.385408131,
            0.251375791,
            0.311747979
        ])
    })
})