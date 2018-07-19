
const expect= require('chai').expect
const platzom= require('..').default

describe('#platzom', function(){

    it('Si la palabra termina en ar, se le quitan esos dos caracteres', function(){
        const translation= platzom("programar")
        expect(translation).to.equal("program")
    })

    it('si la palabra inicia con z, se le añade pe al final', function () {
        const translation1 = platzom("zarpar")
        const translation2 = platzom("zorro")
        expect(translation1).to.equal("zarppe")
        expect(translation2).to.equal("zorrope")
    })
    it('si la palabra tiene 10 o mas letras se debe partir a la mtad y unir con un guion medio', function () {
        const translation= platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    it('si la palabra original es un palindromo, ninguna regla anterior aplica y se devuelve la misma palabra pero intercalando mayusculas y minusculas', function () {
        const translation= platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})