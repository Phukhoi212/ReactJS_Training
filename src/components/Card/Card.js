import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const useStyles = () => ({
  card: {
    width: 200,
    height: 300,
    background: '#000',
    margin: '0 auto',
    marginTop: 20
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
  constructor(props) {
    super(props);
    this.state = {
      films: []
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
              summary: this.props.description,
              price: this.props.price,
              video: this.props.video
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
export default withStyles(useStyles)(CardFilm)

