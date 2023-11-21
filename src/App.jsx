import Home from "./pages/Home";
import Error from "./pages/Error";
import EmployeeList from "./pages/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
