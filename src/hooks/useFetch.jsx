import { useEffect, useState } from "react"
import { getGiffs } from "./getGifs"

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: []
  })

  useEffect(() => {
    getGiffs(category)
      .then(imgs => {
        setState({
          data: imgs
        })
      })
  }, [category])

  return state
}