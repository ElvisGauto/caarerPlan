import React from 'react'; 
import PropTypes from 'prop-types';

// we can put destructuring in the parameter if we decided that.
const Location = (props) => {
    // destructuring
    const { city } = props;
    return (
        <div><h1>{city}</h1></div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;