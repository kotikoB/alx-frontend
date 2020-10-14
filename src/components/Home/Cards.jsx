import React, { Component } from 'react';
import CustomCard from './Card';
import { Container, Row, Col } from 'reactstrap';

class Cards extends Component {
    state = {
        cardData: [
            { title: 'Users', text: '', buttonText: 'View details' },
            { title: 'Permissions', text: '', buttonText: 'View details' }
        ]
    };
    render() {
        const { cardData } = this.state;
        return (
            <Container className='mt-2'>
                <h4>Dashboard</h4>
                <Row>
                    {cardData.map((data) => (
                        <Col sm='3'>
                            <CustomCard title={data.title} text={data.text} buttonText={data.buttonText} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Cards;
