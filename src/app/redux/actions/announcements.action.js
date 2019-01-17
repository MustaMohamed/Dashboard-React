import { appActions } from '.';
import { actionsConstants } from '../../constants';


import { announcementsService } from '../../services';

export default {
  getAllAnnouncements: () => dispatch => {
    announcementsService.getAllAnnouncements ().then (response => {
        dispatch (appActions.hideLoading ());
        dispatch (() => ({
          type: actionsConstants.announcementsConstants.GET_ALL_ANNOUNCEMENTS,
          allAnnouncements: response.announcements
        }));
      })
      .catch ();
  },
  getLatestAnnouncements: () => dispatch => {
    announcementsService.getAllAnnouncements ().then (response => {
        dispatch (appActions.hideLoading ());
        dispatch (() => ({
          type: actionsConstants.announcementsConstants.GET_LATEST_ANNOUNCEMENTS,
          latestAnnouncements: response.announcements
        }));
      })
      .catch ();
  }
};