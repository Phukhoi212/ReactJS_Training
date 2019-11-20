import React, { Component } from 'react'
import compose from 'recompose/compose'
import Card from '../../components/Card/Card'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { fecthListFilm } from './actions'
import Grid from '@material-ui/core/Grid'


class Home extends Component {

  componentDidMount() {
    this.props.fecthListFilm()
  }

  render() {
    //get list films
    const entry = get(this.props.listFilms.feed, 'entry', [])

    return (
      <div style={{margin: '0 auto', backgroundColor: "#1b1b1b", paddingTop: 40}}>
        <Grid container>
          {entry.map(en =>
            <Grid item xs={3} key={get(en, 'id.attributes.im:id', '')}>
              <Card
                imageFilm={get(en, 'im:image.[2].label', '')}
                title={get(en, 'im:name.label', '')}
                id={get(en, 'id.attributes.im:id', '')}
              />
            </Grid>
          )}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listFilms: state.HomeReducers
  }
}

export default compose(
  connect(mapStateToProps, {
    fecthListFilm
  }))(Home)