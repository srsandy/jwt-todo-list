import Todo from "../models/Todo.js";

export const createTodo = async (todo) => {
  const _todo = new Todo(todo);
  await Todo.create(_todo);
  return _todo.save();
};

export const getAllTodosByProperties = (searchObject) =>
  Todo.find(searchObject).lean();

export const deleteTodoById = (id, owner) =>
  Todo.findOneAndDelete({ owner, _id: id });

export const updateTodoById = (id, owner, updateObject) =>
  Todo.findOneAndUpdate({ owner, _id: id }, updateObject);
