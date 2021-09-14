import React from 'react'
import "./Trialer22.css"

const Trialer22 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image23"
                src="https://media1.popsugar-assets.com/files/thumbor/AlINR7wpkZzZCku6SV5E9FFgVZI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/24/748/n/24155406/dc1f31f89e1a9948_MCDLESN_EC026/i/Lemony-Snicket-Series-Unfortunate-Events.jpg" alt="" />
            <header
                className="banner trailer22"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">A Unfortunate Events</h1>
                    <div className=" trialer22__title ">
                        <p>2020 |</p>
                        <button>18+</button> |<p>Season-2 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer22__des">
                        <p>    Director: Brad Silberling

                        </p>
                        <p>   Music by: Thomas Newman

                        </p>
                        <p>Stars:- Jim Carrey
                            Count Olaf
                            Emily Browning</p>

                        <p>Production; companies: Nickelodeon Movies; Parkes+Macdonald Productions;

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer22__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/Tup-5yOcJuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer22
