import { AppActions } from "./";
import { actionsConstants } from "../constants";


import { AnnouncementService } from '../services';

export default {
  getAllAnnouncements: () => dispatch => {
    AnnouncementService.getAllAnnouncements ().then (response => {
        dispatch (AppActions.HideLoading ());
        dispatch (() => ({
          type: actionsConstants.announcementsConstants.GET_ALL_ANNOUNCEMENTS,
          allAnnouncements: response.announcements
        }));
      })
      .catch (err => console.log (err));
  },
  getLatestAnnouncements: () => dispatch => {
    AnnouncementService.getAllAnnouncements ().then (response => {
        dispatch (AppActions.HideLoading ());
        dispatch (() => ({
          type: actionsConstants.announcementsConstants.GET_LATEST_ANNOUNCEMENTS,
          latestAnnouncements: response.announcements
        }));
      })
      .catch (err => console.log (err));
  }
};