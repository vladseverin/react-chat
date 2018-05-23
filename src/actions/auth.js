import * as types from '../constants';
import fetch from 'isomorphic-fetch';

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST
    });

    return fetch('http://localhost:9099/v1/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!')
        }

        // Save jason web token to locale storage
        localStorage.setItem('token', json.token);

        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: json,
        })
      })
      .catch(reason => dispatch({
        type: types.SIGNUP_FAILURE,
        payload: reason
      }));
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST
    });

    return fetch('http://localhost:9099/v1/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!')
        }

        // Save jason web token to locale storage
        localStorage.setItem('token', json.token);

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: json,
        })
      })
      .catch(reason => dispatch({
        type: types.LOGIN_FAILURE,
        payload: reason
      }));
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_REQUEST
    });

    return fetch('http://localhost:9099/v1//logout', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
      .then(json => dispatch({
        type: types.LOGOUT_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: types.LOGOUT_FAILURE,
        payload: reason,
      }));
  };
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    if (!token) {
      dispatch({
        type: types.RECIEVE_AUTH_FAILURE
      })
    }

    return fetch('http://localhost:9099/v1/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
      .then(json => dispatch({
        type: types.RECIEVE_AUTH_SUCCESS,
        payload: json,
      }))
      .catch(reason => dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
        payload: reason
      }));
  }
}
