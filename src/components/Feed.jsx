import React, { useState, useEffect } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copiright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff " }}
        >
          Copyright @2023
          <br />
          Aniket's Smart-Tube
          {/* @2023 Aniket's Smart-Tube */}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
