import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import firebase from 'firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Payment from './screens/Payment';
import Successfully from './screens/Successfully';
import Payment1 from './screens/Payment1';
import Payment2 from './screens/Payment2';
import Trialer from './screens/Trialer';
import TrialerOne from './TrialerOne';
import Trialer18 from './Trialer18';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './Nav';
import TrialerTwo from './screens/TrialerTwo';
import TrialerThree from './screens/TrialerThree';
import TrialerFour from './screens/TrialerFour';
import TrialerFive from './screens/TrialerFive';
import TrialerSix from './screens/TrialerSix';
import TrialerSeven from './TrialerSeven';
import TrialerEight from './screens/TrialerEight';
import TrialerNine from './screens/TrialerNine';
import TrialerTen from './screens/TrialerTen';
import TrialerEleven from './screens/TrialerEleven';
import TrialerThirteen from './screens/TrialerThirteen';
import Trialer14 from './screens/Trialer14';
import Trialer15 from './screens/Trialer15';
import Trialer16 from './screens/Trialer16';
import Trialer17 from './screens/Trialer17';
import Trialer19 from './screens/Trialer19';
import Trialer20 from './screens/Trialer20';
import Trialer21 from './screens/Trialer21';
import Trialer22 from './screens/Trialer22';
import Trialer23 from './screens/Trialer23';
import Trialer24 from './screens/Trialer24';
import Trialer25 from './screens/Trialer25';
import Trialer26 from './screens/Trialer26';
import Trialer27 from './screens/Trialer27';
import Trialer28 from './screens/Trialer28';
import Trialer29 from './screens/Trialer29';
import Trialer30 from './screens/Trialer30';
import Trialer31 from './screens/Trialer31';
import Trialer32 from './screens/Trialer32';
import Trialer33 from './screens/Trialer33';
import Trialer34 from './screens/Trialer34';

function App() {
  const user = useSelector(selectUser);
  // const user = {
  //   name :"abhishek",
  // };
  const dispatch = useDispatch()



  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Loged in
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        // Loged out 
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/trailer">
              <Trialer />
              <Nav />
            </Route>
            <Route exact path="/trailerOne">
              <TrialerOne />
              <Nav />
            </Route>
            <Route exact path="/trailerTwo">
              <TrialerTwo />
              <Nav />
            </Route>
            <Route exact path="/trailerThree">
              <TrialerThree />
              <Nav />
            </Route>
            <Route exact path="/trailerFour">
              <TrialerFour />
              <Nav />
            </Route>
            <Route exact path="/trailerFive">
              <TrialerSix />
              <Nav />
            </Route>
            <Route exact path="/trailerSix">
              <TrialerFive />
              <Nav />
            </Route>
            <Route exact path="/trailerSeven">
              <TrialerSeven />
              <Nav />
            </Route>
            <Route exact path="/trailerEight">
              <TrialerEight />
              <Nav />
            </Route>
            <Route exact path="/trailerNine">
              <TrialerNine />
              <Nav />
            </Route>
            <Route exact path="/trailerTen">
              <TrialerTen />
              <Nav />
            </Route>
            <Route exact path="/trailerEleven">
              <TrialerEleven />
              <Nav />
            </Route>
            <Route exact path="/trailerThirteen">
              <TrialerThirteen />
              <Nav />
            </Route>
            <Route exact path="/trailer14">
              <Trialer14 />
              <Nav />
            </Route>
            <Route exact path="/trailer15">
              <Trialer15 />
              <Nav />
            </Route>
            <Route exact path="/trailer16">
              <Trialer16 />
              <Nav />
            </Route>
            <Route exact path="/trailer17">
              <Trialer17 />
              <Nav />
            </Route>
            <Route exact path="/trailer18">
              <Trialer18 />
              <Nav />
            </Route>
            <Route exact path="/trailer19">
              <Trialer19 />
              <Nav />
            </Route>
            <Route exact path="/trailer20">
              <Trialer20 />
              <Nav />
            </Route>
            <Route exact path="/trailer21">
              <Trialer21 />
              <Nav />
            </Route>
            <Route exact path="/trailer22">
              <Trialer22 />
              <Nav />
            </Route>
            <Route exact path="/trailer23">
              <Trialer23 />
              <Nav />
            </Route>
            <Route exact path="/trailer24">
              <Trialer24 />
              <Nav />
            </Route>
            <Route exact path="/trailer25">
              <Trialer25 />
              <Nav />
            </Route>
            <Route exact path="/trailer26">
              <Trialer26 />
              <Nav />
            </Route>
            <Route exact path="/trailer27">
              <Trialer27 />
              <Nav />
            </Route>
            <Route exact path="/trailer28">
              <Trialer28 />
              <Nav />
            </Route>
            <Route exact path="/trailer29">
              <Trialer29 />
              <Nav />
            </Route>
            <Route exact path="/trailer30">
              <Trialer30 />
              <Nav />
            </Route>
            <Route exact path="/trailer31">
              <Trialer31 />
              <Nav />
            </Route>
            <Route exact path="/trailer32">
              <Trialer32 />
              <Nav />
            </Route>
            <Route exact path="/trailer33">
              <Trialer33 />
              <Nav />
            </Route>
            <Route exact path="/trailer34">
              <Trialer34 />
              <Nav />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/payment1">
              <Payment1 />
            </Route>
            <Route exact path="/payment2">
              <Payment2 />
            </Route>

            <Route exact path="/successfully">
              <Successfully />
            </Route>

            <Route exact path="/HomeScreen">
              <HomeScreen />
            </Route>

            <Route exact path="/profile">
              <ProfileScreen />
            </Route>

            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>

    </div>
  );
}

export default App;
