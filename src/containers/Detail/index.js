import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import { get } from 'lodash'
import { fecthAllListFilm } from '../Home/actions'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

const useStyles = () => ({
  root: {
    width: 'inherit',
    height: 'inherit'
  },
  title:{
    width: 'inherit',
    height: 80,
    backgroundColor: '#0202',
    color: '#fff'
  },
  content: {
    width: '100%',
    height: '100vh',
    display: 'flex'
  },
  left: {
    width: '25%',
    height: 500,
    backgroundColor: '#0303',
    color: '#fff'
  },
  text: {
    textAlign: 'right',
    marginTop: 50,
    display: 'block'
  },
  description: {
    width: '50%',
    height: 500,
    backgroundColor: '#0505',
  },
  right: {
    width: '25%',
    height: 500,
    backgroundColor: '#0707',
  }
})

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    // const entry = get(this.state.listFilm.feed, 'entry', '')
    // const image = get(entry, 'im:image.[2].label', '')
    // const title = get(entry, 'im:name.label', '')
    const { classes } = this.props
    console.log('===>', this.props)
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classes.title}>
          Fast and Ferious
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <label className={classes.text}>GENRE</label>
            <label className={classes.text}>DIRECTOR</label>
            <label className={classes.text}>RELESE DATE</label>
          </div>
          <div className={classes.description}>

          </div>
          <div className={classes.right}>

          </div>
          
        </div>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=dZFa22qfktM' playing /> */}
        {/* <Card imageFilm={image} title={title} /> */}
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
  withStyles(useStyles),
  connect(
    mapStateToProps,
    {
      fecthAllListFilm
    }
  )
)(Detail)