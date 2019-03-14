import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
// icon
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GoogleLogo from 'images/google_trans.jpg';
import Avatar from '@material-ui/core/Avatar';
import DepAvarta from 'images/bot.png';
import styles from './Header.css';
const Header = () => {
  console.log(styles);
  return (
    <div className={styles.header}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton className={styles.menuButton} aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <img src={GoogleLogo} alt="Google Translate" />
          <div className={styles.grow} />
          <div className={styles.sectionDesktop}>
            <Grid container>
              <Grid item xs={4}>
                <IconButton>
                  <AppsIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <Avatar alt="User" src={DepAvarta} className={styles.avarta} />
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header };
