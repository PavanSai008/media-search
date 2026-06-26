import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="bg-gray-950 h-20 flex flex-row justify-between">
      <div className="flex items-center ml-4">
        <h2 className="text-xl">Media Search</h2>
      </div>
      <SearchBar />
      <div className="gap-4 flex items-center mr-4">
        <Link className="bg-gray-500 py-2 px-4 rounded active:scale-95 " to="/">
          Home
        </Link>
        <Link
          className="bg-gray-500 py-2 px-4 rounded active:scale-95 "
          to="/collection"
        >
          Collections
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
