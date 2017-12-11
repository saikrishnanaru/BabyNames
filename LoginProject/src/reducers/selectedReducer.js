import { INSERT_DATA,DELETE_DATA,ACESS_DATA } from '../action/constants';
var _ = require('lodash');
const intial_state = {
    selectedData:[],
}

export default function selectedReducer ( state = intial_state, action){
    switch(action.type){
        case INSERT_DATA:
        console.log("insert")
        console.log(action.payload)
        console.log(state.selectedData)
     
        state.selectedData.push(action.payload)
        
        return Object.assign({},state,{
            selectedData:state.selectedData,
        })
        
        case DELETE_DATA:
        var index = _.findIndex(state.selectedData, action.payload)
        let newArray = state.selectedData.slice(index,1)
        return{
            ...state,
            selectedData: newArray 
        }
        case ACESS_DATA:
        return {
            ...state,
            selectedData
        }
        default: 
        return state
    }
}