const axios = require("axios");
const TodosMutations = require("./TodosMutations");

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

describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      { newDueDate: myDate, newIsDone: false, newTask: "Essen", newUserId: 1 }
    );
  });
});


describe("Testing PUT Functions of Todo Route", () => {
  // ...

  test("Teste PUT markTodo Funktion", async () => {
    const mockData = {
      data: { updatedTodo: returnedTodo1 },
    };
    axios.put.mockResolvedValue(mockData);
    const result = await TodosMutations.markTodo(6, true);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      { todoId: 6, newIsDone: true }
    );
  });

  test("Teste PUT updateTodo Funktion", async () => {
    const updatedTodo = { ...returnedTodo1, task: "Laufen" };
    const mockData = {
      data: { updatedTodo: updatedTodo },
    };
    axios.put.mockResolvedValue(mockData);
    const result = await TodosMutations.updateTodo(6, "Laufen", true, "2024-11-10T00:00:00.000Z");

    expect(result).toEqual(updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/update",
      { todoId: 6, newTask: "Laufen", newIsDone: true, newDueDate: "2024-11-10T00:00:00.000Z" }
    );
  });

  // ...
});

describe("Testing DELETE Functions of Todo Route", () => {
  // ...

  test("Teste DELETE deleteTodo Funktion", async () => {
    const mockData = {
      data: { deletedTodosId: 6 },
    };
    axios.delete.mockResolvedValue(mockData);
    const result = await TodosMutations.deleteTodo(6);

    expect(result).toEqual(6); // Hier überprüfen wir, ob die ID des gelöschten Todos zurückgegeben wird.
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      { data: { todoId: 6 } }
    );
  });

  // ...
});