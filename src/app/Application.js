/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';


// semantic css package
import 'semantic-ui-css/semantic.min.css';
// custom style
import './content/styles/common.css';

// Intl provider for I18n
import { IntlProvider } from 'react-intl';

// english translation json
import en from './constants/translations_files/en.json';

import { Provider } from "react-redux";
import { store } from "./utils/reduxStore";
import AppStarter from "./AppStarter";

// get current language
const lang = window.navigator.language.split (/[-_]/)[0];

const localization = {
  'en': en,
};

class Application extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale={lang} messages={localization[lang]}>
          <AppStarter/>
        </IntlProvider>
      </Provider>
    );
  }
}

Application.propTypes = {};

export default Application;