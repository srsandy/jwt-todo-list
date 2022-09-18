import * as repository from "../repository/todo.repository.js";

export const createTodo = async (req, res) => {
  try {
    const savedTodo = await repository.createTodo({
      name: req.body.name,
      description: req.body.description || "",
      status: req.body.status || "TODO",
      owner: req.userId,
    });
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({
      error: "Service Not available",
    });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todos = await repository.getAllTodosByProperties({
      owner: req.userId,
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      error: "Service Not available",
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await repository.deleteTodoById(
      req.params.id,
      req.userId
    );
    res.status(200).send("Todo deleted");
  } catch (error) {
    res.status(500).json({
      error: "Service Not available",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await repository.updateTodoById(
      req.params.id,
      req.userId,
      req.body
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({
      error: "Service Not available",
    });
  }
};

// export const fn = async (req, res) => {
//   try {
//     res.status(200).json();
//   } catch (error) {
//     res.status(500).json({
//       error: "Service Not available",
//     });
//   }
// };
