import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { faqData } from "../../assets/data/kc";

function KCSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1); // Initialize to -1 (no selection)
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setSelectedResultIndex(-1); // Reset selected result when search is empty
      return;
    }

    const results = faqData.flatMap((section, sectionIndex) => {
      return section.ques
        .filter((question) =>
          question.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((question, questionIndex) => ({
          sectionIndex,
          questionIndex,
        }));
    });

    if (results.length === 1) {
      const { sectionIndex, questionIndex } = results[0];
      navigate(`/knowledge-centre/${sectionIndex + 1}`);
    } else {
      setSearchResults(results.slice(0, 5));
    }
  }, [searchQuery, navigate]);

  const handleResultClick = (sectionIndex, questionIndex) => {
    navigate(`/knowledge-centre/${sectionIndex + 1}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedResultIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedResultIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchResults.length - 1)
      );
    } else if (e.key === "Enter" && selectedResultIndex !== -1) {
      const { sectionIndex, questionIndex } =
        searchResults[selectedResultIndex];
      handleResultClick(sectionIndex, questionIndex);
    }
  };

  // Focus the input field when the component mounts or when searchQuery changes
  useEffect(() => {
    inputRef.current.focus();
  }, [searchQuery]);

  return (
    <>
      <input
        type="search"
        className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-double rounded-l-md placeholder:text-textColor"
        placeholder="Anything you want to know..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button
        onClick={() => handleSearch()}
        className="btn mt-0 rounded-[0px] rounded-r-md"
      >
        Search
      </button>

      {searchResults.length > 0 && (
        <div className="absolute top-[60px] sm:top-14 w-full z-20 backdrop-blur-xl ">
          <ul className="space-y-3 p-5 cursor-pointer rounded-b-2xl bg-black/10">
            {searchResults.map(({ sectionIndex, questionIndex }, index) => (
              <li
                className={`p-1 text-[20px] rounded-md ${
                  index === selectedResultIndex
                    ? "bg-primaryColor text-white"
                    : "hover:shadow-2xl hover:bg-primaryColor hover:text-white"
                }`}
                key={`${sectionIndex}-${questionIndex}`}
                onClick={() => handleResultClick(sectionIndex, questionIndex)}
              >
                {faqData[sectionIndex].ques[questionIndex].question}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default KCSearch;
