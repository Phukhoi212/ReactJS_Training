import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const useStyles = () => ({
    root: {
      width: '100%',
      height: 50,
      background: '#000000'
    }
})

class NavBar extends React.Component{
    render(){
      const { classes } = this.props 
        return(
            <div className={classes.root}>

            </div>
        )
    }
}
export default withStyles(useStyles)(NavBar)