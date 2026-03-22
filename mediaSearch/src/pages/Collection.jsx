import React from "react";
import CollectionGrid from "../components/CollectionGrid";
import { useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";

function Collection() {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex justify-between p-4">
        <h1 className="text-xl text-center font-semibold">Your Collection</h1>
        <button
          className="text-md bg-red-500 px-2 py-1 rounded active:scale-95 "
          onClick={() => {
            dispatch(clearCollection());
          }}
        >
          Clear Collection
        </button>
      </div>
      <CollectionGrid />
    </div>
  );
}

export default Collection;
