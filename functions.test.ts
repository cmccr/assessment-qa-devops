const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should retrun an array', () => {
        let arr = [4,5,6,7,8]
        let result = shuffleArray(arr)
        expect(result).toHaveProperty('length')
    })

        test('shuffleArray should retrun an array', () => {
            let arr = [4,5,6,7,8]
            let result = shuffleArray(arr)
            expect(result.length).toEqual(arr.length)
        })

            test('shuffleArray should return an array with the same items', () => {
                let arr = [4,5,6,7,8]
                let result = shuffleArray(arr)
                expect(result).toEqual(expect.arrayContaining(arr))
            })

            test('shuffleArray should return an array with items shuffled', () => {
                let arr = [4,5,6,7,8]
                let result = shuffleArray(arr)
                expect(arr.join()).not.toEqual(result.join())
            })

})