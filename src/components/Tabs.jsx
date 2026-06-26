import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex  gap-5 p-10 justify-center">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${activeTab == elem ? "bg-gray-300" : "bg-gray-400"}  text-black transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
