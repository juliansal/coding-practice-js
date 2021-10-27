/**
 * Given you have a pack of 5 Pokemon cards
 * And each card has a rarity
 * When you simulate opening the pack
 * Then print out the rarity for each card
 * 
 * Rarities:
 * - 94 Common cards (74%)
 * - 81 Rare cards (21%)
 * - 37 Epic cards (4%)
 * - 33 Legendary cards (1%)
 * 
 */

const randomizer = (cards = 100) => Math.ceil(Math.random() * cards)
// const cardTypeRandomizer = (cards) => Math.ceil(Math.random() * cards)

// return card's rarity
function rarityLevel(num) {
    if (num == 100) return "legendary"
    if (num >= 96 && num < 100) return "epic"
    if (num >= 75 && num < 96) return "rare"
    if (num <= 74) return "common"
}

// return card's type after getting its rarity
function cardNumber(rarity) {
    switch (rarity) {
        case "common":
            return randomizer(94)
        case "rare":
            return randomizer(81)
        case "epic":
            return randomizer(37)
        case "legendary":
            return randomizer(33)
    }
}

// main function
function roll(times = 5) {
    let cardList = []

    for (let i = 0; i < times; i++) {
        let rarityRoll = rarityLevel(randomizer())
        let cardRoll = cardNumber(rarityRoll)

        cardList.push({"rarity": rarityRoll, "card number": cardRoll})

    }

    console.table(cardList)
}

// test main function
// roll(100)

module.exports = { cardNumber, rarityLevel, randomizer }
