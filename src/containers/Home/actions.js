import axios from 'axios';
import { actions } from './enums'
import { get } from 'lodash'

export const fecthListFilm = () => async dispatch => {
  const response = await axios.get('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
  if (response) {
    dispatch({
      type: actions.FECTH_LIST_FILM,
      payload: response.data || []
    })
  }
}

export const fecthDetailFilm = (id) => async dispatch => {
  const response = await axios.get('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
  const entry = get(response.data.feed, 'entry', [])
  const selectedFilm = entry.find(en => en.id.attributes['im:id'] === id)
  if (selectedFilm) {
    dispatch({
      type: actions.FILMDETAIL,
      payload: selectedFilm || []
    })
  }
}
