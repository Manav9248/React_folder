import { createSlice } from '@reduxjs/toolkit'

const initialState = { // object {}
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState, // it defines the starting values of object which is created

  reducers: { // properties and functions comes in reducers

    increment: (state,action) => {
      state.value += 1
    },

    decrement: (state,action) => {// it's like a state hook, 2 parameters always comes in it.
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += Number( action.payload)
    },

    reset:(state) =>{
      state.value = 0;
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer