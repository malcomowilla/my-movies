import { useState, useEffect } from "react"
import Movies from "./Movies"
import Filter from "./Filter"
import {motion} from 'framer-motion'




const App = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFilter] = useState([])
  const [genre, setGenre] = useState(0)

  const my_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWJkYTNkNGM2NzE5ZGFkZTRkMGQwNGIyMThmZWQzZCIsInN1YiI6IjY1NmMzZjQ1Y2VkZTY5MDBlNWJiYmQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jv23Y7mJtW785GTeHS9kF7t0YTyTZwXDlcJhkQHxdpE'
    const token = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization:  `Bearer ${my_token}`
      }
    }


const fetchMovies =   async ()=> {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', token)
  const movies = await data.json() 
  console.log(movies)
  setPopular(movies.results)
  setFilter(movies.results)
}


useEffect(()=> {
  fetchMovies()
}, [])

  return (
    <motion  className="w-screen h-screen ">
        <Filter popular={popular} setFilter={setFilter}
        genre={genre} setGenre={setGenre} filtered={filtered}
        />

<motion.div  layout  initial={{opacity: 1}} animate={{opacity:1}}   transition={{layout: {duration:0.3}}} className="grid grid-auto-fit m-4 gap-4 rounded-full">
{filtered.map(movie=> {
  return <Movies  key={movie.id} movie={movie}/>
})}



</motion.div>
    </motion>
  )
}

export default App








