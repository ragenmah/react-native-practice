import {
  GET_GIT_USER_DETAIL,
  GET_GIT_USER_SUCCESS,
  GET_GIT_USER_FAILURE,
  GET_GIT_USER_REPO,
  GET_GIT_USER_REPO_SUCCESS,
  GET_GIT_USER_REPO_FAILURE,
} from '../constants/gitUserConstants';

const initialState = {
  loading: false,
  username: '',
  users: [],
  repos: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GIT_USER_DETAIL:
      return {...state, loading: true};
    case GET_GIT_USER_SUCCESS:
      return {loading: false, users: action.payload, error: ''};
    case GET_GIT_USER_FAILURE:
      return {loading: false, users: [], error: payload.error};
    case GET_GIT_USER_REPO:
      return {...state, loading: true};
    case GET_GIT_USER_REPO_SUCCESS:
      return {loading: false, repos: action.payload, error: ''};
    case GET_GIT_USER_REPO_FAILURE:
      return {loading: false, repos: [], error: payload.error};
    default:
      return state;
  }
};
