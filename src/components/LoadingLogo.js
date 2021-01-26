import React from "react";
import loadingLogo from "../assets/logo-white-loading-animated.svg";

const LoadingLogo = () => {
  return (
    <img
      src={loadingLogo}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
      alt="loading"
    />
  );
};

export default LoadingLogo;
