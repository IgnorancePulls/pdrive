import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetailsModalComponent from '../components/user.details.modal';
import * as layoutActions from '../actions/layout.actions';

import {getSelectedUserDetailsById, getUserDetailsModaIsOpen} from '../selectors/layout.selector';

const mapStateToProps = (state) => {
    return {
        isOpen: state.layoutReducer.userDetailsModal.isOpen,
        userDetails: getSelectedUserDetailsById(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeUserDetailsModal: () => dispatch(layoutActions.CloseUserDetailsModal()),
    }
}

class UserDetailsModal extends Component {
    render() {
        if(!this.props.isOpen) return null;

        return (
            <UserDetailsModalComponent
                userDetails={this.props.userDetails}
                closeUserDetailsModal={this.props.closeUserDetailsModal}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsModal);