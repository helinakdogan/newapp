import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import ProjeDataTable from "./components/tanim/proje/ProjeDataTable";
import ProjeDataForm from "./components/tanim/proje/ProjeDataForm";

const App = (props) => {
  const [isEdited, setIsEdited] = useState(false);

  const handleButton = () => {
    setIsEdited(true);
  };

  return (
    <>
      <Router>
        {!isEdited && <Button onClick={handleButton}>EKLE</Button>}

        <Routes>
          <Route
            path="/"
            element={isEdited ? <ProjeDataTable /> : <ProjeDataForm />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

/*
	<Button onClick={handleClick}>EKLE</Button>
      {isEdited ? <ProjeDataTable /> : <ProjeDataForm />} */
