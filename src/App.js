import Demo from "./Formik/Demo";
import Practice from "./Formik/Practice";
import List from "./Formik/List";
import Pr_01 from "./Practice/Pr_01";
import Todo_List from "./Todo/Todo_List";
import Data_Pagination from "./Pagination/Data_Pagination";
import Home from "./Home";
import User_Form from "./Formik/User_Form";
import Pr_02 from "./Practice/Pr_02";
import Navbar from "./Navbar";
import Pr_03 from "./Practice/Pr_03";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/List" element={<List />} />
          <Route path="/Pr_01" element={<Pr_01 />} />
          <Route path="/Todo_List" element={<Todo_List />} />
          <Route path="/Data_Pagination" element={<Data_Pagination />} />
          <Route path="/User_Form" element={<User_Form />} />
          <Route path="/Pr_02" element={<Pr_02 />} />
          <Route path="/Pr_03" element={<Pr_03 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
