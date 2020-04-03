import { ACTIONS } from '../constants';

const initialState = {
  username: undefined,
  isAuthenticated: false,
  isLoaded: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_ACCOUNT:
      return {
        username: action.payload.username,
        isAuthenticated: action.payload.authenticated,
        isLoaded: action.payload.isLoaded,
        comments: action.payload.comments,
        description: action.payload.description,
        email: action.payload.email,
        enabled: action.payload.enabled,
        followedBy: action.payload.followedBy,
        following: action.payload.following,
        id: action.payload.id,
        likedPosts: action.payload.likedPosts,
        linkToProfilePicture: action.payload.linkToProfilePicture,
        posts: action.payload.posts,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

export default accountReducer;
