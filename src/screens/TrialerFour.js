import React from 'react'
import "./TrialerFour.css"

const TrialerFour = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image5"
                src="https://media-eng.dhakatribune.com/uploads/2020/05/dark-1590494835643.jpg" alt="" />
            <header
                className="banner trailerFour"
            >
                <div className="banner__contents">
                    <h1 className="banner__title">Dark</h1>
                    <div className=" trialerFour__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season-3 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerFour__des">
                        <p> Director:- Jantje Friese, Ronny Schalk</p>
                        <p>  Genres: Thriller, Drama, Mystery, Science fiction</p>
                        <p>Stars:-  Louis Hofmann
                            Jonas Kahnwald
                            Lisa Vicari (Martha Nielsen)</p>

                        <p>Program creators: Baran bo Odar, Jantje Friese
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerFour__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/cq2iTHoLrt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );



}

export default TrialerFour
