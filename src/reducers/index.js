export default (state, action) => {
    switch (action.type){
        case 'GET_TASK':
            return {
                ...state
            }

        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.task, action.task]
            }
        default:
            return state;
    }
}