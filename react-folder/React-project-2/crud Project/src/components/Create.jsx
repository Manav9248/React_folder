import React, { useState } from "react";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/CounterSlice";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <div className="h-[55rem] w-full flex items-center justify-center border-none">
      <div className="flex border-2 rounded-md h-[24rem] w-[22rem] flex-col ">
        <h2 className="font-semibold text-[1.9rem] mt-7 ml-11">Add New User</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-5">
            {/* <label htmlFor="name"></label> */}
            <input
              className="border-2 border-gray-400 pl-4 w-[17rem] h-[3.2rem]
          ml-4 mt-5"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />

            <input
              className="border-2  border-gray-400 pl-4 w-[17rem] h-[3.2rem]
       ml-4 mt-9"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Mail"
            />
          </div>

          <button
            className="border-none inline-block ml-[7.7rem] mt-[1rem] h-[3rem] w-[5.4rem] rounded-md pb-2
          bg-blue-500 hover:bg-blue-700 text-white text-center pt-2 font-semibold text-[1.1rem]"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
