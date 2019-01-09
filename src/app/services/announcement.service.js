import requestFactory from '../utils/requestFactory';

const announcementService = {
  getAllAnnouncements: () => {
    return requestFactory.get('http://test.coligolms.com/api/announcement');
  }
};
export default announcementService;