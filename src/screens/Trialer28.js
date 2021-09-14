import React from 'react'
import "./Trialer28.css"

const Trialer28 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image29"
                src="https://i0.wp.com/www.theilluminerdi.com/wp-content/uploads/2021/01/The-old-guard-2-the-illuminerdi.jpg" alt="" />
            <header
                className="banner trailer28"


            >
                <div className="banner__contents">
                    <h1 className="banner__title">Old Gurad</h1>
                    <div className=" trialer28__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Part-2 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer28__des">
                        <p>   Director: Gina Prince-Bythewood

                        </p>
                        <p>    Music by: Volker Bertelmann; Dustin O'Halloran

                        </p>
                        <p>Stars:- Charlize Theron (Andy)
                            Charlize Theron
                            Andy
                            Harry Melling </p>

                        <p> Produced by: David Ellison; Dana Goldberg; Don Granger; Charlize Theron;

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer28__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/aK-X2d0lJ_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}



export default Trialer28
