import React, { Component } from 'react'
import compose from 'recompose/compose'
import Card from '../../components/Card/Card'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { fecthAllListFilm } from './actions'
import Grid from '@material-ui/core/Grid'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    this.props.fecthAllListFilm()
  }

  render() {
    //get list films
    const entry = get(this.props.listFilms.feed, 'entry', [])
    // const name = entry.map(en => get(en, '', ''))
    // const image = entry.map(en => get(en, 'im:image.[2].label', ''))
    // const id = entry.map(en => get(en, 'id.attributes.im:id', ''))

    return (
      <div style={{margin: '0 auto'}}>
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
    fecthAllListFilm
  }))(Home)