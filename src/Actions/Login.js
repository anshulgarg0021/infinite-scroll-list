export const login = (payload) => (dispatch) => {
  dispatch({
    type: "SET_IS_USER_LOGIN",
    payload: payload,
  });
};
