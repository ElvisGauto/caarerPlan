import React from 'react'; 
import PropTypes from 'prop-types';

import "./style.scss";

// we can put destructuring in the parameter if we decided that.
const Location = (props) => {
    // destructuring
    const { city } = props;
    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;