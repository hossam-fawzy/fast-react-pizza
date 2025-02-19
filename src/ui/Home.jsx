import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 text-center">
      <h1 className="font-semibold text-xl mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
