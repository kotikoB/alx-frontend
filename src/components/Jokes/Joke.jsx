import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';

const CustomCard = ({ title, text, punchline }) => (
    <Card className='mb-2'>
        <CardBody>
            <CardTitle>
                <h6>{title}</h6>
            </CardTitle>
            <CardText>{text}</CardText>
            <CardSubtitle>{punchline}</CardSubtitle>
        </CardBody>
    </Card>
);

export default CustomCard;
