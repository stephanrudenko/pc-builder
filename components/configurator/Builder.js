import { Container, Grid, Paper, Typography } from "@mui/material";

import CPU from "./CPU";
import Motherboard from "./Motherboard";
import RAM from "./RAM";
import GPU from "./GPU";
import Storage from "./Storage";
import Case from "./Case";
import PSU from "./PSU";
import Selections from "./Selections";
import TotalCost from "./TotalCost";
import { useState } from "react";
import ButtonAppBar from "../AppBar";

const Builder = () => {
  const [cpu, setCpu] = useState(null);
  const [gpu, setGpu] = useState(null);
  const [mb, setMb] = useState(null);
  const [ram, setRam] = useState(null);
  const [storage, setStorage] = useState(null);
  const [pcCase, setPcCase] = useState(null);
  const [psu, setPsu] = useState(null);

  const selections = [cpu, mb, gpu, ram, storage, pcCase, psu].filter(
    (component) => component !== null
  );

  return (
    <Container>
      <ButtonAppBar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CPU onSelect={setCpu} />
          <Motherboard onSelect={setMb} />
          <RAM onSelect={setRam} />
          <Storage onSelect={setStorage} />
          <GPU onSelect={setGpu} />
          <Case onSelect={setPcCase} />
          <PSU onSelect={setPsu} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Selections selections={selections} />
            <TotalCost selections={selections} />
            <Typography variant="h2" align="center">
              Computer Configurator
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Builder;
