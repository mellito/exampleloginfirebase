import { useState } from "react";
import { useAuth } from "../Context/AuthContex";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { login, googleLogin, resetPassword } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/");
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("please enter your email");

    try {
      await resetPassword(user.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-100 max-w-xs- m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <section className="mb-4">
          <label
            htmlFor="email"
            className="block text-graay-700 text-sm font-fold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            className="show appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
            onChange={handleChange}
          />
        </section>

        <section className="mb-4">
          {" "}
          <label
            htmlFor="password"
            className="block text-graay-700 text-sm font-fold mb-2"
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
        </section>
        <p className="mb-2 flex justify-around">
          dont have a account{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline capitalize self-center w-20"
          >
            login
          </button>

          <a
            href="#!"
            className="inline-block align-baseline font-bold text-sm text-blue 500"
            onClick={handleResetPassword}
          >
            {" "}
            forgot password?
          </a>
        </div>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-gray-300 py-2 px-4 w-full capitalize"
      >
        google login
      </button>
    </div>
  );
};

export default Login;
