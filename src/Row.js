import React from 'react'
import { useHistory } from 'react-router';
import './Row.css'

function Row({ titleOne, titleTwo, titleThree, titleFour, img0, img1, img2, img3, img4, img5, img6, img7, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35 }) {

    const history = useHistory();

    return (
        <div className="row">
            <h2 className="title">{titleOne}</h2>

            <div className="row__posters">

                <img onClick={() => history.push('/trailer')}
                    className="row__poster row__posterLarge"
                    src={img0} alt="" />

                <img onClick={() => history.push('/trailerOne')}
                    className="row__poster row__posterLarge"
                    src={img1} alt="" />
                <img onClick={() => history.push('/trailerTwo')}
                    className="row__poster row__posterLarge"
                    src={img2} alt="" />
                <img onClick={() => history.push('/trailerThree')}
                    className="row__poster row__posterLarge"
                    src={img3} alt="" />
                <img onClick={() => history.push('/trailerFour')}
                    className="row__poster row__posterLarge"
                    src={img4} alt="" />
                <img onClick={() => history.push('/trailerSix')}
                    className="row__poster row__posterLarge"
                    src={img5} alt="" />
                <img onClick={() => history.push('/trailerFive')}
                    className="row__poster row__posterLarge"
                    src={img6} alt="" />
                <img onClick={() => history.push('/trailerSeven')}
                    className="row__poster row__posterLarge"
                    src={img7} alt="" />

            </div>


            <h2 className="title">{titleTwo}</h2>
            <div className="row__posters">
                <img onClick={() => history.push('/trailerEight')}
                    className="row__poster two"
                    src={img10} alt="" />
                <img onClick={() => history.push('/trailerNine')}
                    className="row__poster two"
                    src={img11} alt="" />
                <img onClick={() => history.push('/trailerTen')}
                    className="row__poster two"
                    src={img12} alt="" />
                <img onClick={() => history.push('/trailerEleven')}
                    className="row__poster two"
                    src={img13} alt="" />
                <img onClick={() => history.push('/trailerThirteen')}
                    className="row__poster two"
                    src={img14} alt="" />
                <img onClick={() => history.push('/trailer14')}
                    className="row__poster two"
                    src={img15} alt="" />
                <img onClick={() => history.push('/trailer15')}
                    className="row__poster two"
                    src={img16} alt="" />
                <img onClick={() => history.push('/trailer16')}
                    className="row__poster two"
                    src={img17} alt="" />
                <img onClick={() => history.push('/trailer17')}
                    className="row__poster two"
                    src={img18} alt="" />
                <img onClick={() => history.push('/trailer18')}
                    className="row__poster two"
                    src={img19} alt="" />
            </div>


            <h2 className="title">{titleThree}</h2>
            <div className="row__posters">
                <img onClick={() => history.push('/trailer19')}
                    className="row__poster two"
                    src={img20} alt="" />
                <img onClick={() => history.push('/trailer20')}
                    className="row__poster two"
                    src={img21} alt="" />
                <img onClick={() => history.push('/trailer21')}
                    className="row__poster two"
                    src={img22} alt="" />
                <img onClick={() => history.push('/trailer22')}
                    className="row__poster two"
                    src={img23} alt="" />
                <img onClick={() => history.push('/trailer23')}
                    className="row__poster two"
                    src={img24} alt="" />
                <img onClick={() => history.push('/trailer24')}
                    className="row__poster two"
                    src={img25} alt="" />
                <img onClick={() => history.push('/trailer25')}
                    className="row__poster two"
                    src={img26} alt="" />
                <img onClick={() => history.push('/trailer26')}
                    className="row__poster two"
                    src={img27} alt="" />
                <img onClick={() => history.push('/trailer27')}
                    className="row__poster two"
                    src={img28} alt="" />
                <img onClick={() => history.push('/trailer28')}
                    className="row__poster two"
                    src={img29} alt="" />
            </div>

            <h2 className="title">{titleFour}</h2>
            <div className="row__posters">
                <img onClick={() => history.push('/trailer29')}
                    className="row__poster three"
                    src={img30} alt="" />
                <img onClick={() => history.push('/trailer30')}
                    className="row__poster three"
                    src={img31} alt="" />
                <img onClick={() => history.push('/trailer31')}
                    className="row__poster three"
                    src={img32} alt="" />
                <img onClick={() => history.push('/trailer32')}
                    className="row__poster three"
                    src={img33} alt="" />
                <img onClick={() => history.push('/trailer33')}
                    className="row__poster three"
                    src={img34} alt="" />
                <img onClick={() => history.push('/trailer34')}
                    className="row__poster three"
                    src={img35} alt="" />
            </div>

        </div>

    )
}

export default Row
