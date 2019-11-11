import axios from 'axios';
import { actions } from './enums'




export const fecthAllListFilm = () => async dispatch => {
  const response = await axios.get('https://itunes.apple.com/us/rss/topmovies/limit=50/json')
  if (response) {
    dispatch({
      type: actions.FECTH_LIST_FILM,
      payload: response.data || []
    })
  }
}

export const filmDetail = films => ({
  type: actions.SELECTED_RESPONDENTS,
  payload: films || []
})