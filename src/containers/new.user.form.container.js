import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewUserFormComponent from '../components/new.user.form.component';
import * as newUserFormActions from '../actions/new.user.actions';
import * as layoutActions from '../actions/layout.actions';

const mapStateToProps = ({newUserFormReducer, layoutReducer}) => {
    return {
        newUserFormState: newUserFormReducer,
        isOpen: layoutReducer.newUserForm.isOpen,
        paginationStart: layoutReducer.userListPagination.start,
        paginationLimit: layoutReducer.userListPagination.limit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeNewUserFormInputValue: (changeEvent) => {
            dispatch(newUserFormActions.ChangeNewUserFormInputValue(changeEvent.target.name, changeEvent.target.value))
        },
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
                onInputChange={this.props.changeNewUserFormInputValue}
                onSubmit={this.props.saveNewUser}
                onClose={this.props.closeNewUserForm}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);