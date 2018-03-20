const initialState = {
    fetching : false,
    fetched : false,
    data : null,
    error : null
};

const userDetailReducer = (state=initialState,action)=>
{
    switch (action.type)
    {
        case "FETCH_USER_DETAIL":
        {
            return{
                ...state,
                fetching:true,
                fetched:false
            }
        }
        case "FETCH_USER_DETAIL_SUCCESS":
        {
            return{
                ...state,
                fetching:false,
                fetched:true,
                data:action.payload
            }
        }
        case "FETCH_USER_DETAIL_ERROR":
        {
            return{
                ...state,
                fetching:false,
                fetched:false,
                error:action.payload
            }
        }
        default:
        {
            return state;
        }
    }
};

export default userDetailReducer;