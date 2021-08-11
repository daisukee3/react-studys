import React from "react";

export const ColofulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    // color, =>でもOK
    fontsize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};
