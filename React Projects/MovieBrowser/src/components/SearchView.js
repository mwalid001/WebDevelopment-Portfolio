import Hero from "./Hero.js";
import { Link } from "react-router-dom";

// TMDB API KEY = 39128cc86f2afc4208072006bd65a71a
//Example link for movie searches = https://api.themoviedb.org/3/search/movie?query=Jack+Reacher

// TODO: use useEffect & useState to rerender searchResults
/* 1- create a useState variable in navbar that gets changed onClick of the search
2- import that state variable from nav component into the file with the useEffect that query's the search for results */


const MovieCard = ({ movie }) => {

  function appropriatePosterUrl(){
    if(movie.poster_path){ // if poster path exists
      return `https://image.tmdb.org/t/p/original${movie.poster_path}`
    }
    else{ // no image found
      return "https://ih1.redbubble.net/image.1861339560.3228/fposter,small,wall_texture,product,750x1000.jpg";
    }
  }

  const posterUrl = appropriatePosterUrl();
  const detailUrl = `/movie/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />

        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults, onClickVar }) => {
  // props passed in the app
  const title = `Searching for ${keyword}`; // movie title

  let empty = true; // for no results msg
  const resultsHTML = searchResults.map((obj, i) => {  // mapping through movie objects
    if(obj.original_language === 'en' && obj.adult === false){ // if english film & not adult
      empty= false; // for displaying no results
      return <MovieCard movie={obj} key={i}/> // make it into card
    }
  })

  
  return (
    <>
      <Hero text={title} />
      {resultsHTML &&
        <div className="container"> {/* bootstrap container */}
          <div className="row">
            {resultsHTML} 
          </div>
        </div> 
      }
      {empty && keyword && onClickVar &&
      <h3 className="bg-warning text-dark p-5 my-5 d">No Results Found</h3>
      }
    </>
  );
};

export default SearchView;
