import Hero from "./Hero.js";
import { useParams } from "react-router-dom"; // put data if didn't work
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({}); // movie details is an object
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {// make api rquest on change of id
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTEyOGNjODZmMmFmYzQyMDgwNzIwMDZiZDY1YTcxYSIsIm5iZiI6MTc0NDQ0ODM4OS45MzcsInN1YiI6IjY3ZmEyYjg1ZGU1ZTRkZWM2MmFkYWFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZUOpMCZIleOIy8dJ_-5eQsvpSP0kCIUIV5zYrvf2z8I",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false)
      });
  }, [id]); // looking for (changes in) id

  function renderMovieDetails(){
    if(isLoading){
        return <Hero text="Loading..."/> // until api loads
    }
    let ratingColor;
    if(movieDetails){
        const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

        movieDetails.vote_average>5? ratingColor="text-success" : ratingColor="text-error"
        
        return (
            <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                {movieDetails.poster_path &&
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterUrl} alt="..." className="img-fluid shadow rounded" />
                        </div>
                        <div className="col-9">
                            <h3>{movieDetails.original_title}</h3>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                            <p>
                              <strong className={`${ratingColor}`}>Rating: {movieDetails.vote_average}</strong>
                              {/* <br /> <span className="text-secondary">Vote Count: {movieDetails.vote_count}</span> */}
                            </p>
                            <p>Release Date: {movieDetails.release_date}</p>
                        </div>
                    </div>
                </div>}
            </>
        )
    }
  }

  


  return renderMovieDetails();
};

export default MovieView;
