const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return results.data;
}

const forEach = (items, callback) => {
  for(let i=0; i<items.length; i++) {
    callback(items[i]);
  }
}

it("mock callback", () => {
  const mockCallBack = jest.fn(x => x + 42);
  forEach([0, 1], mockCallBack);

  expect(mockCallBack.mock.calls.length).toBe(2);
  expect(mockCallBack.mock.calls[0][0]).toBe(0);
  expect(mockCallBack.mock.results[0].value).toBe(42);
})

it("mock return", () => {
  const mock = jest.fn(() => true);

  // mock.mockReturnValueOnce(true);

  const results = mock();
  // console.log(results)/* ; */
  expect(results).toBe(true);
})

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Get item back"
    }
  })

  const results = await fetchData(1);

  expect(results.todo).toBe("Get item back");
})