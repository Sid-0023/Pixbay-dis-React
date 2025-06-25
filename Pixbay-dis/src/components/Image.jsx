import React from "react";
import { useContext } from "react";
import PixbayContext from "../project/PixbayContext";

const Image = () => {
  const { images } = useContext(PixbayContext);
  return (
    
      <>
       <div style={{ display: "flex",justifyContent:"center" ,marginTop:"40px",flexWrap: "wrap", gap: "16px" }}>
      {images.map((data) => (
        <div className="card" style={{ width: "20rem" }} key={data.id}>
          <a href={data.largeImageURL} target="_blank" rel="noreferrer">
            <img src={data.largeImageURL} className="card-img-top" alt={data.tags} style={{height:"240px"}} />
          </a>
          
          
        </div>
      ))}
    </div>
  
</>
  )}

export default Image;