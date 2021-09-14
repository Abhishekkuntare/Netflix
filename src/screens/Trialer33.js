import React from 'react'
import "./Trialer33.css"

const Trialer33 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image34"
                src="https://images-na.ssl-images-amazon.com/images/I/A1GqNCYnRnL._RI_.jpg" alt="" />
            <header
                className="banner trailer33"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">SnowFall</h1>
                    <div className=" trialer33__title ">
                        <p>2017 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer33__des">
                        <p>    Director: Craig Brewer

                        </p>
                        <p>  Executive producers: Dave Andron; Eric Amadio; Trevor Engelson; Michael

                        </p>
                        <p>Stars:-Damson Idris
                            Franklin Saint
                            Carter Hudson</p>

                        <p>Genre: Crime drama


                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer33__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/PmKgACCJtL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer33
