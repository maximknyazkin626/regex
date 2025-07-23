export class Validator {
    constructor() {

    }

    validateUsername(name) {
        const regExp1 = new RegExp(/^(?!.*\d{4})(?![0-9-_])(?!.*[0-9-_]$)[a-zA-Z0-9-_]+$/);
        return regExp1.test(name);

    }
}

let validator = new Validator();
console.log('Валидатор создан')
let name1 = 'Ivasik228top';
let name2 = 'Ludok355';
let name3 = 'Ludok35555';
let name4 = 'Ludok$$';
let name5 = '_Ludok355_';
let name6 = 'Lud_ochka';
console.log(validator.validateUsername(name1));
console.log(validator.validateUsername(name2));
console.log(validator.validateUsername(name3));
console.log(validator.validateUsername(name4));
console.log(validator.validateUsername(name5));
console.log(validator.validateUsername(name6));