// HoC for check authentication
import React, { Component } from 'react';
import { connect } from 'react-redux';
export default (ComposedComponent) => {
    class RequireAuth extends Component {
        componentWillMount() {
            if (!this.props.authenticated) this.props.history.replace('/login');
        }
        componentWillUpdate() {
            if (!this.props.authenticated) this.props.history.replace('/login');
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = (state) => ({
        authenticated: state.isAuthenticated
    });

    return connect(mapStateToProps)(RequireAuth);
};
