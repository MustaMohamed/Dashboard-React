import React, { Component } from 'react';

// semantic components
import { Container, Button } from 'semantic-ui-react';
import { FormattedMessage } from "react-intl";

import { translationConstants as messages } from './app/constants/index';

class App extends Component {
  render() {
    
    return (
      
      <Container fluid>
        <Button primary>
          <FormattedMessage
            id={messages.HELLO}
            defaultMessage={'Hello !'}
          />
        </Button>
      </Container>
    
    );
  }
}

export default App;
