import requestFactory from '../utils/requestFactory';

const quizService = {
  getAllQuizzes: () => {
    return requestFactory.get('http://test.coligolms.com/api/announcement');
  }
};
export default quizService;