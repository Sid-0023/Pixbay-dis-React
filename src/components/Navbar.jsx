import React, { useContext } from "react";
import PixbayContext from "../project/PixbayContext";

const Navbar = () => {
  const { fetchImagebycategory,setQuery } = useContext(PixbayContext);

  return (
    <>
      <div className="container text-center my-3">
        <button
          onClick={() => fetchImagebycategory("nature")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImagebycategory("science")}
          type="button"
          className="btn btn-outline-secondary mx-3"
        >
          Science
        </button>
        <button
          onClick={() => fetchImagebycategory("buildings")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          Building
        </button>
        <button
          onClick={() => fetchImagebycategory("transportation")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Transportation
        </button>
        <button
          onClick={() => fetchImagebycategory("travel")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Travel
        </button>
        <button
          onClick={() => fetchImagebycategory("music")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Music
        </button>
        <button
          onClick={() => fetchImagebycategory("places")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          Places
        </button>
        <button
          onClick={() => fetchImagebycategory("animals")}
          type="button"
          className="btn btn-outline-dark mx-3"
        >
          Animal
        </button>
      </div>

      <div  className="container" style={{width:"700px"}}>
      <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control bg-dark text-light"></input>
      </div>
    </>
  );
};

export default Navbar;


