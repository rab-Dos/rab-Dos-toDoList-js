export class ToDoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {        
    }

    marcarCompleto(id){
        for(const todo of this.todos){

            console.log(id, todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletos(){}
}