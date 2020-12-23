describe('Suite de testes de subtracao', function() {
    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 8 e 3', function() {
        expect(Calculadora.subtrair(8,3)).toEqual(5);
    });

    it('deve retornar 5 para 8 e 3 em formato texto', function() {
        expect(Calculadora.subtrair('8','3')).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 2.5 em formato decimal', function() {
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4);
    });

    it('deve retornar 0 para valor 1 invalido', function() {
        expect(Calculadora.subtrair(undefined,5)).toEqual(0);
    });

    it('deve retornar 0 para valor 2 invalido', function() {
        expect(Calculadora.subtrair(5,undefined)).toEqual(0);
    });
});