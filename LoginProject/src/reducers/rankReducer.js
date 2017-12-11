import { FETCHING_DATA, FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE } from '../action/constants';

const intial_state = {
    data:[],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function datareducer ( state = intial_state, action){
    switch(action.type){
        case FETCHING_DATA:
        return{
            ...state,
            data:[],
            isFetching: true
        }
        case FETCHING_DATA_SUCCESS:
        return{
            ...state,
            isFetching: false,
            data: action.data
        }
        case FETCHING_DATA_FAILURE:
        return{
            ...state,
            isFetching: false,
            error: true
        }
        default: 
        return state
    }
}