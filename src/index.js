// import { toDo } from './classes/todo.class';
// import {saludar} from './js/componentes';
import './styles.css';
import {Todo, ToDoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new ToDoList();

todoList.todos.forEach(crearTodoHtml);