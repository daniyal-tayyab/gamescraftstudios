import React from "react";

function Tile(props) {
  const { type, toggleModalOpen, coordinates } = props;

  return (
    <div
      onClick={() => toggleModalOpen(type)}
      style={{
        border: "1px solid #737d78",
        width:
          type === "small"
            ? "18px"
            : type === "medium"
            ? "38px"
            : type === "large"
            ? "58px"
            : type === "mega"
            ? "98px"
            : type === "ultra"
            ? "158px"
            : "18px",
        height:
          type === "small"
            ? "18px"
            : type === "medium"
            ? "38px"
            : type === "large"
            ? "58px"
            : type === "mega"
            ? "98px"
            : type === "ultra"
            ? "158px"
            : "18px",
        position: "absolute",
        top: coordinates.top,
        left: coordinates.left,
        cursor: "grab",
      }}
    />
  );
}

export default Tile;
