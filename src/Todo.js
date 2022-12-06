import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('')
    const addTodo = props.addTodo
    return <form className="todo-form"
    onSubmit={(event) => {
        event.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }} >
        <input 
        type="text"
        placeholder = "What do you need to do?" 
        value={newTodo}
        onChange = {(event) => {
            setNewTodo(event.target.value)
            console.log(newTodo)
        }}
        />
        <button>Add Todo</button>
    </form>
}

const TodoList = (props) => {
    return <div className="todo-list" ></div>
}

const Todo = (props) => {
    const [todoList, setTodoList] = useState([]);

    const addTodo =(todo) => {
        let copy = [...todoList]
        copy.push(todo)
        
        setTodoList(copy)
    }

    return <div className="todo">
        <TodoForm />
        <TodoList />
    </div>
}

export default Todo;