import { 
    FETCH_QUOTE_START, 
    FETCH_QUOTE_SUCCESS, 
    FETCH_QUOTE_FAILURE, 
} from '../actions';

const initialState = {
    quotes: [],
    error: '',
    isFetching: false,
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        default:
            return state;
    }
}

export default reducer;