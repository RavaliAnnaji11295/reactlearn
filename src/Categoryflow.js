import React from 'react';
import Surprice from './Surprice';
import Shopping from './Shopping';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Categoryflow = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/surprice">
                        <Surprice />
                    </Route>
                    <Route path="/shopping">
                        <Shopping />
                    </Route>
                    <Route path="/footwear">
                        <Surprice />
                    </Route>
                    <Route path="/eating">
                        <Surprice />
                    </Route>
                    <Route path="/travel">
                        <Surprice />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
 
export default Categoryflow;