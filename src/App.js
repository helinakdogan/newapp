import { Box, Grid } from "@mui/material";
import React from "react";
import "./App.css";
//import { makeStyles } from "@mui/styles";
import Main from "./components/Main/Main";
import Menu from "./components/Sidebar/Menu";
import Tahta from "./components/Tahta";

function App() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "85rem",
    height: "40rem",
  };
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  /*
  const snackbarStyles = makeStyles((theme) => ({
    root: { maxWidth: 350 },
    action: { pointerEvents: "all" },
  }));
  
  const snackbarClasses = snackbarStyles();
*/
  return (
    <>
      {/* <Box sx={{ ...commonStyles, borderColor: "primary.main" }}>
        <Grid container rowSpacing={2} columnSpacing={2} columns={16}>
          <Grid item xs={2} md={2}>
            <Menu></Menu>
          </Grid>
          <Grid item xs={4} md={10}>
            <Main></Main>
          </Grid>
        </Grid>
      </Box> */}
      <Tahta />
    </>
  );
}

export default App;

/*
</SnackbarProvider>
     <SnackbarProvider maxSnack={10}>
      <Option1></Option1>
    <Option2></Option2>

  </SnackbarProvider>

<SnackbarProvider maxSnack={10}>
    <Options/>

  </SnackbarProvider>


    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <CloseIcon />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      
      classes={{
        root: snackbarClasses.root,
        action: snackbarClasses.action,
      }}>
      
      <>
        <>
          <Box sx={{ ...commonStyles, borderColor: "primary.main" }}>
            <Grid container rowSpacing={2} columnSpacing={2} columns={16}>
              <Grid item xs={2} md={2}>
                <Menu></Menu>
              </Grid>

              <Grid item xs={4} md={10}>
                <Main></Main>
              </Grid>
            </Grid>
          </Box>
        </>
      </>
    </SnackbarProvider> */
