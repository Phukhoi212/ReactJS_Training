import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import { get } from 'lodash'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const entry = get(this.state.listFilm.feed, 'entry', '')
    const image = get(entry, 'im:image.[2].label', '')
    const title = get(entry, 'im:name.label', '')
    return (
      <div >
        <NavBar />
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=dZFa22qfktM' playing /> */}
        <Card imageFilm={image} title={title} />
      </div>
    )
  }
}
export default Detail