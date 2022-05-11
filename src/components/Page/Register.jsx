import { useState } from "react";
import { useAuth } from "../Context/AuthContex";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-100 max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
            className="show appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            className="show appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 rounded-xl text-white w-20 self-center"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
