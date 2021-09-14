import React from 'react'
import { useHistory } from 'react-router-dom';
import './PlanScreen.css'

function PlanScreen() {
    const history = useHistory();


    return (
        <div className="planScreen__plan">
            <div className="planScreen__info">
                <h5>Basic</h5>
                <h6 className="planScreen__info">720p</h6>

                <h5>Standard</h5>
                <h6 className="planScreen__info">1080p</h6>

                <h5>Premium</h5>
                <h6 className="planScreen__info" >4K + HDR</h6>
            </div>
            <button onClick={() => history.push('/payment')}
                className="subscribe1">Subsribe</button>
            <button onClick={() => history.push('/payment1')}
                className="subscribe2">Subsribe</button>
            <button onClick={() => history.push('./payment2')}
                className="subscribe3">Subsribe</button>

        </div>
    )
}

export default PlanScreen
