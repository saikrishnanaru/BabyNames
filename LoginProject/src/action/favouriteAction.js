import { INSERT_DATA,DELETE_DATA,ACESS_DATA } from '../action/constants';

export function selectItem(item){
    return{
        type: INSERT_DATA,
        payload : item
    }
}

export function deleteItem(item){
    return{
        type: DELETE_DATA,
        payload : item
    }
}


export function getSelectedNames(){
    return{
        type: ACESS_DATA,
    }
}


