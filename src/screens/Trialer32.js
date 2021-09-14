import React from 'react'
import "./Trialer32.css"

const Trialer32 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image33"
                src="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fnetflixlife.com%2Ffiles%2Fimage-exchange%2F2021%2F01%2Fie_64066-1.jpeg" alt="" />
            <header
                className="banner trailer32"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Shadow And Bone</h1>
                    <div className=" trialer32__title ">
                        <p>2022 |</p>
                        <button>18+</button> |<p>Season 2 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer32__des">
                        <p>   Program creator: Eric Heisserer

                        </p>
                        <p>    Genres: Fantasy television, Drama, Mystery


                        </p>
                        <p>Stars:-Jessie Mei Li
                            Alina Starkov
                            Ben Barnes </p>

                        <p>Adapted from: Shadow and Bone, Six of Crows


                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer32__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/mWaIIsrYhrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer32
