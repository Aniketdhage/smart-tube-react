import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: "20px",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        type={"text"}
        className="search-bar"
        placeholder="Search Anything..."
        value={""}
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
