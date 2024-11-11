import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = { //objects {}
    todos:[{id:1,text:"Hello guys"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,

    reducers:{ // properties and functions comes in reducers
        addTodo: (state,action) => { // it's like a stae hook, 2 parameters always comes in it.
           const todo = {
            id:nanoid(),
            text: action.payload  // playload is a object
           }
           state.todos.push(todo)            
        }, 

        removeTodo: (state,action) => {
           state.todos = state.todos.filter((todo)=>
        todo.id !== action.payload)
        },
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer