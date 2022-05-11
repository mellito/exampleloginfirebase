import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContex";

const Home = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logOut;
    navigate("/login");
  };

  return (
    <div>
      {user && (
        <>
          wellcome {<h1>{user.email}</h1>}
          <button onClick={handleLogOut}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Home;
