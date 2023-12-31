import React from "react";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Grid container classNam="px-5 lg:px-36 justify-between">
        <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
          <p className="text-center">left part</p>
        </Grid>

        <Grid item xs={12} lg={6} className="hidden lg:block w-full relative">
          <p className="text-center">middle part</p>
        </Grid>

        <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
          <p className="text-center">right part</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
