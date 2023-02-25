/// <reference types="cypress" />

describe('JSON Object', () => {

    it('JSON Object', () => {

        cy.visit('https://www.google.com')

        const simpleObject = {"key1": "value1", "key2": "value2", "key3": "value3"}
        console.log(simpleObject.key2)//value2
        console.log(simpleObject["key3"])//value3

        const simpleArrayOfValue = ["one", "two", "three"]
        console.log(simpleArrayOfValue[0])//one

        const arrayObject = [{ "key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]
        console.log(arrayObject[2].key3)//value3

        const dataType = {"string": "metin", "number": 15}

        const body = {"Student" : [{"FirstName" : "Sena","LastName" : "Cengiz"},
                                     {"FirstName" : "Yusuf","LastName" : "Aslan"},
                                     {"FirstName" : "Derya","LastName" : "Soylu"}]}
        console.log(body.Student[2].LastName)
        console.log(body.Student[1].FirstName)
        console.log(body)











        
    })
})