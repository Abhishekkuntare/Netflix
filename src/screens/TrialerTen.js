import React from 'react'
import "./TrialerTen.css"

const TrialerTen = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image11"
                src="https://assets.teenvogue.com/photos/5f11b8869a4aa40b493d2689/16:9/w_2560%2Cc_limit/WorkIt_Vertical_Main_RGB_EN-US.jpg" alt="" />
            <header
                className="banner trailerTen"


            >
                <div className="banner__contents">
                    <h1 className="banner__title">Work it</h1>
                    <div className=" trialerTen__title ">
                        <p>2020 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerTen__des">
                        <p> Director: Laura Terruso</p>
                        <p>   companies: A.K Productions; Alloy Entertainment; STXfilms</p>
                        <p>Stars:-Sabrina Carpenter (Quinn Ackerman)
                            Sabrina Carpenter
                            Quinn Ackerman</p>

                        <p>Produced by: Alicia Keys; Leslie Morgenstein; Elysa Koplovitz Dutton
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerTen__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/OqcP_wkcl2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );


}

export default TrialerTen
