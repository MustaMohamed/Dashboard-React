/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';


// semantic css package
import 'semantic-ui-css/semantic.min.css';
// semantic ui components
// import { Button, Container } from "semantic-ui-react";


// Intl provider for I18n
import {  IntlProvider } from 'react-intl';

// english translation json
import en from './constants/translations_files/en.json';

// translation messages keys
// import { translationConstants as messages } from "./constants";

import Layout from "./components/layout/Layout";

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
      <IntlProvider locale={lang} messages={localization[lang]}>
        <Layout>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
      
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>
          <h1>Hello!</h1>

        </Layout>
      </IntlProvider>
    );
  }
}

Application.propTypes = {};

export default Application;