const FakeAnnouncementService = {
  
  getAllAnnouncements: () => {
    
    return [{
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }, {
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }, {
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }, {
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }, {
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }];
  },
  getLatestAnnouncements: () => {
    return [{
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }, {
      user: { userName: 'Mustafa Mohamed' },
      announceDate: (new Date ()).toDateString (),
      announceText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam, nulla porro quam rem sit'
    }]
  }
  
  
};

export default FakeAnnouncementService;