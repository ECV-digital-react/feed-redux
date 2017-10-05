import { POST_NEW, POST_DELETE } from './../actions/PostActions';

const initialState = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
];

export default function postState(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case POST_NEW:
      return [ ...[action.payload], ...state ];
    case POST_DELETE:
      nextState = state.filter(item => state.indexOf(item) !== action.payload);
      return [ ...nextState ];
    default:
      return state;
  }
}
