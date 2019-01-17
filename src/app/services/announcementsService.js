import requestFactory from '../utils/requestFactory';

const announcementsService = {
  getAllAnnouncements: () => {
    return requestFactory.get('http://test.coligolms.com/api/announcement');
  }
};
export default announcementsService;