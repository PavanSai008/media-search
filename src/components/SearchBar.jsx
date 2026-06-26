import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form className="flex justify-center">
        <input
          value={text}
          type="text"
          placeholder="Search anything..."
          className="w-100 m-4 mr-0 px-4 py-2 border-blue-100 border-2 rounded-l-full outline-0 "
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          className=" w-auto m-4 ml-0 px-6 py-2 rounded-r-full border-blue-100 border-2 border-l-0 outline-0"
          onClick={(e) => {
            e.preventDefault();
            console.log(text);
            dispatch(setQuery(text));
          }}
        >
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
