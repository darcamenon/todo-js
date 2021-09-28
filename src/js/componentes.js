// Referencias al Html

import { Todo } from "../classes";
import { todoList } from '../index'


const divTodoList = document.querySelector('.todo-list'),
    txtInput = document.querySelector('.new-todo'),
    btnBorrar = document.querySelector('.clear-completed'),
    ulFiltros = document.querySelector('.filters'),
    anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {
    const htmlTodo = `
<li class="${ (todo.completado) ? 'completed':'' }" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;

}


// Eventos 

txtInput.addEventListener('keyup', (event) => { // keyup Cuando la persona suelta la tecla

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value);

        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value = ''; // Borrar input
    }

});

divTodoList.addEventListener('click', (event) => {


    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    console.log(nombreElemento);

    if (nombreElemento.includes('input')) { //click en el check

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) { // Hay que borrar el todo
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);


});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        } // contains me sirve para saber si el elemento seleccionado tiene una clase
    }
});


ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text; // target text me indica que texto fue clikeado en pantalla
    if (!filtro) { return; }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');
    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;

        }
    }

})