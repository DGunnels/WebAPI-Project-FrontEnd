import React from "react";
import jQuery from 'jquery';
import Contacts from './components/contacts.js';
import Account from './components/account.js';
import Auth from './components/auth.js';
import MainPage from './components/mainpage.js';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store.js';

function siteNav() {
    return (

        <div className="siteNav">
            <Provider store={store}>
                <HashRouter>
                    <div className="NavBar">
                        <AppBar />
                        <Route exact path="/" render={() => <MainPage />} />
                        <Route exact path="/contacts" render={() => <Contacts />} />
                        <Route exact path="/account" render={() => <Account />} />
                        <Route exact path="/signin" render={() => <Auth />} />
                    </div>
                </HashRouter>
            </Provider>
        </div>
    )
}

export default siteNav;