const registerReducer = (state = [], action) => {
    switch (action.type){
        case "GET_USER":
            return action.payload.data;
        case "POST_USER":
            return action.payload.data;
        default: 
            return state;
    }
}

export default registerReducer;