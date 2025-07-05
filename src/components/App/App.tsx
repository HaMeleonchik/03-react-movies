import './App.module.css'
import SearchBar from "../SearchBar/SearchBar"
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import MovieModal from "../MovieModal/MovieModal";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [Movie, setMovie] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(false)
  const [isErrorMessage, setErrorMessage] = useState(false)
  const [isSelectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  async function handleSearch(searchQuery: string) {
console.log(isSelectedMovie);

    try {
      setMovie([]);
      setLoading(true)
      setErrorMessage(false)
      const data = await fetchMovies(searchQuery)
      if (data.length === 0) {
        toast.error("No movies found for your request.")
        return
      }
    setMovie(data);
     
   } catch{
    setErrorMessage(true)
    } finally {
      setLoading(false)
   }

  }
  
  return <>
    <Toaster/>
    <SearchBar onSubmit={handleSearch} />
    <Loader isLoading={isLoading} />
    <ErrorMessage isErrorMessage={isErrorMessage}/>
    <MovieGrid movies={Movie} onSelect={setSelectedMovie} />
    {}
    {isSelectedMovie && <MovieModal movie={isSelectedMovie} onClose={()=>setSelectedMovie(null) } />}
  </>
}

