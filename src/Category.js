import React from 'react';
import './Category.css';
import { FaGift } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { GiFootTrip } from 'react-icons/gi';
import { GiEating } from 'react-icons/gi';
import { MdCardTravel } from 'react-icons/md';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Surprice from './Surprice';
import Shopping from './Shopping';
import Footwear from './Footwear';
import Eating from './Eating';
import Travel from './Travel';

const Category = () => {
    return (
        <Router>
            <div style={{ background: 'cornsilk', display: 'inline-block', width: '100%', textAlign: "center" }}>
                <span className="gift">
                    <Link to='/surprice'>
                        <FaGift color = "black" />
                        <h5>Surprice</h5>
                    </Link>
                </span>
                <span className="gift">
                    <Link to='/shopping'>
                        <FaShoppingBag  color = "black"/>
                        <h5>Shopping</h5>

                    </Link>
                </span>
                <span className="gift">
                    <Link to='/footwear'>
                        <GiFootTrip color = "black" />
                        <h5>Footwear</h5>
                    </Link>
                </span>
                <span className="gift">
                    <Link to='/eating'>
                        <GiEating color = "black"/>
                        <h5>Eat out</h5>
                    </Link>
                </span>
                <span className="gift">
                    <Link to='/travel'>
                        <MdCardTravel color = "black" />
                        <h5>Travel</h5>
                    </Link>
                </span>
            </div>
            <div>
                <Switch>
                    <Route path="/surprice" component={Surprice} />
                    <Route path="/shopping" component={Shopping} />
                    <Route path="/footwear"><Footwear /></Route>
                    <Route path="/eating" component={Eating} />
                    <Route path="/travel" component={Travel} />
                </Switch>
            </div>
        </Router>

    )
}

export default Category;

