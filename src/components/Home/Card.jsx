import React from 'react';
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';

const CustomCard = ({ title, text, buttonText }) => (
    <Card body inverse color='primary' className='mb-2'>
        <CardTitle>
            <h5>{title}</h5>
        </CardTitle>
        <CardBody>
            <CardText>
                <h3>Text here...</h3>
            </CardText>
        </CardBody>
        <Button>{buttonText}</Button>
    </Card>
);

export default CustomCard;
