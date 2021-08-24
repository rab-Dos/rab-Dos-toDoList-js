import { Todo } from "./todo.class";

export class ToDoList {
    constructor() {
        // this.todos = [];
        this.cargarLocarStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompleto(id){
        for(const todo of this.todos){

            console.log(id, todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletos(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    };

    cargarLocarStorage(){
        
        this.todos = (localStorage.getItem('todo'))
        ? JSON.parse(localStorage.getItem('todo'))
        : [];

        this.todos = this.todos.map(Todo.fromJson);
    };

    // cargarPendientes(elem){

    //     let a = 0;
        
    //     for(const elemento of elem.children){
    //         const completado = elemento.classList.contains('completed');
    //         if(!completado){
    //             a++;
    //         }
    //     }
    //      const cuentaPen = document.querySelector('strong');
    //     // let a = todoList.todos.length;
    //     console.log({a});
    //     // cuentaPen.innerHTML = a;
    // };
};