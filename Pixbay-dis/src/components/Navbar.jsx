import React from "react";
import "./Navbar.css"
import { useContext } from "react";
import PixbayContext from "../project/PixbayContext";

const Navbar = () => {
    const{fetchImagebycategory,setQuery}=useContext(PixbayContext)
  return (
   
    <>
    <div className="Navbar">
      <button type="button" className="btn btn-outline-primary"
      onClick={()=>fetchImagebycategory("nature")}>
        Nature
      </button>
      <button type="button" className="btn btn-outline-secondary"
       onClick={()=>fetchImagebycategory("science")}>
        Science
      </button>
      <button type="button" className="btn btn-outline-success"
       onClick={()=>fetchImagebycategory("buildings")}>
        Buildings
      </button>
      <button type="button" className="btn btn-outline-danger"
       onClick={()=>fetchImagebycategory("transportation")}>
        Transportation
      </button>
      <button type="button" className="btn btn-outline-warning"
       onClick={()=>fetchImagebycategory("travel")}>
       Travel
      </button>
      <button type="button" className="btn btn-outline-info"
       onClick={()=>fetchImagebycategory("music")}>
        Music
      </button>
      <button type="button" className="btn btn-outline-light"
       onClick={()=>fetchImagebycategory("places")}>
        Places
      </button>
      <button type="button" className="btn btn-outline-dark"
       onClick={()=>fetchImagebycategory("animals")}>
       Animals
      </button>
    </div>
    <div className="input-container">
    <input  type="text"  placeholder="Enter your search query"
     onChange={(e)=>setQuery(e.target.value)}/>
    </div>
    </>
  );
};

export default Navbar;


