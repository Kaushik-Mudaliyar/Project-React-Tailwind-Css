import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

function Tab() {
  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();
  const tabs = ["photos", "videos"];
  return (
    <div className="flex gap-5 p-4">
      {tabs.map((item, idx) => {
        return (
          <button
            key={idx}
            className={`${activeTab === item ? `bg-emerald-500` : `bg-gray-500`} px-3 py-2 rounded active:scale-95`}
            onClick={() => {
              dispatch(setActiveTab(item));
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Tab;
