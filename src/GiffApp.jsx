import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({defaultCategories = []}) => {

  const [categories, setCategories] = useState(defaultCategories)

  return (
    <div>
        <AddCategory setCategories={setCategories}/>
        <ol>
          { categories.map(category =>  ( 
            <GifGrid 
              category={category} 
              key={category}
            />
            ))
          }
        </ol>
    </div>
  )
}

export default GifExpertApp