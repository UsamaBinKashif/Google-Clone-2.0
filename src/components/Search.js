import React, { useState } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { actionTypes } from "../StateProvider/reducer";

function Search({ hideButtons = false }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (sou) => {
    sou.preventDefault();

    console.log("Click google search button>>>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <form className="search ">
      <div className="search_input border-gray-800 dark:border-gray-50 border rounded-full flex  cursor-pointer p-3 w-[65vw] m-[auto] dark:bg-gray-700">
        <input
          value={input}
          onChange={(sou) => setInput(sou.target.value)}
          className=" border-none text-gray-900 text-sm block w-full bg-inherit dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white outline-none"
        />
        🔍
      </div>
      {!hideButtons ? (
        <div className="search_buttons flex items-center justify-center mt-10">
          <button
            onClick={search}
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 border outline-none   font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600"
          >
            Google Search
          </button>
          <button className="text-gray-900 bg-white border border-gray-700 outline-none hover:bg-gray-100   font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            I'm Feeling Lucky
          </button>
        </div>
      ) : (
        <div className="search_buttons">
          <button
            className="hidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search 👀
          </button>
          <button className="hidden" variant="outlined">
            I'm Feeling Lucky 🔍
          </button>
        </div>
      )}
    </form>
  );
}

export default Search;
