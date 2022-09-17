import * as repository from "../repository/todo.repository.js";

export const createTodo = async (req, res) => {
  try {
    const savedTodo = await repository.createTodo({
      name: req.body.name,
      description: req.body.description || "",
      status: req.body.status || "",
    });
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({
      error: "Service Not available",
    });
  }
};
