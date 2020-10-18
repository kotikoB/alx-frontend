import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnime } from '../../_actions/animeActions';
import CustomCard from './Anime';
import Spinner from '../../components/Spinner/Spinner';
import { Container, Row, Col } from 'reactstrap';

class Cards extends Component {
    componentWillMount() {
        console.log('did mount anime here', this.props.jokes);
        this.props.getAnime();
    }

    render() {
        const { anime } = this.props;
        console.log('props in animes component', this.props);
        return (
            <Container className='mt-2'>
                <h4>Anime</h4>
                {this.props.loading ? (
                    <Spinner text='Loading Anime...' />
                ) : (
                    <Row>
                        {anime.map((an) => (
                            <Col sm='3' key={an.id}>
                                <CustomCard
                                    title={an.type}
                                    textBody={an.attributes.synopsis.slice(0, 100) + ' ...'}
                                    imgSrc={an.attributes.posterImage.medium}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    anime: state.anime.anime,
    loading: state.anime.loadingData
});

export default connect(mapStateToProps, { getAnime })(Cards);
