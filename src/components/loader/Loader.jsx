import { Box, Grid, Skeleton } from "@mui/material";
import  {styled}  from "@mui/material/styles";
import React from "react";

const Loader = ({ count }) => {
  return (
    <>
      <div className="loader_wrapper">
        {[...Array(count)].map((_, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item>
              <Skeleton variant="rectangular" width={305} height={250} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width={"60%"} />
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    </>
  );
};

export default Loader;
