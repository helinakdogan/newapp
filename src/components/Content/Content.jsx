import React from 'react'
import { Grid, Box } from "@mui/material";

const Content = () => {

  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "73rem",
    height: "39rem",
  };

  return (
    <>
    <Box sx={{ ...commonStyles, borderColor: "primary.main" }}>
    <div>Content</div>
    </Box>
    </>
  )
}

export default Content