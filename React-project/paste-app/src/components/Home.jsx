import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchPrams, setSearchPrams] = useSearchParams();
  const pasteId = searchPrams.get("pasteId");

  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      id: pasteId || Date.now().toString(36),
      createAt: new Date().toString(),
    };
    if (pasteId) {
      // update
      dispatch(updateToPaste(paste));
    } else {
      //creation
      dispatch(addToPaste(paste));
    }

    // after creation or updation
    setTitle("");
    setValue("");
    setSearchPrams({});
  }

  return (
    <div>
      <div className="flex gap-7  justify-evenly">
        <input
          className="p-2 rounded-2xl w-[65%]"
          type="text"
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button onClick={createPaste} className="p-2 rounded-2xl ">
          {pasteId ? "update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 p-4
    min-w-[500px] "
          value={value}
          placeholder="Enter Contnet here"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          rows={20}
          cols={50}
        />
      </div>
    </div>
  );
};

export default Home;
