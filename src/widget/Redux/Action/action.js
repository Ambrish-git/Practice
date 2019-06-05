import * as actionType from '../helper/constants';
import axios from 'axios';
// action creater
export const addCounter = () => (
    // action
    {
    type: actionType.ADD_COUNTER,
    payload: 1
    }
);
const receivePosts =( data) =>{
    return {
      type: actionType.RECEIVE_POSTS,
      data
    }
  }

export const getData=()=>(dispatch)=>
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      dispatch(receivePosts(persons));
    })


