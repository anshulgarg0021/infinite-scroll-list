import axios from "axios";
export const fetchUsers = (limit, loadMore) => (dispatch) => {
  loadMore &&
    dispatch({
      type: "SET_LOAD_MORE_LOADER",
      payload: true,
    });
  let persons;
  const headers = {
    "app-id": "60f3df1759537c1837398a8c",
  };
  return axios
    .get(`https://dummyapi.io/data/api/user?limit=${limit}`, {
      headers: headers,
    })
    .then((res) => {
      persons = res.data;
      dispatch({
        type: "SET_USER_LIST",
        payload: persons,
      });
      loadMore &&
        dispatch({
          type: "SET_LOAD_MORE_LOADER",
          payload: false,
        });
      return "done";
    });
};
