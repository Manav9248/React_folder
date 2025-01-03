import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/CounterSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // functions
  const handleDelete = (id) => {
    dispatch(deleteUser);
    navigate(0);
    console.log(id);
  };

  return (
    <div className="m-4">
      <table>
        <thead>
          <tr className="border-b-2 w-[45rem] h-9 flex justify-between items-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className=" w-[47rem] flex flex-col gap-[0.9rem] mt-4">
          {users.map((user, indx) => (
            <tr
              key={indx}
              className={`h-[2.2rem] items-center flex border-2 justify-between rounded-md  px-3 ${
                indx % 2 == 0 ? "bg-gray-100" : ""
              }`}
            >
              <td>{user.id}</td>
              <td className="pl-12">{user.name}</td>
              <td className="ml-5">{user.email}</td>

              <td className="">
                <Link
                  to={`/edit/${user.id}`}
                  className="inline-block border-2 bg-blue-600 w-[2.5rem] text-center rounded-sm text-white hover:bg-blue-800 font-medium"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="ml-2 border-2 bg-red-600 w-[3.4rem] text-center rounded-sm text-white  hover:bg-red-700 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
