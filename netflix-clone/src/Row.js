 import axios from './axios.js';
import React, { useEffect, useState } from 'react'
import './Row.css'

function Row({title, fetchUrl, IsLargeRow }) {

    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchdata();
    }, [fetchUrl])
  return (
    <div className='row'>
        <h2>{title}</h2>
<div className="row_posters">
        {movies.map(movie =>(

            <img
             className= {`row_poster ${IsLargeRow && "row_posterLarge"}`}
            src= {` ${baseUrl}${IsLargeRow ? movie.poster_path : movie.backdrop_path} `} alt="" />
        )
        )}
        </div>
    </div>
  )
}

export default Row