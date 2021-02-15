import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

import classes from "./Youtube.module.css";

const Youtube = ({ node }) => {
  console.log(node);
  const { url } = node;
  console.log(url);
  const id = getYouTubeId(url);
  console.log(id);
  return (
    <div className={["my-4", classes.iframeGrandpa].join(" ")}>
      <YouTube className={classes.youtube} videoId={id} />
    </div>
  );
};

export default Youtube;
