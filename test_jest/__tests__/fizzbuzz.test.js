const fizzbuzz = require("../src/fizzbuzz")


test('should return 1 when send 1', () => { 
    expect(fizzbuzz.play(1)).toBe(1);
})

test('should return 8 when send 8', () => { 
    expect(fizzbuzz.play(8)).toBe(8);  
})

test('should return fizz when send 3', () => { 
    expect(fizzbuzz.play(3)).toBe("fizz");      
})

test('should return buzz when send 5', () => { 
    expect(fizzbuzz.play(5)).toBe("buzz");      
})

test('should return fizz when send 12', () => { 
    expect(fizzbuzz.play(12)).toBe("fizz");      
})

test('should return buzz when send 10', () => { 
    expect(fizzbuzz.play(10)).toBe("buzz");      
})

test('should return fizzbuzz when send 15', () => { 
    expect(fizzbuzz.play(15)).toBe("fizzbuzz");      
})


test('should return fizzbuzz when send 45', () => { 
    expect(fizzbuzz.play(45)).toBe("fizzbuzz");      
})