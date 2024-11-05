import TodoList from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Buy groceries');
myTodoList.addTask('Complete the project');
myTodoList.addTask('Go for a walk');

myTodoList.markComplete(0); 
myTodoList.markComplete(2); 

myTodoList.listTasks();
