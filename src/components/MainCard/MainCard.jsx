import React, { useState } from 'react'
import "./MainCard.css"
// import mainImage from "../../images/main.jpeg"
import axios from 'axios'
import { useEffect } from 'react';
const url = "https://api.themoviedb.org/3/movie";
const apiKey = "6b3665330e38babc04d3c7406d5c41ba";
// const category = "popular";
const imageUrl = "https://image.tmdb.org/t/p/w500"




const MainCard = () => {
    axios.get()

    return (
        <>
        <CardContainer title="Popular on Netflix" category="popular"/>
        <CardContainer title="Upcoming on Netflix" category="upcoming"/>
        <CardContainer title="Trending Now" category="top_rated"/>
        <CardContainer title="Now Playing" category="now_playing"/>
        </>
    )
}




export const CardContainer = ({title,category}) => {

    const [movie, setMovie] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{

            const {data:{results}} = await axios.get(`${url}/${category}?api_key=${apiKey}&language=en-US&page=1`);
            // console.log(results)
            setMovie(results)
        }
        fetchData();
    },[category])
    return (

        <div className="mainCardContainer">
            <div className="heading"><h3>{title}</h3> </div>
            <div className="cards">

            { movie!==undefined && movie.map((item,index)=>(
                // console.log(item);
                <Card key={index} image={`${imageUrl}/${item.poster_path}`} />
            ))}
                
                

            </div>
        </div>

    )
}


export const Card = ({image}) => {
    return (

        <div className="card">
            <img src={image} alt="" />
            {/* <p className="movieName">Name</p> */}
            {/* <button className="watchNow">Watch Now</button> */}
        </div>



    )
}

export default MainCard