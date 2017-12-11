import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import WebFont from 'webfontloader';
import HtmlClassName from 'react-html-classname';
import configureStore from './store/config.store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles/generic/html.scss';

const store = configureStore();
WebFont.load({
    google: {
        families: ['Open+Sans:300,400,700,800', 'sans-serif']
    }
});

ReactDOM.render(
    <Provider store={store}>
        <HtmlClassName className={styles.baseHtmlFontSize}>
            <App/>
        </HtmlClassName>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
