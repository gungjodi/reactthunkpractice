import axios from 'axios';

export const fetchUserDetail = (url) =>
{
    const requestAPI = axios.get(url);
    return (dispatch) =>
    {
        dispatch({type:"FETCH_USER_DETAIL"});
        requestAPI.then((result)=>{
            dispatch({type:"FETCH_USER_DETAIL_SUCCESS",payload:result.data});
        }).catch((error)=>{
            dispatch({type:"FETCH_USER_DETAIL_ERROR",payload:error});
        });
    }
};

