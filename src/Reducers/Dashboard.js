/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
    switch (action.type) {
     case 'SET_USER_LIST':
      return {
       result: action.payload
      }
     default:
      return state
    }}