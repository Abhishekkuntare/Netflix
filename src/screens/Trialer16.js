import React from 'react'
import "./Trialer16.css"

const Trialer16 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image17"
                src="https://m.media-amazon.com/images/M/MV5BNzUzOWM2N2UtNTA1ZS00N2YwLWE4NmUtYTE4MTJmZDdlMjU3XkEyXkFqcGdeQWFybm8@._V1_.jpg" alt="" />
            <header
                className="banner trailer16"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("")`,
                    backgroundPosition: "centre centre ",
                    height: 600,
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">The Kissing Booth</h1>
                    <div className=" trialer16__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season 3|</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer16__des">
                        <p>    Director: Vince Marcello
                        </p>
                        <p>       Production; companies: Picture Loom Productions
                        </p>
                        <p>Stars:-Joey King
                            Elle Evans
                            Jacob Elordi</p>

                        <p>Produced by: Ed Glauser; Andrew Cole - Bulgin; Vince Marcello
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer16__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/5fKn0Dhj64w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );


}

export default Trialer16
