import React from 'react'
import "./Trialer21.css"

const Trialer21 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image22"
                src="https://i.guim.co.uk/img/media/dd9c183161f0d223ebd398414d8140bf32730da8/0_230_3596_2158/3596.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=94ffe6a9988a3c484052ccfad1090d66" alt="" />
            <header
                className="banner trailer20"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">XOXO</h1>
                    <div className=" trialer21__title ">
                        <p>2016|</p>
                        <button>18+</button> |<p>Movie</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer21__des">
                        <p>   Director: Christopher Louie

                        </p>
                        <p>    Edited by: Sam Bauer; Debby Germinio

                        </p>
                        <p>Stars:-Sarah Hyland
                            Krystal
                            Brianne Howey </p>

                        <p> Production; companies: Netflix; PrettyBird

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer21__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/bUN5uSu_VQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer21
