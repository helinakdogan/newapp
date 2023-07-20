import "./App.css";
import { Grid, Box } from "@mui/material";
import Content from "./components/Content/Content";
import Menu from "./components/Sidebar/Menu";

function App() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "85rem",
    height: "40rem",
  };


  return (
    <>
      <Box sx={{ ...commonStyles, borderColor: "primary.main" }}>
        <Grid container rowSpacing={2} columnSpacing={2} columns={16}>
          <Grid item xs={2} md={2}>
            <Menu></Menu>
          </Grid>
          
            <Grid item xs={4} md={10}>
              <Content></Content>
            </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
