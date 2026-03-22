import { useDispatch, useSelector } from "react-redux";
import {
  addCollection,
  addedToast,
} from "../redux/features/collectionSlice.js";
function ResultCard({ item, idx }) {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
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
          className="bg-blue-600 px-2 py-1 rounded active:scale-95 text-md"
          onClick={() => {
            addToCollection(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
