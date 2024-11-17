import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  // console.log(pastes);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <div>Paste</div>;
};

export default Paste;
