const {returnTwo, greeting, add, subtract, divide, multiply} = require('./functions');

test('should return 2', ()=>{
    expect(returnTwo()).toEqual(2)
})

describe('greeting function tests', ()=>{
    test("greeting(\'James\') should return Hello, James" , ()=>{
        expect(greeting("James")).toEqual("Hello, James.");
    })

    test("greeting(\'Jill\') should return Hello, Jill" , ()=>{
        expect(greeting("Jill")).toEqual("Hello, Jill.");
    })
})

describe('add function tests', ()=>{
    test("add(1, 2) should return 3" , ()=>{
        expect(add(1,2)).toEqual(3);
    })

    test("add(5, 9) should return 14" , ()=>{
        expect(add(5,9)).toEqual(14);
    })
})

describe('math function tests', ()=>{
    test("add(1, 2) should return 3" , ()=>{
        expect(add(1,2)).toEqual(3);
    })

    test("multiply(5, 2) should return 10" , ()=>{
        expect(multiply(5,2)).toEqual(10);
    })

    test("divide(10, 2) should return 5" , ()=>{
        expect(divide(10,2)).toEqual(5);
    })

    test("subtract(9, 5) should return 4" , ()=>{
        expect(subtract(9,5)).toEqual(4);
    })
})