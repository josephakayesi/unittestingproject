<<<<<<< HEAD
const { calculateMean, sayHello, isValid } = require('../index')
=======
const { calculateMean, sayHello, } = require('../index')

>>>>>>> 317a375015717a6d7e550605861c454e9e2cc339

describe('calculateMean', () => {
    test('should return a number', () => {
        const mean = calculateMean([1, 2, 3, 4, 5, 6])
        expect(typeof mean).toBe('number')
    })

    test('should return 3.5', () => {
        const mean = calculateMean([1, 2, 3, 4, 5, 6])
        expect(mean).toBe(3.5)
    })

<<<<<<< HEAD
    test('should return null', () => {
        const mean = calculateMean([])
        expect(mean).toBe(null)
    })
=======
    test('should be null', () => {
        const mean = calculateMean([])
        expect(mean).toBe(null)
    })

>>>>>>> 317a375015717a6d7e550605861c454e9e2cc339
})

describe('sayHello', () => {
    test('should return Hello', () => {
        const text = sayHello()
        expect(text).toBe('Hello')
    })

    test('should return a string', () => {
        const text = sayHello()
        expect(typeof text).toBe('string')
    })
<<<<<<< HEAD
=======

>>>>>>> 317a375015717a6d7e550605861c454e9e2cc339
})

describe('isValid', () => {
    test('should return true', () => {
        const boolean = isValid('Jest')
        expect(boolean).toBe(true)
    })

    test('should return false', () => {
        const boolean = isValid(4)
        expect(boolean).toBe(false)
    })

    test('should return boolean', () => {
        const boolean = isValid('Jest')
        expect(typeof boolean).toBe('boolean')
    })
<<<<<<< HEAD
})

=======
})
>>>>>>> 317a375015717a6d7e550605861c454e9e2cc339
