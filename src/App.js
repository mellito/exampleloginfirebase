import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import { AuthProvider } from "./components/Context/AuthContex";
import ProtectedRoute from "./components/ProtectedRoute.js";
const App = () => {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
