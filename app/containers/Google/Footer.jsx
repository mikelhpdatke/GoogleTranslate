import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';
import StarIcon from '@material-ui/icons/StarRate';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const Footer = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={24}
    style={{ bottom: '30px', position: 'fixed' }}
  >
    <Grid item>
      <IconButton style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
        <HistoryIcon fontSize="large" />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
        <StarIcon fontSize="large" />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
        <SupervisorAccountIcon fontSize="large" />
      </IconButton>
    </Grid>
  </Grid>
);

export { Footer };
