import React from 'react'
import "./Trialer15.css"

const Trialer15 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image16"
                src="https://miro.medium.com/max/1400/1*NtARPdMoUvQbKyKccnnLQQ.jpeg" alt="" />
            <header
                className="banner trailer15"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">BRIGHT</h1>
                    <div className=" trialer15__title ">
                        <p>2017 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer15__des">
                        <p>     Director: David Ayer
                        </p>
                        <p>       Production; companies: Overbrook Entertainment;
                        </p>
                        <p>Stars:- Will Smith
                            Daryl Ward
                            Joel Edgerton</p>

                        <p>Produced by: Eric Newman; David Ayer; Bryan Unkeless; Ted Sarandos
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer15__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/6EZCBSsBxko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default Trialer15
