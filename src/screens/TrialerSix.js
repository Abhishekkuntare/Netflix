import React from 'react'
import "./TrialerSix.css"

const TrialerSix = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image7"
                src="http://www.sowizardpodcast.com/wp-content/uploads/2018/02/sword-of-destiny-banner.jpg" alt="" />
            <header
                className="banner trailerSix"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Sword Of Destiny</h1>
                    <div className=" trialerSix__title ">
                        <p>1992|</p>
                        <button>18+</button> |<p>Movie|</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerSix__des">
                        <p>  Director:- Yuen Woo-ping</p>
                        <p>  Based on: Iron Knight, Silver Vase; by Wang Dulu</p>
                        <p>Stars:- Michelle Yeoh (Yu Shu Lien)
                            Michelle Yeoh
                            Yu Shu Lien</p>

                        <p>Produced by: Charlie Nguyen; Harvey Weinstein
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerSix__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/P7ohxUUd5XQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default TrialerSix
