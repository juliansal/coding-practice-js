const { test, expect } = require('@jest/globals')
const { cardNumber, rarityLevel, randomizer } = require('./pokemonCards')

test("cards should have a card number", () => {

    for (let i = 0; i < 10; i++) {
        let rarityRoll = rarityLevel(randomizer())
        let cardRoll = cardNumber(rarityRoll)

        expect(cardRoll).toBeTruthy()

    }
})

test("cards should have a rarity", () => {

    for (let i = 0; i < 10; i++) {
        let rarityRoll = rarityLevel(randomizer())

        expect(rarityRoll).toBeTruthy()
    }
})

test("Commons should have card number between 1 and 94", () => {

    for (let i = 0; i < 10; i++) {
        let rarityRoll = rarityLevel(randomizer())
        let cardRoll = cardNumber(rarityRoll)

        if (rarityRoll === "common") {
            expect(cardRoll).toBeLessThanOrEqual(94)
        }
    }
})

test("Rares should have card number between 1 and 81", () => {

    for (let i = 0; i < 10; i++) {
        let rarityRoll = rarityLevel(randomizer())
        let cardRoll = cardNumber(rarityRoll)

        if (rarityRoll === "rare") {
            expect(cardRoll).toBeLessThanOrEqual(81)
        }
    }
})

test("Epics should have card number between 1 and 37", () => {

    for (let i = 0; i < 10; i++) {
        let rarityRoll = rarityLevel(randomizer())
        let cardRoll = cardNumber(rarityRoll)

        if (rarityRoll === "epic") {
            expect(cardRoll).toBeLessThanOrEqual(37)
        }
    }
})

test("Legendaries should have card number between 1 and 33", () => {

    for (let i = 0; i < 10; i++) {
        let rarityRoll = rarityLevel(randomizer())
        let cardRoll = cardNumber(rarityRoll)

        if (rarityRoll === "legendary") {
            expect(cardRoll).toBeLessThanOrEqual(33)
        }
    }
})