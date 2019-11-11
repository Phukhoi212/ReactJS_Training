import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from "react-router";
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
  title: {
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
    color: '#fff'
  },
  right: {
    width: '25%',
    height: 500,
    backgroundColor: '#0707',
  }
})

class Detail extends Component {
  render() {
    const { classes } = this.props
    console.log('===>', this.props)
    return (
      <div className={classes.root}>
        <NavBar />
        <div className={classes.title}>
          {this.props.location.title}
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <label className={classes.text}>GENRE</label>
            {this.props.location.category}
            <label className={classes.text}>DIRECTOR</label>
            {this.props.location.artist}
            <label className={classes.text}>RELESE DATE</label>
            {this.props.location.releaseDay}
          </div>
          <div className={classes.description}>
            <label>{this.props.location.summary}</label>
          </div>
          <div className={classes.right}>
            <img src={this.props.location.image} alt=''/>
          </div>

        </div>
      </div>
    )
  }
}


export default compose(
  withStyles(useStyles)
)(withRouter(Detail))