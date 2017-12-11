import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolBarComponent from '../components/toolbar.component';
import NewUserForm from './new.user.form.container';
import * as layoutActions from '../actions/layout.actions';

const mapStateToProps = ({layoutReducer}) => {
    return {
        paginationStart: layoutReducer.userListPagination.start,
        paginationLimit: layoutReducer.userListPagination.limit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openNewUserForm: () => dispatch(layoutActions.OpenNewUserForm())
    }
};

class Toolbar extends Component {
    render() {
        return (
            <div>
                <ToolBarComponent
                    openNewUserForm={this.props.openNewUserForm}
                />
                <NewUserForm/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);