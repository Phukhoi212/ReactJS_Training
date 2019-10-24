import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import UserCard from '../../components/UserCard/UserCard'
import axios from 'axios'

const useStyles = (theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

class Users extends React.Component {

    state = {
        usersList: []
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(res => {
            this.setState({
                usersList: res.data
            })
        }).catch(err => { console.log('err', err) });
    }

    render() {
        const { usersList = [] } = this.state
        const { classes } = this.props
        return (
            <Grid container spacing={3}>
                <Grid xs={3}>
                        {usersList.map(user =>
                            <UserCard
                                className={classes.paper}
                                key={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                            />
                        )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(Users)