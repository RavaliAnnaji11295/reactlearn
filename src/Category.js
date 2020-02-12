import React from 'react';
import './Category.css';
import { FaGift } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { GiFootTrip } from 'react-icons/gi';
import { GiEating } from 'react-icons/gi';
import { MdCardTravel } from 'react-icons/md';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Category = () => {
    return (
        <Router>
            <div style={{ background: 'cornsilk', display: 'inline-block', width: '100%', textAlign: "center" }}>
                <nav>
                    <span className="gift">
                        <Link to='/surprice'>
                            <FaGift />
                            <h5>Surprice</h5>
                        </Link>
                    </span>
                    <span className="gift">
                        <Link to='/shopping'>
                            <FaShoppingBag />
                            <h5>Shopping</h5>

                        </Link>
                    </span>
                    <span className="gift">
                        <Link to='/footwear'>
                            <GiFootTrip />
                            <h5>Footwear</h5>
                        </Link>
                    </span>
                    <span className="gift">
                        <Link to='/eating'>
                            <GiEating />
                            <h5>Eat out</h5>
                        </Link>
                    </span>
                    <span className="gift">
                        <Link to='/travel'>
                            <MdCardTravel />
                            <h5>Travel</h5>
                        </Link>
                    </span>
                </nav>
            </div>
        </Router>

    )
}

export default Category;

