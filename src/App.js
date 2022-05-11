import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import { AuthProvider } from "./components/Context/AuthContex";

const App = () => {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
