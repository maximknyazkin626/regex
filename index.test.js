import { Validator } from './index.js'

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('должен валидировать правильное имя', () => {
        expect(validator.validateUsername('Ivasik228top')).toBe(true);
    });

    test('должен валидировать имя без подряд идущих четырех цифр', () => {
        expect(validator.validateUsername('Ludok355k')).toBe(true);
    });

    test('не должен валидировать имя с четырьмя подряд идущими цифрами', () => {
        expect(validator.validateUsername('Ludok35555')).toBe(false);
    });

    test('не должен валидировать имя с недопустимыми символами', () => {
        expect(validator.validateUsername('Ludok$$')).toBe(false);
    });

    test('не должен валидировать имя, начинающееся с недопустимого символа', () => {
        expect(validator.validateUsername('_Ludok355_')).toBe(false);
    });

    test('должен валидировать имя с допустимыми символами', () => {
        expect(validator.validateUsername('Lud_ochka')).toBe(true);
    });

    test('не должен валидировать имя, заканчивающееся на недопустимый символ', () => {
        expect(validator.validateUsername('Ludok-')).toBe(false);
    });

    test('не должен валидировать пустую строку', () => {
        expect(validator.validateUsername('')).toBe(false);
    });

    test('не должен валидировать имя, состоящее только из цифр', () => {
        expect(validator.validateUsername('1234')).toBe(false);
    });
});