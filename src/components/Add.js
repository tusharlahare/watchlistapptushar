import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { LoginForm } from "./Login";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `http://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_MY_KEY}&language=en-US&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.Search) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]);
      });
  };

  const [showLoginForm, setShowLoginForm] = useState(false); 

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm); 
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie... "
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
