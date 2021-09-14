import React from 'react'
import "./TrialerOne.css"

const TrialerOne = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image2"
                src="https://wallpaperaccess.com/full/2633156.jpg" alt="" />
            <header
                className="banner trailerOne">
                <div className="banner__contents">
                    <h1 className="banner__title">Bird Box </h1>
                    <div className=" trialerOne__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Movie Part-1 |</p>
                        <p>Uv TV Shows |</p>
                    </div>
                    <h6 className="trialerOne__des">
                        <p> Director By :- Susanne Bier</p>
                        <p> Based on:- Bird Box; by Josh Malerman</p>
                        <p> Starring: Sandra Bullock; Trevante Rhodes; Jo...
                        </p>

                        <p>box office & company:- info 18 User reviews</p>
                    </h6>
                </div>
            </header>
            <iframe className="trialerEk__trialer"
                width="1518" height="748" src="https://www.youtube.com/embed/o2AsIXSh2xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>



    );
}

export default TrialerOne
