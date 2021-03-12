const characModule = require('./classesObj.js');

const chalk = require('chalk')
const readlineSync = require('readline-sync');

const classesTab = ['Archer', 'Mage', 'Guerrier', 'Voleur', 'Paladin']

let nameStr = readlineSync.question('Bonjour jeune aventurier, quel est ton nom ? ')
console.log(`${nameStr} bienvenue dans cette aventure palpitante!`)

console.log('Il te convient de choisir ta ' + chalk.bold.blueBright('classe'))

classesIndex = readlineSync.keyInSelect(classesTab, 'De quel ' + chalk.blueBright.bold('classe es-tu ? '))
classe = classesTab[classesIndex]

switch (classe) {
    case 'Archer' :
        characModule.Archer.getClass()
        break
    case 'Mage':
        characModule.Mage.getClass()
        break
    case 'Guerrier':
        characModule.Guerrier.getClass()
        break
    case 'Voleur':
        characModule.Voleur.getClass()
        break
    case 'Paladin':
        characModule.Paladin.getClass()
        break;
    default:
        console.log(classe)
        break
}



