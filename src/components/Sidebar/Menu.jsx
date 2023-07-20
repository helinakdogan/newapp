import React from "react";
import Menu1 from "./Option1";
import Menu2 from "./Option2";
import { Grid , Box} from "@mui/material";

function Menu() {

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
        <Menu1></Menu1>
        </Grid>
        <Grid item xs={12}>
        <Menu2></Menu2>
        </Grid>
      </Grid>
      </Box>
        
      
    </>
  );
}

export default Menu;
