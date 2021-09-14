import React from 'react'
import "./TrialerThree.css"

const TrialerThree = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image4"
                src="https://wallpaperaccess.com/full/2371566.jpg" alt="" />
            <header
                className="banner trailerThree"
            >
                <div className="banner__contents">
                    <h1 className="banner__title">Lucifer </h1>
                    <div className=" trialerThree__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season 6 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerThree__des">
                        <p> Director:- Tom Kapinos, Joe Henderson</p>
                        <p>     Genres: Fantasy television, Comedy - drama</p>
                        <p>Stars:-  Tom Ellis, Lauren German, Lesley - Ann Brandt</p>

                        <p>   Executive producers: Tom Kapinos, Jerry Bruckheimer, Alex Katsnelson</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerThree__trailer"
                width="1200" height="748" src="https://www.youtube.com/embed/ueMwVGBwqRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


    );
}

export default TrialerThree
