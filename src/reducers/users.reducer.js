const initialState = {
  fetching : false,
  fetched : false,
  data : {
      results:[]
  },
  error : null
};

const usersReducer = (state=initialState,action)=>
{
    switch (action.type)
    {
        case "FETCH_USERS":
        {
            return{
                ...state,
                fetching:true
            }
        }
        case "FETCH_USERS_SUCCESS":
        {
            return{
                ...state,
                fetching:false,
                fetched:true,
                data:action.payload,
            }
        }
        case "FETCH_USERS_ERROR":
        {
            return{
                ...state,
                fetched:false,
                fetching:false,
                error:action.payload
            }
        }
        default:
        {
            return state;
        }
    }
};

export default usersReducer;