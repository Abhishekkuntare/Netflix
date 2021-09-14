import firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav from '../Nav'
import PlanScreen from './PlanScreen'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])
    return (
        <div className="ProfileScreen">
            <Nav />

            <div className="profileScreen__body">
                <h3>Edit Profile</h3>
                <div className="profileScreen__info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />

                    {/* https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/ba965b02-2435-4eb9-a51f-9f55defca019/d3im4v2-2612425a-a684-4043-9bda-5b9c01cb4a50.png */}

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>

                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button onClick={() => firebase.auth().signOut()}
                                className="profileScreen__SignOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
