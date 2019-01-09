import { actionsConstants } from "../constants";

const announcementActionsConstants = actionsConstants.announcementsConstants;

const initialState = {
  announcements: []
};

export const announcements = (state = initialState, action) => {
  switch (action.type) {
    case announcementActionsConstants.GET_ALL_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.allAnnouncements
      };
    case announcementActionsConstants.GET_LATEST_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.latestAnnouncements
      };
    default:
      return state;
  }
}