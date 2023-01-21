import { palindrome } from "./palindrome"

describe("testing a palindrome: otto", () => {
    it("should return is a palidrome", () => {
        expect(palindrome('otto')).toBe('The word "otto" is a palidrome')
    })
})

describe("testing non palindrome: hola", () => {
    it("should return isn't a palidrome", () => {
        expect(palindrome('hola')).toBe('The word "hola" isn\'t a palidrome')
    })
})

describe("testing a palindrome: ?!acaso, .?!hubo búhos,¿¡acá", () => {
    it("should return is a palidrome", () => {
        expect(palindrome('?!acaso, .?!hubo búhos,¿¡acá')).toBe('The sentence "?!acaso, .?!hubo búhos,¿¡acá" is a palidrome')
    })
})