/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import { Button, Container, Grid, Header, Label, Segment } from "semantic-ui-react";

import '../../content/styles/dashboard.css';
import { FormattedMessage, intlShape, injectIntl } from "react-intl";

import { translationConstants as localization } from '../../constants';
import Assignment from "../generic/Assignment";
import Announcement from "../generic/Announcement";


import { FakeAnnouncementService, FakeQuizzesService } from "../../services";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AppActions, AnnouncementsActions, QuizzesActions } from "../../actions";

class Dashboard extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      announcements: [],
      quizzes: []
    };
  }
  
  timeOuts = [];
  
  componentWillUnmount() {
    this.timeOuts.map (item => clearTimeout (item));
  }
  
  componentDidMount() {
    this.timeOuts.push (setTimeout (() => {
      
      this.props.dispatch (AppActions.HideLoading ());
      this.setState ({
        announcements: FakeAnnouncementService.getLatestAnnouncements (),
        quizzes: FakeQuizzesService.getLatestQuizzes ()
      });
    }, 1000));
    
    
    // call fake API services the result announcement array is empty
    this.props.dispatch (AnnouncementsActions.getLatestAnnouncements ());
    
    // call fake API services the result quizzes array is empty
    this.props.dispatch (QuizzesActions.getLatestQuizzes ());
  }
  
  getAllAnnouncements = () => {
    this.timeOuts.push (setTimeout (() => {
      this.props.dispatch (AppActions.HideLoading ());
      this.setState ({
        announcements: FakeAnnouncementService.getAllAnnouncements (),
      });
    }, 1000));
    this.props.dispatch (AppActions.ShowLoading ());
  };
  getAllQuizzes = () => {
    this.timeOuts.push (setTimeout (() => {
      this.props.dispatch (AppActions.HideLoading ());
      this.setState ({
        quizzes: FakeQuizzesService.getAllQuizzes ()
      });
    }, 1000));
    this.props.dispatch (AppActions.ShowLoading ());
  };
  
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
            <Label as={'a'} attached='top right' onClick={this.getAllAnnouncements}>
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
              
              {this.state.announcements.map ((item, idx) => <Announcement key={idx} {...item}/>)}
            
            </Grid>
          </Segment>
        </Grid.Column>
        
        <Grid.Column width={5}>
          <Segment>
            <Label as={'a'} attached='top right' onClick={this.getAllQuizzes}>
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
            
            {this.state.quizzes.map ((item, idx) =>
              <Assignment key={idx} {...item}
                          titleIcon={{ name: 'hourglass half', color: 'teal' }}
                          action={<Button basic color={'teal'} fluid content={'Start ' + item.type}/>}/>
            )}
          
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  intl: intlShape.isRequired,
  dispatch: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
  announcements: PropTypes.array,
  quizzes: PropTypes.array
};

const mapStateToProps = (state) => {
  const { showLoading } = state.app;
  const { announcements } = state.announcements;
  const { quizzes } = state.quizzes;
  return {
    showLoading,
    announcements,
    quizzes
  };
};


export default connect (mapStateToProps) (injectIntl (Dashboard));