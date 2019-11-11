import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from "react-router";
import Trailer from '../../components/Dialog/Dialog'
import compose from 'recompose/compose'

const useStyles = () => ({
  root: {
    width: 'inherit',
    height: 'inherit'
  },
  title: {
    width: 'inherit',
    height: 60,
    color: '#fff'
  },
  labelTitle:{
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
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <label className={classes.labelTitle}>{this.props.location.title}</label>
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <label className={classes.text}>GENRE</label>
            <label style={{float: 'right', marginRight: 20}}>{this.props.location.category}</label>

            <label className={classes.text}>DIRECTOR</label>
            <label style={{float: 'right', marginRight: 20}}>{this.props.location.artist}</label>

            <label className={classes.text}>RELESE DATE</label>
            <label style={{float: 'right', marginRight: 20}}> {this.props.location.releaseDay}</label>

          </div>
          <div className={classes.description}>
            <label className={classes.buy}>Available to buy on iTunes for: {this.props.location.price}</label> <br></br>
            <label>{this.props.location.summary}</label>
            <Trailer url={this.props.location.video}/>
          </div>
          <div className={classes.right}>
            <img className={classes.image} src={this.props.location.image} alt='' />
          </div>

        </div>
      </div>
    )
  }
}

export default compose(
  withStyles(useStyles),
)(withRouter(Detail))