import './styles.css';

import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml); // forEach funciona si solo se le envia un argumento



// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// // 
// todoList.todos[4].imprimirClase();
// // newTodo.imprimirClase();

// console.log('todos', todoList.todos);

// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'ABC1234');
// localStorage.setItem('mi-key', 'ABC1234');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);