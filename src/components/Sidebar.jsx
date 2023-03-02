import React, { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = () => {
  const [SelectdedCategory, setselectdedCategory] = useState("New");
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => (
        <button
          key={category.name + index}
          className="category-btn"
          style={{
            background: category.name === SelectdedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === SelectdedCategory ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === SelectdedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
