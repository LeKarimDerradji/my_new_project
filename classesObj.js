class characterClasses {
    constructor(name, race, weapon, gift, mana, lifespan) {
        this.name = name
        this.race = race
        this.weapon = weapon
        this.gift = gift,
            this.mana = mana
        this.lifespan = lifespan
    }
    getClass() {
        return console.log(`Tu es un ${this.name}, 
        tu es de race ${this.race},
         ton arme de prédiliction est ${this.weapon}, 
         ton don est ${this.gift}
         tu débutes avec  ${this.mana} points de mana et ${this.lifespan} points de vie`)
    }
    attack() {
        let laChance = Math.floor(Math.random() * 2)
        if (laChance) {
            this.mana *= 2
            this.weapon += `, et vous usez de votre don "${this.gift}" !`
        }
        console.log(`Vous attaquer avec ${this.weapon}, vous infligez ${this.mana + this.mana} point de degat`)
    }

}

const Archer = new characterClasses('Archer', 'Elfe', 'Arbalète', 'Tireur d\'elite', 3, 7)
const Mage = new characterClasses('Mage', 'Humain', 'Sèptre', 'Invocateur', 8, 6)
const Voleur = new characterClasses('Voleur', 'Mort-Vivant', 'Dague', 'Infiltration', 2, 8)
const Guerrier = new characterClasses('Guerrier', 'Nain', 'Epee', 'Berserk', 1, 9)
const Paladin = new characterClasses('Paladin', 'Atlante', 'Massue', 'Soin', 8, 8)

const loots = ['Potion Magique', 'Carte', 'Arme', '10 BTC', 'MiniMonster']

class monsterTypes {
    constructor(name, type, lifespan, strength, loot) {
        this.name = name
        this.type = type
        this.lifespan = lifespan
        this.strength = strength
    }
    isLooted() {
        let laChance = Math.floor(Math.random() * 2)
        let rouletteLoot = Math.floor(Math.random() * 5)
        if (laChance) {
            this.loot = loots[rouletteLoot]
            console.log(`${this.name} avait ${this.loot} sur lui`)
        } else {
            console.log(`${this.name} n'avait rien sur lui, vous reparter bredouille`)
        }
    }
}


const Dragon = new monsterTypes('Naude G-S', 'Dragon', 10, 38)

module.exports = {
    Archer,
    Mage,
    Voleur,
    Guerrier,
    Paladin,
    Dragon,
}