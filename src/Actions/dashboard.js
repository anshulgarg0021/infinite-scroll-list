import axios from 'axios';
export const fetchUsers = (limit) => dispatch => {
    let  persons ;
    const headers = {
        'app-id': '60f29ab0d8d9d652b05c4fe3',
      }
      
    axios.get(`https://dummyapi.io/data/api/user?limit=${limit}`,{
        headers: headers
      })
  .then(res => {
     persons = res.data;
    console.log(persons)
  })
    dispatch({
     type: 'SET_USER_LIST',
     payload: persons
    })
   }