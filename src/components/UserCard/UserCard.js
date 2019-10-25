import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import avatar from '../../image/user.jpg'

const useStyles = () => ({
    root: {
        width: '100%'
    },
    card: {
        margin: '2rem',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        width: 250,
        height: 300,
        margin: '0 auto'
    }
})

class UserCard extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.avatar}>
                            <img className={classes.avatar} src={avatar} />
                        </div>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <label>ID: {this.props.id}</label>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <label>Name: {this.props.name}</label>
                        </Typography>
                        <Typography component="h2">
                            <label>UserName: {this.props.username}</label>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <label>Email: {this.props.email}</label>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        );
    }
}

export default withStyles(useStyles)(UserCard)