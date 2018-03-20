import axios from 'axios';

export const fetchUsers = () =>
{
    const requestAPI = axios.get("https://swapi.co/api/people");
    return (dispatch) =>
    {
        dispatch({type:"FETCH_USERS"});
        requestAPI.then((result)=>{
            dispatch({type:"FETCH_USERS_SUCCESS",payload:result.data});
        }).catch((error)=>{
           dispatch({type:"FETCH_USERS_ERROR",payload:error});
        });
    }
};

