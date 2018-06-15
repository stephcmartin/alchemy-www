import { CREATE_USER_PENDING, CREATE_USER_ERROR, CREATE_USER_SUCCESS
} from "../actions/";


const initialState = {
  user: {},
  success: false,
  message: "No Data Loaded",
  loading: true
}

export default function(state = initialState, action){
  switch(action.type){
    // Creating User
    case CREATE_USER_PENDING:
    return {
      questions: action.question,
      loading: true
    };
    case CREATE_USER_SUCCESS:
    return {
            ...state,
            user: action.user,
            success: action.success,
            loading: false,
            message: action.message
    };
    case CREATE_USER_ERROR:
    return {
          ...state,
          user: action.user,
          success: action.success,
          loading: true,
          message: action.message
    };

  default:
      return state;

    }

}
