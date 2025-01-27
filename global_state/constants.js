const COLORS = {
  MAIN_BACKGROUND: '#fff',
  BACKGROUND_DARKER: '#ececec',
  ACCENT_COLOR: '#ff7e30',
  TEXT_COLOR: '#353535',
};
const FONTS = {
  REGULAR: 'Montserrat-Regular',
  LIGHT: 'Montserrat-Light',
  BOLD: 'Montserrat-Bold',
};
const ACTIONS = {
  CHANGE_ACCOUNT: 'CHANGE_ACCOUNT',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_CSRF_TOKEN: 'SET_CSRF_TOKEN',
};
const SCREEN_NAMES = {
  HOME: 'Home',
  SEARCH: 'Search',
  CREATE_POST: 'Create_Post',
  ACTIVITY: 'Activity',
  STREETWEAR_RESULTS: 'Streetwear',
  PEOPLE_RESULTS: 'People',
  LOGIN: 'Login',
  REGISTER: 'Register',
  ACCOUNT_PROFILE: 'Profile',
  ANOTHER_ACCOUNT_PROFILE: 'Another_Profile',
  STREETWEAR_PAGE: 'Streetwear_Page',
  POST_FEED: 'Post_Feed',
};
const SERVER_ADDRESS = 'http://192.168.1.100:8080';
const API = {
  test: SERVER_ADDRESS + '/api/test',
  getMe: SERVER_ADDRESS + '/api/me',
  getCSRF: SERVER_ADDRESS + '/api/getcsrf',
  registerAccount: SERVER_ADDRESS + '/registeraccount',
  login: SERVER_ADDRESS + '/loginaccount',
  searchStreetwear: function(query) {
    return `https://stockx.com/api/browse?&_search=${query}`;
  },
  searchPeople: function(query) {
    return SERVER_ADDRESS + `/api/findaccounts/${query}`;
  },
  searchAccountById: function(id) {
    return SERVER_ADDRESS + `/api/findaccountbyid/${id}`;
  },
  searchAccountByUsername: function(id) {
    return SERVER_ADDRESS + `/api/findaccountbyusername/${id}`;
  },
  checkFollowStatus: function(followerId, followedId) {
    return SERVER_ADDRESS + `/api/is/${followerId}/following/${followedId}`;
  },
  changeFollowStatus: function(followedId) {
    return SERVER_ADDRESS + `/api/changefollowstatus/${followedId}`;
  },
  createPost: SERVER_ADDRESS + '/api/createpost',
  getPostsFor: function(username) {
    return SERVER_ADDRESS + `/api/getposts/${username}`;
  },
};

export { COLORS, FONTS, ACTIONS, SCREEN_NAMES, API };
