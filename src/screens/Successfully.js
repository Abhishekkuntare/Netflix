import React from 'react'
import { useHistory } from 'react-router';
import './SuccessFully.css'

function Successfully() {
    const history = useHistory();

    return (
        <div className="successfully">

            <h1>Your Subscription  is Successfully done by you
                with the Terms and Conditions ✅
            </h1>
            <button onClick={() => history.push('./HomeScreen')}
                className="submit">Done</button>

        </div>
    )
}

export default Successfully
