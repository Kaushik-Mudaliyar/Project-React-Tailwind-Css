import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=15`,
      );
      console.log(response);
      setData(response.data);
    }
    getData();
  }, [page]);
  const nextHandler = () => {
    setPage(page + 1);
    console.log("clicked");
  };
  const prevHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  return (
    <div className="bg-slate-900 w-full h-full text-gray-50">
      <h1 className="text-2xl text-center font-bold bg-amber-500 p-1 mb-6">
        My Gallery
      </h1>
      <div className="flex flex-wrap justify-center gap-3">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={`${item.download_url}`}
                alt={`${item.author}`}
                className="w-40 h-50 object-cover rounded"
              />
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center items-center gap-5 mt-10">
        <button className="bg-amber-600 px-3 py-1" onClick={prevHandler}>
          prev
        </button>
        <h1>{page}</h1>
        <button className="bg-amber-600 px-3 py-1" onClick={nextHandler}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
