import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

export const userSlice = createSlice({
  name: "users",
  initialState: userList, // fetching userList from Data.jsx

  reducers: {
    // properties and functions comes in reducers

    // crud operation are done in reducers

    //addUser
    addUser: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },

    //updateUser
    updateUser:(state,action) =>{
        const {id,name,email} = action.payload;
        const findId = state.find(user=>user.id == id);
        if(findId){
            findId.name = name;
            findId.email = email;
        }
    },

    //deleteUser
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id != id);
    },
  },
});

//action creators are generated for each case reducers functions
export const { deleteUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
