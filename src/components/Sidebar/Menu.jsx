import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Option2 from "./Option2";
//import {  } from 'react-router';
import { useHistory, useNavigate } from "react-router-dom";

function Menu(props) {

  const history=useHistory();
  //let navigate = useNavigate();

  const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '10rem',
    height: '39rem',
  };

  return (
    <>
    <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
        <div>MENU</div>
        </Grid>
        <Grid item xs={12}>
        <Button onClick={()=>{
          console.log("history",props.history);
          //navigate.push("/content1")
          history.push("/content1")
          //window.location = "/content1"
        }}>Menü1</Button>
        </Grid>
        <Grid item xs={12}>
        <Option2></Option2>
        </Grid>
      </Grid>
      </Box>
        
      
    </>
  );
}

export default Menu;
