import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../_actions/jokeActions';
import CustomCard from './Card';
import { Container, Row, Col } from 'reactstrap';

class Cards extends Component {
    componentWillMount() {
        console.log('did mount jokes here', this.props.jokes);
        this.props.getJokes();
    }

    render() {
        const { jokes } = this.props;
        console.log('props in jokes component', this.props);
        return (
            <Container className='mt-2'>
                <h4>Dashboard</h4>
                <Row>
                    {jokes.map((joke) => (
                        <Col sm='3' key={joke.id}>
                            <CustomCard
                                title={joke.type}
                                text='test text'
                                buttonText='buttin text'
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    jokes: state.jokes.jokes
});

export default connect(mapStateToProps, { getJokes })(Cards);
