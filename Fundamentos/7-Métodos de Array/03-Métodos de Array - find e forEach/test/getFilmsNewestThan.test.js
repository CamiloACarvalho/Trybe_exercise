
const { getFilmsNewestThan } = require('../src/06-getFilmsNewestThan');

describe('Teste da funcao getFilmsNewestThan', () => {
    test('Teste de parametro invalido', () => {
        expect(() => getFilmsNewestThan()).toThrow();
        expect(() => getFilmsNewestThan('Comédia')).toThrow();
        expect(() => getFilmsNewestThan('Comédia', '2012')).toThrow();
    });

    test('Teste de parametro valido', () => {
        expect(getFilmsNewestThan('Comédia', 2012)).toBe(true);
    });
});