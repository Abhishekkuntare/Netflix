import React from 'react'
import "./Trialer17.css"

const Trialer17 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image18"
                src="https://cdn.vox-cdn.com/thumbor/khuw4HMi_qSCcH_oSRunWLXVGdw=/0x0:910x600/1200x800/filters:focal(383x228:527x372)/cdn.vox-cdn.com/uploads/chorus_image/image/66849778/Screen_Shot_2020_05_27_at_10.17.35_AM.0.png" alt="" />
            <header
                className="banner trailer17"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("")`,
                    backgroundPosition: " ",
                    height: 600,
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">Love Birds</h1>
                    <div className=" trialer17__title ">
                        <p>2020 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer17__des">
                        <p>     Director: Michael Showalter
                        </p>
                        <p>  Story by: Aaron Abrams; Brendan Gall; Martin Gero
                        </p>
                        <p>Stars:-Kumail Nanjiani
                            Jibran
                            Issa Rae</p>

                        <p>Produced by: Tom Lassally; Oly Obst; Martin Gero; Todd Schulman; Jordana Mollick
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer17__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/YzPq8uVgLe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default Trialer17
