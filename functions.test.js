const functions = require('./functions')

// Addition Test
test('Adds 2 + 2 equals 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 NOT equals 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Null Test
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
})

// Falsy Test
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy(); // null also can
})

// Object Test
test('User should be Dave Tan object', () => {
  expect(functions.createUser()).toEqual([
    { firstName: 'Dave', lastName: 'Tan' },
    { firstName: 'Peter', lastName: 'Lim' },
  ]);
})

// Less Than & Greater Than Test
test('Should be under 1600', () => {
  const load1 = 200
  const load2 = 400
  expect(load1 + load2).toBeLessThan(1600);
})

// Regex Test
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
})

// Arrays Test
test('Admin should be in username', () => {
  let usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// Error

test('compilation error', () => {
  expect(() => functions.compileCode()).toThrow(Error);
})

// Describe to group test cases tgt
describe("Sample test", () => {
  
  it("Adding 2 + 2 equals 4", () => {
    const result = functions.add(2, 2);
    expect(result).toBe(4);
  })

  it("Adding 3 + 3 equals 6", () => {
    const result = functions.add(3, 3);
    expect(result).toBe(6);
  })

})

// Promise
test('User fetched name shoiuld be Leanne Graham', () => {
   
  expect.assertions(1);
  
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });

});

// Working with Async Await

test("should return correct todo", async () => {
  const todo = await functions.fetchData(1);
  expect(todo.id).toBe(1);
});


