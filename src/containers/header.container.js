import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from '../components/header.component';

const mapStateToProps = (state) => {
    return {}
};

class Header extends Component {
    render() {
        return (
            <HeaderComponent/>
        )
    }
}

export default connect(mapStateToProps)(Header);