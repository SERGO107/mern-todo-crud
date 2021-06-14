import { makeAutoObservable, configure, autorun } from "mobx"
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

// const gotTodo = () =>

// window.onload = () => {
//     alert( JSON.parse(localStorage.getItem('myStorage')))
  
// }

class Store {
    regexp = /#\w+/gm
    todos = JSON.parse(localStorage.getItem('myStorage'))
    FilteredTodoList = []
    newTodo = ""

    constructor() {
        //со значением автообсервбл не нужно расставлять декораторы (@action, @observeble, @computed,@reaction) теперь mobx распознает значения автоматически
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

    gotTodo() {
        this.todos = localStorage.getItem('tom', this.todos)
    }

    deleteTask = (id) => {
        console.log(id)
    }

    filteredTodo = (tagValue) => {
        this.FilteredTodoList = this.TodoList.filter(function (elem) {
            if (elem.includes(tagValue)) {
                return true;
            } else {
                return false;
            }
        });

    }

    // async fetchUserInfo() {
    //     const character = this.userLogin
    //     const response = await fetch(`https://api.github.com/users/${character}`)
    //     const data = await response.json()
    //     runInAction(() => {
    //         this.imageUrl = data.avatar_url
    //         this.created = data.created_at
    //         this.repos = data.public_repos
    //         this.followers = data.followers
    //         this.fullName = data.name
    //         console.log(data)
    //     })
    // }

    // handlePageClick = (e) => {
    //     this.selectedPage = e.selected;
    //     this.setOffset = this.selectedPage * this.perPage
    //     this.slicedRepos = this.dataRepos.slice(this.setOffset, this.setOffset + this.perPage)
    // }

}

//чтобы испоьзовать данные из стора в реакт компонентах нужно обернуть стор в реакт контекст
export default createContext(new Store())