import { useNavigate, Link } from "react-router-dom"; // import useNavigate hook & Link

const Navbar = ({ searchText, setSearchText, onClickVar, setOnClickVar }) => {
  // using const keyword instead of function. (anonymous arrow function going into a const called 'Navbar')
  // jsx (javascript & html)
  // TODO: create a useState variable in navbar that gets changed onClick of the search
  const navigate = useNavigate();

  
  const updateSearchText = (e) =>{
    navigate('/search') // when searching go to search page
    setSearchText(e.target.value); // event, target(input), value of it
  }

  const updateOnClickVar = (e) =>{
    e.preventDefault(); // prevent btn default
    // setting it to searchText for it to "simply change"
    setOnClickVar(searchText) // OnClickVar would change triggering useEffect in the App.js , 
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit" onClick={updateOnClickVar}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
