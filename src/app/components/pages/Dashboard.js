/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Grid, Header, Segment } from "semantic-ui-react";

import '../../content/styles/dashboard.css';
import { FormattedMessage } from "react-intl";

import { translationConstants as localization } from '../../constants/index';

class Dashboard extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  // todo: add background image
  render() {
    return (
      <Grid as={Container} fluid stackable>
        <Grid.Row>
          <Segment padded className={'dashboard-hero'}>
            
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={10}>
                  <Header size={'huge'} className={'dashboard-hero-title'}>
                    <FormattedMessage id={localization.DASHBOARD_HERO_TITLE}
                                      defaultMessage={'Exams Time'}/>
                  </Header>
                  <Header className={'dashboard-hero-text'} size={'medium'}>
                    <FormattedMessage id={localization.DASHBOARD_HERO_TEXT}
                                      defaultMessage={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti distinctio dolorem, itaque minima voluptas?'}/>
                  </Header>
                  <Header className={'dashboard-hero-text'} size={'medium'}>
                    <q>
                      <FormattedMessage id={localization.DASHBOARD_HERO_QUOTE}
                                        defualtMessage={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    </q>
                    <footer>
                      <FormattedMessage id={localization.DASHBOARD_HERO_AUTH}
                                        defualtMessage={'Albert Einstein'}/>
                    </footer>
                  </Header>
                  <Button color={'teal'} size={'big'}>
                    <FormattedMessage id={localization.DASHBOARD_HERO_VIEW_TIPS}
                                      defualtMessage={'View exams tips'}/>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          
          
          </Segment>
        </Grid.Row>
        <Grid.Column width={11}>
          <Segment>
            <Header size={'big'}>
              <FormattedMessage id={localization.ANNOUNCEMENT_TITLE}
                                defualtMessage={'Announcement'}/>
            </Header>
            <p>
              <FormattedMessage id={localization.ANNOUNCEMENT_DESCRIPTION}
                                defualtMessage={`What's due`}/>
            
            </p>
  
            <Header size={'big'} floated='right' textAlign={'right'}>
              <FormattedMessage id={localization.ANNOUNCEMENT_TITLE}
                                defualtMessage={'Announcement'}/>
            </Header>
          </Segment>
        </Grid.Column>
        
        <Grid.Column width={5}>
          <Segment/>
        </Grid.Column>
      </Grid>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;