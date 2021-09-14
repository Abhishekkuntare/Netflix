import React from 'react'
import "./Trialer24.css"

const Trialer24 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image25"
                src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/stranger-things-shawn-levy-social.jpg" alt="" />
            <header
                className="banner trailer24"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Stranger Things</h1>
                    <div className=" trialer24__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season-4 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer24__des">
                        <p>   Created by: The Duffer Brothers

                        </p>
                        <p>     Genre: Science fiction; Horror; Drama

                        </p>
                        <p>Stars:- Millie Bobby Brown
                            Eleven
                            Finn Wolfhard </p>

                        <p> producers: Finn Wolfhard
                            Mike Wheeler
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer24__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/mbNwvqd3bEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}



export default Trialer24
