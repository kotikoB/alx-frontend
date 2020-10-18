import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CustomCard = ({ title, textBody, imgSrc }) => {
    return (
        <div>
            <Card>
                <CardImg top width='100%' src={imgSrc} alt='Card image cap' />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{textBody}</CardText>
                    <Button outline color='primary' block>
                        Details→
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CustomCard;
