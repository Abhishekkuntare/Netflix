import React from 'react'
import "./Trialer20.css"

const Trialer20 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image21"
                src="https://images7.alphacoders.com/115/thumb-1920-1151855.jpg" alt="" />
            <header
                className="banner trailer20"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Shadow Bone</h1>
                    <div className=" trialer20__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season-2 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer20__des">
                        <p>    Director:  Josh Barry; Dan Cohen; Shawn Levy;
                        </p>
                        <p>     Genre: Fantasy; Drama; Mystery
                        </p>
                        <p>Stars:- Jessie Mei Li
                            Alina Starkov
                            Ben Barnes  </p>

                        <p> producers: Lee Toland Krieger; Leigh Bardugo; Pouya
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer20__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/b1WHQTbJ7vE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}


export default Trialer20
