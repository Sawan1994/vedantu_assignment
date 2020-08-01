import { UPDATE_REPOSITORIES, IS_LOADING } from "./actionTypes";
import axios from "axios";

const fetchRepositories = (url, dispatch) => {
  axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        dispatch(updateRepositories(res.data));
        dispatch(updateIsLoading(false));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(updateIsLoading(false));
    });
};

export const getRepositories = () => (dispatch) => {
  const URL = "https://api.github.com/users/supreetsingh247/repos";

  dispatch(updateIsLoading(true));
  fetchRepositories(URL, dispatch);
};

export const getFilteredRepositories = (type) => (dispatch) => {
  const URL = `https://api.github.com/users/supreetsingh247/repos?tab=repositories&q=&type=${type}&language=`;

  dispatch(updateIsLoading(true));
  fetchRepositories(URL, dispatch);
};

export const updateRepositories = (repos) => ({
  type: UPDATE_REPOSITORIES,
  payload: repos,
});

export const updateIsLoading = (isLoading) => ({
  type: IS_LOADING,
  payload: isLoading,
});
