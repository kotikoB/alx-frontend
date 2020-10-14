import React from 'react';

const ErrorSpan = ({ errorMessage }) => {
    return (
        <span
            style={{
                color: 'red',
                fontSize: '14px'
            }}
        >
            {errorMessage}
        </span>
    );
};

export default ErrorSpan;
