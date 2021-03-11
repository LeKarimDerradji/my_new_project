

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
}

const Archer = new characterClasses('Archer', 'Elfe', 'Arbalète', 'Tireur d\'elite', 3, 7)
const Mage = new characterClasses('Mage', 'Humain', 'Sèptre', 'Invocateur', 8, 6)
const Voleur = new characterClasses('Voleur', 'Mort-Vivant', 'Dague', 'Infiltration', 2, 8)
const Guerrier = new characterClasses('Guerrier', 'Nain', 'Epee', 'Berserk', 1, 9)
const Paladin = new characterClasses('Paladin', 'Atlante', 'Massue', 'Soin', 8, 8)





module.exports = {
    Archer,
    Mage,
    Voleur, 
    Guerrier, 
    Paladin
}