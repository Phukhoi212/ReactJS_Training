import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReactPlayer from 'react-player'
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class Trailer extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };
  render() {
    return (
      <div>
        <Button style={{marginTop: 20}} variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Trailer
          </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          maxWidth='md'
          style={{backgroundColor: '#000'}}
        >
          <DialogContent style={{ width: 'auto', backgroundColor: '#000' }}>
            <ReactPlayer url={this.props.url} controls playing={this.state.open ? true : false} />
          </DialogContent>
          <DialogActions style={{backgroundColor: '#000'}}>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default Trailer