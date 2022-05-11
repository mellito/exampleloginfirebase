import { useAuth } from "../Context/AuthContex";

const Home = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black ">
      <div className="bg-white rounderd shadow-md px-8 pt-6 pb-8">
        wellcome{" "}
        {<h1 className="text-xl mb-4">{user.displayName || user.email}</h1>}
        <button
          className="bg-blue-500 px-3 py-1 rounded-xl text-white w-20 self-center"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
