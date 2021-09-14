import React from 'react'
import "./TrialerTwo.css"


const TrialerTwo = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image3"
                src="https://wallpapercave.com/wp/wp6581266.jpg" alt="" />
            <header
                className="banner trailerTwo">
                <div className="banner__contents">
                    <h1 className="banner__title">Money Heist</h1>
                    <div className=" trialerTwo__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season 5 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerTwo__des">
                        <p> Director:- 	Álex Pina</p>
                        <p>   Genre	:- Crime drama[1]
                            Heist[2]
                            Thriller[3]</p>
                        <p>Stars:-  Úrsula Corberó
                            Álvaro Morte
                            Itziar Ituño</p>

                        <p>producers
                            Sonia Martínez
                            Jesús Colmenar</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerTwo__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/htqXL94Rza4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default TrialerTwo
