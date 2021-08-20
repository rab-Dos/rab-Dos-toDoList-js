// import { toDo } from './classes/todo.class';
// import {saludar} from './js/componentes';
import './styles.css';
import {Todo, ToDoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new ToDoList();
const tarea = new Todo('Aprender JS :D');
todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);