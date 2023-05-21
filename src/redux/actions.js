import { 
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
    ADD_LOGGED_USER,
    ADD_LOGGED_PROFILE,
    ADD_CATEGORY_NAME,
    ADD_HIGHEST_SCORE,
    ADD_TOGGLE_LOGIN} from "./actionTypes";

    export const handleChangeCategory=(payload)=>({
        type:CHANGE_CATEGORY,
        payload,
    }
    );

    export const handleChangeDifficulty = (payload) => ({
        type: CHANGE_DIFFICULTY,
        payload,
        });

    export const handleChangeType = (payload) => ({
        type: CHANGE_TYPE,
        payload,
        });

    export const handleChangeAmount = (payload) => ({
        type: CHANGE_AMOUNT,
        payload,
        });

    export const handleChangeScore= (payload) => ({
        type: CHANGE_SCORE,
        payload,
        });

    export const handleAddLoggedProfile= (payload) => ({
        type: ADD_LOGGED_PROFILE,
        payload,
        });

    export const handleAddLoggedUser=(payload)=>({
        type:ADD_LOGGED_USER,
        payload,
    });

    export const handleAddCategoryName=(payload)=>({
        type:ADD_CATEGORY_NAME,
        payload,
    });

    export const handleAddHighestScore=(payload)=>({
        type:ADD_HIGHEST_SCORE,
        payload,
    });

    export const handleAddToggleLogin=(payload)=>({
        type:ADD_TOGGLE_LOGIN,
        payload,
    });
