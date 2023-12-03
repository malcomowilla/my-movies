import {motion} from 'framer-motion'




const Movies = ({movie}) => {

  return (
        
        <>
        <motion.div   layout className="text-center font-mono  ">
         <h2 className="text-center">{movie.title}</h2>
         <img  className="object-fill rounded-lg h-[250px]" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      </motion.div>
        
        
        </>
       
  )
}

export default Movies










// `https://image.tmdb.org/t/p/w500${movie.backdrop_path}





























