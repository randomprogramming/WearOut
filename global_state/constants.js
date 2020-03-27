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
  CHANGE_USER: 'CHANGE_USER',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_CSRF_TOKEN: 'SET_CSRF_TOKEN',
};
const SCREEN_NAMES = {
  HOME: 'Home',
  SEARCH: 'Search',
  STREETWEAR_RESULTS: 'Streetwear',
  PEOPLE_RESULTS: 'People',
  LOGIN: 'Login',
  REGISTER: 'Register',
};
const SERVER_ADDRESS = 'http://192.168.1.100:8080';
const API = {
  test: SERVER_ADDRESS + '/api/test',
  getMe: SERVER_ADDRESS + '/api/me',
  getCSRF: SERVER_ADDRESS + '/api/getcsrf',
  registerAccount: SERVER_ADDRESS + '/registeraccount',
};

export { COLORS, FONTS, ACTIONS, SCREEN_NAMES, API };
