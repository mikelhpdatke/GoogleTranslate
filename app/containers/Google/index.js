import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
// import { Icon } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
// core component
import { Header } from './Header';
import { Footer } from './Footer';

const styles = theme => ({
  root: {
    width: '100%',
  },
  header: {
    color: '#FFFFFF',
  },
  content: {
    color: '#FAFAFA',
    marginLeft: '34px',
    marginRight: '34px',
  },
  wrapper: {
    padding: '16px 0px',
    position: 'relative',
  },
  buttonText: {
    textTransform: 'none',
  },
  table: {
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.37)',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.12)',
    boxSizing: 'border-box',
    height: '200px',
  },
  headerTable: {
    borderTop: '1px solid rgba(0,0,0,0.12)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, 0.12)',
    borderBottom: '1px solid rgba(0,0,0,0.12)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    height: '48px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerTableLeft: {
    width: 'min-content',
    // width: 'calc((100vw - 34px - 34px) / 2)',
  },
  input: {
    border: '0',
    color: 'black',
    borderWidth: '0',
    height: 'calc(100% - 48px)',
    fontSize: '18px',
    width: '100%',
    // borderRight: '1px solid rgba(0,0,0,0.12)',
    '&:focus': {
      border: '0',
      borderWidth: '0',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  avarta: {
    width: '50px',
    height: '50px',
  },
});

class GoogleTranslate extends React.Component {
  state = {
    anchorEl: null,
    value: 0,
    valueSecond: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeSecond = (event, valueSecond) => {
    this.setState({ valueSecond });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Button
              style={{ marginRight: '15px' }}
              variant="outlined"
              color="primary"
              className={classes.buttonText}
            >
              <svg
                style={{ marginRight: '8' }}
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                fill="#1A73E8"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path d="M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06H34V8H20V4h-4v4H2v3.98h22.34C22.99 15.84 20.88 19.5 18 22.7c-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12L5.17 35.17 8 38l10-10 6.22 6.22 1.52-4.07zM37 20h-4l-9 24h4l2.25-6h9.5L42 44h4l-9-24zm-5.25 14L35 25.33 38.25 34h-6.5z" />
              </svg>
              Text
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.buttonText}
            >
              <svg
                style={{ marginRight: '8' }}
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                fill="#1A73E8"
              >
                <path fill="none" d="M0 0h20v20H0V0z" />
                <path d="M12 1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6l-5-5zm-1 6V2.5L15.5 7H11z" />
              </svg>
              Documents
            </Button>
          </div>
          <div className={classes.table}>
            <div className={classes.headerTable}>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                      >
                        <Tab label="DETECT LANGUAGE" />
                        <Tab label="VIETNAMESE" />
                        <Tab label="ENGLISH" />
                        <Tab label="SPANISH" />
                      </Tabs>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <ExpandMore />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <SwapHorizIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Tabs
                        value={this.state.valueSecond}
                        onChange={this.handleChangeSecond}
                        textColor="primary"
                        indicatorColor="primary"
                      >
                        <Tab label="VIETNAMESE" />
                        <Tab label="ENGLISH" />
                        <Tab label="SPANISH" />
                      </Tabs>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <ExpandMore />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <Grid container style={{ height: 'calc(200px - 60px)' }}>
              <Grid
                item
                xs={12}
                md={7}
                style={{ borderRight: '1px solid rgba(0,0,0,0.12)' }}
              >
                <input className={classes.input} />
              </Grid>
              <Grid item xs={12} md={5}>
                <input className={classes.input} />
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

GoogleTranslate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoogleTranslate);
