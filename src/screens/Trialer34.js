import React from 'react'
import "./Trialer34.css"

const Trialer34 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image34"
                src="https://www.denofgeek.com/wp-content/uploads/2015/11/maxresdefault-1.jpg?fit=1280%2C720" alt="" />
            <header
                className="banner trailer34"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">DAREDEVIL</h1>
                    <div className=" trialer34__title ">
                        <p>2015|</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Marvels|</p>
                    </div>
                    <h6 className="trialer34__des">
                        <p>   Producer: Kati Johnston


                        </p>
                        <p>   Genre: Action; Crime drama; Legal drama; Superhero


                        </p>
                        <p>Stars:- Charlie Cox
                            Matt Murdock
                            Deborah Ann</p>

                        <p>Composer: John Paesano


                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer34__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/n83s6NO1NE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}


export default Trialer34
