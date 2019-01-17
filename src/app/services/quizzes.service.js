import requestFactory from '../utils/requestFactory';

const quizzesService = {
  getAllQuizzes: () => {
    return requestFactory.get('http://test.coligolms.com/api/announcement');
  }
};

export default quizzesService;