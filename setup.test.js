let minions = ['minion1', 'minion2', 'minion3', 'minion4'];

// do this before each test
beforeEach(() => {
  console.log("Initialising array before each test")
  minions = ['minion1', 'minion2', 'minion3', 'minion4'];
})

// group of tests
describe("Series of array tests", () => {
  
  it("Add minion to end of array", () => {
    minions.push("minion5");
    expect(minions[minions.length - 1]).toBe("minion5");
  })

  it("Initial array length", () => {
    expect(minions.length).toBe(4);
  })

})