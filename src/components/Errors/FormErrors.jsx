import React from 'react';
import { NavLink } from 'react-router-dom';

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

export const SuccessSpan = ({ successMessage, children }) => {
    return (
        <>
            <span
                style={{
                    color: 'green',
                    fontSize: '14px'
                }}
            >
                {successMessage}
            </span>
            {/* {successMessage && (
                <span>
                    <NavLink to='/login'> Login</NavLink>
                </span>
            )} */}
        </>
    );
};

export default ErrorSpan;
