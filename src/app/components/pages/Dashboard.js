/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import { Button, Container, Grid, Header,  Label, Segment } from "semantic-ui-react";

import '../../content/styles/dashboard.css';
import { FormattedMessage, intlShape, injectIntl } from "react-intl";

import { translationConstants as localization } from '../../constants/index';
import Assignment from "../generic/Assignment";
import NewsFeed from "../generic/NewsFeed";

class Dashboard extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      newsFeed: {
        user: { userName: 'Mustafa Mohamed' },
        feedDate: (new Date ()).toDateString (),
        feedText: (this.props.intl.formatMessage ({id: localization.DASHBOARD_HERO_TEXT}))
      }
    };
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
                    <q className={'quote-text'}>
                      <FormattedMessage id={localization.DASHBOARD_HERO_QUOTE}
                                        defualtMessage={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    </q>
                    <footer className={'quote-text'}>
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
            <Label as={'a'} attached='top right'>
              <FormattedMessage id={localization.ALL}
                                defualtMessage={'All'}/>
            </Label>
            <Header size={'medium'}>
              <FormattedMessage id={localization.ANNOUNCEMENT_TITLE}
                                defualtMessage={'Announcement'}/>
            </Header>
            
            
            <p>
              <FormattedMessage id={localization.ANNOUNCEMENT_DESCRIPTION}
                                defualtMessage={`What's due`}/>
            
            </p>
            <Grid padded>
              <NewsFeed {...this.state.newsFeed} />
              <NewsFeed {...this.state.newsFeed} />
              <NewsFeed {...this.state.newsFeed} />
              <NewsFeed {...this.state.newsFeed} />
              <NewsFeed {...this.state.newsFeed} />
            </Grid>
          </Segment>
        </Grid.Column>
        
        <Grid.Column width={5}>
          <Segment>
            <Label as={'a'} attached='top right'>
              <FormattedMessage id={localization.ALL}
                                defualtMessage={'All'}/>
            </Label>
            
            <Header size={'medium'}>
              <FormattedMessage id={localization.TASKS_TITLE}
                                defualtMessage={`What's Due?`}/>
            </Header>
            
            
            <p>
              <FormattedMessage id={localization.TASKS_DESCRIPTION}
                                defualtMessage={`What's due`}/>
            
            </p>
            
            
            <Assignment className={'task-container'} title={'Unit 2 quiz'}
                        titleIcon={{ name: 'hourglass half', color: 'teal' }}
                        relatedTo={'Physics 02'}
                        topic={'Unit2, Motion and forces'}
                        due={(new Date ()).toDateString ()}
                        action={<Button basic color={'teal'} fluid content={'Start Quiz'}/>}
            />
            
            <Assignment className={'alohaa'} title={'12-12 Assignment'}
                        titleIcon={{ name: 'clipboard check', color: 'teal' }}
                        relatedTo={'Physics 02'}
                        topic={'Unit2, Motion and forces'}
                        due={(new Date ()).toDateString ()}
                        action={<Button basic color={'teal'} fluid content={'Start Assignment'}/>}
            />
          
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Dashboard);