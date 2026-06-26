import { useDispatch } from "react-redux";
import { addCollection, addToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  function addToCollection(item) {
    dispatch(addCollection(item));
    dispatch(addToast());
  }
  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-2xl overflow-hidden ">
      <a href={item.url} target="_blank">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt="no img"
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
            alt=""
          ></video>
        ) : (
          ""
        )}
      </a>
      <div className=" flex justify-between items-center absolute gap-2 bottom-0 w-full px-6 py-6 bg-gradient-to-b from-transparent to-black">
        <h1 className="text-white text-center text-xs truncate font-semibold capitalize">
          {item.title}
        </h1>
        <button
          onClick={() => addToCollection(item)}
          className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
