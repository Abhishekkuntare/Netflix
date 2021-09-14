import React from 'react'
import "./Trialer26.css"

const Trialer26 = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <div>
            <img className="trialer__image27"
                src="https://snworksceo.imgix.net/ufa/e0508fe6-95d5-4855-8d85-8bca492d0e45.sized-1000x1000.png?w=1000" alt="" />
            <header
                className="banner trailer26"

            >
                <div className="banner__contents">
                    <h1 className="banner__title">Fear Street-1666</h1>
                    <div className=" trialer26__title ">
                        <p>2021 |</p>
                        <button>18+</button> |<p>Part-3 |</p>
                        <p>Netflix|</p>
                    </div>
                    <h6 className="trialer26__des">
                        <p>       Director: Leigh Janiak

                        </p>
                        <p>    Editor: Rachel Goodlett Katz

                        </p>
                        <p>Stars:- Sadie Sink(Ziggy Berman, Constance)
                            Sadie Sink
                            Ziggy Berman, Constance
                        </p>

                        <p> Production design: Scott Kuzio

                        </p>
                    </h6>
                </div>
            </header>
            <iframe className="trailer26__trailer"
                width="1518" height="748" src="https://www.youtube.com/embed/UyUuzCGblqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Trialer26
