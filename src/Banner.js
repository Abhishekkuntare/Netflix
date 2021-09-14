import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from "./Requests";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchRomanticMovies)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;

        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://gmedia.playstation.com/is/image/SIEPDC/netflix-page-banner-desktop-02-en-10nov20?$native--t$")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movies, Series, Shows</h1>
                <div className="banner__buttons">
                    <button className="banner__button" >Play</button>
                    <button className="banner__button" >My List</button>
                </div>
                <h1 className="banner__description">{truncate(`Netlfix ipsum dolor sit amet rum quas
                
                New Realese  ipsum dolor sit amet rum quasLorem ipsum dolor sit amet rum quasLorem ipsum dolor sit amet rum quasLorem ipsum dolor sit amet rum quasLorem ipsum dolor sit amet rum quasvvLorem ipsum dolor sit amet rum quasLorem ipsum dolor sit amet rum quas quo quod?`, 150)}</h1>

            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
