import React from "react";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      {query != "" ? (
        <div className="bg-gray-900 ">
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Home;
