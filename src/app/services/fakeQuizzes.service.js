
const FakeQuizzesService = {
  
  getAllQuizzes: () => {
    
    return [
      {
        title: 'Unit 2 quiz',
        relatedToCourse: 'Physics 02',
        topic: 'Unit2, Motion and forces',
        due: (new Date ()).toDateString (),
        type: 'quiz'
      },{
        title: '12-12 Assignment',
        relatedToCourse: 'Physics 02',
        topic: 'Unit2, Motion and forces',
        due: (new Date ()).toDateString (),
        type: 'assignment'
      },{
        title: 'Unit 3 quiz',
        relatedToCourse: 'Physics 02',
        topic: 'Unit3, Motion and forces',
        due: (new Date ()).toDateString (),
        type: 'quiz'
      },{
        title: '11-12 Assignment',
        relatedToCourse: 'Physics 02',
        topic: 'Unit2, Motion and forces',
        due: (new Date ()).toDateString (),
        type: 'assignment'
      }
    ];
  },
  getLatestQuizzes: () => {
    return [{
      title: 'Unit 2 quiz',
      relatedToCourse: 'Physics 02',
      topic: 'Unit2, Motion and forces',
      due: (new Date ()).toDateString (),
      type: 'quiz'
    },{
      title: '12-12 Assignment',
      relatedToCourse: 'Physics 02',
      topic: 'Unit2, Motion and forces',
      due: (new Date ()).toDateString (),
      type: 'assignment'
    }];
  }
  
  
};

export default FakeQuizzesService;