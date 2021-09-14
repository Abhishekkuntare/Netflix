import React from 'react'
import "./TrialerEight.css"

const TrialerEight = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image9"
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/02/855067-13reasonswhy.jpg" alt="" />
            <header
                className="banner trailerEight"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">13 REASONS WHY</h1>
                    <div className=" trialerEight__title ">
                        <p>2020 |</p>
                        <button>18+</button> |<p>Season 4 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerEight__des">
                        <p> Director:- (Justin Foley)
                            Brandon Flynn</p>
                        <p>  Genres: Drama, Teen drama, Mystery, Psychological
                        </p>
                        <p>Stars:- Dylan Minnette(Clay Jensen)

                            Clay Jensen</p>

                        <p> Awards: NAACP Image Award for Outstanding Directing</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerEight__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/QkT-HIMSrRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default TrialerEight
