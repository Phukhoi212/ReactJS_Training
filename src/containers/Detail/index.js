import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import { get } from 'lodash'
import { fecthDetailFilm } from '../Home/actions'
import Trailer from '../../components/Dialog/Dialog'
import compose from 'recompose/compose'

const useStyles = () => ({
  root: {
    width: 'inherit',
    height: 'inherit',
    backgroundColor: "#1b1b1b"
  },
  title: {
    width: 'inherit',
    height: 60,
    color: '#fff',
    paddingTop: 20
  },
  labelTitle: {
    fontSize: 20
  },
  content: {
    width: '100%',
    height: '100vh',
    display: 'flex'
  },
  left: {
    width: '25%',
    height: 'auto',
    color: '#fff'
  },
  text: {
    textAlign: 'right',
    marginTop: 50,
    marginRight: 20,
    display: 'block'
  },
  description: {
    width: '50%',
    height: 'auto',
    paddingLeft: 20,
    color: '#fff',
    textAlign: 'left',
  },
  buy: {
    marginTop: 50,
    display: 'block'
  },
  right: {
    width: '25%',
    height: 'auto',
  },
  image: {
    width: 250,
    height: 300,
    marginTop: 50
  }
})

class Detail extends Component {
  componentDidMount() {
    this.props.fecthDetailFilm(this.props.match.params.id)
  }

  render() {
    const { classes } = this.props
    const selectedFilm = this.props.detail

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <label className={classes.labelTitle}>{ get(selectedFilm, 'im:name.label', '')}</label>
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <label className={classes.text}>GENRE</label>
            <label style={{ float: 'right', marginRight: 20 }}>{ get(selectedFilm, 'category.attributes.label', '')}</label>

            <label className={classes.text}>DIRECTOR</label>
            <label style={{ float: 'right', marginRight: 20 }}>{ get(selectedFilm, 'im:artist.label', '')}</label>

            <label className={classes.text}>RELESE DATE</label>
            <label style={{ float: 'right', marginRight: 20 }}> { get(selectedFilm, 'im:releaseDate.attributes.label', '')}</label>

          </div>
          <div className={classes.description}>
            <label className={classes.buy}>Available to buy on iTunes for: {get(selectedFilm, 'im:price.label', '')}</label> <br></br>
            <label>{ get(selectedFilm, 'summary.label', '')}</label>
            <Trailer url={ get(selectedFilm, 'link.[1].attributes.href', '')} />
          </div>
          <div className={classes.right}>
            <img className={classes.image} src={ get(selectedFilm, 'im:image.[2].label', '')} alt='' />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    detail: state.HomeReducers
  }
}

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, {
    fecthDetailFilm
  }))(withRouter(Detail))