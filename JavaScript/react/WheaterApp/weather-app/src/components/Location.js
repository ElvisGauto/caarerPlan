import React from 'react'; 

// we can put destructuring in the parameter if we decided that.
const location = (props) => {
    // destructuring
    const { city } = props;
    return (
        <div><h1>{city}</h1></div>
    );
};

export default location;