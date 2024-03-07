const axios = require("axios");
const TodosQueries = require("./TodosQueries");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

describe("Testing GET Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste GET all Funktion", async () => {
    const mockData = {
      data: [returnedTodo1],
    };

    axios.get.mockResolvedValue(mockData);

    const result = await TodosQueries.fetchAllTodos();

    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/all"
    );
  });

  test("Teste GET ById Funktion", async () => {
    const myInput = {
      data: { todo: returnedTodo1 },
    };

    axios.get.mockResolvedValue(myInput);

    const result = await TodosQueries.fetchTodoById(6);

    expect(result).toEqual(myInput.data.todo);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/byid",
      { params: { todoId: 6 } }
    );
  });
});
