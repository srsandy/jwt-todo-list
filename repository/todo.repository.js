import Todo from "../models/Todo.js";

export const createTodo = async (todo) => {
  const _todo = new Todo(todo);
  await Todo.create(_todo);
  return _todo.save();
};

// export.findTodoByUser = (owner) => Todo.find({owner});
