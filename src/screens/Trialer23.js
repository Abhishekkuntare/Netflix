import React from 'react'
import "./Trialer23.css"

const Trialer23 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image24"
                src="https://www.filmink.com.au/wp-content/uploads/2020/10/extraction.jpg" alt="" />
            <header
                className="banner trailer23"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Extraction</h1>
                    <div className=" trialer23__title ">
                        <p>2020|</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer23__des">
                        <p>    Director: Sam Hargrave

                        </p>
                        <p>     Story by: Ande Parks; Joe Russo; Anthony Russo

                        </p>
                        <p>Stars:-Chris Hemsworth
                            Tyler Rake
                            Golshifteh  </p>

                        <p>Produced by: Joe Russo; Anthony Russo; Mike Larocca;

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer20__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/L6P3nI6VnlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer23
