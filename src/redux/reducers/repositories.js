import { UPDATE_REPOSITORIES, IS_LOADING } from "../actionTypes";

const initialState = {
  repos: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_REPOSITORIES:
      return {
        ...state,
        repos: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
