import React from 'react'
import "./Trialer30.css"

const Trialer30 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image31"
                src="https://static01.nyt.com/images/2019/09/15/arts/15DOLEMITE-EXPLAINER-1/15DOLEMITE-EXPLAINER-1-videoSixteenByNineJumbo1600.jpg" alt="" />
            <header
                className="banner trailer30"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Dolemite is my name</h1>
                    <div className=" trialer30__title ">
                        <p>2019 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer30__des">
                        <p>    Director: Craig Brewer

                        </p>
                        <p>    Written by: Scott Alexander; Larry Karaszewski

                        </p>
                        <p>Stars:- Rudy Ray Moore
                            Eddie Murphy
                            Eddie Murphy</p>

                        <p>Produced by: Eddie Murphy; John Davis; John Fox

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer30__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/Ws1YIKsuTjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}





export default Trialer30
