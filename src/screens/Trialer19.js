import React from 'react'
import "./Trialer19.css"

const Trialer19 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image20"
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc9OniU9HtoFnCc1UBhajEhTt6jf-nbpZDbt7xs6tytqBCNZHb04G0uDonqxEsZTzbQNbLf-xCKSLqXcmBR2wn91R95V.jpg?r=ff8" alt="" />
            <header
                className="banner trailer19"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">IO</h1>
                    <div className=" trialer19__title ">
                        <p>2019 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer19__des">
                        <p>    Director: Jonathan Helpert
                        </p>
                        <p>       Cinematography: André Chemetoff
                        </p>
                        <p>Stars:- Margaret Qualley
                            Sam Walden
                            Anthony Mackie </p>

                        <p>Producers: Jason Michael Berman, Laura Rister
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer19__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/y3GLhAumiec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default Trialer19
