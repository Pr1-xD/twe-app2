import React, { useState } from 'react';
import Landing from './Landing';
import Cards from './Cards'
import Nav from './Nav'
import Feature from './Feature';
import axios from 'axios'
import CardsRender from './CardsRender';

function Home() {
    const [allArticles,setAllArticles]=useState()

    function apiCall(){
        console.log("Clicked")
        axios.get(`https://thepc.herokuapp.com/api/edition`)
      .then(res => {
        console.log(res)
        setAllArticles(res.data)
      })
    }

    return (
        <div>
            <Nav/>
            <button type="button" class="btn btn-primary" onClick={apiCall}>Primary</button>
            <Landing/>
            <Feature/>
            {/* <Cards/> */}
            {allArticles?<CardsRender allArticles={allArticles}/>:<></>}
        </div>
    );
}

export default Home;  