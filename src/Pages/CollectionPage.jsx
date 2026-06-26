import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";
const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  function clearedCollection() {
    dispatch(clearCollection());
  }
  return (
    <div className="w-full flex-wrap gap-6 overflow-hidden">
      {collection.length > 0 ? (
        <div className="flex justify-between">
          <h1 className=" sticky top-1 text-white mx-6 font-bold text-xl">
            My Collection
          </h1>
          <button
            className="bg-red-700 text-white mx-6 my-4 py-1 px-4 rounded-lg"
            onClick={() => clearedCollection()}
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="flex justify-center min-h-dvh text-3xl capitalize my-2">
          <h1>You have not saved any media</h1>
        </div>
      )}
      <div className="flex justify-start mx-6 w-full flex-wrap gap-6 overflow-hidden">
        {collection.map((item, idx) => {
          return (
            <div className="text-white" key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
