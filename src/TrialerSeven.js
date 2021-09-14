import React from 'react'
import "./TrialerSeven.css"

const TrialerSeven = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image8"
                src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/oxygen-ending.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5" alt="" />
            <header
                className="banner trailerSeven"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Oxygen</h1>
                    <div className=" trialerSeven__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerSeven__des">
                        <p> Director:- Alexandre Aja</p>
                        <p>  Written by: Christie LeBlanc
                            Cast</p>
                        <p>Stars:- Mélanie Laurent (Elizabeth Hansen)
                            Mélanie Laurent
                        </p>

                        <p>    Language: French
                            Music by: Rob
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerSeven__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/8IqXgZd-P98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default TrialerSeven
