import React from 'react'
import { useFetchGifs } from '../hooks/useFetch'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

  const {data: images, loading} = useFetchGifs(category)
  
  return (
    <>
      <h3>{category}</h3>
      <div>
        {
          images.map(img => (
            <GifGridItem 
              key={img.id}
              {...img}
              />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid