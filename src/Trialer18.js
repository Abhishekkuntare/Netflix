import React from 'react'
import './Trialer18.css'

const Trialer18 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image19"
                src="https://besttoppers.com/wp-content/uploads/2020/09/you-season-3.jpg" alt="" />
            <header
                className="banner trailer18"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">YOU</h1>
                    <div className=" trialer18__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Season 3 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer18__des">
                        <p> Director:- Penn Badgley


                            Dylan Arnold</p>
                        <p>   Country of origin	United States
                        </p>
                        <p>Stars:- Victoria Pedretti
                            Shalita Grant
                            Travis Van Winkle</p>

                        <p>producers:
                            Saffron Burrows
                            Tati Gabrielle</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer18__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/yHvX8UIc59M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default Trialer18
