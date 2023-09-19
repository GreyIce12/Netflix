import React from 'react'
import Banner from './Banner';
import Navbar from './NavBar';
import requests from './Request';
import Row from './Row';

export default function HomeScreen() {
  return (

    <div className='home' >
    <Navbar/>
    <Banner/>
    <Row title ="Comedy"
    fetchUrl = {requests.fetchComedy}
    IsLargeRow
    />
  
  </div>
  )
}
