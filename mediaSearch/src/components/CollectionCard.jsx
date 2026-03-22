import React from "react";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";
import { useDispatch, useSelector } from "react-redux";

function CollectionCard({ item, idx }) {
  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();
  const removeToCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast());
  };
  return (
    <div key={idx} className="relative w-70 h-60">
      <a
        target="_blank"
        href={item.url}
        className="object-cover object-center overflow-hidden rounded-xl"
      >
        {activeTab === "photos" ? (
          <img className="w-70 h-60 rounded-xl" src={`${item.image}`} />
        ) : (
          <video
            className="w-70 h-60 rounded-xl"
            autoPlay
            muted
            loop
            src={`${item.video}`}
          />
        )}
      </a>
      <div className="w-full absolute bottom-0 py-2 px-2 text-white flex justify-between items-center gap-1">
        <h1 className="text-md font-semibold p-2 capitalize">{item.title}</h1>
        <button
          className="bg-red-500 px-2 py-1 rounded active:scale-95 text-md"
          onClick={() => {
            removeToCollection(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
