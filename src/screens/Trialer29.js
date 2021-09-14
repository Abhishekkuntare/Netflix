import React from 'react'
import "./Trialer29.css"

const Trialer29 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image30"
                src="https://cdn.wallpapersafari.com/28/54/q1XGDP.jpg" alt="" />
            <header
                className="banner trailer29"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Oblivion</h1>
                    <div className=" trialer29__title ">
                        <p>2013 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer29__des">
                        <p>        Director: Joseph Kosinski

                        </p>
                        <p>     Genre: Fantasy; Drama; Mystery
                        </p>
                        <p>Stars:- Tom Cruise
                            Jack Harper
                            Andrea Riseborough</p>

                        <p>Adapted from: Oblivion

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer29__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/XmIIgE7eSak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer29
