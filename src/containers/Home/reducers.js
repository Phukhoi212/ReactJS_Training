import { actions } from './enums'

const initialState = {
    id: '',
    image: '',
    description: '',
    name: '',
    price: '',
    genre: '',
    director: '',
    releaseDay: '',
    video: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.FECTH_LIST_FILM:
            return action.payload || []
        case actions.FILMDETAIL:
            return action.payload || []
        default:
            return state
    }
}