import React from 'react'
import "./Trialer27.css"

const Trialer27 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image28"
                src="https://m.media-amazon.com/images/M/MV5BYmJmZDkzNjQtZWYxZS00MjY2LTlhYmItYjI3YzQxMzIxOGNmXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg" alt="" />
            <header
                className="banner trailer27"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">TaG</h1>
                    <div className=" trialer27__title ">
                        <p>2018 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer27__des">
                        <p>  Director: Jeff Tomsic

                        </p>
                        <p>     Genre: Fantasy; Based on True-Story
                        </p>
                        <p>Stars:- Jeremy Renner
                            Jerry Pierce
                            Jon Hamm </p>

                        <p> producers: Bob Callahan
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer27__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/kjC1zmZo30U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}


export default Trialer27
