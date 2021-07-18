/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return {
        data: action.payload,
      };
    case "SET_LOAD_MORE_LOADER":
      return {
        ...state,
        loadMoreLoader: action.payload,
      };
    case "SET_SHOW_NO_DATA":
      return {
        ...state,
        showNoData: action.payload,
      };
    default:
      return state;
  }
};
