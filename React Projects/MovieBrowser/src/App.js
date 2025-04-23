import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import NoPage from "./components/NoPage";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { useState, useEffect } from "react";
// something new
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

// ... 

// link: https:api.themoviedb.org/3/search/movie?api_key=39128cc86f2afc4208072006bd65a71a&language=en-US&query=${searchText}&page=1&include_adult=false

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState(""); // searchText is the state variable
  const [onClickVar, setOnClickVar] = useState(""); // which will change every time we click the search button

  useEffect(() => {
    // function which takes an anonymous arrow function
    console.log("fetching")
    if(searchText){ // if there is search text, do the below api request
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTEyOGNjODZmMmFmYzQyMDgwNzIwMDZiZDY1YTcxYSIsIm5iZiI6MTc0NDQ0ODM4OS45MzcsInN1YiI6IjY3ZmEyYjg1ZGU1ZTRkZWM2MmFkYWFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZUOpMCZIleOIy8dJ_-5eQsvpSP0kCIUIV5zYrvf2z8I",
        },
    })
        .then(response => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [onClickVar]); // it will monitor the [searchText] for changes (its second parameter). TODO: put onClickVar
// put searchView component in a useEffect & return it on change of button in navbar

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} onClickVar={onClickVar} setOnClickVar={setOnClickVar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} onClickVar={onClickVar} />
          }
        />
        <Route path="/movie/:id" element={<MovieView />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
