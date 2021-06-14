import { makeAutoObservable, configure } from "mobx"
import { nanoid } from "nanoid";
import { createContext } from 'react'

configure({ enforceActions: "never" })

const addTodo = (todos, text) => [
    {
        id: nanoid(),
        text,
        done: false,
    },
    ...todos,
];

const removeTodo = (todos, id) =>
    todos.filter((todo) => todo.id !== id);


class Store {
    regexp = /#\w+/gm
    todos = JSON.parse(localStorage.getItem('myStorage'))
    FilteredTodoList = []
    newTodo = ""
    arrayTegs = ['#All']

    constructor() {

        makeAutoObservable(this)
    }

    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo);
        localStorage.setItem('myStorage', JSON.stringify(this.todos))
        // this.todos = JSON.parse(localStorage.getItem('myStorage'))
        this.newTodo = "";
    }

    removeTodo(id) {
        this.todos = removeTodo(this.todos, id);
    }

    filteredTodo = (tagValue) => {

        if (tagValue == '#All') { this.todos = JSON.parse(localStorage.getItem('myStorage')) }
        else {
            this.todos = this.todos.filter(function (elem) {
                if (elem.text.includes(tagValue)) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }

}


export default createContext(new Store())