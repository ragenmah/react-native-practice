import {
  GET_GIT_USER_DETAIL,
  GET_GIT_USER_SUCCESS,
  GET_GIT_USER_FAILURE,
  GET_GIT_USER_REPO,
  GET_GIT_USER_REPO_SUCCESS,
  GET_GIT_USER_REPO_FAILURE,
} from '../constants/gitUserConstants';

import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

export const getUserRequest = () => {
  return {type: GET_GIT_USER_DETAIL};
};

export const getUserSuccess = userDetail => {
  return {type: GET_GIT_USER_SUCCESS, payload: userDetail};
};

export const getUserFailure = error => {
  return {
    type: GET_GIT_USER_FAILURE,
    payload: error,
  };
};

export const getGitUsers = userName => {
  return async dispatch => {
    dispatch(getUserRequest);
    console.log('get user started ' + userName);
    await axios
      .get(API_URL + userName)
      .then(response => {
        const user = response.data;
        console.log(user);
        dispatch(getUserSuccess(user));
      })
      .catch(error => {
        const errorMsg = error.message;
        console.log('get user error started ' + errorMsg);
        dispatch(getUserFailure(error));
      });
  };
};

export const getUserRepoRequest = () => {
  return {type: GET_GIT_USER_REPO};
};

export const getUserRepoSuccess = userRepos => {
  return {type: GET_GIT_USER_REPO_SUCCESS, payload: userRepos};
};

export const getUserRepoFailure = error => {
  return {
    type: GET_GIT_USER_REPO_FAILURE,
    payload: error,
  };
};

export const getUsersRepo = userName => {
  return async dispatch => {
    dispatch(getUserRepoRequest);
    console.log('get user getGitUsersstarted ' + userName + '/repos');
    await axios
      .get(API_URL + userName + '/repos')
      .then(response => {
        const userRepo = response.data;

        dispatch(getUserRepoSuccess(userRepo));
      })
      .catch(error => {
        const errorMsg = error.message;

        dispatch(getUserRepoFailure(error));
      });
  };
};
