import React from 'react'
import "./TrialerNine.css"

const TrialerNine = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image10"
                src="https://www.whats-on-netflix.com/wp-content/uploads/2019/04/The-Perfection-Netflix-Original-Film.jpg" alt="" />
            <header
                className="banner trailerNine"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">The Perfection</h1>
                    <div className=" trialerNine__title ">
                        <p>2019 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerNine__des">
                        <p>     Director:- Richard Shepard
                        </p>
                        <p>  Music by: Paul Haslinger
                        </p>
                        <p>Stars:- Allison Williams(Charlotte)
                            Allison Williams
                            Charlotte
                            Logan Browning(Lizzie)</p>

                        <p>    Production; companies: Miramax; Capstone Film Group</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerNine__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/q57D6kF5B1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default TrialerNine
