import {Todo} from '../classes';
import {todoList} from '../index';

// Referencias al HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const cuentaPen = document.querySelector('strong');
let a = 0;

function cargarPendientes(){
    a = 0;
    for(const elemento of divTodoList.children){
        const completado = elemento.classList.contains('completed');
        if(!completado){
            a++;
        }
    }
    // console.log({a});
    cuentaPen.innerHTML = a;    
}

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
        <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
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
    
    cargarPendientes();

    return div.firstElementChild;
}

// Eventos
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){
        // console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);

        todoList.nuevoTodo(nuevoTodo);
        // console.log(todoList);

        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }

    cargarPendientes();

});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoID = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){ // click en el check
        todoList.marcarCompleto(todoID);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')){ //Borrar el toDo
        todoList.eliminarTodo(todoID);
        divTodoList.removeChild(todoElemento);
    }

    cargarPendientes();
    // console.log(todoList);
});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletos();
    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);            
        };
    }

    cargarPendientes();
});

ulFiltros.addEventListener('click', (event) => {
    // console.log(event.target.text);
    const filtro = event.target.text;

    if(!filtro) {return;}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    //console.log(event.target); 
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        // console.log(elemento);


        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break;
            
        }
    }
})

// cargarPendientes(elem){

    //     a = 0;
    //     for(const elemento of elem.children){
    //         const completado = elemento.classList.contains('completed');
    //         if(!completado){
    //             a++;
    //         }
    //     }
    //     console.log({a});
    //     cuentaPen.innerHTML = a;
    // };