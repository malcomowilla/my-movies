import {Link} from 'react-router-dom'
import { useEffect } from 'react'



const Filter = ({popular, setFilter, genre, setGenre,filtered}) => {


    useEffect(()=> {
if (genre === 0) {
    setFilter(popular)
    return
}
      
        setFilter(popular.filter((movie) => movie.genre_ids.includes(genre)));

    },[genre] )


  return (
    <div className="flex justify-around underline" >
        
        {/* <button>All</button>
        <button>Comedy</button>
        <button>Action</button> */}

           <Link to="/"  onClick={()=>setGenre(0)}>All</Link>
      <Link to="/comedy" onClick={()=>setGenre(35)}>Comedy</Link>
      <Link to="/action" onClick={()=>setGenre(28)}>Action</Link>
        
        </div>
  )
}

export default Filter































