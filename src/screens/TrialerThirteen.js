import React from 'react'
import "./TrialerThirteen.css"

const TrialerThirteen = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image14"
                src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfJvdQW2j1QDmB3tIU2AxflETVZMSqpD-Hy99mi-7yc6R4ky-iV9FwV9N-nOryLCEIRaepSxeg7RS6yfUWblu-_hSTJu.jpg?r=cc8" alt="" />
            <header
                className="banner trailerThirteen"
            >
                <div className="banner__contents">
                    <h1 className="banner__title">Christmas Prince</h1>
                    <div className=" trialerThirteen__title ">
                        <p>2017 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialerThirteen__des">
                        <p>  Director: Alex Zamm</p>
                        <p>   GWritten by: Karen Schaler; Nathan Atkins
                        </p>
                        <p>Stars:- Rose McIver
                            Amber
                            Ben Lamb (Prince Richard)</p>

                        <p>Produced by: Amy Krell
                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailerThirteen__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/tG4Fbj1B1bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default TrialerThirteen
