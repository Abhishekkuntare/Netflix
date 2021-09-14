import React from 'react'
import "./Trialer25.css"

const Trialer25 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image26"
                src="https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZZhnXzLlj8N06K5vBAFzKcV6fApzKz88RebADJyoVs2Xq3R87SClrXkVmU2YGhCpPkTi-QGM5wkZFX2DX-wH_7bgDbO.jpg?r=973" alt="" />
            <header
                className="banner trailer25"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">ARQ</h1>
                    <div className=" trialer25__title ">
                        <p>2016 |</p>
                        <button>18+</button> |<p>Movie |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer25__des">
                        <p>  Director: Tony Elliott

                        </p>
                        <p>     Produced by: John Finemorea; Kyle Franke; Mason Novick; Nick Spicer

                        </p>
                        <p>Stars:- Rachael Taylor(Hannah)
                            Rachael Taylor
                            Hannah
                            Robbie Amell </p>

                        <p> Production; companies: Lost City; XYZ Films; MXN Entertainment

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer25__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/JY0DGLrd9GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer25

