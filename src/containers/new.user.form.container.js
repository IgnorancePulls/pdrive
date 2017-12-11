import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewUserFormComponent from '../components/new.user.form.component';
import * as newUserFormActions from '../actions/user.actions';
import * as layoutActions from '../actions/layout.actions';

const mapStateToProps = ({layoutReducer, userReducer}) => {
    return {
        isOpen: layoutReducer.newUserForm.isOpen,
        isLoading: userReducer.isLoading,
        hasError: userReducer.hasError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveNewUser: (fieldsData) => {
            dispatch(newUserFormActions.SaveUser(fieldsData))
        },
        closeNewUserForm: () => dispatch(layoutActions.CloseNewUserForm())
    }
};

class NewUserForm extends Component {
    render() {
        if(!this.props.isOpen) return null;

        return (
            <NewUserFormComponent
                newUserFormState={this.props.newUserFormState}
                onSubmit={this.props.saveNewUser}
                onClose={this.props.closeNewUserForm}
                isLoading={this.props.isLoading}
                hasError={this.props.hasError}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);