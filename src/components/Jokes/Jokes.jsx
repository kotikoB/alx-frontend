import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../_actions/jokeActions';
import CustomCard from './Joke';
import { Container, Row, Col } from 'reactstrap';

class Cards extends Component {
    componentWillMount() {
        this.props.getJokes();
    }

    render() {
        const { jokes } = this.props;
        return (
            <Container className='mt-2'>
                <h4>Jokes</h4>
                <Row>
                    {jokes.map((joke) => (
                        <Col sm='3' key={joke.id}>
                            <CustomCard
                                title={joke.type}
                                text={joke.setup}
                                punchline={joke.punchline}
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
