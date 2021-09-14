import React from 'react'
import "./TrialerFive.css"

const TrialerFive = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image6"
                src="https://nerdreactor.com/wp-content/uploads/2021/08/Shang-Chi-characters-posters-all.jpg" alt="" />
            <header
                className="banner trailerFive"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Shang-Chi</h1>
                    <div className=" trialerFive__title ">
                        <p>2021 |</p>
                        <button>15+</button> |<p>Marvels|</p>
                        <p>Marvel Studios|</p>
                    </div>
                    <h6 className="trialerFive__des">
                        <p>  Director: Destin Daniel Cretton</p>
                        <p>   Genre	:-
                            Katy
                            Tony Leung Chiu - wai(Mandarin)</p>
                        <p>Stars:-

                            Simu Liu (Shang-Chi)
                            Awkwafina (Katy)</p>

                        <p> Production; company: Marvel Studios</p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerFive__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/giWIr7U1deA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    );
}

export default TrialerFive
