import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaginationComponent from '../components/pagination.component';

import * as layoutActions from '../actions/layout.actions';


const mapStateToProps = ({usersReducer, layoutReducer}) => {
    return {
        paginationLimit: layoutReducer.userListPagination.limit,
        paginationStart: layoutReducer.userListPagination.start,
        nextAllowed: layoutReducer.userListPagination.nextAllowed,
        prevAllowed: layoutReducer.userListPagination.prevAllowed,
        additionalData: usersReducer.additionalData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        disablePagination: () => dispatch(layoutActions.DisableUserListPagination()),
        enablePaginationNext: () => dispatch(layoutActions.EnableUserListPaginationNext()),
        enablePaginationPrev: () => dispatch(layoutActions.EnableUserListPaginationPrev()),
        disablePaginationNext: () => dispatch(layoutActions.DisableUserListPaginationNext()),
        disablePaginationPrev: () => dispatch(layoutActions.DisableUserListPaginationPrev()),
        setPaginationStart: (start) => dispatch(layoutActions.ChangeUserListPaginationStart(start))
    }
};

class UserListPagination extends Component {
    componentWillReceiveProps(nextProps) {
        if(this.props.additionalData !== nextProps.additionalData) {
            this.checkPagination(nextProps.additionalData);
        }
    }

    onPaginationPrevious = () => {
        let newStart = 0;
        const limit = this.props.additionalData.pagination.limit;
        const start = this.props.additionalData.pagination.start;
        if(start !== 0) {
            newStart = start - limit;
        }

        this.props.setPaginationStart(newStart);
    };

    onPaginationNext = () => {
        this.props.setPaginationStart(this.props.additionalData.pagination.next_start)
    };

    checkPagination(additionalData) {
        this.checkNext(additionalData);
        this.checkPrev(additionalData);
    }

    checkNext(additionalData) {
        if(additionalData && additionalData.pagination.more_items_in_collection) {
            this.props.enablePaginationNext();
        }
        else {
            this.props.disablePaginationNext();
        }
    }

    checkPrev(additionalData) {
        if(additionalData && additionalData.pagination.start !== 0) {
            this.props.enablePaginationPrev();
        }
        else {
            this.props.disablePaginationPrev();
        }
    }

    render() {
        return (
            <PaginationComponent
                next={this.onPaginationNext}
                nextAllowed={this.props.nextAllowed}
                prev={this.onPaginationPrevious}
                prevAllowed={this.props.prevAllowed}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPagination);