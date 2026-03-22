import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-900 text-white p-3 flex justify-between">
      <div>
        <h1 className="md:text-2xl font-bold text-emerald-500">MediaSearch</h1>
      </div>
      <div className=" flex gap-5">
        <Link
          to="/"
          className="bg-emerald-500 px-3 py-1 rounded active:scale-95"
        >
          Home
        </Link>
        <Link
          to="/collection"
          className="bg-emerald-500 px-2 py-1 rounded active:scale-95"
        >
          Collection
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
