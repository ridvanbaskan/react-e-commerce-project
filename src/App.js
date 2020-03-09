import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Homepage from './Components/HomePage/Homepage';
import Shoppage from './Components/ShopPage/Shoppage';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';
import SignInAndOutPage from './Components/SignInAndOutPage/SignInAndOutPage';

function App(props) {
  const { currentUser, setCurrentUser } = props;

  const unSubscribeFromAuth = () => null;
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
  }, [setCurrentUser]);
  useEffect(() => {
    unSubscribeFromAuth();
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndOutPage />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
