import React from 'react'
import "./TrialerEleven.css"

const TrialerEleven = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image12"
                src="https://flixwatch.co/wp-content/uploads/80123777.jpg" alt="" />
            <header

            >
                <div className="banner__contents">
                    <h1 className="banner__title">MINE</h1>
                    <div className=" trialerEleven__title ">
                        <p>2017|</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerEleven__des">
                        <p>     Directed by:-
                            Fabio Guaglione
                            Fabio Resinaro</p>
                        <p>   Screenplay by:-
                            Fabio Guaglione
                            Fabio Resinaro</p>
                        <p>Stars:-  Armie Hammer
                            Annabelle Wallis
                            Tom Cullen</p>

                        <p>Produced by:-
                            Peter Safran
                            Andrea Cucchi</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerEleven__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/KdB5iPt-G3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default TrialerEleven
