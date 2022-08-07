import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Logo from "../assets/chrome.png";
import Toggle from "../components/Toggle";
import "./SearchPage.css"

function SearchPage() {
  // eslint-disable-next-line no-unused-vars
  const [{ term }, dispatch] = useStateValue();

  //LIVE API Call 
  const {data} = useGoogleSearch(term);

//   const data = Response;

  
  return (
    <div className="searchPage ">
      {/* Search Page  */}
      <div className="searchPage_header flex items-center justify-around py-2">
        <Link to="/">
          <img className="searchPage_logo w-10" src={Logo} alt="" />
        </Link>
        <Search hideButtons />
        <Toggle />
      </div>
      {/* Search Page End */}

      {/* Search Page Navbar */}
      <div className="searchPage__navbar flex justify-around mt-5  font-semibold border-b border-gray-200 dark:border-gray-600">
        <div className="searchPage__navbar-left ">
          <ul className="flex gap-5 ">
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center ">
              <Link to="/all">All 🔍</Link>
            </li>
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center ">
              <Link to="/news">News 📰 </Link>
            </li>
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center ">
              {" "}
              <Link to="/images">Images 📷</Link>
            </li>
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center ">
              <Link to="/shopping">Shopping 🛒</Link>
            </li>
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center ">
              <Link to="/maps">Maps 🗺️</Link>
            </li>
          </ul>
        </div>

        <div className="searchPage__navbar-right">
          <ul className="flex gap-5">
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center  ">
              {" "}
              <Link to="/settings" >Settings ⚙️</Link>
            </li>
            <li className="pb-2 border-b-2 border-gray-50 dark:border-gray-900  hover:border-gray-500 hover:border-b-2 dark:hover:border-gray-400 text-center ">
              {" "}
              <Link to="/tools">Tools 🔧</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Search Page Navbar End */}

      {term && (
        <div className="searchPage_results mt-5 dark:bg-gray-900 flex flex-col px-40">
          <p className="searchPage_resultCount  text-sm flex justify-center items-center mt-2 font-semibold">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result mt-4 ">
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={item.link} target="_blank" className="text-blue-600 cursor-pointer">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage w-14 h-10 object-contain"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} 
              </a>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                className="searchPage_resultTitle text-xl font-semibold"
                href={item.link}
                target="_blank"
              >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet text-sm mb-2">{item.snippet}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
