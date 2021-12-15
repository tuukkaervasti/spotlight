import React from 'react';

const Header = (props) => {
    return (
        <div className="Header">
            <h5>Spotlight on</h5>
            <h1>{props.header}</h1>
        </div>
    )
}

export default Header; 