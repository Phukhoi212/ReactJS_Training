import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Detail from '../../containers/Detail/index'

const useStyles = () => ({
  card: {
    width: 200,
    height: 300,
    background: '#000',
    margin: 15
  },
  image: {
    width: 200,
    height: 230,
  },
  title: {
    color: '#ffffff'
  }
});

class CardFilm extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <div style={{ padding: '0 !important' }}>
          <RouterLink
            exact="false"
            to={`/detail/${this.props.id}`}
            // render={props => <Detail {...props} name={this.props.title} />}
          > 
            <img className={classes.image} src={this.props.imageFilm} alt='' />
          </RouterLink>
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {this.props.title}
        </Typography>
      </Card>
    );
  }
}
export default withStyles(useStyles)(CardFilm)

