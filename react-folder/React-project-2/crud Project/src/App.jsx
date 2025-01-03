import "./App.css";
import EmailForm from "./email/EmailForm";
import { Route, Routes } from "react-router-dom";

import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<EmailForm />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
