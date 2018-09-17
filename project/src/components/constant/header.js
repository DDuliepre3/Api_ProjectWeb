import React from 'react';
import {Link} from 'react-router-dom';

const topBar = () => {
    return(
        <div>
            <header>
                <nav className="navbar--top">
                    <ul>
                        <li><Link to="/"><img src="https://images.vexels.com/media/users/3/135991/isolated/lists/ee03f76ed0711b770c0c797d83bd2ea0-gaming-controller-icon.png" alt="logo" className="navbar__logo"/></Link></li>
                        <li className="navbar__links" id="selected"><Link to="/">Home</Link></li>
                        <li className="navbar__links"><Link to="/products">Products</Link></li>
                        <li className="navbar__links"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default topBar;