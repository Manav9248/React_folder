import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/CounterSlice";


const Update = () => {
 
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  const[uname,setName] = useState(existingUser? existingUser.name : '');
  const[uemail,setEmail] = useState(existingUser? existingUser.email : '');


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e)=> {
    e.preventDefault();
    dispatch(updateUser(
      {
        id:id,
        name:uname,
        email:uemail,
      }
    ));
    navigate('/');
  }


  return (
    <div>
      <div className="h-[55rem] w-full flex items-center justify-center border-none">
        <div className="flex border-2 rounded-md h-[24rem] w-[22rem] flex-col ">
          <h2 className="font-semibold text-[1.9rem] mt-7 ml-11">
            Update User
          </h2>

          <form onSubmit={handleUpdate}>
            <div className="flex flex-col m-5">
              {/* <label htmlFor="name"></label> */}
              <input
                className="border-2 border-gray-400 pl-4 w-[17rem] h-[3.2rem]
    ml-4 mt-5"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={uname}
                onChange={(e)=>setName(e.target.value)}
              />

              <input
                className="border-2  border-gray-400 pl-4 w-[17rem] h-[3.2rem]
 ml-4 mt-9"
                type="email"
                name="email"
                placeholder="Enter Mail"
                value={uemail}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <button
              className="border-none inline-block ml-[7.7rem] mt-[1rem] h-[3rem] w-[5.4rem] rounded-md pb-2
    bg-blue-500 hover:bg-blue-700 text-white text-center pt-2 font-semibold text-[1.1rem]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
