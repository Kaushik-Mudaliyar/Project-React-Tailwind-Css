import React, { useState } from "react";
import { setQuery } from "../redux/features/searchSlice";
import { useDispatch } from "react-redux";
function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div className="px-4 py-4  bg-gray-700">
      <form
        className="flex gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setQuery(text));
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          className="border w-[90vw] px-4 py-2 outline-none rounded"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="bg-emerald-500 px-3 py-1 active:scale-95 rounded">
          search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
