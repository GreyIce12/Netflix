
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./Banner.css";
import axios from './axios';
import requests from './Request';

function Banner() {

    const[movie, setMovie]=useState([]);

    useEffect(() =>{

        async function fetchdata(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);

            return request;
        }

        fetchdata();

    }, []);

    console.log(movie);

    function truncate(string, n ){
        
        return string?.length > n ? string.substr(0, n - 1) + '...' :string;
    }
  return (
    <header className='Banner' 
    style={{
        
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
        
    
    }}>

        <div className="banner_contents">
            <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name }</h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>

            <h1 className="banner_desc">
                {truncate(movie?.overview, 150)}
            </h1>

        </div>
        <div className="banner_fade"/>


    </header>
  )
}

export default Banner