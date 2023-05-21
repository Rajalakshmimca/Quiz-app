import { CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
    ADD_LOGGED_USER,
    ADD_LOGGED_PROFILE,
    ADD_HIGHEST_SCORE,
    ADD_TOGGLE_LOGIN,
} from "./actionTypes";

const initialState={
    question_category:"",
    question_difficulty:"",
    question_type:"",
    question_amount:50,
    score:0,
    loggedProfile:{},
    loggedUser:"",
    category_name:"",
    scores:[0],
    login:false,
};

const reducer=(state=initialState, action)=>{
    switch (action.type){
        case CHANGE_CATEGORY:
            return{
                ...state,
                question_category:action.payload,
            }

        case CHANGE_DIFFICULTY:
            return{
                ...state,
                question_difficulty: action.payload,
            }

        case CHANGE_TYPE:
            return{
                ...state,
                question_type:action.payload,
            }

        case    CHANGE_AMOUNT:
            return{
                ...state,
                question_amount:action.payload,
            }

        case CHANGE_SCORE:
            return{
                ...state,
                score:  action.payload,
            }

        case ADD_LOGGED_PROFILE:
            return{
                ...state,
                loggedProfile: action.payload,
            }

        case ADD_LOGGED_USER:
            console.log(action.payload);
            return{
                ...state,
                loggedUser:action.payload,
            }

        case ADD_HIGHEST_SCORE:
            state.scores.push(action.payload)
            return{
                ...state,
                scores:[...state.scores],
            }

            case ADD_TOGGLE_LOGIN:
            console.log(action.payload);
            return{
                ...state,
                login:action.payload,
            }

        default:
            return state;
    }
}

    export default reducer;
