/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case "SET_IS_USER_LOGIN":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
