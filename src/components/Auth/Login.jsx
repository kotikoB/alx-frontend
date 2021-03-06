import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorSpan from '../Errors/FormErrors';
import { authenticate } from '../../_actions/authActions';

import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody
} from 'reactstrap';

// helpers
import { validateForm } from '../../helpers/validations';
import { validateInputData } from '../../helpers/validations';
import { authErrors } from './errors';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: authErrors
    };

    onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let { errors } = this.state;

        validateInputData(errors, name, value);

        this.setState({ errors, [name]: value });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const body = { email: this.state.email, password: this.state.password };
        if (validateForm(this.state.errors)) {
            this.props.authenticate(body);
        } else {
        }
    };

    render() {
        const { errors } = this.state;

        const disableButton =
            errors.email.invalid === true ||
            errors.email.invalid === null ||
            errors.password.invalid === true ||
            errors.password.invalid === null;

        return (
            <Container>
                {this.props.isAuthenticated && <Redirect to='/lawyers' />}
                <Row className='justify-content-center'>
                    <Col xs='12' sm='12' md='6'>
                        <Card className='mt-3'>
                            <CardBody>
                                <Form onSubmit={this.onSubmitHandler}>
                                    <h4 className='text-center'>Login</h4>
                                    <FormGroup>
                                        <Label for='email'>Email</Label>
                                        <Input
                                            valid={errors.email.valid}
                                            invalid={errors.email.invalid}
                                            type='text'
                                            name='email'
                                            placeholder='Enter your email'
                                            onChange={this.onChangeHandler}
                                        />
                                        {errors.email.message.length > 0 && (
                                            <ErrorSpan errorMessage={errors.email.message} />
                                        )}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='password'>Password</Label>
                                        <Input
                                            valid={errors.password.valid}
                                            invalid={errors.password.invalid}
                                            onChange={this.onChangeHandler}
                                            type='password'
                                            name='password'
                                            placeholder='Enter your password'
                                        />
                                        {errors.password.message.length > 0 && (
                                            <ErrorSpan errorMessage={errors.password.message} />
                                        )}
                                    </FormGroup>
                                    <Button
                                        type='submit'
                                        color='success'
                                        block
                                        className='mt-4 mb-3'
                                        disabled={disableButton}
                                    >
                                        Login
                                    </Button>
                                    <Row className='justify-content-center'>
                                        <ErrorSpan errorMessage={errors.formError.message} />
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <ErrorSpan
                                            errorMessage={this.props.authenticationErrorMessage}
                                        />
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <span>
                                            Don't have an account?
                                            <NavLink to='/signup'> Signup</NavLink>
                                        </span>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Login.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    authenticationErrorMessage: state.auth.message
});

export default connect(mapStateToProps, { authenticate })(Login);
