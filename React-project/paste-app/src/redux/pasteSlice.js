import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import { JSON } from "react-router-dom";

const initialState = {
  pastes: (() => {
    try {
      const storedPastes = localStorage.getItem("pastes");
      return storedPastes ? JSON.parse(storedPastes) : [];
    } catch (error) {
      console.error("Error parsing localStorage item 'pastes':", error);
      return []; // Return an empty array in case of error
    }
  })(),
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload; // paste created

      //add a check --> paste already exist wala case

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload; // paste created

      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Updated");
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes = []; // empty array

      localStorage.removeItem("pastes");
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;

      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Deleted");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
