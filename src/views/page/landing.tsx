import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SideMenu from '../../components/Menu/SideMenu';
import Header from '../../components/Header/Header';

// import { Container } from './styles';

function LandingPage() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header setOpen={setOpen} />
      <Grid container spacing={2}>
        <Grid item xs={12}>

        </Grid>
        <SideMenu open={open} setOpen={setOpen} />
      </Grid>
    </>
  );
}

export default LandingPage;