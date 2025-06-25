import React, { useEffect,useState } from 'react'
import PixbayContext from './PixbayContext'

const PixbayState = (props) => {
    const [images, setImagesData] = useState([])
    const [query,setQuery] = useState('london')

    const Api_data="49199817-b586259a8afe8991235cc4e8a"
    useEffect(() => {
        
        const fetchApiData= async ()=>{
            const api=await fetch(`https://pixabay.com/api/?key=${Api_data}&q=${query}&image_type=photo&pretty=true&per_page=100`)
            const data=await api.json();
            console.log(data.hits)
            setImagesData(data.hits)
           
        }
        fetchApiData()
      
        
      }, [query])
      const fetchImagebycategory=async(cat)=>{
        const api=await fetch(`https://pixabay.com/api/?key=${Api_data}&category=${cat}&image_type=photo&pretty=true&per_page=100`)
        const data=await api.json();
        console.log(data.hits)
        setImagesData(data.hits)
      }
      
      return (
    <PixbayContext.Provider value={{images,fetchImagebycategory,setQuery}}>
        {props.children}
    </PixbayContext.Provider>
  )
}

export default PixbayState


