import React from 'react'
import "./Trialer14.css"

const Trialer14 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image15"
                src="https://bestmoviecast.com/wp-content/uploads/2019/11/Dead-Kids.jpg" alt="" />
            <header
            >
                <div className="banner__contents">
                    <h1 className="banner__title">DEAD KIDS</h1>
                    <div className=" trialer14__title ">
                        <p>2019 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer14__des">
                        <p>     Director: Mikhail Red
                        </p>
                        <p>     Production; companies: Globe Studios;
                        </p>
                        <p>Stars:- Vance Larena
                            Charles Blanco
                            Kelvin Miranda
                            Kelvin Miranda</p>

                        <p>Produced by: Pauline Zamora
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer14__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/OFKnelgh12I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default Trialer14
