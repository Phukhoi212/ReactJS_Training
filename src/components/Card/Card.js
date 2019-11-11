import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
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

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <div>
          <RouterLink
            exact='true'
            to={{
              pathname: `/detail/${this.props.id}`,
              title: this.props.title,
              image: this.props.imageFilm,
              artist: this.props.artist,
              category: this.props.category,
              releaseDay: this.props.releaseDay,
              summary: this.props.description
            }}
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
export default withStyles(useStyles)(withRouter(CardFilm))

