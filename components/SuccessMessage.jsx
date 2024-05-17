import React from 'react';
import PropTypes from 'prop-types';

const SuccessMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div
            role="alert"
            aria-live="polite"
            className="bg-green-100 text-green-800 p-4 mb-4 border border-green-200 rounded"
        >
            {message}
        </div>
    );
};

SuccessMessage.propTypes = {
    message: PropTypes.string,
};

export default SuccessMessage;