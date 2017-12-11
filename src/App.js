import React, { Component } from 'react';

import UsersList from './containers/users.list.container';
import Toolbar from './containers/toolbar.container';
import Header from './containers/header.container';
import styles from './styles/generic/main.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.main}>
                <Header/>
                <Toolbar/>
                <UsersList/>
            </div>
        )
    }
}

export default App;

