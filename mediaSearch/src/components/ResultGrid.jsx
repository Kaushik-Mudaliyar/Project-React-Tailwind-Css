import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setActiveTab,
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

function ResultGrid() {
  const { query, loading, results, error, activeTab } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();
  // console.log(query,results);

  useEffect(() => {
    if (!query) return;
    try {
      let data = [];
      async function getData() {
        if (activeTab == "photos") {
          data = await fetchPhotos(query);
        }
        if (activeTab == "videos") {
          data = await fetchVideos(query);
        }
        dispatch(setResults(data));
      }
      getData();
    } catch (error) {
      dispatch(setError(error));
    }
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full h-full flex flex-wrap gap-5 justify-evenly">
      {results.map((item, idx) => {
        return <ResultCard item={item} key={idx} />
      })}
    </div>
  );
}

export default ResultGrid;
