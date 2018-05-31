import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import ActionList from './ActionList';
import UACDialog from './UACDialog';
import {UserContext} from './UserContext';

// Local styles
const styles = {
    root: {
        flexGrow: 1,
    },

    flex: {
        flex: 1,
    },

    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class ActionBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerOpen: false,
            dialogOpen: false,
            dialogMode: "signin",
        }
    }

    handleToggleDrawer(status) {
        this.setState({
            drawerOpen: status,
        })
    }

    handleToggleDialog(status, mode) {
        /*
            Where "mode" must be either
            "signin", "signup" or "logout".
         */
        this.setState({
            dialogOpen: status,
            dialogMode: mode,
        })
    }

    render() {
        // Get "classes" object from props
        const { classes } = this.props

        const UACButton = this.props.loggedIn ?
            (<Button color="inherit" onClick={() => this.handleToggleDialog(true, "logout")}>Sair</Button>) :
            (<Button color="inherit" onClick={() => this.handleToggleDialog(true, "signin")}>Login</Button>)


        return (
            <div className={classes.root}>
                {/* "Self-controlling" dialog*/}
                <UACDialog
                    open={this.state.dialogOpen}
                    mode={this.state.dialogMode}
                    toggleDialog={(status, mode) => this.handleToggleDialog(status, mode)} />
                {/* "Self-controlling" drawer */}
                <Drawer open={this.state.drawerOpen} onClose={() => this.handleToggleDrawer(false)}>
                    <div tabIndex={0} role="button"
                        onClick={() => this.handleToggleDrawer(false)}
                        onKeyDown={() => this.handleToggleDrawer(false)}>
                        <UserContext.Consumer>
                            {state => (
                                <ActionList userRights={state.userRights} />
                            )}
                        </UserContext.Consumer>
                    </div>
                </Drawer>
                {/* The main thing in this shiznit */}
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                            onClick={() => this.handleToggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.flex} align="center" variant="title" color="inherit">
                            Pet Shop App
                        </Typography>
                        {UACButton}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

// Do typechecking
ActionBar.propTypes = {
    classes: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
}

// Styles are injected as a "classes" prop!!!
export default withStyles(styles)(ActionBar)