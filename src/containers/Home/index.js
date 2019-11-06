import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import axios from 'axios'
import { get } from 'lodash'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFilm: []
    }
  }

  componentDidMount() {
    this.getListFilm()
  }

  getListFilm = async () => {
    const response = await axios.get('https://itunes.apple.com/us/rss/topmovies/limit=1/json')
    this.setState({
      listFilm: response.data
    })
  }


  render() {
    const entry = get(this.state.listFilm.feed, 'entry', '')
    const image = get(entry, 'im:image.[2].label', '')
    const title = get(entry, 'im:name.label', '')
    console.log('-->list', title)
    return (
      <div >
        <NavBar />
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=dZFa22qfktM' playing /> */}
        <Card imageFilm={image} title={title} />
      </div>
    )
  }
}

export default (Home)