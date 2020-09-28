import React from 'react';
import { Switch, useLocation } from "react-router-dom";

import './styles/css/index.css';
import Nav from "./app/components/decorator/nav/Nav";
import SecondaryNav from "./app/components/decorator/nav/SecondaryNav";
import Footer from "./app/components/decorator/footer/Footer";

const App = ( props ) => {
    return (
        <div className="App theme-settings helvetica normal light-theme">
            <Switch>
                { props.children }
            </Switch>

            { useLocation().pathname !== '/' ? <div className="decorator">
                <Nav/>
                <SecondaryNav/>
                <Footer/>
            </div> : null }
        </div>
    );
};

export default App;
