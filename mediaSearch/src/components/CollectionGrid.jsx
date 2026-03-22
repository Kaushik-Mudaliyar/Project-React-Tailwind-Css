import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "./CollectionCard";
function CollectionGrid() {
  const items = useSelector((state) => state.collection.items);
  return (
    <div className="w-full h-full flex flex-wrap gap-5 justify-evenly">
      {items.map((item, idx) => {
        return <CollectionCard item={item} key={idx} />;
      })}
    </div>
  );
}

export default CollectionGrid;
