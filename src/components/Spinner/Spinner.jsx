import React from 'react';
import { Spinner } from 'reactstrap';

export default function MySpinner({ text }) {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Spinner
                style={{
                    width: '5rem',
                    height: '5rem'
                }}
                type='grow'
            />
            <h4 style={{ textAlign: 'center' }}>{text}</h4>
        </div>
    );
}
