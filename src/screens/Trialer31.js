import React from 'react'
import "./Trialer31.css"

const Trialer31 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image32"
                src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Stranger-Things-Season-3-Cast-Guide.jpg" alt="" />
            <header
                className="banner trailer31"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Strianger Things </h1>
                    <div className=" trialer31__title ">
                        <p>2019 |</p>
                        <button>18+</button> |<p>Season-3 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer31__des">
                        <p>    Writers: Matt Duffer, Ross Duffer, Jessie Nickson-Lopez, MORE


                        </p>
                        <p>    Genres: Supernatural, Horror, Drama, Science fiction, Horror

                        </p>
                        <p>Stars:- Millie Bobby Brown
                            Eleven
                            Finn Wolfhard </p>

                        <p>Awards: Screen Actors Guild Award

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer31__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/6Am4v0C_z8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer31
