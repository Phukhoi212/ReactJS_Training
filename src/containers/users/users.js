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
    constructor(props){       
        super(props)
        this.state = {
            usersList: []
        }
    }
        
    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({ 
            usersList: res.data 
        });
    };

    componentWillUnmount(){
    }

    render() {
        const { usersList = [] } = this.state
        const { classes } = this.props
        return (
            <Grid container>
                {usersList.map(user =>
                    <Grid item xs={3} key={user.id}>
                        <UserCard
                            className={classes.paper}
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                        />
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(Users)