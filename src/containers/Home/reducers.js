import { actions } from './enums'

export default ( state = [], action) =>{
    switch(action.type){
        case actions.FECTH_LIST_FILM:
            return action.payload || []
        default:
            return state
    }
}