import React from 'react';

const Header = (props) => {
    return (
        <div className="Header">
            <center>
            <h5>SPOTLIGHT ON</h5>
            </center>
            <h1>{props.header}</h1>
        </div>
    )
}

export default Header; 