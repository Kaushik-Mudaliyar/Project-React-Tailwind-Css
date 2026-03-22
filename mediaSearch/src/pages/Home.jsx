import SearchBar from "../components/SearchBar.jsx";
import Tab from "../components/Tab.jsx";
import ResultGrid from "../components/ResultGrid.jsx";
import { useSelector } from "react-redux";
function Home() {
  const query = useSelector((state) => state.search.query);
  return (
    <div>
      <SearchBar />
      {query == "" ? (
        ""
      ) : (
        <div>
          <Tab />
          <ResultGrid />
        </div>
      )}
    </div>
  );
}

export default Home;
