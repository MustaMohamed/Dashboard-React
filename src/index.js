import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


// semantic css package
import 'semantic-ui-css/semantic.min.css'

// Intl provider for I18n
import { IntlProvider } from 'react-intl';

// english translation json
import en from './app/constants/translations_files/en.json';

const lang = window.navigator.language.split (/[-_]/)[0];


console.log (lang);

const localization = {
  'en': en,
};

ReactDOM.render (
  <IntlProvider locale={lang} messages={localization[lang]}>
    <App/>
  </IntlProvider>
  , document.getElementById ('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister ();
