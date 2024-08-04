import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(true);

  const handleShortenClick = () => {
    setClicked(true);
  };

  const handleExpandClick = () => {
    setClicked(false);
  };

  return (
    <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="w-full">
        <div
          className="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
          role="group"
        >
          <Link
            to="/"
            className={`px-5 py-1.5 text-center text-xs font-medium rounded-lg hover:bg-black-200 ${
              clicked
                ? "text-gray-900 bg-gray-900 dark:bg-gray-300"
                : "text-gray-900 bg-white hover:bg-gray-500 dark:text-white dark:bg-gray-700"
            }`}
            onClick={handleShortenClick}
          >
            <button type="button">Shorten</button>
          </Link>

          <Link
            to="/expand"
            className={`px-5 py-1.5 text-xs text-center font-medium rounded-lg hover:bg-black-200 ${
              !clicked
                ? "text-gray-900 bg-gray-900 dark:bg-gray-300"
                : "text-gray-900 bg-white hover:bg-gray-500 dark:text-white dark:bg-gray-700"
            }`}
            onClick={handleExpandClick}
          >
            <button type="button">Expand</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
