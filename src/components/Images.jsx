import React, { useContext } from 'react'
import PixbayContext from '../project/PixbayContext'

const Images = () => {
    const {imagesData}=useContext(PixbayContext);
  return (
   
    <div className="flex">
      {imagesData.map((image)=>(
        <div key={image.id}>
        <div className="items">
            <img src={image.largeImageURL} alt="images" />
        </div>
      </div>
    ))}
      
    </div>
  )
}

export default Images
