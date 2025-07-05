import React from "react";
import "./Flower.css";

interface Props {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const Flower = (props: Props) => {
  const { left, top, right, bottom } = props;
  return (
    <div
      style={{
        position: "absolute",
        left: left,
        top: top,
        right: right,
        bottom: bottom,
      }}
    >
      <div className="flower" />
    </div>
  );
};

export default Flower;
