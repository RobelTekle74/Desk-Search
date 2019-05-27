import axios from 'axios';
import { GET_LOCATIONS, ADD_LOCATION, DELETE_LOCATION, LOCATIONS_LOADING } from './types';
import { returnErrors } from './errorActions';

export const getLocations = () => dispatch => {
    dispatch(setLocationsLoading());
    axios
      .get('/Api/locations')
      .then(res =>
        dispatch({
          type: GET_LOCATIONS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};
export const addLocation = location => (dispatch) => {
    axios
      .post('/Api/locations', location)
      .then(res =>
        dispatch({
          type: ADD_LOCATION,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};

export const deleteLocation = id => (dispatch, getState) => {
    axios
      .delete(`/Api/locations/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_LOCATION,
          payload: id
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};

export const setLocationsLoading = () => {
return {
    type: LOCATIONS_LOADING
};
};