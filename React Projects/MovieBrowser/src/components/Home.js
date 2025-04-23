import Hero from "./Hero.js";

const Home = () => {
  return (
    <>
      <Hero text="Home Page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-2 my-5"> {/* offset-2 makes it move to right 2 columns */}
            <h1>Find your favorite movies</h1>
            <p className="lead"> {/* lead makes text bigger */}
              Millions of movies, <i>A personal project.</i>
            </p>
            <img id="home-image" className="rounded" src="https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
