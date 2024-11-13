import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { //objects {}

    todos:[   // arrays []
        {id:1,
        text:"Hello guys"}
    ]
}

export const todoSlice = createSlice({
    name:'todoSlice',
    initialState, //it defines the starting values of object which is created

    reducers:{ // properties and functions comes in reducers

        addTodo: (state,action) => { // it's like a state hook, 2 parameters always comes in it.
           const todo = {
            id:nanoid(), // it generates unique,random ids.
            text: action.payload  // playload is an action object
           }
           state.todos.push(todo) // initial stage -> state          
        }, 

        removeTodo: (state,action) => { // function for removing todo
           state.todos = state.todos.filter((todo)=>
        todo.id !== action.payload)
        },
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer